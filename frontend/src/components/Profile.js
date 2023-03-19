import React from 'react'
import { Typography, useTheme } from "@mui/material";

import { tokens } from "../../theme";

const Profile = ({userData}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="MY PROFILE"/>
        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
            {userData.username}
        </Typography>
        </Box>
    );
}
