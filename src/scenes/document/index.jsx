import { Box, Button, Card, CardMedia, MenuItem, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { addDocument, addUser, useGetUtilisateursQuery } from "state/api";
import { useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from "@mui/material/Select";
import Dropdown from '@trendmicro/react-dropdown';
import InputLabel from "@mui/material/InputLabel";
import {  useGetCustomersQuery } from "state/api";
// Be sure to include styles at some point, probably during your bootstraping
import { Cascader } from 'antd';

import Slider from '@mui/material/Slider';
const FormD = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
const navigate = useNavigate();
const { data, isLoading } = useGetUtilisateursQuery();
const [Titre, setTitre] = useState("");
const [description, setDescription] = useState("");
const [prixT, setPrixT] = useState(0);

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
function valueLabelFormatD(value) {

  return value;
  }

function calculateValue(value) {
  var ss=  value.toString()
 const str2 = '00';
 const str = '0';

if (ss.length == 3)
{ss= ss.concat('', str2)}
if (ss.length == 4)
{ss= ss.concat('', str)}
setPrixT(ss)
  return  ss;
}


function calculateValue1(value) {
  var ss = 0
  if( value == 0 ){
    ss= 0
  } else {
    ss=  value + 0.90
  }
  setPrixT(ss)
  return  ss;
 
}
function calculateValue2(value) {
  var ss = 0
  if( value == 0 ){
    ss= 0
  } else {
    ss=  value + 1.80
  }
  setPrixT(ss)
  return  ss;

}
function calculateValue3(value) {
  var ss = 0
  if( value == 0 ){
    ss= 0
  } else {
    ss=  value + 3.60
  }
  setPrixT(ss)
  return  ss;
}
function calculateValue4(value) {
  var ss = 0
  if( value == 0 ){
    ss= 0
  } else {
    ss=  value + 7.20
  }
  setPrixT(ss)
  return  ss;
}
function calculateValue5(value) {
  var ss = 0
  if( value == 0 ){
    ss= 0
  } else {
    ss=  value + 14.40
  }
  setPrixT(ss)
  return  ss;
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
const [pieceJustificatif , setPieceJustificatif] = useState("")
const [carteIdentite , setCarteIdentite] = useState("")
const [auteur, setAuteur] = useState();
const [ file, setFile ] = useState(null)
const [ fileName, setFileName ] = useState(null)

const document ={
  statue: selected,
  document: image,
  type: type,
  prixLecture: value,
  prixTelechargement: prixT,
  profession: profession,
  auteur: auteur,
titre: Titre,
description: description, 
profession :profession,
pieceJustificatif: pieceJustificatif,
carteIdentite: carteIdentite,
universite: universite,
accepte : true,
period : period,

};
  const handleFormSubmit = async(values) => {
    await addDocument(document);
    navigate('/users');
  };
  function handleChange1(event) {
     setSelected(event.target.value);
  }
  const handleChange6 = (event) => {
    setProfession(event.target.value);
  };
  const handleChange2 = (event) => {
    setType(event.target.value);
  };
  const handleChangeA = (event) => {
    setAuteur(event.target.value);
  };
  const options = [
    {
      value: 'Université de Tunis',
      label: 'Université de Tunis',
      children: [
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
  ];

  const fileToBase64 = (file, cb) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      cb(null, reader.result)
    }
    reader.onerror = function (error) {
      cb(error, null)
    }
  }

  const onUploadFileChange = ({ target }) => {
    if (target.files < 1 || !target.validity.valid) {
      return
    }
    fileToBase64(target.files[0], (err, result) => {
      if (result) {
        setFile(result)
        setFileName(target.files[0])
      }
    })
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
    function convertToBase641(e){
      console.log(e);
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        console.log(reader.result);
        setPieceJustificatif(reader.result)
  
      };
      reader.onerror = error => {
        console.log("error: ", error);
      }}
      function convertToBase642(e){
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
          console.log(reader.result);
          setCarteIdentite(reader.result)
    
        };
        reader.onerror = error => {
          console.log("error: ", error);
        }}
  function onChange(value) {

    setUniversite(value[1])
  }

  return (
    <Box mt="20px"  ml='50px'>
      <Header title="créer un document" subtitle="créer un noveau document " />

      <Formik
        onSubmit={handleFormSubmit}
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
    </FormControl><br/><br/>
    <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
          Upload votre document:
        </Typography>
   <input type="file"    onChange={convertToBase64}    required /> <br/> <br/>
   {selected === "etudiant" && (<>
            <FormControl
      style={{width:"700px"}}
  
          >
            <InputLabel
              color="secondary"
              id="demo-simple-select-label"
            >
           Type de votre document
            </InputLabel>
            <Select
            
     
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
                 Mémoire ou autre (niveau mastére)
                  </MenuItem>
                  <MenuItem value="Thése">
           Thése ou autre (niveau doctorat)
                  </MenuItem>
           
            </Select>
          </FormControl><br/><br/>
                      {type === "PFE" && (<>
                        <Box sx={{ width: 250 }}>
        <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
          Prix de mode lecture : {valueLabelFormat(calculateValue(value))}
        </Typography>
        <Slider
              style={{width:"400px"}}
          value={value}
          min={0}
          step={0.001}
          max={0.900}
          color="secondary"
        
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
          onChange={handleChange4}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box>    
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
      
      
      
      
              <Box sx={{ width: 250 }}>
        <Typography id="non-linear-slider"   style={{fontSize:"18px"}} gutterBottom>
        Prix de mode téléchargement : {valueLabelFormat(calculateValue1(value))}
        </Typography>
        <Slider
             style={{width:"400px"}}
          value={value}
          min={0}
          step={0.001}
          max={0.900}
   disabled
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
          onChange={handleChange4}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box></>
                )}
                       {type === "Mémoire" && (<>
                        <Box sx={{ width: 250 }}>
        <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
        Prix de mode lecture :  {valueLabelFormat(calculateValue(value))}
        </Typography>
        <Slider
          value={value}
          min={0}
          style={{width:"400px"}}
          step={0.001}
          max={1.800}
          color="secondary"
        
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
          onChange={handleChange4}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box>   
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
      </Box>          <Box sx={{ width: 250 }}>
        <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
        Prix de mode téléchargement :  {valueLabelFormat(calculateValue2(value))}
        </Typography>
        <Slider
             style={{width:"400px"}}
          value={value}
          min={0}
          step={0.001}
          max={1.800}
   disabled
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
          onChange={handleChange4}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box></>
                )}
                 {type === "Thése" && (<>
                        <Box sx={{ width: 250 }}>
        <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
        Prix de mode lecture : {valueLabelFormat(calculateValue(value))}
        </Typography>
        <Slider
             style={{width:"400px"}}
          value={value}
          min={0}
          step={0.001}
          max={3.600}
          color="secondary"
        
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
          onChange={handleChange4}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box>           <Box>
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
      </Box>       <Box sx={{ width: 250 }}>
        <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
        Prix de mode téléchargement :  {valueLabelFormat(calculateValue3(value))}
        </Typography>
        <Slider
             style={{width:"400px"}}
          value={value}
          min={0}
          step={0.001}
          max={3.600}
   disabled
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
          onChange={handleChange4}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </Box></>
                )}</>
              )}
             
<br/>
{data == undefined ? (
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
                    </FormControl></>)}<br/><br/> <br/>
                
                    <Cascader options={options} onChange={onChange} placeholder="Université dont vous avez travaillé votre document "     style={{width:"700px"}} />
        <br/><br/>
                 {selected === "professionnel" && (<>
                   <FormControl
                        style={{width:"700px"}}
         
                 >
                   <InputLabel
                     color="secondary"
                     id="demo-simple-select-label"
                   >
              Qu'elle est votre profession
                   </InputLabel>
                   <Select
                   
            
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                     label="Qu'elle est votre profession"
                     color="secondary"
                     onChange={handleChange6}
                   >
                 
                         <MenuItem value="Enseignant">
                         Enseignant
                         </MenuItem>
                         <MenuItem value="Avocat">
                         Avocat
                         </MenuItem>
                         <MenuItem value="Juge">
                         Juge
                         </MenuItem>
                         <MenuItem value="Expert">
                         Expert comptable
                         </MenuItem>
                         <MenuItem value="Huissier">
                         Huissier
                         </MenuItem>
                         <MenuItem value="Autre">
        Autre
                         </MenuItem>
                  
                   </Select>
                 </FormControl><br/> <br/>    <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
          Upload votre carte d'identité(image ou pdf):
        </Typography>
                 <input type="file" name="cin"  required  onChange={convertToBase641} /><br/> <br/><br/>
                 <Typography id="non-linear-slider"  style={{fontSize:"18px"}}  gutterBottom>
          Upload pièce justificatif  de votre profession (image ou pdf):
        </Typography>
                 <input type="file" name="justification" onChange={convertToBase642}  required /><br/><br/>
            <FormControl
              style={{width:"700px"}}
  
          >
            <InputLabel
              color="secondary"
              id="demo-simple-select-label"
            >
           Type de votre document
            </InputLabel>
            <Select
            
     
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
                 Mémoire ou autre (niveau mastére)
                  </MenuItem>
                  <MenuItem value="Thése">
           Thése ou autre (niveau doctorat)
                  </MenuItem>
                  <MenuItem value="Article">
       Article
                  </MenuItem>
                  <MenuItem value="Ouvrage">
 Ouvrage
                  </MenuItem>
                  <MenuItem value="Autre">
 Autre
                  </MenuItem>
           
            </Select>
          </FormControl><br/> <br/>
          {type === "Article" || type === "PFE" ||  type === "Mémoire" || type === "Autre"  ? (<>
                <Box sx={{ width: 250 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} > 
Prix de mode lecture :  {valueLabelFormat(calculateValue(value))}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={7.200}
  color="secondary"
  style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box>      
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
      </Box>       <Box sx={{ width: 250 }}>
<Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} >
Prix de mode téléchargement : {valueLabelFormat(calculateValue4(value))}
</Typography>
<Slider
  value={value}
  min={0}
  step={0.001}
  max={7.200}
disabled
style={{width:"400px"}}
  getAriaValueText={valueLabelFormat}
  valueLabelFormat={valueLabelFormat}
  onChange={handleChange4}
  valueLabelDisplay="auto"
  aria-labelledby="non-linear-slider"
/>
</Box></>
        ):(      <>        <Box sx={{ width: 250 }} style={{fontSize:"18px"}} >
          <Typography id="non-linear-slider" gutterBottom>
          Prix de mode lecture :  {valueLabelFormat(calculateValue(value))}
          </Typography>
          <Slider
            value={value}
            min={0}
            step={0.001}
            max={14.400}
            color="secondary"
            style={{width:"400px"}}
            getAriaValueText={valueLabelFormat}
            valueLabelFormat={valueLabelFormat}
            onChange={handleChange4}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
          />
          </Box>       <Box>
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
      </Box>           <Box sx={{ width: 250 }}>
          <Typography id="non-linear-slider" gutterBottom style={{fontSize:"18px"}} >
          Prix de mode téléchargement :  {valueLabelFormat(calculateValue5(value))}
          </Typography>
          <Slider
            value={value}
            min={0}
            step={0.001}
            max={14.800}
          disabled
          style={{width:"400px"}}
            getAriaValueText={valueLabelFormat}
            valueLabelFormat={valueLabelFormat}
            onChange={handleChange4}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
          />
          </Box></>)}</>
             
              )} <br/>
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
              /> <br/><br/>
              <TextField
                   style={{width:"700px"}}
                variant="filled"
                type="text"
                label="Sommaire  ou table de matiere ou déscription ou plus de détails"
                onBlur={handleBlur}
             
                value={values.description}
                name="description"
                onChange={(event) => {setDescription(event.target.value)}}
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
                multiline
              />
            <br/>
            
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" onClick={handleFormSubmit}>
              
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

export default FormD;