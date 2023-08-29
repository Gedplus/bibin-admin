import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from 'react';
import { addUser, editMedia, editUser, editpack, getMedia, getPackid, getUser, useGetMediaQuery, useGetUtilisateursQuery } from "state/api";
import { useNavigate, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Header from "components/Header";
import Slider from '@mui/material/Slider';
import { CardActionArea } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
const EditPack= () => {
    const [Pack, setPack] = useState(initialValues);
    const [value, setValue] = useState();
    const { data, isLoading } = useGetMediaQuery();
    const userss = useGetUtilisateursQuery();
    const users =userss.data
  const isNonMobile = useMediaQuery("(min-width:600px)");
  var pp = 0;
  const { title,  prix ,description ,  period , videos} = Pack;

const navigate = useNavigate();
const { id } = useParams();
const sa = 7 ;
function valueLabelFormatD(value) {
    
    return value;
    }
 

useEffect(() => {
    const loadPackDetails = async() => {
        const response = await getPackid(id);
        setPack(response.data);
        setValue(response.data.period);
    }
    loadPackDetails();
  }, []);
  

  const handleFormSubmit = async() => {
   
     await editpack(id, Pack);
    navigate('/listpack');
  };
  const onValueChange = (e) => {

    setPack({...Pack, [e.target.name]: e.target.value})
}

  return (
    <Box m="20px">
      <Header title="Modifier pack videos" subtitle="Modifier pack videos" />

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
                label="title"
                onBlur={handleBlur}
                onChange={(e) => onValueChange(e)}
    
                value={title}
                name="title"
      
                sx={{ gridColumn: "span 2" }}
              />
            
             
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
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
            {videos== undefined ? (<></>):(<>{videos.map((video) =>{
    return(<>
        {data == undefined ? (
            <></>):(<>{data.map((media) =>{
                return(<>{media._id== video ?(<>    {media.videos== undefined ? (<></>):(<>{media.videos.map((video) =>{
                    return(
                        <Card sx={{ maxWidth: 345 }} style={{boxShadow:"0px 2px 10px "}}>
                                    {users == undefined  ? (<>sxxdd</>) : (<>{users.map((user) => {return( <>  
                                      {media.auteur == user._id ? (     <CardHeader
        avatar={
            <Avatar alt= {user.name} src={user.image} />
        }
        action={
          <IconButton aria-label="settings">
     
          </IconButton>
        }
        title= {user.name}
      

      />

          ):
          (<></>)}</> ) })}</>)}
                        
                        <CardActionArea>
                        <video preload="auto" width="282" height="158" controls>
                        <source src={`http://localhost:5001${video}` } />
                      
                        </video>
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                             {media.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {media.description}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button color="primary" variant="contained" style={{marginRight:10}}  component={Link} to={`/editMedia/${media._id}`}>Edit pack</Button> 
  
      </CardActions>
                      </Card>
                      
                    )
                   })
                
                   }</>)} </>):(<></>)}
            
            </>)})}
            
            
            </>
            
            
            
            )}
        
  </>  )
   })

   }</>)} </Box>
           <br/>
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

export default EditPack;