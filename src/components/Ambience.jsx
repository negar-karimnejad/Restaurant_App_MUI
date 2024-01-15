import { Box, Container, Typography } from "@mui/material";
import ambience from "../assets/ambience.jpg";
import { AmbienceBox, AmbienceDesc, CustomSpan, StatisticsBox } from "../theme";

function Ambience() {
  return (
    <Container sx={{ py: "4rem" }}>
      <AmbienceBox>
        <Box sx={{ maxWidth: "100%", width: "330px", flex: "1" }}>
          <img style={{ maxWidth: "100%" }} src={ambience} alt="Ambience" />
        </Box>
        <AmbienceDesc>
          <div
            style={{
              width: "10%",
              height: "5px",
              backgroundColor: "#000339",
            }}
          ></div>
          <Typography
            variant="h5"
            marginY={3}
            fontWeight={"bold"}
            color="#000339"
          >
            You&apos;ve found a ambience
            <br />
            you love.
          </Typography>
          <Typography
            variant="p"
            fontSize={"16px"}
            fontWeight={"500"}
            color="#5A6473"
            maxWidth={"400px"}
          >
            Discover the epitome of culinary excellence at Savoria, where every
            visit is an enchanting rendezvous with the art of dining.{" "}
          </Typography>
        </AmbienceDesc>
      </AmbienceBox>
      <StatisticsBox>
        <CustomSpan>
          250+<span style={{ color: "#999", fontSize: "12px" }}>Dishes</span>
        </CustomSpan>
        <CustomSpan>
          300+
          <span style={{ color: "#999", fontSize: "12px" }}>
            Trusted Clients
          </span>
        </CustomSpan>
        <CustomSpan>
          350+
          <span style={{ color: "#999", fontSize: "12px" }}>
            Delivery Per Day
          </span>
        </CustomSpan>
      </StatisticsBox>
    </Container>
  );
}

export default Ambience;
