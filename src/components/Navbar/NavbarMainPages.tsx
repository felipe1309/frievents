import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import FavoriteIcon from "@mui/icons-material/Favorite";
const NavbarMainPages = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
      }}
    >
      <Link href="/">
        <Typography
          component="a"
          variant="h6"
          noWrap
          sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
        >
            <FavoriteIcon
              sx={{
                display: { xs: "none", md: "block" },mr:2
              }}
            />
          frievent's
        </Typography>
      </Link>
      <Link href="/">
        <Button component="a" sx={{color:"white"}}>Home</Button>
      </Link>
      <Link href="/events">
        <Button component="a" sx={{color:"white"}}>Events</Button>
      </Link>
    </Box>
  );
};

export default NavbarMainPages;
