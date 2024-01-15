import { Typography } from "@mui/material";
import { BookingBox } from "../theme";

function NotFound() {
  return (
    <BookingBox sx={{ my: "5rem" }}>
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>
      <Typography variant="h5" fontWeight={"bold"} color="#000339">
        404 : Page Not Found
      </Typography>
      <Typography
        variant="p"
        fontSize={"16px"}
        textAlign={"center"}
        fontWeight={"500"}
        color="#5A6473"
        maxWidth={"500px"}
      >
        We could not find what you were looking for.
      </Typography>
    </BookingBox>
  );
}

export default NotFound;
