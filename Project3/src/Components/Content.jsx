import React from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";

import Title from "./Title";
import Paragraph from "./Paragraph";

const Content = () => {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        py: 10,
        px: 2,
      }}
    >
      <Grid item xs={12} sm={12} md={5} component="section" textAlign={"center"}>
        <Title text={"What we are offering?"} textAlign={"center"} />

        <Typography
          variant="h6"
          component="h4"
          textAlign={"center"}
          sx={{
            fontWeight: "400",
            paddingTop: 1,
            color: "#333",
          }}
        >
          Property facilities
        </Typography>

        <Paragraph
          text={
            "QuickRecipeFinder is a simple and efficient web application designed to help you quickly find recipes based on ingredients or recipe names. This lightweight project leverages an API to deliver relevant recipes right to your screen with minimal effort. Whether you have a specific dish in mind or just a few ingredients you want to use, QuickRecipeFinder will provide you with a list of recipes to choose from. The streamlined interface ensures a hassle-free experience, focusing on easy search functionality without any additional features. Perfect for those who need quick inspiration for their next meal!"
          }
          maxWidth={"100%"}
          mx={0}
        />

        <img style={{ width: "100%", height: "auto" }} src="./src/assets\Gordon-Ramsay-PNG-Cutout.png" />
      </Grid>
    </Grid>
  );
};

export default Content;
