import { Box, Container, Typography } from "@mui/material";
import welcomeImg from "../assets/welcome.png";
import { WelcomeCustomBox, WelcomeTitle } from "../theme";
import CustomButton from "./CustomButton";

function Welcome() {
  return (
    <Box backgroundColor="#FED801" minHeight={"80vh"}>
      <Container>
        <WelcomeCustomBox>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 10,
              }}
              variant="body2"
            >
              Welcome to Techflix Restaurant
            </Typography>
            <WelcomeTitle variant="h1">
              Discover a place where you&#39;ll love to Eat.
            </WelcomeTitle>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#5A6473",
              }}
            >
              immerse yourself in the elegance ambiance as you savor each bite.
              accompanied by our extensive section of hand-picked winers and
              carefully curated cocktails.
            </Typography>
            <Box>
              <CustomButton
                welcomeBtn={true}
                color="#FFF"
                backgroundColor="#0F1B4C"
              >
                More About Us
              </CustomButton>
            </Box>
          </Box>
          <Box flex="1.25">
            <img
              style={{ maxWidth: "100%", marginTop: "2rem" }}
              src={welcomeImg}
              alt="Welcome Image"
            />
          </Box>
        </WelcomeCustomBox>
      </Container>
    </Box>
  );
}

export default Welcome;
