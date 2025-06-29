"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryCLient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

export const TanstackQueryProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <QueryClientProvider client={queryCLient}>
            {children}
        </QueryClientProvider>
    );
};
