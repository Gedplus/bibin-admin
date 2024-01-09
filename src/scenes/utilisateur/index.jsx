import { Box, Chip, Typography, useTheme } from "@mui/material";
import { DataGrid , GridToolbar  } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { Link } from 'react-router-dom';
import { deleteUser, editUser, useGetCustomersQuery, useGetUtilisateursQuery } from "state/api";
import {  Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
const Utilisateur = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data, isLoading } = useGetUtilisateursQuery();

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
      field: "image",
      headerName: "Image",
      flex: 0.5,
      renderCell: ({ row: { image ,_id } }) => {
        return (
   
          <img width={50} height={50} src={image}/>
         
        );
      },
    },
    {
      field: "approved",
      headerName: "Vérifier",
      flex: 0.5,
      renderCell: ({ row: { approved ,_id }, row }) => {
        return (
   <>
      {approved == true ? (<>  
  <Chip label="Vérifier" color="success" /></>):(<><Chip label=" Non Vérifier"  onClick={() => handleFormSubmit(_id, row)} color="error" /></>)

      }
    </>
         
        );
      },
    },
    {
      field: "statue",
      headerName: "Statut",
      flex: 0.5,
    },

    {
      field: "Documents",
      headerName: "Documents",
      sortable: false,
      flex: 0.5,
      renderCell: ({ row }) =><>
     <Button color="primary" variant="contained" style={{marginRight:10}}  component={Link} to={`/doc/${row._id}`}>Documents</Button> 
   </>
    },
    {
      field: "Vidéos",
      headerName: "Vidéos",
      sortable: false,
      flex: 0.5,
      renderCell: ({ row }) =><>
     <Button color="primary" variant="contained" style={{marginRight:10}}  component={Link} to={`/videos/${row._id}`}>Vidéos</Button> 
   </>
    },

  
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      flex: 0.5,
      renderCell: ({ row }) =><>
     <Button color="primary" variant="contained" style={{marginRight:10}}  component={Link} to={`/edit/${row._id}`}>Edit</Button> 
      <Button color="secondary" variant="contained" onClick={() => deleteUserData(row._id)} >Delete</Button> </>
    },

  ];

 
  return (
    <Box m="20px">
      <Header title="UTILISATEURS" subtitle="Gestion des utilisateurs" />
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

export default Utilisateur;