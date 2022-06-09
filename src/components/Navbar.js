import { Box } from "@mui/system";

import '../styles/navbar.css'

const Navbar = ({mode}) => {
  return (
    <div className={mode === "light" ? "navbar--light" : "navbar--dark"}>
      <Box padding={3}>
        <h1 className="fName">
          Prashanth Kommidi
        </h1>
        <h1 className="sName">
          PRASHANTH
        </h1>
      </Box>
    </div>
  )
}

export default Navbar;