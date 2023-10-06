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
import Select from "@mui/material/Select";
const AddUser = () => {

  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [selected, setSelected] = useState("");
const [image , setImage] = useState("")

  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [Téléphone , setTéléphone] = useState("")
const navigate = useNavigate();
const { id } = useParams();
 

function handleChange1(event) {
  setSelected(event.target.value);
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
  const user ={
    name:name,
    email:email,
    password:password,
    phoneNumber:Téléphone,
    image: image ,
     statue: selected,
  }

  const handleFormSubmit = async() => {
   
     await addUser( user);
    navigate('/users');
  };


  return (
    <Box m="20px">
      <Header title="Ajouter un utilisateur" subtitle="Ajouter un profil utilisateur" />

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
                  <FormControl          sx={{ gridColumn: "span 4" }}>
      <FormLabel id="demo-row-radio-buttons-group-label"    style={{fontSize:"20px"}} color="secondary"  >vous êtes étudiant(e) ou professionnel(le)</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange = {handleChange1}

      >
        <FormControlLabel value="etudiant" control={<Radio   color="default" />} label="etudiant"/>
        <FormControlLabel value="professionnel" control={<Radio color="default"  />} label="professionnel" />
     
      </RadioGroup>
    </FormControl>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nom et prénom *"
                onBlur={handleBlur}
                onChange={(event) => {setname(event.target.value)}}
    
                value={name}
                name="name"
               
        
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email *"
                onBlur={handleBlur}
            
                value={email}
                name="email"
                onChange={(event) => {setemail(event.target.value)}}
    
     
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Mot de passe"
                onBlur={handleBlur}
                onChange={(event) => {setpassword(event.target.value)}}
                value={password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 4" }}
              />
           
                     <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Téléphone"
                onBlur={handleBlur}
                onChange={(event) => {setTéléphone(event.target.value)}}
                value={Téléphone}
                name="Téléphone"
               
     
                sx={{ gridColumn: "span 2" }}
              />
              
            
    <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
          Upload votre photo:
        </Typography>
   <input type="file"    onChange={convertToBase64}     /> 
         
                       
                           
            
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
              Ajouter un utilisateur
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

export default AddUser;