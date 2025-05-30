<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CourseResource\Pages;
use App\Filament\Resources\CourseResource\RelationManagers;
use App\Models\Course;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Tabs;
use Illuminate\Support\Str;

class CourseResource extends Resource
{
    protected static ?string $model = Course::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Informasi Umum')
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                Forms\Components\TextInput::make('title')
                                    ->label('Judul Course')
                                    ->required(),
                                Forms\Components\TextInput::make('place')
                                    ->label('Lokasi')
                                    ->required(),
                                Forms\Components\DatePicker::make('schedule')
                                    ->label('Jadwal')
                                    ->required(),
                                Forms\Components\DatePicker::make('deadline')
                                    ->label('Batas Pendaftaran')
                                    ->required(),
                                Forms\Components\Select::make('categories')
                                    ->label('Kategori Course')
                                    ->multiple()
                                    ->options([
                                        'Web' => 'web dev',
                                        'Net' => 'Jaringan',
                                        'Design' => 'desain grafis',
                                        'Soft Skill' => 'soft skill',
                                    ]),
                                Forms\Components\TextInput::make('price')
                                    ->label('Harga kurus(optional')
                                    ->default(0),
                            ]),
                    ]),

                Section::make('Deskripsi dan Gambar')
                    ->schema([
                        Forms\Components\RichEditor::make('description')
                            ->label('Deskripsi Kursus')
                            ->required(),
                        Forms\Components\FileUpload::make('image')
                            ->label('Banner Kursus')
                            ->image()
                            ->imageEditor()
                            ->imageEditorAspectRatios([
                                '16:9',
                                '4:3',
                                '1:1',
                            ])
                            ->required(),
                    ]),

                Section::make('Catatan Tambahan')
                    ->schema([
                        Forms\Components\RichEditor::make('notes')
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->label('Judul Course')
                    ->searchable(),
                Tables\Columns\TextColumn::make('description')
                    ->formatStateUsing(fn($state) => Str::limit(strip_tags($state), 100))
                    ->wrap()
                    ->searchable(),
                Tables\Columns\ImageColumn::make('image'),
                Tables\Columns\TextColumn::make('schedule')
                    ->date()
                    ->sortable(),
                Tables\Columns\TextColumn::make('deadline')
                    ->date()
                    ->sortable(),
                Tables\Columns\TextColumn::make('place')
                    ->searchable(),
                Tables\Columns\TextColumn::make('notes')
                    ->searchable(),
                Tables\Columns\TextColumn::make('categories')
                    ->searchable(),
                Tables\Columns\TextColumn::make('price')
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCourses::route('/'),
            'create' => Pages\CreateCourse::route('/create'),
            'edit' => Pages\EditCourse::route('/{record}/edit'),
        ];
    }
}
