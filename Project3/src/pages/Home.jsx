import React from "react"
import Recipe from "../Components/Recipe"
import { v4 as uuidv4 } from "uuid"
import { Box, Typography, Button, TextField, Stack } from "@mui/material"

function Home({ recipes, updateSearch, handleSubmit, search }) {
  return (
    <>
      <Stack
        component="section"
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          py: 10,
          px: 2
        }}
      >
        <Typography
          variant="h4"
          component="h6"
          sx={{
            color: "#333",
            fontWeight: "700",
            paddingTop: 3
          }}
        >
          MY RECIPES
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{
            width: "300px",
            flexDirection: "column",
            mt: 1,
            py: 2
          }}
        >
          <TextField margin="normal" required fullWidth id="text" type="text" label="Input food" name="search" autoComplete="text" autoFocus onSubmit={handleSubmit} value={search} onChange={updateSearch} />
          <Button
            variant="contained"
            fullWidth
            type="submit"
            size="medium"
            sx={{
              fontSize: "0.9rem",
              textTransform: "capitalize",
              py: 2,
              mt: 3,
              mb: 2,
              borderRadius: 1,
              backgroundColor: "#0d2069",
              "&:hover": {
                backgroundColor: "#132468"
              }
            }}
          >
            Search
          </Button>
        </Box>
      </Stack>

      <Box
        component="section"
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
        {recipes.map(recipe => (
          <Recipe key={uuidv4()} title={recipe.recipe.label} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} cuisine={recipe.recipe.cuisineType} dish={recipe.recipe.dishType} />
        ))}
      </Box>
    </>
  )
}

export default Home
