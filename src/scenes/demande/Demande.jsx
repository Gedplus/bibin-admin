import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid , GridToolbar  } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { Link } from 'react-router-dom';
import { deleteUser, editUser, useGetCustomersQuery, useGetUtilisateursDemandeQuery, useGetUtilisateursQuery } from "state/api";
import {  Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
const Demande = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data, isLoading } = useGetUtilisateursDemandeQuery();
  const [users, setUser] = useState();

  const navigate = useNavigate();
  const deleteUserData = async (id) => {
    await deleteUser(id);
    window.location.reload(false);
}
const handleFormSubmit = async(id,user) => {
  
    await editUser(id, {...user, approved:true});
    window.location.reload(false);
  };
  const columns = [
    {
      field: 'id' , 
      headerName: 'id', 
      filterable: false,
      renderCell:(index) => index.api.getRowIndexRelativeToVisibleRows(index.row._id) + 1,
  },

    {
      field: "name",
      headerName: "Nom et prénom",
      flex: 0.5,
    },
    {
        field: "email",
        headerName: "Email",
        flex: 0.8,
      },
    {
      field: "justificative",
      headerName: "Justificative de métier", 
      flex: 0.8,
      renderCell: ({ row: { justificative ,_id } }) => {
        return (      
   
          <img width={50} height={50} src={justificative}/>
         
        );}
    },
    {
      field: "CIN",
      headerName: "CIN",
      flex: 0.8,
      renderCell: ({ row: { CIN ,_id } }) => {
        return (
          <img width={50} height={50} src={CIN}/>
         
        );
      },
    },


    {
      field: "action",
      headerName: "Action",
      sortable: false,
      flex: 0.5,
      renderCell: ({ row }) =>
     <Button color="primary" variant="contained" style={{marginRight:10}}  onClick={() => handleFormSubmit(row._id, row)} >Approver</Button> 

    },


  ];

 
  return (
    <Box m="20px">
      <Header title="Demandes de verification" subtitle="Gestion des Demandes de verification" />
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
          columns={columns}   components={{ Toolbar: GridToolbar }}/>
     
      </Box>
    </Box>
  );
};

export default Demande;