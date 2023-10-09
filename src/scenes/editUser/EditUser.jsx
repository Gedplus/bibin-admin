import { Box, Button, TextField } from "@mui/material";
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
const EditUser = () => { 
    const [user, setUser] = useState(initialValues);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [selected, setSelected] = useState("");
const [image , setImage] = useState("")
  const { name, email, password , phoneNumber} = user;

const navigate = useNavigate();
const { id } = useParams();
console.log(user)


useEffect(() => {
    const loadUserDetails = async() => {
        const response = await getUser(id);
        setUser(response.data);
        setImage(response.data.image)
        setSelected(response.data.statue)

    }
    loadUserDetails();
  }, []);
  
  function handleChange1(event) {
    setSelected(event.target.value);

  }
function convertToBase64(e){
  console.log(e);
  var reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload = () => {
   
    setImage(reader.result)
    setUser({...user, image: reader.result})
  };
  reader.onerror = error => {
   
  }}
 


  const handleFormSubmit = async() => {
  
    await  setUser({...user, statue: selected})
  editUser(id, user);
  navigate("/utilisateur")
  window.location.reload();

  };
  const onValueChange = (e) => {
  
    setUser({...user, [e.target.name]: e.target.value})
}

  return (
    <Box m="20px">
      <Header title="Modifier l'utilisateur" subtitle="Modifier le profil utilisateur" />

      <Formik
       
  

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
        value={selected}
      >
        <FormControlLabel value="etudiant" control={<Radio   color="default" />} label="etudiant"/>
        <FormControlLabel value="professionnel" control={<Radio color="default"  />} label="professionnel" />
     
      </RadioGroup>
    </FormControl>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nom et prénom "
                onBlur={handleBlur}
                onChange={(e) => onValueChange(e)}
    
                value={name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="email"
                onBlur={handleBlur}
                onChange={(e) => onValueChange(e)}
                value={email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Mot de passe"
                onBlur={handleBlur}
                onChange={(e) => onValueChange(e)}
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
                onChange={(e) => onValueChange(e)}
                value={phoneNumber}
                name="phoneNumber"
               
     
                sx={{ gridColumn: "span 2" }}
              />
             <input accept="image/*"
             type="file" 
             onChange={convertToBase64}/>
             {image=="" || image == null ? "":   <img width={100} height={100} src={image}/>}
         
                       
                           
            
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" onClick={handleFormSubmit} color="secondary" variant="contained">
                Modifier l'utilisateur
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

export default EditUser;