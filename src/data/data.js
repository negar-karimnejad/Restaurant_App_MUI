import food1 from "../assets/Food1.jpg";
import food2 from "../assets/Food2.jpg";
import food3 from "../assets/Food3.jpeg";
import buyIcon from "../assets/buy_icon.png";
import sellIcon from "../assets/sell_icon.png";

export const navLinks = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Dishes", link: "/dishes" },
  { id: 3, title: "Services", link: "/services" },
  { id: 4, title: "About Us", link: "/about-us" },
];

export const footerList = [
  {
    id: 1,
    listTitle: "Featured",
    listItems: ["Guides", "Services", "Contact Us"],
  },
  {
    id: 2,
    listTitle: "Overview",
    listItems: ["Location", "Partnerships", "Terms of use & Privacy Policies"],
  },
];

export const bookList = [
  {
    id: 1,
    title: " Order Guides",
    buttonTitle: "How to Order",
    img: buyIcon,
  },
  {
    id: 2,
    title: "Booking Guides",
    buttonTitle: " How to Book",
    img: sellIcon,
  },
  {
    id: 3,
    title: " Payment Guides",
    buttonTitle: " Payment Methods",
    img: sellIcon,
  },
];

export const allDishes = [
  {
    id: 1,
    title: "Combo Dishes",
    price: "3500",
    img: food1,
    actions: [2, 2, 200],
  },
  {
    id: 2,
    title: "London Popcorn",
    price: "3800",
    img: food2,
    actions: [3, 2, 2300],
  },
  {
    id: 3,
    title: "Shawarma Pro",
    price: "4700",
    img: food3,
    actions: [4, 3, 3000],
  },
];
