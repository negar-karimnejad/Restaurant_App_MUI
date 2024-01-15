import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import welcomeImg from "../assets/welcome.png";
import CustomButton from "./CustomButton";

function Welcome() {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    color: "#FFF",
    fontSize: "64px",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
    },
  }));
  return (
    <Box backgroundColor="#FED801" minHeight={"80vh"}>
      <Container>
        <CustomBox>
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
                mb: 4,
              }}
              variant="body2"
            >
              Welcome to Techflix Restaurant
            </Typography>
            <Title variant="h1">
              Discover a place where you&#39;ll love to Eat.
            </Title>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#5A6473",
                my: 4,
              }}
            >
              immerse yourself in the elegance ambiance as you savor each bite.
              accompanied by our extensive section of hand-picked winers and
              carefully curated cocktails.
            </Typography>
            <CustomButton
              welcomeBtn={true}
              color="#FFF"
              backgroundColor="#0F1B4C"
            >
              More About Us
            </CustomButton>
          </Box>
          <Box flex="1.25">
            <img
              style={{ maxWidth: "100%", marginTop: "2rem" }}
              src={welcomeImg}
              alt="Welcome Image"
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
}

export default Welcome;
