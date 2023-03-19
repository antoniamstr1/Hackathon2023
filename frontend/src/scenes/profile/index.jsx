import { Box, Typography, useTheme } from "@mui/material";

import { tokens } from "../../theme";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import "./profile.css" 

const Profile = (userData) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="MY PROFILE" />
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                <h2>username: {userData.userData.username} </h2>
                <h2> email: {userData.userData.email} </h2>
                <h2>phone number: {userData.userData.phone} </h2>
          
            </Typography>
        </Box>
    );
};

export default Profile;
