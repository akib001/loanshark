import React from 'react';
import Box from "@mui/material/Box";
import Navbar from "./Navbar";

function PublicLayout(props) {
    return (
        <Box sx={{ backgroundColor: "#E6F0FF", m: '-8px'}}>
            <Navbar/>
            <Box component="main">{props.children}</Box>
        </Box>
    );
}

export default PublicLayout;