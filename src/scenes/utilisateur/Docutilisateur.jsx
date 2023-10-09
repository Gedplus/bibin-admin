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
import { deleteDoc, deleteUser, editDocument, getDocUser, useGetCustomersQuery, useGetDocumentQuery, useGetUtilisateursQuery } from "state/api";
import {  Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
const DocUtilisateur = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data, isLoading } = useGetDocumentQuery();
  const { id } = useParams();
  const [doc, setDoc] = useState([]);
  const navigate = useNavigate();
  const handleFormSubmit = async(id,document1) => {
  
    await editDocument(id, document1 );
    window.location.reload(false);
  };
  const deleteDocData = async (id) => {
    await deleteDoc(id);
    window.location.reload(false);
  }
useEffect(() => {
    const loadUserDetails = async() => {
        const response = await getDocUser(id);
  setDoc(response.data)
console.log("ddd",response.data)
    }
    loadUserDetails();
  }, []);
  const columns = [
    {
      field: 'id' , 
      headerName: 'id', 
      filterable: false,
      renderCell:(index) => index.api.getRowIndexRelativeToVisibleRows(index.row._id) + 1,
  },
    {
      field: "titre",
      headerName: "Titre",
      flex: 0.4,
    },
    {
      field: "type",
      headerName: "Type",
      flex: 0.3,
    },
    {
        field: "document",
        headerName: "Document",
        flex: 0.4,
        renderCell: ({ row: { document ,_id } }) => {
          return (
     
            <a href={document}   download="document.pdf">document.pdf</a>
           
          );
        },
      },
      {
        field: "annee",
        headerName: "année",
        flex: 0.3,
      },
      {
        field: "prixTelechargement",
        headerName: "Prix Telechargement",
        flex: 0.4,
      },
      {
        field: "prixLecture",
        headerName: "Prix Lecture",
        flex: 0.4,
      },
      {
        field: "period",
        headerName: "Période",
        flex: 0.3,
      },
    {
      field: "image",
      headerName: "Image",
      flex: 0.3,
      renderCell: ({ row: { image ,_id } }) => {
        return (
   
          <img width={50} height={50} src={image}/>
         
        );
      },
    },
    {
      field: "approved",
      headerName: "Approuvé",
      flex: 0.5,
      renderCell: ({ row: { accepte ,_id } }) => {
        return (
   <>
      {accepte == true ? (<>  
        <Button color="success" variant="contained" style={{marginRight:10}} >Déja Approver</Button>  </>):(<>   <Button color="error" variant="contained" style={{marginRight:10}} onClick={() => handleFormSubmit(_id, "d")}  >Approver</Button></>)

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
     <Button color="primary" variant="contained" style={{marginRight:10}}  component={Link} to={`/editDoc/${row._id}`}>Détails</Button> 
      <Button color="secondary" variant="contained" onClick={() => deleteDocData(row._id)} >Delete</Button> </>
    },


  ];

 
  return (
    <Box m="20px">
      <Header title="Documents" subtitle="Gestion des Documents" />
      <Button color="secondary" variant="contained" style={{marginRight:10}}  component={Link} to={`/AddDoc/${id}`}>Ajouter un document </Button>
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
      >{console.log("doc",doc)}
        <DataGrid checkboxSelection   loading={isLoading || !doc}
          getRowId={(row) => row._id}
          rows={doc || []}
          columns={columns}   components={{ Toolbar: GridToolbar }}/>
     
      </Box>
    </Box>
  );
};

export default DocUtilisateur;