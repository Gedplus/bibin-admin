
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";


import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Dashboard from "./scenes/dashboard/Index";

import Form from "./scenes/form";
import { useGetUserQuery } from "./state/api";

import Login from "components/Login";
import Signup1 from "components/SignUp";
import Chercheur from "scenes/chercheur";
import Utilisateur from "scenes/utilisateur";
import EditUser from "scenes/editUser/EditUser";
import Admin from "scenes/admin";
import Contact from "scenes/contact";
import FormD from "scenes/document";
import AddUser from "./scenes/form";
import  Reclamation from "./scenes/reclamation";
import Document from "listdoc";
import Demande from "scenes/demande/Demande";
import AddVideo from "scenes/videos/addVideos";
import ListVideo from "scenes/listVideo/ListeVideo";
import EditMedia from "scenes/EditMedia/EditMedia";
import AddPack from "scenes/PackVIdeos/AddPack";
import ListPack from "scenes/ListePack/ListePack";
import EditPack from "scenes/editPack/EditPack";
import ListCommande from "scenes/commande/Commande";
import EditCommande from "scenes/editCommande/EditCommande";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  

  const data1 = window.localStorage.getItem("token");

const userId = data1;
const { data } = useGetUserQuery(userId);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
    
        <CssBaseline />
        <Routes>
        <Route path="/login"  element={<Login />}  />
           
        <Route path="/signup"  element={<Signup1 />}  />
            </Routes>
        <div className="app"  style={ window.location.pathname == "/login"  ||  window.location.pathname == "/signup"? { display: "none" } : null}>


          <Sidebar isSidebar={isSidebar}   user={data || {}} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar}  user={data || {}} />
            
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/chercheur" element={<Chercheur />} />
              <Route path="/utilisateur" element={<Utilisateur />} />
              <Route path="/AddUser" element={<AddUser />} />
              <Route path="/edit/:id" element={<EditUser />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/listDocuments" element={<Document />} />
              <Route path="/documents" element={<FormD />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Reclamation" element={<Reclamation />} />
              <Route path="/verification" element={<Demande />} />
              <Route path="/addvideo" element={<AddVideo />} />
              <Route path="/addPack" element={<AddPack />} />
              <Route path="/listvideo" element={<ListVideo />} />
              <Route path="/listpack" element={<ListPack />} />
              <Route path="/editMedia/:id" element={<EditMedia />} />
              <Route path="/editPack/:id" element={<EditPack />} />
              <Route path="/listCommande" element={<ListCommande />} />
              <Route path="/detailCommande/:id" element={<EditCommande />} />
            </Routes>
          </main>
  
        </div>
      
      </ThemeProvider>
    
    </ColorModeContext.Provider>
  );
}

export default App;