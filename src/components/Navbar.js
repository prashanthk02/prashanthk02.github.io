import { Box } from "@mui/system";

import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <Box padding={3}>
        <h1 className="fName neonText">
          Prashanth Kommidi
        </h1>
        <h1 className="sName neonText">
          PRASHANTH
        </h1>
      </Box>
    </div>
  )
}

export default Navbar;