import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import FlexBetween from "./FlexBetween";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import ArticleIcon from '@mui/icons-material/Article';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import InfoIcon from '@mui/icons-material/Info';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import QueueIcon from '@mui/icons-material/Queue';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import VideoCallIcon from '@mui/icons-material/VideoCall';
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = (user) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");


  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h1" color={colors.grey[100]}>
Bibin
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
            
              <Box textAlign="center">
            
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"} marginBottom="3rem">
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
           utilisateur 
            </Typography>
    
            <Item
              title="Liste des utilisateurs "
              to="/utilisateur"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
              <Item
              title="Ajouter un utilisateur "
              to="/AddUser"
              icon={<PersonAddIcon />}
              selected={selected}
              setSelected={setSelected}
            />
               <Item
              title="Demande de verification"
              to="/verification"
              icon={<TaskAltIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Liste des admins"
              to="/admin"
              icon={<AdminPanelSettingsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="Contact"
              to="/contact"
              icon={<MarkEmailReadIcon />}
              selected={selected}
              setSelected={setSelected}
            />
               <Item
              title="Reclamation"
              to="/Reclamation"
              icon={<InfoIcon />}
              selected={selected}
              setSelected={setSelected}
            />


            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
          vente 
            </Typography>
         
                  <Item
              title="Documents en attente"
              to="/DocApprover"
              icon={<ArticleIcon />}
              selected={selected}
              setSelected={setSelected}
            />
                
                <Item
              title="Demandes en attente"
              to="/Demandes"
              icon={<TaskAltIcon />}
              selected={selected}
              setSelected={setSelected}
            />     <Item
              title="Documents en list"
              to="/listDocuments"
              icon={<ArticleIcon />}
              selected={selected}
              setSelected={setSelected}
            />
                  <Item
              title="Ajouter un document"
              to="/documents"
              icon={<NoteAddIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="Liste des videos"
              to="/listvideo"
              icon={<VideoLibraryIcon />}
              selected={selected}
              setSelected={setSelected}
            />
                  <Item
              title="Ajouter un video"
              to="/addvideo"
              icon={<QueueIcon />}
              selected={selected}
              setSelected={setSelected}
            />
           <Item
              title="Liste des  packs videos"
              to="/listpack"
              icon={<VideoFileIcon />}
              selected={selected}
              setSelected={setSelected}
            />
                  <Item
              title="Ajouter un pack videos"
              to="/addPack"
              icon={<VideoCallIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Liste des commandes"
              to="/listCommande"
              icon={<LocalGroceryStoreIcon />}
              selected={selected}
              setSelected={setSelected}
            />
                 <Item
              title="Liste des factures"
              to="/faq"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
     <Item
              title="Actualité"
              to="/faq"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
      
             
             
         
          </Box>
          <Divider />
             <FlexBetween textTransform="none" gap="1rem" m="0.5rem 2rem 0 2rem">
               <Box
                 component="img"
                 alt="profile"
                 src={user.user.image}
                 height="40px"
                 width="40px"
                 borderRadius="50%"
                 sx={{ objectFit: "cover" }}
               />
               <Box textAlign="left">
                 <Typography
                   fontWeight="bold"
                   fontSize="0.9rem"
                   color={colors.grey[300]}
                 >
                 {user.user.name}
                 </Typography>
                 <Typography
                   fontSize="0.8rem"
                   color={colors.grey[300]}
                 >
            {user.user.occupation}
                 </Typography>
               </Box>
               <IconButton>
               <SettingsOutlinedIcon
                 sx={{
                
                   fontSize: "25px ",
                 }}
               />
        </IconButton>
              
        </FlexBetween>
        </Menu>
       
        
      </ProSidebar>
   
    </Box>
    
  );
};

export default Sidebar;