import { Box, Container, Typography } from "@mui/material";
import star from "../assets/Star.png";
import logo from "../assets/logo.png";
import logos from "../assets/logos.png";
import { CustomPartnerBox, CustomPartnerInnerBox } from "../theme";

function Partner() {
  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <CustomPartnerBox>
          <CustomPartnerInnerBox>
            <img src={logo} alt="Logo" />
            <Typography
              sx={{ color: "#7D8589", fontWeight: "bold" }}
              variant="body1"
              color="initial"
            >
              More than 45,000 trust Techhflix
            </Typography>
          </CustomPartnerInnerBox>
          <CustomPartnerInnerBox>
            <img src={star} alt="Star" />
            <Typography
              sx={{ color: "#7D8589", fontWeight: "bold" }}
              variant="body1"
              color="initial"
            >
              5-Star Rating (2k+ Reviews)
            </Typography>
          </CustomPartnerInnerBox>
        </CustomPartnerBox>
        <img style={{ maxWidth: "100%" }} src={logos} alt="Logos" />
      </Container>
    </Box>
  );
}

export default Partner;
