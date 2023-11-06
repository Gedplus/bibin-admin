
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
import DocUtilisateur from "scenes/utilisateur/Docutilisateur";
import ListVideoUser from "scenes/utilisateur/VideoUser";
import AddVideoUser from "scenes/utilisateur/AddVideo";
import AddDocUser from "scenes/utilisateur/AddDocUser";
import DocApprover from "scenes/DocApprover/DocApprover";
import EditDoc from "scenes/EditDoc/EditDoc";
import Forget from "components/forgetPassword";
import Reset from "components/resetPassword";
import AddDoc from "scenes/document/addDoc";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  

  const data1 = window.localStorage.getItem("token");

const userId = data1;
const { data } = useGetUserQuery(userId);


const ProtectedRoute = ({ user, children }) => {
  if (!userId) {
    return <Navigate to="/" replace />;
  }

  return children;
};
console.log(data)
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
    
        <CssBaseline />
        <Routes>
          
        <Route path="/"  element={<Login />}  />
           
        <Route path="/signup"  element={<Signup1 />}  />
        <Route path="/forget-password"  element={<Forget />}  />
        <Route path="/reset-password/:token"  element={<Reset />}  />
        <Route path="/add"  element={<AddDoc />}  />
            </Routes>
        <div className="app"  style={ window.location.pathname == "/"  ||  window.location.pathname == "/signup" ||  window.location.pathname == "/forget-password" || window.location.pathname == "/add"   ? { display: "none" } : null}>


          <Sidebar isSidebar={isSidebar}   user={data || {}} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar}  user={data || {}} />
            
            <Routes>

              <Route path="/dashboard" element={  <ProtectedRoute user={data || {}}>
              <Dashboard />
            </ProtectedRoute>} />
              <Route path="/chercheur" element={<ProtectedRoute user={data || {}}>
              <Chercheur />
            </ProtectedRoute>} />
              <Route path="/utilisateur"  forceRefresh={true}  element={<ProtectedRoute user={data || {}}>
              <Utilisateur />
            </ProtectedRoute>} />
              <Route path="/DocApprover" element={<ProtectedRoute user={data || {}}>
              <DocApprover />
            </ProtectedRoute>} />
              <Route path="/AddUser" element={<ProtectedRoute user={data || {}}>
              <AddUser />
            </ProtectedRoute>} />
              <Route path="/edit/:id" element={<ProtectedRoute user={data || {}}>
              <EditUser />
            </ProtectedRoute>} />
              <Route path="/editDoc/:id" element={<ProtectedRoute user={data || {}}>
              <EditDoc />
            </ProtectedRoute>} />
              <Route path="/doc/:id" element={<ProtectedRoute user={data || {}}>
              <DocUtilisateur />
            </ProtectedRoute>} />
              <Route path="/videos/:id" element={<ProtectedRoute user={data || {}}>
              <ListVideoUser />
            </ProtectedRoute>} />
              <Route path="/Add/:id" element={<ProtectedRoute user={data || {}}>
              <AddVideoUser />
            </ProtectedRoute>} />
              <Route path="/AddDoc/:id" element={<ProtectedRoute user={data || {}}>
              <AddDocUser />
            </ProtectedRoute>} />
              <Route path="/admin" element={<ProtectedRoute user={data || {}}>
              <Admin />
            </ProtectedRoute>} />
              <Route path="/contact" element={<ProtectedRoute user={data || {}}>
              <Contact />
            </ProtectedRoute>} />
              <Route path="/listDocuments" element={<ProtectedRoute user={data || {}}>
              <Document />
            </ProtectedRoute>} />
              <Route path="/documents" element={<ProtectedRoute user={data || {}}>
              <FormD />
            </ProtectedRoute>} />
              <Route path="/contact" element={<ProtectedRoute user={data || {}}>
              <Contact />
            </ProtectedRoute>} />
              <Route path="/Reclamation" element={<ProtectedRoute user={data || {}}>
              <Reclamation />
            </ProtectedRoute>} />
              <Route path="/verification" element={<ProtectedRoute user={data || {}}>
              <Demande />
            </ProtectedRoute>} />
              <Route path="/addvideo" element={<ProtectedRoute user={data || {}}>
              <AddVideo />
            </ProtectedRoute>} />
              <Route path="/addPack" element={<ProtectedRoute user={data || {}}>
              <AddPack />
            </ProtectedRoute>} />
              <Route path="/listvideo" element={<ProtectedRoute user={data || {}}>
              <ListVideo />
            </ProtectedRoute>} />
              <Route path="/listpack" element={<ProtectedRoute user={data || {}}>
              <ListPack />
            </ProtectedRoute>} />
              <Route path="/editMedia/:id" element={<ProtectedRoute user={data || {}}>
              <EditMedia />
            </ProtectedRoute>} />
              <Route path="/editPack/:id" element={<ProtectedRoute user={data || {}}>
              <EditPack />
            </ProtectedRoute>} />
              <Route path="/listCommande" element={<ProtectedRoute user={data || {}}>
              <ListCommande />
            </ProtectedRoute>} />
              <Route path="/detailCommande/:id" element={<ProtectedRoute user={data || {}}>
              <EditCommande />
            </ProtectedRoute>} />
         
            </Routes>
          </main>
  
        </div>
      
      </ThemeProvider>
    
    </ColorModeContext.Provider>
  );
}

export default App;