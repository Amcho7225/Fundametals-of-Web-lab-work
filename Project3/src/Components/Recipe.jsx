import React from "react"
import { Box } from "@mui/material"
import { Card, CardContent } from "@mui/material"
import { v4 as uuidv4 } from "uuid"
import Title from "./Title"

const Recipe = ({ image, title, cuisine, dish, ingredients }) => {
  return (
    <>
      <Box
        component="article"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: 1,
          py: 2
        }}
      >
        <Card sx={{ bgcolor: "transparent", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <img src={image} loading="lazy" alt="food" />

          <CardContent sx={{ bgcolor: "transparent" }}>
            <h2>{title}</h2>
            <p>Cuisine type: {cuisine}</p>
            <p>Dish Type: {dish}</p>
            <Box component={"div"}>
              <Title text={"Ingredients:"} textAlign={"start"} />
              <Box key={uuidv4()} component={"ul"} sx={{ fontSize: "16px" }}>
                {ingredients.map(ingredient => (
                  <li>{ingredient.text}</li>
                ))}
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  )
}

export default Recipe
