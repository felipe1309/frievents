import NavbarToggleUser from "./NavbarToggleUser";
import NavbarToggleMainPages from "./NavbarToggleMainPages";
import NavbarMainPages from "./NavbarMainPages";
import {
  Toolbar,
  AppBar,
  Container,
} from "@mui/material";
const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavbarMainPages/>
          <NavbarToggleMainPages />
          <NavbarToggleUser />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
