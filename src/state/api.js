import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from 'axios';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }), 
  reducerPath: "adminApi",
  tagTypes: [
    "User",
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getCustomers: build.query({
        query: () => "client/customers",
        providesTags: ["Customers"],
      }),  
      getUtilisateurs: build.query({
        query: () => "client/utilisateurs",
        providesTags: ["utilisateurs"],
      }), 
      getUtilisateursDemande: build.query({
        query: () => "client/utilisateursDemande",
        providesTags: ["utilisateursDemande"],
      }), 
      getAdmin: build.query({
        query: () => "client/Admin",
        providesTags: ["Admin"],
      }), 
      getContact: build.query({
        query: () => "general/contact",
        providesTags: ["contact"],
      }), 
      getDocument: build.query({
        query: () => "client/documents",
        providesTags: ["documents"],
      }),
      getReclamation: build.query({
        query: () => "general/Reclation",
        providesTags: ["Reclations"],
      }),
      getMedia: build.query({
        query: () => "media/all",
        providesTags: ["Media"],
      }),
      getPack: build.query({
        query: () => "pack/all",
        providesTags: ["Pack"],
      }),
      getCommande: build.query({
        query: () => "commande/Commande",
        providesTags: ["Commande"],
      }),
})
})
export const {
    useGetUserQuery,
    useGetCustomersQuery,
  useGetUtilisateursQuery,
  useGetAdminQuery,useGetContactQuery,
  useGetDocumentQuery,
 useGetReclamationQuery,useGetUtilisateursDemandeQuery,useGetMediaQuery,useGetPackQuery, useGetCommandeQuery
  } = api;
  export const addUser = async (user) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/general/Useradd`, user);
}
export const addPack = async (pack) => {
  return await axios.post(`${process.env.REACT_APP_BASE_URL}/pack/packAdd`, pack);
}
export const deletePack = async (id) => {
  return await axios.delete(`${process.env.REACT_APP_BASE_URL}/pack/${id}`);
}
export const deleteUser = async (id) => {
  return await axios.delete(`${process.env.REACT_APP_BASE_URL}/client/${id}`);
}
export const getUser = async (id) => {
  return await axios.get(`${process.env.REACT_APP_BASE_URL}/client/${id}`);
}
export const editUser = async (id, user) => {
  return await axios.put(`${process.env.REACT_APP_BASE_URL}/client/${id}`, user)
}
export const getMedia = async (id) => {
  return await axios.get(`${process.env.REACT_APP_BASE_URL}/media/${id}`);
}
export const getPackid = async (id) => {
  return await axios.get(`${process.env.REACT_APP_BASE_URL}/pack/${id}`);
}
export const editpack = async (id, pack) => {
  return await axios.put(`${process.env.REACT_APP_BASE_URL}/pack/${id}`, pack)
}
export const editMedia = async (id, media) => {
  return await axios.put(`${process.env.REACT_APP_BASE_URL}/media/${id}`, media)
}
export const editDocument = async (id, document) => {
  return await axios.put(`${process.env.REACT_APP_BASE_URL}/client/documents/${id}`, document)
}
export const deleteContact = async (id) => {
  return await axios.delete(`${process.env.REACT_APP_BASE_URL}/general/contact/${id}`);
}
export const addDocument = async (document) => {
  return await axios.post(`${process.env.REACT_APP_BASE_URL}/general/DocumentAdd`, document);
}

export const deleteReclamation = async (id) => {
  return await axios.delete(`${process.env.REACT_APP_BASE_URL}/general/Reclation/${id}`);
}
export const deleteMedia = async (id) => {
  return await axios.delete(`${process.env.REACT_APP_BASE_URL}/media/${id}`);
}
export const getCommandeid = async (id) => {
  return await axios.get(`${process.env.REACT_APP_BASE_URL}/commande/commande/${id}`);
}
export const deleteDoc = async (id) => {
  return await axios.delete(`${process.env.REACT_APP_BASE_URL}/general/${id}`);
}