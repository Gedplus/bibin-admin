import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid , GridToolbar  } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { Link } from 'react-router-dom';
import { deleteUser, useGetAdminQuery, useGetCustomersQuery, useGetUtilisateursQuery } from "state/api";
import {  Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
const Admin = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data, isLoading } = useGetAdminQuery();

  const navigate = useNavigate();
  const deleteUserData = async (id) => {
    await deleteUser(id);
    window.location.reload(false);
}

  const columns = [

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
      flex: 0.8,
      renderCell: ({ row: { image ,_id } }) => {
        return (
   
          <img width={50} height={50} src={image}/>
         
        );
      },
    },

    {
      field: "profile",
      headerName: "Profile",
      flex: 0.4,
      renderCell: ({ row: { role ,_id } }) => {
        return (
   
            <Button color="secondary" style={{paddingRight:"30px",paddingLeft:"30px"}} startIcon={<LockOpenOutlinedIcon />}  variant="contained" icon={<SecurityOutlinedIcon />} component={Link} to={`/edit/${_id}`}>   {role}</Button>
         
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      flex: 0.5,
      renderCell: ({ row }) =><>
  
      <Button color="secondary" variant="contained" onClick={() => deleteUserData(row._id)} >Delete</Button> </>
    },


  ];

 
  return (
    <Box m="20px">
      <Header title="ADMINS" subtitle="Gestion des admins" />
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

export default Admin;