import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from 'react';
import { addUser, editMedia, editUser, getMedia, getUser, useGetUtilisateursQuery } from "state/api";
import { useNavigate, useParams } from 'react-router-dom';
import Header from "components/Header";
import Slider from '@mui/material/Slider';
const EditMedia = () => {
    const [Media, setMedia] = useState(initialValues);
    const [value, setValue] = useState();
    const { data, isLoading } = useGetUtilisateursQuery();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  var pp = 0;
  const { name, auteur, prix ,description ,  period , videos} = Media;

const navigate = useNavigate();
const { id } = useParams();
const sa = 7 ;
function valueLabelFormatD(value) {
   
    return value;
    }
 

useEffect(() => {
    const loadMediaDetails = async() => {
        const response = await getMedia(id);
        setMedia(response.data);
        setValue(response.data.period);
    }
    loadMediaDetails();
  }, []);
  

  const handleFormSubmit = async() => {
   
     await editMedia(id, Media);
    navigate('/listvideo');
  };
  const onValueChange = (e) => {
    
    setMedia({...Media, [e.target.name]: e.target.value})
}

  return (
    <Box m="20px">
      <Header title="Modifier video" subtitle="Modifier video" />
      {videos== undefined ? (<></>):(<>{videos.map((video) =>{
    return(
        <video preload="auto" width="1000" height="500" controls>
        <source src={`http://localhost:5001${video}` } />
    
        </video>
    )
   })

   }</>)} 
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
                label="name"
                onBlur={handleBlur}
                onChange={(e) => onValueChange(e)}
    
                value={name}
                name="name"
      
                sx={{ gridColumn: "span 2" }}
              />
               {data == undefined ? (
<></>):(<><FormControl
                  
                  sx={{ gridColumn: "span 2" }}
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
                        onChange={(e) => onValueChange(e)}
                        value={auteur}
                        color="secondary"
name="auteur"
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
                onChange={(e) => onValueChange(e)}
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
          value={value}
          min={6}
          step={1}
          max={12}
          name="period"
          color="secondary"

          getAriaValueText={valueLabelFormatD}
          valueLabelFormat={valueLabelFormatD}
          onChange={(e) => onValueChange(e)}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box> 
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={(e) => onValueChange(e)}
                value={description}
                name="description"
       
                sx={{ gridColumn: "span 4" }}
              />
              

         
                       
                           
            
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Modifier video
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

export default EditMedia;