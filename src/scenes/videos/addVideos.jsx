import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from 'react';
import {Typography } from "@mui/material";
import { addUser, editUser, getUser, useGetUtilisateursQuery } from "state/api";
import { useNavigate, useParams } from 'react-router-dom';
import Header from "components/Header";
import Slider from '@mui/material/Slider';
import axios from "axios";
const AddVideo = () => {
  const { data, isLoading } = useGetUtilisateursQuery();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [name , setName] = useState("")
  const [videos , setVideos] = useState([])
  const [auteur, setAuteur] = useState();
  const [prix, setPrix] = useState();
  const [description, setDescription] = useState();
  const [period, setPeriod] = useState(6);
  const handleChangeA = (event) => {
    setAuteur(event.target.value);
  };
  function valueLabelFormatD(value) {

    return value;
    }
    const handleChange7 = (event, newValue) => {
      if (typeof newValue === 'number') {
        setPeriod(newValue);
      }
    };
const handleFormSubmit =(e) =>{
    e.preventDefault();
    let formdata  =new FormData();
    for (let key in videos){
        formdata.append("videos", videos[key]);

    } 
    formdata.append("name", name);
    formdata.append("auteur", auteur);
    formdata.append("prix", prix);
    formdata.append("description", description);
    formdata.append("period", period);
    
axios.post ("https://api.bibintunisie.com/media/create" , formdata).then((success) => {
  alert("Submitted successfully");
  
}).catch((error) => {
 
  alert("error happened!")
});
}







  return (
    <Box m="20px">
      <Header title="Ajouter un video" subtitle="Ajouter un video" />

      <Formik
        onSubmit={handleFormSubmit}
  
        validationSchema={checkoutSchema}
      >
        {({
      
          errors,
          touched,
          handleBlur,
        
        }) => (
          <form onSubmit={handleFormSubmit}>
            <Box
              display="grid"
              ml='50px'
              gap="70px"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Title"
                onBlur={handleBlur}
                onChange={(e) => setName(e.target.value)}
                style={{width:"700px"}}
                value={name}
                name="name"
            
       
                sx={{ gridColumn: "span 2" }}
              /> 
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={(e) => setDescription(e.target.value)}
                style={{width:"700px"}}
                value={description}
                name="description"
                multiline
                maxRows={4}
       
                sx={{ gridColumn: "span 2" }}
              /> 
            
                           <input type="file" name="videos" id="video" multiple accept=".mp4, .mkv" onChange={(e) => { setVideos(e.target.files);}} />
                        <br/>  {data == undefined ? (
<></>):(<><FormControl
                         style={{width:"700px"}}
					  
                    >
                      <InputLabel
                        color="secondary"
                        id="demo-simple-select-label"
                      >
                        Auteur
                      </InputLabel>
                      <Select
                    
               
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Etablissement"
                        onChange={handleChangeA}
                        value={auteur}
                        color="secondary"

                      >
                        {data.map((admin) => {
                          return (
                            <MenuItem value={admin._id}>
                              {admin.name}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl></>)}
                    <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Prix"
                onBlur={handleBlur}
                onChange={(e) => setPrix(e.target.value)}
                style={{width:"700px"}}
                value={prix}
                name="prix"
            
  
                sx={{ gridColumn: "span 2" }}
              /> 
                <Box>
      <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
         Durée de mode lecture : {period} mois
        </Typography>
        <Slider
              style={{width:"400px"}}
          value={period}
          min={6}
          step={1}
          max={12}
          color="secondary"
        
          getAriaValueText={valueLabelFormatD}
          valueLabelFormat={valueLabelFormatD}
          onChange={handleChange7}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box>  
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
               Ajouter video 
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  city: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
    state: yup.string().required("required"),
    country: yup.string().required("required"),
    occupation: yup.string().required("required"),
});
const initialValues = {
  name: "",
  email: "",
  password: "",
image: "",

};

export default AddVideo;