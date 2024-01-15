import { Box, Typography } from "@mui/material";
import welcomeImg from "../assets/welcome.png";
import CustomButton from "./CustomButton";

function Welcome() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "#FED801",
        padding: "40px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 0.8,
          gap: 3,
        }}
      >
        <Typography variant="h6" color="gray">
          Welcome to Techflix Restaurant
        </Typography>
        <Typography variant="h1" color="white">
          Discover a place <br /> where you&#39;ll
          <br /> love to Eat.
        </Typography>
        <Typography variant="p" fontSize={"1.1rem"} color="gray">
          immerse yourself in the elegance ambiance as you savor each bite.
          accompanied by our extensive section of hand-picked winers and
          carefully curated cocktails.
        </Typography>
        <CustomButton color="#FFF" backgroundColor="#0F1B4C">
          More About Us
        </CustomButton>
      </Box>
      <Box flex="1">
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
