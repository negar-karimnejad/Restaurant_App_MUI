import { ArrowForward } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { bookList } from "../data/data";
import { BookingBox, BookingGrid } from "../theme";
import CustomButton from "./CustomButton";

function Booking() {
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
        How to Book?
      </Typography>
      <Typography
        variant="p"
        fontSize={"16px"}
        textAlign={"center"}
        fontWeight={"500"}
        color="#5A6473"
      >
        Everthing you need to know when you book for advance slot
      </Typography>
      <BookingGrid container>
        {bookList.map((list) => (
          <Grid key={list.id} item md={3} xs={12}>
            <img src={list.img} alt="Buy" />
            <Typography
              variant="body1"
              fontWeight={"500"}
              fontSize={"20px"}
              color="#3B3C45"
            >
              {list.title}
            </Typography>
            <Button
              variant="body2"
              sx={{
                whiteSpace: "nowrap",
                fontWeight: "bold",
                fontSize: "12px",
                color: "#0689FF",
              }}
            >
              {list.buttonTitle}
              <ArrowForward sx={{ fontWeight: "bold", fontSize: "16px" }} />
            </Button>
          </Grid>
        ))}
      </BookingGrid>
      <CustomButton color="#FFF" backgroundColor="#0F1B4C" guideBtn={true}>
        See Full Guides
      </CustomButton>
    </BookingBox>
  );
}

export default Booking;
