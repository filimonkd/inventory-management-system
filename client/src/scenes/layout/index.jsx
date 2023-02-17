import React, { useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Layout = () => {
  return (
    <Box width="50%" height="50%">
      
      <Box >
        <Navbar/>
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout