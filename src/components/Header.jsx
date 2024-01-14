import {
  Contacts,
  FeaturedPlayList,
  Home,
  Menu,
  MiscellaneousServices,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navLinks } from "../data/data";
import CustomButton from "./CustomButton";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }
    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => {
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.id === 1 && <Home />}
                {item.id === 2 && <FeaturedPlayList />}
                {item.id === 3 && <MiscellaneousServices />}
                {item.id === 4 && <Contacts />}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>;
  };

  const NavLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
  const NavbarLink = styled(Typography)(() => ({
    fontWeight: "bold",
    color: "#4f5361",
    fontSize: "15px",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  }));
  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
  const CustomMenu = styled(Menu)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "40px",
        maxWidth: "auto",
        backgroundColor: "#FED801",
        marginLeft: "0px",
        marginBottom: "-24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2.5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <CustomMenu onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <NavbarLogo src={logo} alt="" />
        </Box>
        <NavLinksBox>
          {navLinks.map((link) => (
            <NavbarLink variant="body2" key={link.id}>
              {link.title}
            </NavbarLink>
          ))}
        </NavLinksBox>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <NavbarLink variant="body2">Sign Up</NavbarLink>
        <CustomButton color="#FFF" backgroundColor="#0F1B4C">
          Register
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Header;
