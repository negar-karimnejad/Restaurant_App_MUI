import { Box, Menu, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const NavLinksBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const NavbarLink = styled(Typography)(() => ({
  fontWeight: "bold",
  color: "#4f5361",
  fontSize: "15px",
  cursor: "pointer",
  "&:hover": {
    color: "#fff",
  },
}));

export const NavbarLogo = styled("img")(({ theme }) => ({
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const CustomMenu = styled(Menu)(({ theme }) => ({
  cursor: "pointer",
  display: "none",
  marginRight: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));
