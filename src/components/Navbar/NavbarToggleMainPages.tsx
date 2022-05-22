import { IconButton, Menu, MenuItem,Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system"
import Link from "next/link"
import React, { useState } from "react";

const NavbarToggleMainPages = () => {
    const [anchorMenu, setAnchorMenu] = useState<null | HTMLElement>(null);
    const handdlerOpenMenu = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorMenu(e.currentTarget);
      };
      const handdleCloseMenu = () => {
        setAnchorMenu(null);
      };
  return (
    <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handdlerOpenMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorMenu}
              open={Boolean(anchorMenu)}
              onClose={handdleCloseMenu}
              id="nav-menu"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem LinkComponent="a" onClick={handdleCloseMenu}>

                <Link href="/events">
                  <Typography component="a" variant="inherit">
                    Events
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem LinkComponent="a" onClick={handdleCloseMenu}>
                <Link href="/">
                  <Typography component="a" variant="inherit">
                    Home
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
  )
}

export default NavbarToggleMainPages