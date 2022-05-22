import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React, { useState } from "react";
const NavbarToggleUserXs = () => {
  const [anchorUser, setAnchorUser] = useState<null | HTMLElement>(null);
  const handdlerOpenUser = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorUser(e.currentTarget);
  };
  const handdleCloseUser = () => {
    setAnchorUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="open ssetingd">
        <IconButton onClick={handdlerOpenUser} sx={{ p: 0, color: "white" }}>
          <Avatar
            src="https://scontent.fbaq6-1.fna.fbcdn.net/v/t1.6435-9/190627839_597585631633788_3259323113788567999_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFrIIFodmDpkSbLRSKY0DlMq5AtUDFHJr-rkC1QMUcmv7LQ8XcHaKlr7eryBWPS1jHQDooc7HXf5p0x75cK_Wzz&_nc_ohc=dy9MCpmJSmsAX-o39M1&_nc_ht=scontent.fbaq6-1.fna&oh=00_AT85Rj7xtaCt6obezTgELwkZp6t0lNPZvwvKLD6RhGL1gw&oe=62ACC1ED"
            alt="avatar"
          />
        </IconButton>
      </Tooltip>
      <Menu
        open={Boolean(anchorUser)}
        anchorEl={anchorUser}
        onClose={handdleCloseUser}
        id="nav-menu"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        sx={{
          display: { xs: "block" },
        }}
      >
        <MenuItem LinkComponent="a" onClick={handdleCloseUser}>
          <Link href="/profile">
            <Typography component="a" variant="inherit">
              Profile
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem LinkComponent="a" onClick={handdleCloseUser}>
          <Link href="/profile/dashboard">
            <Typography component="a" variant="inherit">
              Dashboard
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem LinkComponent="a" onClick={handdleCloseUser}>
          <Link href="/profile/notifications">
            <Typography component="a" variant="inherit">
              Notifications
            </Typography>
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default NavbarToggleUserXs;
