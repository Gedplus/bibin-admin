import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid , GridToolbar  } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { Link } from 'react-router-dom';
import {  deleteContact, useGetContactQuery,useGetReclamationQuery ,deleteReclamation} from "state/api";
import {  Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
const Reclamation = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data, isLoading } = useGetReclamationQuery();
 
  const navigate = useNavigate();
  const deleteReclamationData = async (id) => {
    await deleteReclamation(id);
    window.location.reload(false);
}

  const columns = [
    {
      field: 'id' , 
      headerName: 'id', 
      filterable: false,
      renderCell:(index) => index.api.getRowIndexRelativeToVisibleRows(index.row._id) + 1,
  },
    {
        field: "NomPrenom",
        headerName: "Nom et prénom",
        flex: 0.5,
      },
    {
      field: "Email",
      headerName: "Adresse mail",
      flex: 0.8,
    },
    {
        field: "CIN",
        headerName: "Copie de votre CIN",
        flex: 0.6,
        renderCell: ({ row: { CIN ,_id } }) => {
          return (
     
            <img width={50} height={50} src={CIN}/>
           
          );
        },
      },
      {
        field: "justificative",
        headerName: "Piéce justificative",
        flex: 0.6,
        renderCell: ({ row: { justificative ,_id } }) => {
          return (
     
            <img width={50} height={50} src={justificative}/>
           
          );
        },
      },
   
   
    {
        field: "message",
        headerName: "Message",
        flex: 0.8,
      },
 
      {
        field: "phoneNumber",
        headerName: "Numéro de téléphone",
        flex: 0.7,
      },
      {
        field: "createdAt",
        headerName: "date de creation",
        flex: 0.7,
      },
  
  
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      flex: 0.7,
      renderCell: ({ row }) =><>
  <>
      <Button color="secondary" variant="contained" onClick={() => deleteReclamationData(row._id)} >Delete</Button> </>
  <Button color="primary" variant="contained" style={{marginRight:10}}  component={Link} to={`/DetailReclamation/${row._id}`}>Détail</Button> </> 
  
  },


  ];

 
  return (
    <Box m="20px">
      <Header title="Reclamations" subtitle="Gestion des reclamations" />
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

export default Reclamation;