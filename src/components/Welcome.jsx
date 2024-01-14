import { Box, Typography } from "@mui/material";
import welcomeImg from "../assets/welcome.png";
import CustomButton from "./CustomButton";

function Welcome() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Typography variant="body1" color="initial">
          Welcome to Techflix Restaurant
        </Typography>
        <Typography variant="h4" color="initial">
          Discover a place where you&#39;ll love to Eat.
        </Typography>
        <Typography variant="p" color="initial">
          immerse yourself in the elegance ambiance as you savor each bite.
          accompanied by our extensive section of hand-picked winers and
          carefully curated cocktails.
        </Typography>
        <CustomButton color="#FFF" backgroundColor="#0F1B4C">
          More About Us
        </CustomButton>
      </Box>
      <Box
        sx={{
          flex: "1.25",
        }}
      >
        <img
          style={{ maxWidth: "100%" }}
          src={welcomeImg}
          alt="Welcome Image"
        />
      </Box>
    </Box>
  );
}

export default Welcome;
