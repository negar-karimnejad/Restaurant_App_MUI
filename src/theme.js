import { Box, Container, Menu, Typography } from "@mui/material";
// import { styled } from "@mui/system";
import { styled } from "@mui/material/styles";

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

export const CustomFooterContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

export const FooterLink = styled("span")(() => ({
  fontSize: "16px",
  fontWeitgh: "300",
  color: "#000066",
  cursor: "pointer",
  "&:hover": {
    color: "#66B2FF",
  },
}));

export const FooterIconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));
