import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from 'react';
import {Typography } from "@mui/material";
import { addPack, addUser, editUser, getUser, useGetMediaQuery, useGetUtilisateursQuery } from "state/api";
import { useNavigate, useParams } from 'react-router-dom';
import Header from "components/Header";
import Slider from '@mui/material/Slider';
import axios from "axios";
const AddPack = () => {
  const { data, isLoading } = useGetMediaQuery();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [ title, setTitle] = useState("")
  const [videos , setVideos] = useState([])
  const [image , setImage] = useState("")
  const [prix, setPrix] = useState();
  const [description, setDescription] = useState();
  const [period, setPeriod] = useState(6);

  function valueLabelFormatD(value) {

    return value;
    }
    function convertToBase64(e){
      console.log(e);
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {

        setImage(reader.result)

      };
      reader.onerror = error => {
        console.log("error: ", error);
      }}
    const handleChange7 = (event, newValue) => {
      if (typeof newValue === 'number') {
        setPeriod(newValue);
      }
    };

    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setVideos(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };
      const pack ={
      title: title,
      description: description, 
      videos: videos,
      period : period,
      prix: prix,      
      image: image,
      };
      const handleFormSubmit = async(values) => {
        
        await  addPack(pack)
        
      };








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
                onChange={(e) => setTitle(e.target.value)}
                style={{width:"700px"}}
                value={title}
                name="title"
            
       
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
            
            {data == undefined ? (
<></>):(<><FormControl
                         style={{width:"700px"}}
					  
                    >
                      <InputLabel
                        color="secondary"
                        id="demo-simple-select-label"
                      >
                        Videos
                      </InputLabel>
                      <Select
                    
                    multiple
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                        label="Videos"
                        onChange={handleChange}
                        value={videos}
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

      </Box> <br/>
      <input accept="image/*"
             type="file" 
             onChange={convertToBase64}/>
             {image=="" || image == null ? "":   <img width={100} height={100} src={image}/>} 
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" onClick={handleFormSubmit}>
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

export default AddPack;