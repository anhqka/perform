import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authenApi = createApi({
  reducerPath: 'authenApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ''
  }),
  endpoints: build => ({
    login: build.query({
      query: () => ({
        url: '/'
      })
    })
  })
});

// export const {} = authenApi;
