import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const eCommerceApi = createApi({
  reducerPath: 'eCommerceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ''
  }),
  endpoints: build => ({
    
  })
});

// export const {} = eCommerceApi;
