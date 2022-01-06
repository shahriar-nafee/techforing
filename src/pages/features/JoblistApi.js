import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const JoblistApi = createApi({
  reducerPath: "joblistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tf-practical.herokuapp.com/api/",

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: () => "job_post",
      providesTags: ["Post"],
    }),
    addJob: builder.mutation({
      query: (body) => ({
        url: "job_post/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useGetAllJobsQuery, useAddJobMutation } = JoblistApi;
