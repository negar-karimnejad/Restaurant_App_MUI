import { Container, Box } from "@mui/material";
import { allDishes } from "../data/data";
import { DishesBoxes, DishesTitle } from "../theme";
import DishInfo from "./DishInfo";

function Dishes() {
  return (
    <Box sx={{ py: "4rem", backgroundColor: "#F5FAFE" }}>
      <Container>
        <DishesTitle variant="h4">Featured Dishes</DishesTitle>
        <DishesTitle variant="body1" color="gray">
          Explore variety of South Indian Dishes!!
        </DishesTitle>
        <DishesBoxes>
          {allDishes.map((dish) => (
            <DishInfo key={dish.id} {...dish} />
          ))}
        </DishesBoxes>
      </Container>
    </Box>
  );
}

export default Dishes;
