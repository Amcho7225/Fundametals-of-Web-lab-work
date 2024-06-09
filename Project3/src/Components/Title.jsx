import { Typography } from "@mui/material"
import React from "react"

const Title = ({ text, textAlign }) => {
  return (
    <Typography
      variant="h6"
      component="h4"
      sx={{
        color: "#333",
        fontWeight: "700",
        textAlign: textAlign
      }}
    >
      {text}
    </Typography>
  )
}

export default Title
