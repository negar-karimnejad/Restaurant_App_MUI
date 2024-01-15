import { Box, Container, Grid, Menu, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// Navbar
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

//  Welcome
export const WelcomeCustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },
}));

export const WelcomeTitle = styled(Typography)(({ theme }) => ({
  color: "#FFF",
  fontSize: "64px",
  fontWeight: "bold",
  margin: theme.spacing(4, 0, 4, 0),
  [theme.breakpoints.down("md")]: {
    fontSize: "40px",
  },
}));

// Partner
export const CustomPartnerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(4),
  marginBottom: "2rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const CustomPartnerInnerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  textAlign: "left",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    textAlign: "center",
  },
}));

// Booking
export const BookingBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(3),
  padding: "40px",
}));

export const BookingGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  textAlign: "center",
  gap: theme.spacing(2),
  margin: theme.spacing(5, 0, 0, 0),
  xs: "12",
  md: "10",
  lg: "8",
}));

// Dishes
export const DishesBoxes = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(4),
  marginTop: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const DishesTitle = styled(Typography)(({ theme }) => ({
  textAlign: "start",
  fontWeight: "bold",
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

export const DishesInfoContainer = styled(Box)(() => ({
  width: "400px",
  backgroundColor:"#FFF",
  boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
  "&:hover": {
    transform: "scale(1.05)",
    transition: "all 0.3s ease-in-out",
  },
}));

export const DishesInfoDesc = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1, 2, 1, 2),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export const DishesInfoActionBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(2, 0, 2, 0),
  color: "#333",
  fontWeight: "500",
}));

// Footer
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
