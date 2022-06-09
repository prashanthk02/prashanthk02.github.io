import { Box } from "@mui/system";

import '../styles/navbar.css'

const Navbar = ({mode}) => {
  return (
    <div className={mode === "light" ? "navbar--light" : "navbar--dark"}>
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