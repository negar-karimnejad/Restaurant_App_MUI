import { Box, Typography } from "@mui/material";
import React from "react";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import { footerList } from "../data/data";
import { CustomFooterContainer, FooterIconBox, FooterLink } from "../theme";

const Footer = () => {
  return (
    <Box paddingY={10} backgroundColor={"#FFF6B2"}>
      <CustomFooterContainer>
        {footerList.map((list) => (
          <Box
            key={list.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "start" },
            }}
          >
            <Typography
              component="div"
              sx={{
                mb: 1,
                color: "#1C1C1D",
                fontSize: "20px",
                fontWeitgh: "700",
              }}
            >
              {list.listTitle}
            </Typography>
            {list.listItems.map((item, index) => (
              <React.Fragment key={index}>
                <FooterLink>{item}</FooterLink>
              </React.Fragment>
            ))}
          </Box>
        ))}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "start" },
            gap: "10px",
          }}
        >
          <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "#1C1C1D",
              fontSize: "20px",
              fontWeitgh: "700",
            }}
          >
            Get in touch
          </Typography>
          <Typography variant="body1" color="gray">
            Keep in touch with our social media pages.
          </Typography>
          <FooterIconBox>
            <img style={{ cursor: "pointer" }} src={facebook} alt="Facebook" />
            <img style={{ cursor: "pointer" }} src={twitter} alt="Twitter" />
            <img
              style={{ cursor: "pointer" }}
              src={instagram}
              alt="Instagram"
            />
          </FooterIconBox>
        </Box>
      </CustomFooterContainer>
    </Box>
  );
};

export default Footer;
