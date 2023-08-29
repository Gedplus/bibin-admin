import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid , GridToolbar  } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { Link } from 'react-router-dom';
import { deleteUser, useGetCustomersQuery } from "state/api";
import {  Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
const Chercheur = () => {
  const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  const { data, isLoading } = useGetCustomersQuery();


  const navigate = useNavigate();
  const deleteUserData = async (id) => {
    await deleteUser(id);
    window.location.reload(false);
}

  const columns = [

    {
      field: "fullname",
      headerName: "Nom et prénom",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.8,
    },
    {
      field: "phoneNumber",
      headerName: "Numéro de téléphone",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
    },
 
    {
      field: "occupation",
      headerName: "Profession",
      flex: 0.5,
    },

    {
      field: "profile",
      headerName: "Profile",
      flex: 0.4,
      renderCell: ({ row: { role ,_id } }) => {
        return (
   
            <Button color="secondary" style={{paddingRight:"30px",paddingLeft:"30px"}} startIcon={<SecurityOutlinedIcon />}  variant="contained" icon={<SecurityOutlinedIcon />} component={Link} to={`/edit/${_id}`}>   {role}</Button>
         
        );
      },
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
      <Header title="CHERCHEURS" subtitle="Gestion des chercheurs" />
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

export default Chercheur;