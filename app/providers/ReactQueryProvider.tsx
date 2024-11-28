"use client"

import {ReactNode} from "react";
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const ReactQueryProvider = ({children}: {children : ReactNode}) => {

    const queryClient = new QueryClient()

    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </Provider>
    );
};

export default ReactQueryProvider;