import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authenApi = createApi({
  reducerPath: 'authenApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/'
  }),
  endpoints: build => ({
    refreshToken: build.mutation({
      query: ({refresh}) => ({
        url: 'refresh_token',
        method: 'POST',
        body: {
          refresh_token: refresh
        }
      })
    })
  })
});

export const {useRefreshTokenMutation} = authenApi;
