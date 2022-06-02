import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <Box padding={3}>
        <Typography variant="h4" component="h1" className="fName">
          Prashanth Kommidi
        </Typography>
        <Typography variant="h4" component="h1" className="sName">
          Prashanth
        </Typography>
      </Box>
    </div>
  )
}

export default Navbar;