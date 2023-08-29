import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid , GridToolbar  } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { Link } from 'react-router-dom';
import { deleteMedia, deleteUser, useGetMediaQuery } from "state/api";
import {  Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
const ListVideo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data, isLoading } = useGetMediaQuery();
  const deleteMediaData = async (id) => {
    await deleteMedia(id);
    window.location.reload(false);
}
 
  const navigate = useNavigate();


  const columns = [

    {
      field: "name",
      headerName: "Titre",
      flex: 0.2,
    },
        
      {
        field: "prix",
        headerName: "Prix",
        flex: 0.1,
      },
        
      {
        field: "period",
        headerName: "Period",
        flex: 0.1,
      },
    {
      field: "videos",
      headerName: "videos",
      flex: 0.4,
      height: 300 ,
      renderCell: ({ row: { videos ,_id } }) => {
        return (<>
   {videos.map((video) =>{
    return(
        <video preload="auto" width="320" height="240" controls>
        <source src={`http://localhost:5001${video}` } />
       
        </video>
    )
   })

   }</>
            
         
        );
      },
    },
    {
        field: "action",
        headerName: "Action",
        sortable: false,
        flex: 0.5,
        renderCell: ({ row }) =><>
       <Button color="primary" variant="contained" style={{marginRight:10}}  component={Link} to={`/editMedia/${row._id}`}>Edit</Button> 
        <Button color="secondary" variant="contained" onClick={() => deleteMediaData(row._id)} >Delete</Button> </>
      },
  



  ];

 
  return (
    <Box m="20px">
      <Header title="Videos" subtitle="Gestion des videos" />
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
          rowHeight={250}
          columns={columns}   components={{ Toolbar: GridToolbar }}/>
     
      </Box>
    </Box>
  );
};

export default ListVideo;