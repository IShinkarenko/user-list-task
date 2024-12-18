import { cache } from 'react';

import { QueryClient } from '@tanstack/react-query';

const STALE_TIME = 0; // Set to 0 to always fetch fresh data

export const queryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true, // Enable refetch on window focus
      staleTime: STALE_TIME,
      refetchInterval: 1000 * 30 // Refetch every 30 seconds
    },
    mutations: {
      onError: (error: Error) => {
        /** You can use toast or notification here */
        console.error(error.message);
      }
    }
  }
};

export const getQueryClient = cache(() => new QueryClient(queryClientConfig));
