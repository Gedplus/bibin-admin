import { Box, Chip, Typography, useTheme } from "@mui/material";
import { DataGrid , GridToolbar  } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import { useState, useEffect } from 'react';
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import {  useParams } from 'react-router-dom';
import Header from "../../components/Header";
import { Link } from 'react-router-dom';
import { deleteDemande, deleteDoc, deleteUser, editDocument, getDocUser, useGetCustomersQuery, useGetDemandeQuery, useGetDocApproverQuery, useGetUtilisateursQuery } from "state/api";
import {  Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
const Demandes = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data, isLoading } = useGetDemandeQuery();
  
  
  const navigate = useNavigate();
  const handleFormSubmit = async(id,document1) => {
  
    await editDocument(id, document1 );
    window.location.reload(false);
  };
  const deleteDemandedata = async (id) => {
    await deleteDemande(id);
    window.location.reload(false);
  }

  const columns = [
    {
      field: "createdAt",
      headerName: "date de creation",
      flex: 0.7,
    },

    {
      field: "user",
      headerName: "Utilisateur",
      flex: 0.4,
    },
    {
      field: "name",
      headerName: "Nom",
      flex: 0.3,
    },

    {
      field: "email",
      headerName: "Email",
      flex: 0.4,
 
    },
      {
        field: "phoneNumber",
        headerName: "phoneNumber",
        flex: 0.3,
      },
    
   
 
    
    {
      field: "traiter",
      headerName: "traiter",
      flex: 0.5,
      renderCell: ({ row: { traiter ,_id } }) => {
        return (
   <>
      {traiter == true ? (<>  
        <Button color="success" variant="contained" style={{marginRight:10}} >Déja traiter</Button>  </>):(<>   <Button color="error" variant="contained" style={{marginRight:10}} component={Link} to={`/editdemande/${_id}`}  >traiter</Button></>)

      }
    </>
         
        );
      },
    },
  


  
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      flex: 0.5,
      renderCell: ({ row }) =><>

      <Button color="secondary" variant="contained" onClick={() => deleteDemandedata(row._id)} >Delete</Button> </>
    },


  ];

 
  return (
    <Box m="20px">
      <Header title="Demandes de versement" subtitle="Gestion des demandes" />
     
      <Box
        m="20px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection   loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          enableRowNumbers
       
          columns={columns}   components={{ Toolbar: GridToolbar }}/>
     
      </Box>
    </Box>
  );
};

export default Demandes;