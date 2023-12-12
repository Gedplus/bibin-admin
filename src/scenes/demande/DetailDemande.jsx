import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from 'react';
import { addUser, editUser, getUser } from "state/api";
import { useNavigate, useParams } from 'react-router-dom';
import Header from "components/Header";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const DetailDemande = () => { 
    const [demande, setDemande] = useState("");

const navigate = useNavigate();
const { id } = useParams();


useEffect(() => {
    const loadUserDetails = async() => {
        const response = await getUser(id);
        setDemande(response.data)
    }
    loadUserDetails();
  }, []);
  

console.log(demande)

  return (
    <Box m="20px">
      <Header title="Modifier l'utilisateur" subtitle="Modifier le profil utilisateur" />
      <Typography variant="h4" component="div" sx={{ mb: "1.5rem" }}>
          Nom et prémon  : {demande.name}
        </Typography>
        <Typography variant="h4" component="div" sx={{ mb: "1.5rem" }}>
         Email : {demande.email}
        </Typography>
        <Typography variant="h4" component="div" sx={{ mb: "1.5rem" }}>
        Justificative de métier : 
        </Typography>
        <img width={650} height={450}  src={demande.justificative}/>
        <Typography variant="h4" component="div" sx={{ mb: "1.5rem" }}>
        CIN : 
        </Typography>
        <img width={650} height={450}  src={demande.CIN}/>
    </Box>
  );
};



export default DetailDemande;