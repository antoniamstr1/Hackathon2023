import { Box, Typography, useTheme } from "@mui/material";

import { tokens } from "../../theme";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Profile = () => {
    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="MY PROFILE"/>
        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
            hh
        </Typography>
        </Box>
    );
};

export default Profile;
