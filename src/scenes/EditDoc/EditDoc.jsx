import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "components/Header";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import { useGetDocumentQuery, useGetProductsQuery,useGetCustomersQuery, useGetUtilisateursQuery, editDocument, deleteDoc, getDocument } from "state/api";
import { createElement } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react";
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
const EditDoc = () => {

  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const { id } = useParams();
  const [Doc, setDoc] = useState(initialValues);
  const { data, isLoading } = useGetUtilisateursQuery(); 
  useEffect(() => {
    const loadUserDetails = async() => {
        const response = await getDocument(id);
        setDoc(response.data)
console.log("dfkmù",Doc)
    }
    loadUserDetails();
  }, []);


function downloadFileAtURL(url) {
  downloadPDF(url,"Test");
  
}
const handleFormSubmit = async(id,document1) => {
  
  await editDocument(id, document1 );

};

  function  downloadPDF(data,fileName) {
    const linkSource = data 
    const fileNamee = fileName +".pdf";
    const downloadLink  = React.createElement('a', {href:linkSource}, fileNamee)
  
  
    
   
    
  }
  const deleteDocData = async (id) => {
    await deleteDoc(id);
    window.location.reload(false);
  }

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Documents" subtitle="Voir votre liste des documents." />

        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(2, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
        <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
       
      
      <CardContent>
     
      {data == undefined  ? (<>sxxdd</>) : (<>{data.map((user) => {return( <>    {Doc.auteur == user._id ? ( <>{user.approved == true ?(<img width={50} height={50} style={{marginLeft: "200px"}} src="./assets/checked.png"/>):(<></>)}</>):(<></>)}</>)  })}</>)}
      <Typography
 
 color={theme.palette.secondary[700]}
 gutterBottom
 variant="h4" component="div" sx={{ mb: "1.5rem" , mt:"1.5rem"}}
>
Le doc en PDF :     <a href={Doc.document}   download="document.pdf">document.pdf</a>
</Typography>
<CardActions>
        {Doc.accepte==true?(<>    <Button color="success" variant="contained" style={{marginRight:10}} >Déja Approver</Button>  
 </>):(<>        <Button color="error" variant="contained" style={{marginRight:10}} onClick={() => handleFormSubmit(Doc._id, "d")}  >Approver</Button>
        </>)}
        <Button color="secondary" variant="contained" onClick={() => deleteDocData(Doc._id)} >Delete</Button>
    </CardActions> 

    <Typography variant="h4" component="div" sx={{ mb: "1.5rem" , mt:"1.5rem"}}> Auteur : {data == undefined  ? (<>sxxdd</>) : (<>{data.map((user) => {return( <>    {Doc.auteur == user._id ? (    <> {user.name} </>):(<></>)}</>)  })}</>)}
          </Typography>
          <Typography variant="h4" component="div" sx={{ mb: "1.5rem" }}>
          Titre : {Doc.titre}
        </Typography>
   
        <Typography
 
          color={theme.palette.secondary[700]}
          gutterBottom
          variant="h4" component="div" sx={{ mb: "1.5rem" }}
        >
          Type de document /Année : {Doc.type}-{Doc.Annee}
        </Typography>
        <Typography   color={theme.palette.secondary[400]} variant="h4" component="div" sx={{ mb: "1.5rem" }}> Université : {Doc.universite}</Typography>
  
       
    

      
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
       
          fullWidth
          onClick={() => setIsExpanded(!isExpanded)}
        >
          Voir plus
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}
      >
        <CardContent>
        <Typography  color={theme.palette.secondary[400]} variant="h4" component="div" sx={{ mb: "1.5rem" }}>
        Prix lecture : {Number(Doc.prixLecture).toFixed(2)} dt
        </Typography>
        <Typography  color={theme.palette.secondary[400]} variant="h4" component="div" sx={{ mb: "1.5rem" }}>
        Durée lecture: {Doc.period} mois
        </Typography>
        <Typography  color={theme.palette.secondary[400]} variant="h4" component="div" sx={{ mb: "1.5rem" }}>
        Prix téléchargement : {Number(Doc.prixTelechargement).toFixed(2)} dt
        </Typography>
          <Typography variant="h4" component="div" sx={{ mb: "1.5rem" }}>id: {Doc._id}</Typography>
       
    
          <Typography variant="h4" component="div"  sx={{ mb: "1.5rem" }}>
            Description : {Doc.description}   
          </Typography>
         
          <img width={150} height={150}  src={Doc.image}/>
     
        </CardContent>
      </Collapse>
    </Card>
        </Box>
   
    </Box>
  );
};
const initialValues = {
    name: "",
    email: "",
    password: "",
  image: "",
  
  };

export default EditDoc;