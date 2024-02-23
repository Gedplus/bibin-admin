import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { Editdemande, Editsolde, getdemande } from "state/api";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as yup from "yup";
import Header from "components/Header";
import { Alert } from "@mui/material";
import { useState, useEffect } from 'react';
const TraitementDemande = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const { id } = useParams();
    const [demande, setDemande] = useState("");
    const [erreur1, setErreur1] = useState(false);
    const [solde , setsolde] = useState("")
    useEffect(() => {
        const loadUserDetails = async() => {
            const response = await getdemande(id);
      setDemande(response.data)
        }
        loadUserDetails();
      }, []);
      console.log(demande)
      const handleFormSubmit = async() => {
        Editsolde(demande.user, {solde: solde} );
        setTimeout(()=>{
            Editdemande(demande._id, demande);

     },3000)
     setErreur1 (true)
      }
    return (     <Box m="20px">
    <Header title="Traitement de demande" subtitle="Traiter la demande utilisateur" />
    {erreur1==true ?(<Alert severity="success">Votre demande est envoyée</Alert>):(<></>)}
    <Formik
     


    >
      {({
    
        errors,
        touched,
        handleBlur,
      
      }) => (   
           <div>

          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
                    
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Solde versé "
              onBlur={handleBlur}
              onChange={(event) => {setsolde(event.target.value)}}

              value={solde}
              name="solde"
      
              sx={{ gridColumn: "span 2" }}
            />
      
    
         

       
                     
                         
          
          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit"  onClick={handleFormSubmit} color="secondary" variant="contained">
           demande traiter
            </Button>
          </Box>
</div>
      )}
    </Formik>

  </Box>)
 }
export default TraitementDemande;