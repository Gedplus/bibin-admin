import { Box, Button, Card, CardMedia, MenuItem, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import * as yup from "yup";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { addDocument, addUser, getUser, useGetUtilisateursQuery } from "state/api";
import { useNavigate, useParams } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from "@mui/material/Select";
import Dropdown from '@trendmicro/react-dropdown';
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import {  useGetCustomersQuery } from "state/api";
// Be sure to include styles at some point, probably during your bootstraping
import { Cascader } from 'antd';

import Slider from '@mui/material/Slider';
import { useEffect } from "react";
const AddDocUser = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
const navigate = useNavigate();
const [user, setUser] = useState(initialValues);
const [Titre, setTitre] = useState("");
const [description, setDescription] = useState("");
const [prixT, setPrixT] = useState(0);
const [file, setFile] = useState("");
const { id } = useParams();
useEffect(() => {
    const loadUserDetails = async() => {
        const response = await getUser(id);
        setUser(response.data);


    }
    loadUserDetails();
  }, []);
function valueLabelFormat(value) {


var ss=  value.toString()
const str2 = '00';
const str = '0';

if (ss.length == 3)
{ss= ss.concat('', str2)}
if (ss.length == 4)
{ss= ss.concat('', str)}
 return  ss;
 setPrixT(ss)
}
const [image1 , setImage1] = useState("https://res.cloudinary.com/djkoevvlt/image/upload/v1703074820/jaedv92epr9q7mawdjwj.jpg")
function convertToBase646(e){
  console.log(e);
  var reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload = () => {

    setImage1(reader.result)

  };
  reader.onerror = error => {
    console.log("error: ", error);
  }}

function valueLabelFormatD(value) {

  return value;
  }








const [value, setValue] = useState(0);

const [period, setPeriod] = useState(6);
const [selected, setSelected] = useState("");
const handleChange4 = (event, newValue) => {
  if (typeof newValue === 'number') {
    setValue(newValue);
  }
};
const handleChange7 = (event, newValue) => {
  if (typeof newValue === 'number') {
    setPeriod(newValue);
  }
};
  
const [profession, setProfession] = useState();
const [type, setType] = useState();
const [image , setImage] = useState("")
const [universite , setUniversite] = useState("")
const [prive, setprive] = useState("");



const [ Annee, setAnnee] = useState(null)
var prixt = 0

const submitImage = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("title", Titre);
  formData.append("file", file);
  formData.append("type", type);
  formData.append("prixLecture",  (value).toFixed(3));
  formData.append("prixTelechargement", prixt);
  formData.append("Annee", Annee);
  formData.append("auteur", id);
  formData.append("description", description);
  formData.append("image", image1);
  formData.append("universite", universite);
  formData.append("accepte", true);
  formData.append("period", period);

  const result = await axios.post(
    "https://api.bibintunisie.com/upload-files",
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  console.log(result);
  if (result.data.status == "ok") {
    alert("Uploaded Successfully!!!");

  }
};

  const handleChange2 = (event) => {
    setType(event.target.value);
  };

  const options = [

    {
      value: 'Université de Tunis',
      label: 'Université de Tunis',
      children: [
        {
          value: "Institut préparatoire aux études d’ingénieurs de Tunis ",
          label: "Institut préparatoire aux études d’ingénieurs de Tunis ",
         
        },
        {
          value: "Ecole Nationale Supérieure d'Ingénieurs de Tunis",
          label: "Ecole Nationale Supérieure d'Ingénieurs de Tunis",
         
        },
        {
          value: "Ecole Normale Supérieure",
          label: "Ecole Normale Supérieure",
         
        },
        {
          value: "Ecole Supérieure des Sciences Economiques et Commerciales de Tunis",
          label: "Ecole Supérieure des Sciences Economiques et Commerciales de Tunis",
         
        },
        {
          value: "Faculté des Sciences Humaines et Sociales de Tunis",
          label: "Faculté des Sciences Humaines et Sociales de Tunis",
         
        },
        {
          value: "Institut Préparatoire aux Etudes Littéraires et de Sciences Humaines de Tunis",
          label: "Institut Préparatoire aux Etudes Littéraires et de Sciences Humaines de Tunis",
         
        },
        {
          value: "Institut Préparatoire aux Etudes d'Ingénieurs de Tunis",
          label: "Institut Préparatoire aux Etudes d'Ingénieurs de Tunis",
         
        },
        {
          value: "Institut Supérieur d'Art Dramatiques",
          label: "Institut Supérieur d'Art Dramatique",
         
        },
        {
          value: "Institut Supérieur de Gestion de Tunis",
          label: "Institut Supérieur de Gestion de Tunis",
         
        },
        {
          value: "Institut Supérieur de Musique",
          label: "Institut Supérieur de Musique",
         
        },
        {
          value: "Institut Supérieur de l'Animation pour la Jeunesse et la Culture",
          label: "Institut Supérieur de l'Animation pour la Jeunesse et la Culture",
         
        },
        {
          value: "Institut Supérieur des Beaux Arts de Tunis",
          label: "Institut Supérieur des Beaux Arts de Tunis",
         
        },
        {
          value: "Institut Supérieur des Etudes Appliquées en Humanité de Tunis",
          label: "Institut Supérieur des Etudes Appliquées en Humanité de Tunis",
         
        },
        {
          value: "Institut Supérieur des Métiers du Patrimoine de Tunis",
          label: "Institut Supérieur des Métiers du Patrimoine de Tunis",
         
        },
        {
          value: "Institut Supérieur des affaires de Tunis",
          label: "Institut Supérieur des affaires de Tunis",
         
        },
        {
          value: "Institut Supérieur des Études Appliquées en Humanités de Zaghouan",
          label: "Institut Supérieur des Études Appliquées en Humanités de Zaghouan",
         
        },
        


      ],
    },
    {
      value: 'Université de Tunis EL Manar',
      label: 'Université de Tunis EL Manar',
      children: [
        {
          value: "Institut Bourguiba des langues vivantes ",
          label: "Institut Bourguiba des langues vivantes ",
        
        },
        {
          value: "Ecole Nationale d'Ingénieurs de Tunis",
          label: "Ecole Nationale d'Ingénieurs de Tunis",
        
        },
        {
          value: "Faculté de Droit et des Sciences Politiques de Tunis",
          label: "Faculté de Droit et des Sciences Politiques de Tunis",
        
        },
        {
          value: "Faculté de Médecine de Tunis",
          label: "Faculté de Médecine de Tunis",
        
        },
        {
          value: "Faculté des Sciences Economiques et de Gestion de Tunis",
          label: "Faculté des Sciences Economiques et de Gestion de Tunis",
        
        },
        {
          value: "Faculté des Sciences de Tunis",
          label: "Faculté des Sciences de Tunis",
        
        },
        {
          value: "Institut Bourguiba des Langues Vivantes",
          label: "Institut Bourguiba des Langues Vivantes",
        
        },
        {
          value: "Institut Préparatoire aux Etudes d'Ingénieurs d El Manar",
          label: "Institut Préparatoire aux Etudes d'Ingénieurs d El Manar",
        
        },
        {
          value: "Institut Supérieur d'Informatique d'El Manar",
          label: "Institut Supérieur d'Informatique d'El Manar",
        
        },
        
        {
          value: "Institut Supérieur des Sciences Biologiques Appliquées",
          label: "Institut Supérieur des Sciences Biologiques Appliquées",
        
        },
        
        {
          value: "Institut Supérieur des Sciences Humaines de Tunis",
          label: "Institut Supérieur des Sciences Humaines de Tunis",
        
        },
        
        {
          value: "Institut Supérieur des Technologies Médicales",
          label: "Institut Supérieur des Technologies Médicales",
        
        },
        
        

      ],
    },
    { value: 'Université de Carthage',
    label: 'Université de Carthage',
    children: [ 
      {
        value: "Ecole National d'Ingénieur de Carthage",
        label: "Ecole National d'Ingénieur de Carthage",
      
      },
      {
        value: "Ecole Nationale d'Architecture et d'Urbanisme de Tunis",
        label: "Ecole Nationale d'Architecture et d'Urbanisme de Tunis",
      
      },
      {
        value: "Ecole Nationale d'Ingénieurs de Bizerte",
        label: "Ecole Nationale d'Ingénieurs de Bizerte",
      
      },
      {
        value: "Ecole Polytechnique de Tunisie",
        label: "Ecole Polytechnique de Tunisie",
      
      },
      {
        value: "Ecole Supérieure de l'Audiovisuel et du Cinéma de Gammarth",
        label: "Ecole Supérieure de l'Audiovisuel et du Cinéma de Gammarth",
      
      },
      {
        value: "Ecole Supérieure des Statistiques et d'Analyse de l'Information",
        label: "Ecole Supérieure des Statistiques et d'Analyse de l'Information",
      
      },
      {
        value: "Faculté des Sciences Economiques et de Gestion de Nabeul",
        label: "Faculté des Sciences Economiques et de Gestion de Nabeul",
      
      },
      {
        value: "Faculté des Sciences Juridiques, Politiques et Sociales de Tunis",
        label: "Faculté des Sciences Juridiques, Politiques et Sociales de Tunis",
      
      },
      {
        value: "Faculté des Sciences de Bizerte",
        label: "Faculté des Sciences de Bizerte",
      
      },
      {
        value: "Institut National des Sciences Appliquées et de Technologie",
        label: "Institut National des Sciences Appliquées et de Technologie",
      
      },
      {
        value: "Institut National du Travail et des Etudes Sociales de Tunis",
        label: "Institut National du Travail et des Etudes Sociales de Tunis",
      
      },
      {
        value: "Institut Préparatoire aux Etudes Scientifiques et Techniques de la Marsa",
        label: "Institut Préparatoire aux Etudes Scientifiques et Techniques de la Marsa",
      
      },
      {
        value: "Institut Préparatoire aux Etudes d'Ingénieur Nabeul",
        label: "Institut Préparatoire aux Etudes d'Ingénieur Nabeul",
      
      },
      {
        value: "Institut Préparatoire aux Etudes d'Ingénieur de Bizerte",
        label: "Institut Préparatoire aux Etudes d'Ingénieur de Bizerte",
      
      },
      {
        value: "Institut Superieur des Technologies de l’Environnement de l’Urbanisme et de Bâtiment",
        label: "Institut Superieur des Technologies de l’Environnement de l’Urbanisme et de Bâtiment",
      
      },
      {
        value: "Institut Supérieur de Gestion de Bizerte",
        label: "Institut Supérieur de Gestion de Bizerte",
      
      },
      {
        value: "Institut Supérieur des Beaux Arts de Nabeul",
        label: "Institut Supérieur des Beaux Arts de Nabeul",
      
      },
      {
        value: "Institut Supérieur des Cadres de l'Enfance",
        label: "Institut Supérieur des Cadres de l'Enfance",
      
      },
      {
        value: "Institut Supérieur des Etudes Touristique de Sidi Dhrif",
        label: "Institut Supérieur des Etudes Touristique de Sidi Dhrif",
      
      },
      {
        value: "Institut Supérieur des Langues de Nabeul",
        label: "Institut Supérieur des Langues de Nabeul",
      
      },
      {
        value: "Institut Supérieur des Langues de Tunis",
        label: "Institut Supérieur des Langues de Tunis",
      
      },
      {
        value: "Institut Supérieur des Sciences Appliquées et de la Technologie de Mateur",
        label: "Institut Supérieur des Sciences Appliquées et de la Technologie de Mateur",
      
      },
      {
        value: "Institut Supérieur des Sciences et Technologies de l Environnement de Borj C",
        label: "Institut Supérieur des Sciences et Technologies de l Environnement de Borj C",
      
      },
      {
        value: "Institut Supérieur des Tech. Information et de Comm. BC",
        label: "Institut Supérieur des Tech. Information et de Comm. BC",
      
      },
      {
        value: "Institut des Hautes Etudes Commerciales de Carthage",
        label: "Institut des Hautes Etudes Commerciales de Carthage",
      
      },
      {
        value: "Sup'Com",
        label: "Sup'Com",
      
      },
      {
        value: "Université de Carthage",
        label: "Université de Carthage",
      
      },
    ],

    },
    { value: 'Université de la Manouba',
    label: 'Université de la Manouba',
    children: [
      {
        value: "Institut supérieur de documentation de Tunis ",
        label: "Institut supérieur de documentation de Tunis ",
      
      },
      {
        value: "Ecole Nationale des Sciences de l'Informatique",
        label: "Ecole Nationale des Sciences de l'Informatique",
      
      },
      {
        value: "Ecole Supérieure de Commerce de Tunis",
        label: "Ecole Supérieure de Commerce de Tunis",
      
      },
      {
        value: "Ecole Supérieure de l'Economie Numérique de la Manouba",
        label: "Ecole Supérieure de l'Economie Numérique de la Manouba",
      
      },
      {
        value: "Ecole Supérieure des Sciences et Technologies du Design",
        label: "Ecole Supérieure des Sciences et Technologies du Design",
      
      },
      {
        value: "Faculté des Lettres, des Arts et des Humanités la Manouba",
        label: "Faculté des Lettres, des Arts et des Humanités la Manouba",
      
      },
      {
        value: "Institut Supérieur de Biotechnologie de Sidi Thabet",
        label: "Institut Supérieur de Biotechnologie de Sidi Thabet",
      
      },
      {
        value: "Institut Supérieur de Comptabilité et d Administration des Entreprises",
        label: "Institut Supérieur de Comptabilité et d Administration des Entreprises",
      
      },
      {
        value: "Institut Supérieur de l Education spécialisée de Ksar Saïd",
        label: "Institut Supérieur de l Education spécialisée de Ksar Saïd",
      
      },
      {
        value: "Institut Supérieur de l'Histoire de la Tunisie Contemporaine",
        label: "Institut Supérieur de l'Histoire de la Tunisie Contemporaine",
      
      },
      {
        value: "Institut Supérieur des Arts du Multimédia de la Manouba",
        label: "Institut Supérieur des Arts du Multimédia de la Manouba",
      
      },
      {
        value: "Institut Supérieur du Sport et de l'Education Physique de Ksar Saïd",
        label: "Institut Supérieur du Sport et de l'Education Physique de Ksar Saïd",
      
      },
      {
        value: "Institut de Presse et des Sciences de l'Information",
        label: "Institut de Presse et des Sciences de l'Information",
      
      },
    ],},
    { value: 'Université Ezzitouna',
    label: 'Université Ezzitouna',
    children: [
      {
        value: "Centre des Etudes Islamiques de Kairouan",
        label: "Centre des Etudes Islamiques de Kairouan",
      
      },
      {
        value: "Institut Supérieur de Civilisation Islamique de Tunis",
        label: "Institut Supérieur de Civilisation Islamique de Tunis",
      
      },
      {
        value: "Université Ez-Zitouna",
        label: "Université Ez-Zitouna",
      
      },
      
    ],},
    { value: 'Université de Jendouba',
    label: 'Université de Jendouba',
    children: [
      {
        value: "Faculté des Sciences Juridiques, Economiques et de Gestion de Jendouba",
        label: "Faculté des Sciences Juridiques, Economiques et de Gestion de Jendouba",
      
      },
      {
        value: "Institut Supérieur des Etudes Appliquées en Humanités du Kef",
        label: "Institut Supérieur des Etudes Appliquées en Humanités du Kef",
      
      },
      {
        value: "Institut Supérieur des Langues Appliquées et Informatique de Béja",
        label: "Institut Supérieur des Langues Appliquées et Informatique de Béja",
      
      },
      {
        value: "Institut Supérieur des Sciences Humaines de Jendouba",
        label: "Institut Supérieur des Sciences Humaines de Jendouba",
      
      },
      {
        value: "Institut supérieur de biotechnologie de Béja",
        label: "Institut supérieur de biotechnologie de Béja",
      
      },
      {
        value: "Institut supérieur de l'informatique du Kef",
        label: "Institut supérieur de l'informatique du Kef",
      
      },
      {
        value: "Institut supérieur de musique et de théâtre du Kef",
        label: "Institut supérieur de musique et de théâtre du Kef",
      
      },
      {
        value: "Institut supérieur des arts et métiers de Siliana",
        label: "Institut supérieur des arts et métiers de Siliana",
      
      },
    ],},
    { value: 'Université de Sousse',
    label: 'Université de Sousse',
    children: [
      {
        value: "Ecole Nationale d'Ingénieurs de Sousse",
        label: "Ecole Nationale d'Ingénieurs de Sousse",
      
      },
      {
        value: "Ecole Supérieure des Sciences et des technologies de Hammam Sousse",
        label: "Ecole Supérieure des Sciences et des technologies de Hammam Sousse",
      
      },
      {
        value: "Faculté de Droit et des Sciences Politiques de Sousse",
        label: "Faculté de Droit et des Sciences Politiques de Sousse",
      
      },
      {
        value: "Faculté de Médecine de Sousse",
        label: "Faculté de Médecine de Sousse",
      
      },
      {
        value: "Faculté des Lettres et des Sciences Humaines de Sousse",
        label: "Faculté des Lettres et des Sciences Humaines de Sousse",
      
      },
      {
        value: "Faculté des Sciences Economiques et de Gestion de Sousse",
        label: "Faculté des Sciences Economiques et de Gestion de Sousse",
      
      },
      {
        value: "Institut Supérieur d Informatique et des Technologies de Communication de HS",
        label: "Institut Supérieur d Informatique et des Technologies de Communication de HS",
      
      },  {
        value: "Institut Supérieur de Finances et de Fiscalité de Sousse",
        label: "Institut Supérieur de Finances et de Fiscalité de Sousse",
      
      },
      {
        value: "Institut Supérieur de Gestion de Sousse",
        label: "Institut Supérieur de Gestion de Sousse",
      
      },
      {
        value: "Institut Supérieur de Musique de Sousse",
        label: "Institut Supérieur de Musique de Sousse",
      
      },
      {
        value: "Institut Supérieur des Beaux Arts de Sousse",
        label: "Institut Supérieur des Beaux Arts de Sousse",
      
      },
      {
        value: "Institut Supérieur des Sciences Appliquées et de Technologie de Sousse",
        label: "Institut Supérieur des Sciences Appliquées et de Technologie de Sousse",
      
      },
      {
        value: "Institut Supérieur des Sciences infirmières de Sousse",
        label: "Institut Supérieur des Sciences infirmières de Sousse",
      
      },
      {
        value: "Institut Supérieur du Transport et de la Logistique de Sousse",
        label: "Institut Supérieur du Transport et de la Logistique de Sousse",
      
      },
      {
        value: "Institut des Hautes Etudes Commerciales de Sousse",
        label: "Institut des Hautes Etudes Commerciales de Sousse",
      
      },
    ],},
    { value: 'Université de Monastir',
    label: 'Université de Monastir',
    children: [
      {
        value: "Ecole Nationale d'Ingénieurs de Monastir",
        label: "Ecole Nationale d'Ingénieurs de Monastir",
      
      },
      {
        value: "Faculté de Médecine Dentaire de Monastir",
        label: "Faculté de Médecine Dentaire de Monastir",
      
      },
      {
        value: "Faculté de Médecine de Monastir",
        label: "Faculté de Médecine de Monastir",
      
      },
      {
        value: "Faculté de Pharmacie de Monastir",
        label: "Faculté de Pharmacie de Monastir",
      
      },
      {
        value: "Faculté des Sciences Economiques et de Gestion de Mahdia",
        label: "Faculté des Sciences Economiques et de Gestion de Mahdia",
      
      },
      {
        value: "Faculté des Sciences de Monastir",
        label: "Faculté des Sciences de Monastir",
      
      },
      {
        value: "Institut Préparatoire aux Etudes d'Ingénieurs de Monastir",
        label: "Institut Préparatoire aux Etudes d'Ingénieurs de Monastir",
      
      },
      {
        value: "Institut Supérieur d'Informatique de Mahdia",
        label: "Institut Supérieur d'Informatique de Mahdia",
      
      },
      {
        value: "Institut Supérieur d'Informatique et de Mathématiques de Monastir",
        label: "Institut Supérieur d'Informatique et de Mathématiques de Monastir",
      
      },
      {
        value: "Institut Supérieur de Biotechnologie de Monastir",
        label: "Institut Supérieur de Biotechnologie de Monastir",
      
      },
      {
        value: "Institut Supérieur des Etudes Appliquées en Humanités de Mahdia",
        label: "Institut Supérieur des Etudes Appliquées en Humanités de Mahdia",
      
      },
      {
        value: "Institut Supérieur des Langues Appliquées de Moknine",
        label: "Institut Supérieur des Langues Appliquées de Moknine",
      
      },
      {
        value: "Institut Supérieur des Métiers de la Mode de Monastir",
        label: "Institut Supérieur des Métiers de la Mode de Monastir",
      
      },
      {
        value: "Institut supérieur des Arts et Métiers de Mahdia",
        label: "Institut supérieur des Arts et Métiers de Mahdia",
      
      },
      {
        value: "Institut supérieur des sciences appliquées et de technologie de Mahdia",
        label: "Institut supérieur des sciences appliquées et de technologie de Mahdia",
      
      },
    ],},
    { value: 'Université de Kairouan',
    label: 'Université de Kairouan',
    children: [
      {
        value: "Faculté des Lettres et des Sciences Humaines de Kairouan",
        label: "Faculté des Lettres et des Sciences Humaines de Kairouan",
      
      },
      {
        value: "Institut Supérieur d Informatique et de Gestion de Kairouan",
        label: "Institut Supérieur d Informatique et de Gestion de Kairouan",
      
      },
      {
        value: "Institut Supérieur des Arts et Métiers de Kairouan",
        label: "Institut Supérieur des Arts et Métiers de Kairouan",
      
      },
      {
        value: "Institut Supérieur des Arts et Métiers de Kasserine",
        label: "Institut Supérieur des Arts et Métiers de Kasserine",
      
      },
      {
        value: "Institut Supérieur des Arts et Métiers de Sidi Bouzid",
        label: "Institut Supérieur des Arts et Métiers de Sidi Bouzid",
      
      },
      {
        value: "Institut Supérieur des Etudes Appliquées en Sciences Humaines de Sbeïtla",
        label: "Institut Supérieur des Etudes Appliquées en Sciences Humaines de Sbeïtla",
      
      },
      {
        value: "Institut Supérieur des Etudes Juridiques et Politiques de Kairouan",
        label: "Institut Supérieur des Etudes Juridiques et Politiques de Kairouan",
      
      },
      {
        value: "Institut Supérieur des Mathématiques Appliquées et de l Informatique de Kair",
        label: "Institut Supérieur des Mathématiques Appliquées et de l Informatique de Kair",
      
      },
      {
        value: "Institut Supérieur des Sciences Appliquées et de Technologie de Kairouan",
        label: "Institut Supérieur des Sciences Appliquées et de Technologie de Kairouan",
      
      },
    ],},
       { value: 'Université de Sfax',
    label: 'Université de Sfax',
    children: [
      {
        value: "Ecole Nationale d'Ingénieurs de Sfax",
        label: "Ecole Nationale d'Ingénieurs de Sfax",
      
      },
      {
        value: "Ecole Nationale d’Electronique et des Télécommunications de Sfax",
        label: "Ecole Nationale d’Electronique et des Télécommunications de Sfax",
      
      },
      {
        value: "Ecole Supérieure de Commerce de Sfax",
        label: "Ecole Supérieure de Commerce de Sfax",
      
      },
      {
        value: "Ecole Supérieure des Sciences et Techniques de la Santé de Sfax",
        label: "Ecole Supérieure des Sciences et Techniques de la Santé de Sfax",
      
      },
      {
        value: "Faculté de Droit de Sfax",
        label: "Faculté de Droit de Sfax",
      
      },
      {
        value: "Faculté de Médecine de Sfax",
        label: "Faculté de Médecine de Sfax",
      
      },
      {
        value: "Faculté des Lettres et Sciences Humaines de Sfax",
        label: "Faculté des Lettres et Sciences Humaines de Sfax",
      
      },
      {
        value: "Faculté des Sciences Economiques et de Gestion de Sfax",
        label: "Faculté des Sciences Economiques et de Gestion de Sfax",
      
      },
      {
        value: "Faculté des Sciences de Sfax",
        label: "Faculté des Sciences de Sfax",
      
      },
      {
        value: "Institut Préparatoire aux Etudes d'Ingénieurs de Sfax",
        label: "Institut Préparatoire aux Etudes d'Ingénieurs de Sfax",
      
      },
      {
        value: "Institut Supérieur d'Administration des Affaires de Sfax",
        label: "Institut Supérieur d'Administration des Affaires de Sfax",
      
      },
      {
        value: "Institut Supérieur d'Informatique et de Multimédia de Sfax",
        label: "Institut Supérieur d'Informatique et de Multimédia de Sfax",
      
      },
      {
        value: "Institut Supérieur de Biotechnologies de Sfax",
        label: "Institut Supérieur de Biotechnologies de Sfax",
      
      },
      {
        value: "Institut Supérieur de Gestion Industrielle de Sfax",
        label: "Institut Supérieur de Gestion Industrielle de Sfax",
      
      },
      {
        value: "Institut Supérieur de Musique de Sfax",
        label: "Institut Supérieur de Musique de Sfax",
      
      },
      {
        value: "Institut Supérieur des Arts et Métiers de Sfax",
        label: "Institut Supérieur des Arts et Métiers de Sfax",
      
      },
      {
        value: "Institut Supérieur du Sport et de l'Education Physique de Sfax",
        label: "Institut Supérieur du Sport et de l'Education Physique de Sfax",
      
      },
      {
        value: "Institut des Hautes Etudes Commerciales de Sfax",
        label: "Institut des Hautes Etudes Commerciales de Sfax",
      
      },
    ],},
    { value: 'Université de Gabes',
    label: 'Université de Gabes',
    children: [
      {
        value: "Ecole Nationale d'Ingénieurs de Gabès",
        label: "Ecole Nationale d'Ingénieurs de Gabès",
      
      },
      {
        value: "Faculté des Sciences de Gabès",
        label: "Faculté des Sciences de Gabès",
      
      },
      {
        value: "Institut Supérieur d'Informatique de Medenine",
        label: "Institut Supérieur d'Informatique de Medenine",
      
      },
      {
        value: "Institut Supérieur d'Informatique et de Multimédia de Gabès",
        label: "Institut Supérieur d'Informatique et de Multimédia de Gabès",
      
      },
      {
        value: "Institut Supérieur de Biologie Appliquée de Medenine",
        label: "Institut Supérieur de Biologie Appliquée de Medenine",
      
      },
      {
        value: "Institut Supérieur de Gestion de Gabès",
        label: "Institut Supérieur de Gestion de Gabès",
      
      },
      {
        value: "Institut Supérieur des Arts et Métiers de Gabès",
        label: "Institut Supérieur des Arts et Métiers de Gabès",
      
      },
      {
        value: "Institut Supérieur des Arts et Métiers de Tataouine",
        label: "Institut Supérieur des Arts et Métiers de Tataouine",
      
      },
      {
        value: "Institut Supérieur des Etudes Juridiques de Gabès",
        label: "Institut Supérieur des Etudes Juridiques de Gabès",
      
      },
      {
        value: "Institut Supérieur des Langues de Gabès",
        label: "Institut Supérieur des Langues de Gabès",
      
      },
      {
        value: "Institut Supérieur des Sciences Appliquées et de Technologie de Gabès",
        label: "Institut Supérieur des Sciences Appliquées et de Technologie de Gabès",
      
      },
      {
        value: "Institut Supérieur des Sciences Humaines de Médenine",
        label: "Institut Supérieur des Sciences Humaines de Médenine",
      
      },
      {
        value: "Institut Supérieur des Sciences et Techniques des Eaux de Gabès",
        label: "Institut Supérieur des Sciences et Techniques des Eaux de Gabès",
      
      },
      {
        value: "Institut supérieur des systèmes industriels de Gabès",
        label: "Institut supérieur des systèmes industriels de Gabès",
      
      },
      {
        value: "Université de Gabès",
        label: "Université de Gabès",
      
      },
    ],},
    { value: 'Université de Gafsa',
    label: 'Université de Gafsa',
    children: [
      {
        value: "Faculté des Sciences de Gafsa",
        label: "Faculté des Sciences de Gafsa",
      
      },
      {
        value: "Institut Préparatoire aux Etudes d'Ingénieur de Gafsa",
        label: "Institut Préparatoire aux Etudes d'Ingénieur de Gafsa",
      
      },
      {
        value: "Institut Supérieur d Arts et métiers de Gafsa",
        label: "Institut Supérieur d Arts et métiers de Gafsa",
      
      },
      {
        value: "Institut Supérieur d'Administration des Entreprises de Gafsa",
        label: "Institut Supérieur d'Administration des Entreprises de Gafsa",
      
      },
      {
        value: "Institut Supérieur des Etudes Appliquées en Humanités de Gafsa",
        label: "Institut Supérieur des Etudes Appliquées en Humanités de Gafsa",
      
      },
      {
        value: "Institut Supérieur des Etudes Appliquées en Humanités de Tozeur",
        label: "Institut Supérieur des Etudes Appliquées en Humanités de Tozeur",
      
      },
      {
        value: "Institut Supérieur des Sciences Appliquées et de Technologie de Gafsa",
        label: "Institut Supérieur des Sciences Appliquées et de Technologie de Gafsa",
      
      },
      {
        value: "Institut Supérieur du Sport et de l Education Physique de Gafsa",
        label: "Institut Supérieur du Sport et de l Education Physique de Gafsa",
      
      },
      {
        value: "Institut supérieur des sciences sociales et de l'éducation de Gafsa",
        label: "Institut supérieur des sciences sociales et de l'éducation de Gafsa",
      
      },
      {
        value: "Université de Gafsa",
        label: "Université de Gafsa",
      
      },
    ],},
    { value: 'Université Virtuelle',
    label: 'Université Virtuelle',
    children: [
      {
        value: "Institut Supérieur de l'Education et de la Formation Continue",
        label: "Institut Supérieur de l'Education et de la Formation Continue",
      
      },
 
      
    ],},
    { value: 'Instituts Supérieurs des Etudes Technologiques',
    label: 'Instituts Supérieurs des Etudes Technologiques',
    children: [
      {
        value: "Institut Supérieur des Etudes Technologiques de Bizerte",
        label: "Institut Supérieur des Etudes Technologiques de Bizerte",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Béja",
        label: "Institut Supérieur des Etudes Technologiques de Béja",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Charguia",
        label: "Institut Supérieur des Etudes Technologiques de Charguia",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Gabès",
        label: "Institut Supérieur des Etudes Technologiques de Gabès",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Gafsa",
        label: "Institut Supérieur des Etudes Technologiques de Gafsa",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Jendouba",
        label: "Institut Supérieur des Etudes Technologiques de Jendouba",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Jerba",
        label: "Institut Supérieur des Etudes Technologiques de Jerba",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Kairouan",
        label: "Institut Supérieur des Etudes Technologiques de Kairouan",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Kasserine",
        label: "Institut Supérieur des Etudes Technologiques de Kasserine",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Kebili",
        label: "Institut Supérieur des Etudes Technologiques de Kebili",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Ksar Hellal",
        label: "Institut Supérieur des Etudes Technologiques de Ksar Hellal",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Kélibia",
        label: "Institut Supérieur des Etudes Technologiques de Kélibia",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Mahdia",
        label: "Institut Supérieur des Etudes Technologiques de Mahdia",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Médenine",
        label: "Institut Supérieur des Etudes Technologiques de Médenine",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Nabeul",
        label: "Institut Supérieur des Etudes Technologiques de Nabeul",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Radès",
        label: "Institut Supérieur des Etudes Technologiques de Radès",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Sfax",
        label: "Institut Supérieur des Etudes Technologiques de Sfax",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Sidi Bouzid",
        label: "Institut Supérieur des Etudes Technologiques de Sidi Bouzid",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Siliana",
        label: "Institut Supérieur des Etudes Technologiques de Siliana",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Sousse",
        label: "Institut Supérieur des Etudes Technologiques de Sousse",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Tataouine",
        label: "Institut Supérieur des Etudes Technologiques de Tataouine",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Tozeur",
        label: "Institut Supérieur des Etudes Technologiques de Tozeur",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques de Zaghouan",
        label: "Institut Supérieur des Etudes Technologiques de Zaghouan",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques du Kef",
        label: "Institut Supérieur des Etudes Technologiques du Kef",
      
      },
      {
        value: "Institut Supérieur des Etudes Technologiques en Communications (El Ghazala)",
        label: "Institut Supérieur des Etudes Technologiques en Communications (El Ghazala)",
      
      },
    ],},
    { value: 'Centres de recherche et de services',
    label: 'Centres de recherche et de services',
    children: [
      {
        value: "CRE-Dialogue des Civilisations et Religions Comparées Sousse",
        label: "CRE-Dialogue des Civilisations et Religions Comparées Sousse",
      
      },
      {
        value: "Centre National Universitaire de Documentation Scientifique et Technique",
        label: "Centre National Universitaire de Documentation Scientifique et Technique",
      
      },
      {
        value: "Centre National des Recherches en Sciences des Matériaux de Borj Cedria",
        label: "Centre National des Recherches en Sciences des Matériaux de Borj Cedria",
      
      },
      {
        value: "Centre d'Etudes et de Recherches Economiques et Sociales",
        label: "Centre d'Etudes et de Recherches Economiques et Sociales",
      
      },
      {
        value: "Centre de Recherches et des Technologies de l'Energie de Borj Cedria",
        label: "Centre de Recherches et des Technologies de l'Energie de Borj Cedria",
      
      },
      {
        value: "Centre de Recherches et des Technologies des Eaux",
        label: "Centre de Recherches et des Technologies des Eaux",
      
      },
      {
        value: "Institut National de Recherche et d'Analyse Physico-chimique",
        label: "Institut National de Recherche et d'Analyse Physico-chimique",
      
      },
    ],},
    { value: 'Universités privées de Tunis',
    label: 'Universités privées de Tunis',
    children: [
      {
        value: 'Faculté Privée de Montplaisir / Tunis',
        label: 'Faculté Privée de Montplaisir / Tunis',
      
      },
      {
        value: 'Institut Privé des Hautes Etudes de Tunis',
        label: 'Institut Privé des Hautes Etudes de Tunis',
      
      },
      {
        value: 'Faculté Privée de Droit, d’Economie et de Gestion / Tunis',
        label: 'Faculté Privée de Droit, d’Economie et de Gestion / Tunis',
      
      },
      {
        value: 'Institut Supérieur Privé Polytechnique/ Tunis',
        label: 'Institut Supérieur Privé Polytechnique/ Tunis',
      
      },
      {
        value: 'Ecole Supérieure Privée de Carthage des Sciences et d’Ingénierie / Tunis',
        label: 'Ecole Supérieure Privée de Carthage des Sciences et d’Ingénierie / Tunis',
      
      },
      {
        value: 'Ecole Supérieure Privée de Carthage de Management',
        label: 'Ecole Supérieure Privée de Carthage de Management',
      
      },
      {
        value: 'Ecole Supérieure Privée d’Ingénieurs et d’Etudes Technologiques de Tunis',
        label: 'Ecole Supérieure Privée d’Ingénieurs et d’Etudes Technologiques de Tunis',
      
      },    {
        value: 'Faculté Privée des Sciences de Gestion et de Technologie à Mégrine',
        label: 'Faculté Privée des Sciences de Gestion et de Technologie à Mégrine',
      
      }, {
        value: 'Ecole Centrale Supérieure Privée des Sciences Paramédicales et de la Santé',
        label: 'Ecole Centrale Supérieure Privée des Sciences Paramédicales et de la Santé',
      
      },
      {
        value: 'Ecole Supérieure Privée de Technologie et de Management',
        label: 'Ecole Supérieure Privée de Technologie et de Management',
      
      },{
        value: "Ecole Supérieure Privée de Technologies de l'Information et d’Administration des Entreprises",
        label: "Ecole Supérieure Privée de Technologies de l'Information et d’Administration des Entreprises",
      
      },
      {
        value: "Ecole Supérieure Internationale Privée de Tunis",
        label: "Ecole Supérieure Internationale Privée de Tunis",
      
      },
      {
        value: "Ecole Méditerranéenne Supérieure Privée des Affaires",
        label: "Ecole Méditerranéenne Supérieure Privée des Affaires",
      
      },
      {
        value: "Ecole Supérieure Privée d'Ingénierie et de Technologie",
        label: "Ecole Supérieure Privée d'Ingénierie et de Technologie",
      
      },{
        value: "Ecole Supérieure Privée de l'Aéronautique et des Technologies",
        label: "Ecole Supérieure Privée de l'Aéronautique et des Technologies",
      
      },
      {
        value: "Ecole Supérieure Privée d'Architecture, d'Audiovisuel et du Design",
        label: "Ecole Supérieure Privée d'Architecture, d'Audiovisuel et du Design",
      
      },{
        value: "Faculté Privée Ibn Khaldoun de Droit, des Sciences Economiques et de Gestion",
        label: "Faculté Privée Ibn Khaldoun de Droit, des Sciences Economiques et de Gestion",
      
      },{
        value: "Ecole Supérieure Privée des Sciences Appliquées et de Management",
        label: "Ecole Supérieure Privée des Sciences Appliquées et de Management",
      
      },{
        value: "Institut Supérieur Privé des Sciences Paramédicales ' Mahmoud Materi'",
        label: "Institut Supérieur Privé des Sciences Paramédicales ' Mahmoud Materi'",
      
      },
      {
        value: "Institut Supérieur Privé Tunis Dauphine",
        label: "Institut Supérieur Privé Tunis Dauphine",
      
      }, {
        value: "Ecole Supérieure Privée d’Administration des Affaires et de Droit « Avicenne»",
        label: "Ecole Supérieure Privée d’Administration des Affaires et de Droit « Avicenne»",
      
      },{
        value: "Ecole Centrale Supérieure Privée des Lettres, des Arts et des Sciences de la Communication",
        label: "Ecole Centrale Supérieure Privée des Lettres, des Arts et des Sciences de la Communication",
      
      },
      {
        value: "Ecole Supérieure Privée Centrale Polytechnique",
        label: "Ecole Supérieure Privée Centrale Polytechnique",
      
      }, {
        value: "Ecole Centrale Supérieure Privée de Droit et de Gestion",
        label: "Ecole Centrale Supérieure Privée de Droit et de Gestion",
      
      },{
        value: "Faculté Privée des Sciences de la Santé de Tunis",
        label: "Faculté Privée des Sciences de la Santé de Tunis",
      
      },{
        value: "Faculté Privée des Sciences Juridiques, Sociales, Economiques et de Gestion de Tunis",
        label: "Faculté Privée des Sciences Juridiques, Sociales, Economiques et de Gestion de Tunis",
      
      },{
        value: "Faculté Méditerranéenne Privée des Sciences Informatiques, d’Economie et de Gestion de Tunis",
        label: "Faculté Méditerranéenne Privée des Sciences Informatiques, d’Economie et de Gestion de Tunis",
      
      },{
        value: "Ecole Supérieure Privée Polytechnique Ibn Khaldoun",
        label: "Ecole Supérieure Privée Polytechnique Ibn Khaldoun",
      
      },{
        value: "Ecole Supérieure Privée d’Informatique et d’Administration des Affaires/Tunis",
        label: "Ecole Supérieure Privée d’Informatique et d’Administration des Affaires/Tunis",
      
      },
      {
        value: "Ecole Méditerranéenne Supérieure Privée Polytechnique",
        label: "Ecole Méditerranéenne Supérieure Privée Polytechnique",
      
      },
      {
        value: "Ecole Internationale Supérieure Privée Polytechnique de Tunis",
        label: "Ecole Internationale Supérieure Privée Polytechnique de Tunis",
      
      }, {
        value: "Institut Supérieur Privé Méditerranéen de Technologie",
        label: "Institut Supérieur Privé Méditerranéen de Technologie",
      
      },{
        value: "École supérieure privée d'ingénierie d'informatique et d'administration des affaires",
        label: "École supérieure privée d'ingénierie d'informatique et d'administration des affaires",
      
      },{
        value: "Ecole Supérieure Privée de technologie et d’ingénierie",
        label: "Ecole Supérieure Privée de technologie et d’ingénierie",
      
      },{
        value: "Institut Supérieur privé d’administration des Entreprises / Tunis",
        label: "Institut Supérieur privé d’administration des Entreprises / Tunis",
      
      },{
        value: "Institut International Supérieur Privé des Etudes Numériques et Audiovisuelles / Tunis",
        label: "Institut International Supérieur Privé des Etudes Numériques et Audiovisuelles / Tunis",
      
      },
      {
        value: "Ecole Internationale Supérieure privée de Droit et des Affaires",
        label: "Ecole Internationale Supérieure privée de Droit et des Affaires",
      
      },
      {
        value: "Ecole Supérieure Privée des Affaires",
        label: "Ecole Supérieure Privée des Affaires",
      
      },  {
        value: "Faculté privée des sciences politiques et économiques",
        label: "Faculté privée des sciences politiques et économiques",
      
      },{
        value: "Ecole supérieure privée de management de Tunis",
        label: "Ecole supérieure privée de management de Tunis",
      
      },{
        value: "Ecole supérieure privée d'Assurance et de Finance",
        label: "Ecole supérieure privée d'Assurance et de Finance",
      
      },{
        value: "Ecole centrale supérieure privée de droit et des sciences politiques de Tunis",
        label: "Ecole centrale supérieure privée de droit et des sciences politiques de Tunis",
      
      },{
        value: "Ecole centrale supérieure privée d'informatique et de communication de Tunis",
        label: "Ecole centrale supérieure privée d'informatique et de communication de Tunis",
      
      },{
        value: "Ecole supérieure privée des sciences juridiques, économiques et politiques",
        label: "Ecole supérieure privée des sciences juridiques, économiques et politiques",
      
      },{
        value: "Faculté Privée de droit, des sciences politiques et de gestion 'Mahmoud El Matri'",
        label: "Faculté Privée de droit, des sciences politiques et de gestion 'Mahmoud El Matri'",
      
      },
      {
        value: "Ecole Supérieure Privée d'informatique et de Technologie",
        label: "Ecole Supérieure Privée d'informatique et de Technologie",
      
      },
      {
        value: "Ecole supérieure privée Magrébine des sciences et technologie",
        label: "Ecole supérieure privée Magrébine des sciences et technologie",
      
      },
      {
        value: "Institut Supérieur Privé des Technologies de la Digitalisation",
        label: "Institut Supérieur Privé des Technologies de la Digitalisation",
      
      },   {
        value: "Ecole internationale Supérieure Privée de Gestion Hôtelière",
        label: "Ecole internationale Supérieure Privée de Gestion Hôtelière",
      
      },
      {
        value: "Ecole Supérieure Privée d'Informatique et de Technologie de digitalisation",
        label: "Ecole Supérieure Privée d'Informatique et de Technologie de digitalisation",
      
      },
   
   
    
      
      
    ],},
    { value: 'Universités privées de Sousse',
    label: 'Universités privées de Sousse',
    children: [
      
      {
        value: "Institut Supérieur Privé des Sciences de la santé de Sousse",
        label: "Institut Supérieur Privé des Sciences de la santé de Sousse",
      
      },{
        value: "Institut Supérieur Privé des Sciences Infirmières 'EL AMED'",
        label: "Institut Supérieur Privé des Sciences Infirmières 'EL AMED'",
      
      },{
        value: "Ecole Supérieure Privée d’Ingénierie, des Sciences et de Technologie de Sousse",
        label: "Ecole Supérieure Privée d’Ingénierie, des Sciences et de Technologie de Sousse",
      
      },
      {
        value: "Institut Supérieur Privé des Sciences Infirmières 'Etoile de formation'",
        label: "Institut Supérieur Privé des Sciences Infirmières 'Etoile de formation'",
      
      },
      {
        value: "Institut Supérieur Privé des Sciences Infirmières de Sousse",
        label: "Institut Supérieur Privé des Sciences Infirmières de Sousse",
      
      },  {
        value: "Ecole Supérieure Polytechnique Privée de Sousse",
        label: "Ecole Supérieure Polytechnique Privée de Sousse",
      
      },
      {
        value: "Institut Privé des Hautes Etudes de Sousse",
        label: "Institut Privé des Hautes Etudes de Sousse",
      
      },
      {
        value: "Ecole Supérieure Privée de Technologie, d’Informatique et de Gestion de Sousse",
        label: "Ecole Supérieure Privée de Technologie, d’Informatique et de Gestion de Sousse",
      
      },
      {
        value: "Ecole Internationale Supérieure Privée Polytechnique de Sousse",
        label: "Ecole Internationale Supérieure Privée Polytechnique de Sousse",
      
      },
      {
        value: "Ecole Supérieure Privée d’Ingénierie et de Technologie appliquée/ Sousse",
        label: "Ecole Supérieure Privée d’Ingénierie et de Technologie appliquée/ Sousse",
      
      },
      {
        value: "Faculté Privée de Gestion et des Sciences de l’Administration de Sousse",
        label: "Faculté Privée de Gestion et des Sciences de l’Administration de Sousse",
      
      },
      {
        value: "Ecole Supérieure Internationale Privée de Management de Sousse",
        label: "Ecole Supérieure Internationale Privée de Management de Sousse",
      
      },  {
        value: "Ecole Supérieure Privée d’Economie et de Gestion de Sousse",
        label: "Ecole Supérieure Privée d’Economie et de Gestion de Sousse",
      
      },
      {
        value: "Ecole supérieure privée de technologie avancée de Sousse",
        label: "Ecole supérieure privée de technologie avancée de Sousse",
      
      },   {
        value: "Ecole supérieure privée des sciences commerciales et des affaires",
        label: "Ecole supérieure privée des sciences commerciales et des affaires",
      
      },  {
        value: "Ecole internationale supérieure privée de management et de marketing de Sousse",
        label: "Ecole internationale supérieure privée de management et de marketing de Sousse",
      
      }, {
        value: "Ecole supérieure privée des technologies numériques'l'Horizon'",
        label: "Ecole supérieure privée des technologies numériques'l'Horizon'",
      
      },
      {
        value: "Institut Supérieur privé des sciences et technologie en informatique appliquée de Sousse",
        label: "Institut Supérieur privé des sciences et technologie en informatique appliquée de Sousse",
      
      },
      
    ],},
    { value: 'Universités privées de Sfax',
    label: 'Universités privées de Sfax',
    children: [
      
      {
        value: "Institut Supérieur Polytechnique Privé des Sciences Avancées du Sud",
        label: "Institut Supérieur Polytechnique Privé des Sciences Avancées du Sud",
      
      },{
        value: "Ecole Supérieure Privée des Etudes Administratives et Commerciales de Sfax",
        label: "Ecole Supérieure Privée des Etudes Administratives et Commerciales de Sfax",
      
      },
      
      {
        value: "Faculté Privée des Sciences Paramédicales de Sfax",
        label: "Faculté Privée des Sciences Paramédicales de Sfax",
      
      }, {
        value: "Ecole Supérieure Internationale Privée de Technologie / Sfax",
        label: "Ecole Supérieure Internationale Privée de Technologie / Sfax",
      
      },
      {
        value: "Ecole Internationale Supérieure Privée des Affaires / Sfax",
        label: "Ecole Internationale Supérieure Privée des Affaires / Sfax",
      
      }, {
        value: "Ecole Polytechnique Internationale Supérieure Privée de Sfax",
        label: "Ecole Polytechnique Internationale Supérieure Privée de Sfax",
      
      },

      
    ],},
    { value: 'Universités privées de Nabeul et Monastir',
    label: 'Universités privées de Nabeul et Monastir',
    children: [
   
      {
        value: "Ecole Méditerranéenne Supérieure Privée des Sciences Informatiques, d’Economie et de Gestion de Nabeul",
        label: "Ecole Méditerranéenne Supérieure Privée des Sciences Informatiques, d’Economie et de Gestion de Nabeul",
      
      },
      {
        value: "Ecole Supérieure Privée de Technologie de l’Information et de Management de Nabeul",
        label: "Ecole Supérieure Privée de Technologie de l’Information et de Management de Nabeul",
      
      }, {
        value: "Faculté Privée des sciences de l’informatique et de management de Nabeul",
        label: "Faculté Privée des sciences de l’informatique et de management de Nabeul",
      
      },
    {
        value: "Ecole Supérieure Polytechnique Privée de Monastir",
        label: "Ecole Supérieure Polytechnique Privée de Monastir",
      
      },
      {
        value: "Ecole Supérieure Privée d’ingénieurs de Monastir",
        label: "Ecole Supérieure Privée d’ingénieurs de Monastir",
      
      },

      
    ],},
    { value: 'Universités privées de Gabes, Gafsa et Kairouan',
    label: 'Universités privées de Gabes, Gafsa et Kairouan',
    children: [
   
      {
        value: "Institut Supérieur Privé des Sciences Infirmières de Kairouan",
        label: "Institut Supérieur Privé des Sciences Infirmières de Kairouan",
      
      },
      {
        value: "Ecole Supérieure Privée des Sciences Appliquées et de Technologie de Gabès",
        label: "Ecole Supérieure Privée des Sciences Appliquées et de Technologie de Gabès",
      
      },
      {
        value: "Ecole supérieure privée de technologie et de management de Gabès",
        label: "Ecole supérieure privée de technologie et de management de Gabès",
      
      },
  
      {
        value: "Ecole Supérieure Privée d’ingénieurs de Gafsa",
        label: "Ecole Supérieure Privée d’ingénieurs de Gafsa",
      
      },
      
    ],},
  ];


  function onChange(value) {
   
    setUniversite(value[1])
    if(value[1] ==  "Université étrangère ou privée") {
      setprive("setprive")
    }else {
      setprive("setNotprive")
    }
  }







  return (
    <Box mt="20px"  ml='50px'>
      <Header title="créer un document" subtitle="créer un noveau document " />

      <Formik
        onSubmit={submitImage}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <>
            <Box
             ml='50px'
              gap="70px"

              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
 
    <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
          Upload votre document:
        </Typography>
        <input           type="file"
          class="form-control"
          accept="application/pdf"
          required
          onChange={(e) => setFile(e.target.files[0])}/><br/> <br/>
  
<br/>
<br/> <br/>
              
                    <Cascader options={options} onChange={onChange} placeholder="Université dont vous avez travaillé votre document "     style={{width:"700px"}} />
                    <br/> <br/><br/>
                    {prive == "setprive" && (<>
                    <div class="field input-field" >
                        <input type="text" placeholder="Écrivez le nom de votre université étrangére ou privée" class="input" onChange={(event) => {setUniversite(event.target.value)}} style={{width:"700px", height:"50px"}} />
                    </div></>) } <br/>
                    <div class="field input-field">
                    <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
        Année de soutenance ou de publication :
        </Typography>
                    <input type="month" id="start" placeholder="Année" name="start"  onChange={(event) => {setAnnee(event.target.value)}} style={{width:"700px", height:"50px"}}/>
                
                    </div>
                    <br/><br/>
        <FormControl
       fullWidth
          >
            <InputLabel
              color="secondary"
              id="demo-simple-select-label"
            >
           Type de votre document
            </InputLabel>
            <Select
            
            style={{width:"700px"}}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Type de votre document"
              color="secondary"
              onChange={handleChange2}
            >
          
                  <MenuItem value="PFE">
           PFE ou autre (niveau licence)
                  </MenuItem>
                  <MenuItem value="Mémoire">
                 Mémoire ou autre (niveau mastère)
                  </MenuItem>
                  <MenuItem value="Thèse">
                  Thèse ou autre (niveau doctorat)
                  </MenuItem>
                  <MenuItem value="Article">
       Article
                  </MenuItem>
                  <MenuItem value="Ouvrage">
 Ouvrage
                  </MenuItem>
      
           
            </Select>
          </FormControl>
          <br/><br/><br/>
          {type === "PFE" && (<>
                      <br/>
                        <Box sx={{ width: 270 }}>
        <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
          Prix du mode lecture : {(value).toFixed(3)} dt
        </Typography>
        <Slider
              style={{width:"400px"}}
          value={value}
          min={0} 
          step={0.001}
          max={4}
          color="secondary"
        
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
          onChange={handleChange4}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box>     <Box sx={{ width: 270 }}>
          <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
         Durée du mode lecture : {period} mois
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
      </Box>          <Box sx={{ width: 270 }}>
        <Typography id="non-linear-slider"   style={{fontSize:"18px"}} gutterBottom>
        Prix  téléchargement : { value == 0 ?(<>{prixt =value } </>):(<>{prixt =( Math.round((value * 2 )* 1000) / 1000 ).toFixed(3)}dt</>)}
        </Typography>
        <Slider
             style={{width:"400px"}}
          value={value}
          min={0}
          step={0.001}
          max={4}
   disabled
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
          onChange={handleChange4}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box></>
                )} {type === "Mémoire" && (<>
                  <Box sx={{ width: 270 }}>
  <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
  Prix du mode lecture : {(value).toFixed(3)}
  </Typography>
  <Slider
    value={value}
    min={0}
    style={{width:"400px"}}
    step={0.001}
    max={6}
    color="secondary"
  
    getAriaValueText={valueLabelFormat}
    valueLabelFormat={valueLabelFormat}
    onChange={handleChange4}
    valueLabelDisplay="auto"
    aria-labelledby="non-linear-slider"
  />
</Box>          <Box sx={{ width: 270 }}>
        <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
       Durée du mode lecture : {period} mois
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
    </Box>     <Box sx={{ width: 270 }}>
  <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
  Prix téléchargement :   { value == 0 ?(<>{prixt =value } </>):(<>{prixt =( Math.round((value * 2 )* 1000) / 1000 ).toFixed(3)}</>)}
  </Typography>
  <Slider
       style={{width:"400px"}}
    value={value}
    min={0}
    step={0.001}
    max={6}
disabled
    getAriaValueText={valueLabelFormat}
    valueLabelFormat={valueLabelFormat}
    onChange={handleChange4}
    valueLabelDisplay="auto"
    aria-labelledby="non-linear-slider"
  />
</Box></>
          )}
           {type === "Thèse" && (<>
                  <Box sx={{ width: 270 }}>
  <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
  Prix du mode lecture : {(value).toFixed(3)}
  </Typography>
  <Slider
       style={{width:"400px"}}
    value={value}
    min={0}
    step={0.001}
    max={8}
    color="secondary"
  
    getAriaValueText={valueLabelFormat}
    valueLabelFormat={valueLabelFormat}
    onChange={handleChange4}
    valueLabelDisplay="auto"
    aria-labelledby="non-linear-slider"
  />
</Box>   
<Box sx={{width: 270 }}>
        <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
       Durée du mode lecture : {period} mois
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
    </Box>           <Box sx={{ width: 270 }}>
  <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
  Prix téléchargement : { value == 0 ?(<>{prixt =value } </>):(<>{prixt =( Math.round((value * 2 )* 1000) / 1000 ).toFixed(3)}</>)}
  </Typography>
  <Slider
       style={{width:"400px"}}
    value={value}
    min={0}
    step={0.001}
    max={8}
disabled
    getAriaValueText={valueLabelFormat}
    valueLabelFormat={valueLabelFormat}
    onChange={handleChange4}
    valueLabelDisplay="auto"
    aria-labelledby="non-linear-slider"
  />
</Box></>
          )}

{user.statue === "professionnel" && user.approved === true && type==="Article"  && (<>        <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
Prix du mode lecture :  {(value).toFixed(3)}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={8}
  color="secondary"
  style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box>      <Box sx={{ width: 270 }}>
          <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
         Durée du mode lecture : {period} mois
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
      </Box>       <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} >
Prix téléchargement: { value == 0 ?(<>{prixt =value } </>):(<>{prixt =( Math.round((value * 2 )* 1000) / 1000 ).toFixed(3)}</>)}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={8}
disabled
style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box></> )}
{user.statue === "professionnel" && user.approved === false && type==="Article"  && (<>  <Typography color="red" id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
La soumission de ce type de document est conditionnée à la vérification préalable de votre compte
</Typography>        <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
Prix du mode lecture :  {(value).toFixed(3)}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={8}
  disabled
  color="secondary"
  style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box>      <Box sx={{ width: 270 }}>
          <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
         Durée du mode lecture : {period} mois
        </Typography>
        <Slider
              style={{width:"400px"}}
          value={period}
          min={6}
          step={1}
          max={12}
          color="secondary"
          disabled
          getAriaValueText={valueLabelFormatD}
          valueLabelFormat={valueLabelFormatD}
          onChange={handleChange7}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box>       <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} >
Prix  téléchargement: { value == 0 ?(<>{prixt =value } </>):(<>{prixt =( Math.round((value * 2 )* 1000) / 1000 ).toFixed(3)}</>)}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={8}
disabled
style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box></> )}
{user.statue === "etudiant"  && type==="Article"  && (<>    <Typography color="red" id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
La soumission de ce type de document est conditionnée à la vérification préalable de votre compte
</Typography>      <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
Prix du mode lecture :  {(value).toFixed(3)}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={8}
  color="secondary"
  disabled
  style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box>      <Box sx={{ width: 270 }}>
          <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
         Durée du mode lecture : {period} mois
        </Typography>
        <Slider
              style={{width:"400px"}}
          value={period}
          min={6}
          step={1}
          max={12}
          color="secondary"
          disabled
          getAriaValueText={valueLabelFormatD}
          valueLabelFormat={valueLabelFormatD}
          onChange={handleChange7}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box>       <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} >
Prix téléchargement: { value == 0 ?(<>{prixt =value } </>):(<>{prixt =( Math.round((value * 2 )* 1000) / 1000 ).toFixed(3)}</>)}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={8}
disabled
style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box></> )}
{user.statue === "professionnel" && user.approved === true && type==="Ouvrage"  && (<>        <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
Prix du mode lecture :  {(value).toFixed(3)}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={12}
  color="secondary"
  style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box>      <Box sx={{ width: 270 }}>
          <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
         Durée du mode lecture : {period} mois
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
      </Box>       <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} >
Prix téléchargement: { value == 0 ?(<>{prixt =value } </>):(<>{prixt =( Math.round((value * 2 )* 1000) / 1000 ).toFixed(3)}</>)}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={12}
disabled
style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box></> )}
{user.statue === "professionnel" && user.approved === false && type==="Ouvrage"  && (<>  <Typography color="red" id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
La soumission de ce type de document est conditionnée à la vérification préalable de votre compte
</Typography>        <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
Prix du mode lecture :  {(value).toFixed(3)}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={12}
  disabled
  color="secondary"
  style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box>      <Box sx={{ width: 270 }}>
          <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
         Durée du mode lecture : {period} mois
        </Typography>
        <Slider
              style={{width:"400px"}}
          value={period}
          min={6}
          step={1}
          max={12}
          color="secondary"
          disabled
          getAriaValueText={valueLabelFormatD}
          valueLabelFormat={valueLabelFormatD}
          onChange={handleChange7}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box>       <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} >
Prix téléchargement: { value == 0 ?(<>{prixt =value } </>):(<>{prixt =( Math.round((value * 2 )* 1000) / 1000 ).toFixed(3)}</>)}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={12}
disabled
style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box></> )}
{user.statue === "etudiant"  && type==="Ouvrage"  && (<>    <Typography color="red" id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
La soumission de ce type de document est conditionnée à la vérification préalable de votre compte
</Typography>      <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
Prix du mode lecture :  {(value).toFixed(3)}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={12}
  color="secondary"
  disabled
  style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box>      <Box sx={{ width: 270 }}>
          <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
         Durée du mode lecture : {period} mois
        </Typography>
        <Slider
              style={{width:"400px"}}
          value={period}
          min={6} 
          step={1}
          max={12}
          color="secondary"
          disabled
          getAriaValueText={valueLabelFormatD}
          valueLabelFormat={valueLabelFormatD}
          onChange={handleChange7}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box>       <Box sx={{ width: 270 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} >
Prix téléchargement: { value == 0 ?(<>{prixt =value } </>):(<>{prixt =( Math.round((value * 2 )* 1000) / 1000 ).toFixed(3)}</>)}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={12}
disabled
style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box></> )}












              <TextField
                    style={{width:"700px"}}
                variant="filled"
                type="text"
                label="Titre"
                onBlur={handleBlur}
               
                value={values.Titre}
                name="Titre"
                onChange={(event) => {setTitre(event.target.value)}}
         
                error={!!touched.Titre && !!errors.Titre}
                helperText={touched.Titre && errors.Titre}
                sx={{ gridColumn: "span 2" }}
              /> <br/><br/><br/>
                         <ReactQuill
              theme="snow"
              style={{width:"700px"}}
              placeholder="Sommaire ou description " class="input" value={description} onChange={setDescription} 
            />
        
<br/><br/><br/>
            <Typography id="non-linear-slider"  style={{fontSize:"17px"}}  gutterBottom>
          Ajouté une photo :
        </Typography>
                    <div class="field input-field">
                    <input accept="image/*"
                     style={{width:"700px"}}
             type="file" placeholder="Email"
             onChange={convertToBase646}/>

                    </div>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" onClick={submitImage}>
              
créer un document
              </Button>
            </Box>
          </>
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
  city: "",
    state: "",
    country: "",
    occupation: "",
    phoneNumber: "",

};

export default AddDocUser;