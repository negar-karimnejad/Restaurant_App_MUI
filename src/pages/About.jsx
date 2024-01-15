import { Typography } from "@mui/material";
import { BookingBox } from "../theme";

const AboutPage = () => {
  return (
    <BookingBox>
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>
      <Typography variant="h5" fontWeight={"bold"} color="#000339">
        About Us
      </Typography>
      <Typography
        variant="p"
        fontSize={"16px"}
        textAlign={"center"}
        fontWeight={"500"}
        color="#5A6473"
        maxWidth={"500px"}
      >
        Welcome to our restaurant, where culinary exellence meets warm
        hospitality.
      </Typography>
    </BookingBox>
  );
};

export default AboutPage;
