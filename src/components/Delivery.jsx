import { Box, Container, Typography } from "@mui/material";
import deliveryImg from "../assets/DeliveryImg.png";
import { DeliveryContainer, DeliveryDesc } from "../theme";
import CustomButton from "./CustomButton";

function Delivery() {
  return (
    <Container sx={{ py: "4rem" }}>
      <DeliveryContainer>
        <DeliveryDesc>
          <Typography
            color="#FFF"
            fontSize={"35px"}
            fontWeight={"bold"}
            fontFamily={"monospace"}
          >
            Super Fast Home Delivery
          </Typography>
          <Typography
            fontFamily={"monospace"}
            fontSize={"25px"}
            fontWeight={"bold"}
          >
            Door to Door Delivery!
          </Typography>
          <Box>
            <CustomButton backgroundColor={"white"} color={"#555"}>
              Order Now!!
            </CustomButton>
          </Box>
        </DeliveryDesc>
        <Box>
          <img src={deliveryImg} alt="Delivery" />
        </Box>
      </DeliveryContainer>
    </Container>
  );
}

export default Delivery;
