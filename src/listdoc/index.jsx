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
import { useGetDocumentQuery, useGetProductsQuery,useGetCustomersQuery, useGetUtilisateursQuery, editDocument, deleteDoc } from "state/api";
import { createElement } from 'react';
const Product = ({
  _id,
  titre,
  description,
  prixLecture,
  prixTelechargement,
  universite,
  auteur,
  type,
  profession,
  carteIdentite,
  pieceJustificatif,
  document,
  statue,accepte
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const { data, isLoading } = useGetUtilisateursQuery();

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
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
      {data == undefined  ? (<>sxxdd</>) : (<>{data.map((user) => {return( <>    {auteur == user._id ? ( <>{user.approved == true ?(<img width={50} height={50} style={{marginLeft: "200px"}} src="./assets/checked.png"/>):(<></>)}</>):(<></>)}</>)  })}</>)}
      <Typography
 
 color={theme.palette.secondary[700]}
 gutterBottom
 variant="h4" component="div" sx={{ mb: "1.5rem" }}
>
{data == undefined  ? (<>sxxdd</>) : (<>{data.map((user) => {return( <>    {auteur == user._id ? ( <>{user.statue}</>):(<></>)}</>)  })}</>)}
</Typography>
        <Typography
 
          color={theme.palette.secondary[700]}
          gutterBottom
          variant="h5" component="div" sx={{ mb: "1.5rem" }}
        >
          Type de document: {type}
        </Typography>
        <Typography variant="h5" component="div" sx={{ mb: "1.5rem" }}>
          Titre de document: {titre}
        </Typography>
   
        <Typography  color={theme.palette.secondary[400]} variant="h5" component="div" sx={{ mb: "1.5rem" }}>
          Prix du mode lecture: {Number(prixLecture).toFixed(2)} dt
        </Typography>
        <Typography  color={theme.palette.secondary[400]} variant="h5" component="div" sx={{ mb: "1.5rem" }}>
          Prix du mode téléchargement : {Number(prixTelechargement).toFixed(2)} dt
        </Typography>
    

        <Typography   color={theme.palette.secondary[400]} variant="h5" component="div" sx={{ mb: "1.5rem" }}> Universite: {universite}</Typography>
        <Typography variant="h5" component="div" > Auteur : {data == undefined  ? (<>sxxdd</>) : (<>{data.map((user) => {return( <>    {auteur == user._id ? (    <> {user.name} </>):(<></>)}</>)  })}</>)}
          </Typography>
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
          <Typography variant="h5" component="div">id: {_id}</Typography>
          <Typography variant="h5" component="div">
           <a href={document}   download="document.pdf">document.pdf</a>
        </Typography>
    
          <Typography variant="h5" component="div">
            Description : {description}   
          </Typography>
          <Typography variant="h5" component="div"> 
          Auteur :{data == undefined  ? (<>sxxdd</>) : (<>{data.map((user) => { <>    {auteur == user._id ? (    <Typography> {user.name} </Typography>):(<></>)}</>  })}</>)}
          </Typography> <Typography variant="h5" component="div">
      Profission d'auteur : {profession}
          </Typography>
          <Typography variant="h5" component="div">
          Piéce justificatif d'auteur: {pieceJustificatif=="" || pieceJustificatif == null ? "":    <a href={pieceJustificatif} download="pieceJustificatif.pdf">Piece Justificatif.pdf</a>}
          
        </Typography>
        <Typography variant="h5" component="div">
        Carte d'identité d'auteur: {carteIdentite=="" || carteIdentite == null ? "":         <a href={carteIdentite} download="carteIdentite.pdf">Carte d'identite.pdf</a>}
     
        </Typography>
        <br/>
        <CardActions>
        {accepte==true?(<>    <Button color="success" variant="contained" style={{marginRight:10}} >Déja Approver</Button>  
 </>):(<>        <Button color="error" variant="contained" style={{marginRight:10}} onClick={() => handleFormSubmit(_id, "d")}  >Approver</Button>
        </>)}
        <Button color="secondary" variant="contained" onClick={() => deleteDocData(_id)} >Delete</Button>
    </CardActions> 
        </CardContent>
      </Collapse>
    </Card>
  );
};

const Document = () => {
  const { data, isLoading } = useGetDocumentQuery();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Documents" subtitle="Voir votre liste des documents." />
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {data.map(
            ({
                _id,
                titre,
                description,
                prixLecture,
                prixTelechargement,
                universite,
                auteur,
                type,
                profession,
                carteIdentite,
                pieceJustificatif,
                document,
                statue,
                accepte
            }) => (
              <Product
                key={_id}
                _id={_id}
                titre={titre}
                description={description}
                prixLecture={prixLecture}
                prixTelechargement={prixTelechargement}
                universite={universite}
                auteur={auteur}
                type={type}
                profession={profession}
                carteIdentite={carteIdentite}
                pieceJustificatif={pieceJustificatif}
                document={document}
                statue={statue}
                accepte={accepte}
              />
            )
          )}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Document;