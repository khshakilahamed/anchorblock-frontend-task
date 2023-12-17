import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    users: builder.query({
      query: (arg: Record<string, unknown>) => {
        return {
          url: "/users",
          method: "GET",
          params: arg,
        };
      },
    }),
  }),
});

export const { useUsersQuery } = userApi;
