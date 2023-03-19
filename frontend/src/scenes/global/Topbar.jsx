import { Box, IconButton, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import 'reactjs-popup/dist/index.css';
import InfoModal from "./Infomodal";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // const [show, setShow] = useState(false);

  const [query, setQuery] = useState("");
  const bombe = ["bomba", "malware", "attack", "https://www.fer.unizg.hr"]

  if (bombe.includes(query)) {
    toast("Threat from Nicaragua!")
    // setShow(true)
  }

  return (<>
     
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" onChange={(e) => setQuery(e.target.value.toLowerCase())} />

        <ToastContainer />
        {/* <InfoModal open={show}/> */}
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  </>
  );
};

export default Topbar;
