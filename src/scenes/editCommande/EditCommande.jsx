import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from 'react';
import { addUser, editUser, getCommandeid, getUser } from "state/api";
import { useNavigate, useParams } from 'react-router-dom';
import Header from "components/Header";
import { Typography,  useTheme } from "@mui/material";
import { tokens } from "theme";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const EditCommande = () => { 
    const [commande, setCommande] = useState(initialValues);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { _id, user_id, user_email , Total , product , createdAt} = commande;

const navigate = useNavigate(); 
const { id } = useParams();



useEffect(() => {
    const loadUserDetails = async() => {
        const response = await getCommandeid(id);
        setCommande(response.data);
     
    }
    loadUserDetails();
  }, []);
  


  return (
    <Box m="20px">
      <Header title="Détail commande" subtitle="Détail commande" />
      <Box mb="30px">
      <Typography
        variant="h3"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
       Bon de commande n°  {_id}
      </Typography>
      <Typography variant="h5"     sx={{ m: "20px 0 5px 0" }} color={colors.grey[100]}>
      Date de livraison : {createdAt}
      </Typography>
      <Typography variant="h5"     sx={{ m: "10px 0 5px 0" }} color={colors.grey[100]}>
    Client : {user_id}
      </Typography>
      <Typography variant="h5"     sx={{ m: "10px 0 5px 0" }} color={colors.grey[100]}>
     Email du client : {user_email}
      </Typography>
      <Typography variant="h5"     sx={{ m: "10px 0 5px 0" }} color={colors.grey[100]}>
   Total  : {Total}
      </Typography>
    </Box>
    {console.log(product)}{product == undefined ? ( <></>) : ( <TableContainer component={Paper} sx={{ width: 800 }}>
      <Table sx={{ width: 800 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Prix</TableCell>
            <TableCell align="right">Période</TableCell>
            <TableCell align="right">Type Produit</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {product.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}  {row.name}
              </TableCell>
     
              <TableCell align="right">{row.prix} {row.prixF} </TableCell>
              <TableCell align="right">{row.period}</TableCell>
              <TableCell align="right">{row.typeP}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>)}
   
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

export default EditCommande;