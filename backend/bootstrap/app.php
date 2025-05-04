<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;
use Illuminate\Database\QueryException;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Auth\AuthenticationException;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        //
    })
    ->withExceptions(function (Exceptions $exceptions) {
        $exceptions->render(function (Throwable $e, $request) {
            // 🔸 Validasi Gagal
            if ($e instanceof ValidationException) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Validasi gagal',
                    'errors' => $e->errors(),
                ], 422);
            }
    
            // 🔸 Model Tidak Ditemukan
            if ($e instanceof ModelNotFoundException) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Data tidak ditemukan',
                ], 404);
            }
    
            // 🔸 Route tidak ditemukan
            if ($e instanceof NotFoundHttpException) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Endpoint tidak ditemukan',
                ], 404);
            }
    
            // 🔸 Error query database
            if ($e instanceof QueryException) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Kesalahan pada database',
                    'errors' => [
                        'sql' => $e->getSql(),
                        'bindings' => $e->getBindings(),
                        'message' => $e->getMessage(),
                    ]
                ], 500);
            }
    
            // 🔸 Error HTTP lain (403, 401, dll)
            if ($e instanceof HttpExceptionInterface) {
                return response()->json([
                    'status' => 'error',
                    'message' => $e->getMessage() ?: 'Kesalahan HTTP',
                ], $e->getStatusCode());
            }
    
            // 🔸 Default: error tak dikenal
            if ($e instanceof AuthenticationException) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Token tidak valid atau telah kadaluarsa. Silakan login ulang.',
                ], 401);
            }
            return response()->json([
                'status' => 'error',
                'message' => 'Terjadi kesalahan pada server',
                'errors' => config('app.debug') ? [
                    'exception' => get_class($e),
                    'message' => $e->getMessage(),
                    'file' => $e->getFile(),
                    'line' => $e->getLine(),
                ] : null,
            ], 500);
        });
        
    })->create();
