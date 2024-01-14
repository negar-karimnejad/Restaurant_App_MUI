/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import { styled } from "@mui/system";

const CustomButton = ({
  children,
  color,
  backgroundColor,
  welcomeBtn,
  getStartedBtn,
  guideBtn,
}) => {
  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: "700",
    fontSize: "14px",
    padding: "0.5rem,1.25rem",
    borderRadius: "7px",
    textTransform: "none",
    display: "block",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    [theme.breakpoints.down("md")]: {
      margin:
        (welcomeBtn || getStartedBtn) && theme.spacing(0, "auto", 3, "auto"),
      width: (welcomeBtn || getStartedBtn) && "90%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && "90%",
    },
  }));

  return (
    <CustomButton variant="contained" color="primary">
      {children}
    </CustomButton>
  );
};

export default CustomButton;
