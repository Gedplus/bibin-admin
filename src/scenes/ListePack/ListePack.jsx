import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid , GridToolbar  } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { Link } from 'react-router-dom';
import { deleteMedia, deletePack, deleteUser, useGetMediaQuery, useGetPackQuery } from "state/api";
import {  Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
const ListPack= () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data, isLoading } = useGetPackQuery();
  const deletePackData = async (id) => {
    await deletePack(id);
    window.location.reload(false);
}
 
  const navigate = useNavigate();


  const columns = [

    {
      field: "title",
      headerName: "Titre",
      flex: 0.4,
    },
    {
        field: "description",
        headerName: "description",
        flex: 0.4,
      },
        
      {
        field: "prix",
        headerName: "Prix",
        flex: 0.4,
      },
        
      {
        field: "period",
        headerName: "Period",
        flex: 0.4,
      },
  
    {
        field: "action",
        headerName: "Action",
        sortable: false,
        flex: 0.5,
        renderCell: ({ row }) =><>
       <Button color="primary" variant="contained" style={{marginRight:10}}  component={Link} to={`/editPack/${row._id}`}>Edit</Button> 
        <Button color="secondary" variant="contained" onClick={() => deletePackData(row._id)} >Delete</Button> </>
      },
  



  ];

 
  return (
    <Box m="20px">
      <Header title="Pack videos" subtitle="Gestion des pack videos" />
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

export default ListPack;