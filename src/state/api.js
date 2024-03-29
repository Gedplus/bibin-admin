import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from 'axios';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.bibintunisie.com/" }), 
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
      getDocApprover: build.query({
        query: () => "client/DocApprover",
        providesTags: ["DocApprover"],
      }), 
      getDemande: build.query({
        query: () => "general/Demandes",
        providesTags: ["Demandes"],
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
 useGetReclamationQuery,useGetUtilisateursDemandeQuery,useGetMediaQuery,useGetPackQuery, useGetCommandeQuery , useGetDocApproverQuery, useGetDemandeQuery
  } = api;
  export const addUser = async (user) => {
    return await axios.post(`https://api.bibintunisie.com/general/Useradd`, user);
}
export const addPack = async (pack) => {
  return await axios.post(`https://api.bibintunisie.com/pack/packAdd`, pack);
}
export const deletePack = async (id) => {
  return await axios.delete(`https://api.bibintunisie.com/pack/${id}`);
}
export const deleteUser = async (id) => {
  return await axios.delete(`https://api.bibintunisie.com/client/${id}`);
}
export const getUser = async (id) => {
  return await axios.get(`https://api.bibintunisie.com/client/${id}`);
}
export const editUser = async (id, user) => {
  return await axios.put(`https://api.bibintunisie.com/client/${id}`, user)
}
export const getDocUser = async (id) => {
  return await axios.get(`https://api.bibintunisie.com/client/documentsUser/${id}`);
}
export const getVideoUser = async (id) => {
  return await axios.get(`https://api.bibintunisie.com/media/mediaUser/${id}`);
}
export const getMedia = async (id) => {
  return await axios.get(`https://api.bibintunisie.com/media/${id}`);
}
export const getPackid = async (id) => {
  return await axios.get(`https://api.bibintunisie.com/pack/${id}`);
}
export const editpack = async (id, pack) => {
  return await axios.put(`https://api.bibintunisie.com/pack/${id}`, pack)
}
export const editMedia = async (id, media) => {
  return await axios.put(`https://api.bibintunisie.com/media/${id}`, media)
}
export const editDocument = async (id, document) => {
  return await axios.put(`https://api.bibintunisie.com/client/documents/${id}`, document)
}
export const deleteContact = async (id) => {
  return await axios.delete(`https://api.bibintunisie.com/general/contact/${id}`);
}
export const addDocument = async (document) => {
  return await axios.post(`https://api.bibintunisie.com/general/DocumentAdd`, document);
}

export const deleteReclamation = async (id) => {
  return await axios.delete(`https://api.bibintunisie.com/general/Reclation/${id}`);
}
export const deleteMedia = async (id) => {
  return await axios.delete(`https://api.bibintunisie.com/media/${id}`);
}
export const getCommandeid = async (id) => {
  return await axios.get(`https://api.bibintunisie.com/commande/commande/${id}`);
}
export const deleteDoc = async (id) => {
  return await axios.delete(`https://api.bibintunisie.com/general/${id}`);
}
export const getDocument= async (id) => {
  return await axios.get(`https://api.bibintunisie.com/general/Document/${id}`);
}
export const signup= async (user) => {
  return await axios.post(`https://api.bibintunisie.com/user/register`, user);
}
export const loginAdmin= async (user) => {
  return await axios.post(`https://api.bibintunisie.com/user/admin-login`, user);
}
export const forgetPassword= async (email) => {
  return await axios.post(`https://api.bibintunisie.com/user/forget-password-token-admin`, email);
}
export const ResetPassword= async (password,token ) => {
  return await axios.put(`https://api.bibintunisie.com/user/reset-password/${token}`, password);
}
export const getReclamation = async (id) => {
  return await axios.get(`https://api.bibintunisie.com/client/reclamation/${id}`);
}
export const deleteDemande = async (id) => {
  return await axios.delete(`https://api.bibintunisie.com/general/demande/${id}`);
}
export const getdemande= async (id) => {
  return await axios.get(`https://api.bibintunisie.com/general/Demande/${id}`);
}
export const Editsolde = async ( id , solde) => {
 
  return await axios.put(`https://api.bibintunisie.com/general/editsolddemande/${id}`,solde);
}
export const Editdemande = async ( id , demande) => {
 
  return await axios.put(`https://api.bibintunisie.com/general/editdemande/${id}`,demande);
}