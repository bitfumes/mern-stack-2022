import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className="text-white" to="/">
              Expensor
            </Link>
          </Typography>
          <Link to="/login" className="text-white">
            <Button color="inherit">Login</Button>
          </Link>
          <Link to="/register" className="text-white">
            <Button color="inherit">Register</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
