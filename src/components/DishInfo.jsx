import { FavoriteBorder, Share, ThumbUpOffAlt } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import {
    DishesInfoActionBox,
    DishesInfoContainer,
    DishesInfoDesc,
} from "../theme";

function DishInfo(dish) {
  return (
    <DishesInfoContainer>
      <img style={{ maxWidth: "100%" }} src={dish.img} alt={dish.title} />
      <DishesInfoDesc>
        <Typography fontSize={"20px"} fontWeight={"bold"}>
          ${dish.price}
        </Typography>
        <Typography fontSize={"20px"} fontWeight={"600"} color="#333">
          {dish.title}
        </Typography>
        <DishesInfoActionBox>
          {dish.actions.map((action, index) => (
            <Box key={index} display={"flex"} alignItems={"center"} gap={1}>
              {index === 0 && <ThumbUpOffAlt sx={{ color: "orange" }} />}
              {index === 1 && <FavoriteBorder sx={{ color: "orange" }} />}
              {index === 2 && <Share sx={{ color: "orange" }} />}
              {action}
            </Box>
          ))}
        </DishesInfoActionBox>
      </DishesInfoDesc>
    </DishesInfoContainer>
  );
}

export default DishInfo;
