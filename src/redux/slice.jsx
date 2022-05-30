import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://62929b6f9d159855f08c8117.mockapi.io/api/v1/",
  }),
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "/contacts",
      providesTags: ["Contacts"],
    }),
    createContact: builder.mutation({
      query: ({ name, phone }) => ({
        url: "/contacts",
        method: "POST",
        body: { name, phone },
      }),
      invalidatesTags: ["Contacts"],
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactsApi;
