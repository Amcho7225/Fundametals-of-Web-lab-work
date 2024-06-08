import React, { useState } from "react"
import { Box, Button, Stack, TextField } from "@mui/material"
import Title from "./Title"
import Paragraph from "./Paragraph"

const Details = () => {
  const [formData, setFormData] = useState({ email: "", phone: "" })
  const [errors, setErrors] = useState({ email: "", phone: "" })

  const handleSubmit = event => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = data.get("email")
    const phone = data.get("phone")

    setErrors({ email: "", phone: "" })

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phonePattern = /^[0-9]{10,15}$/

    let valid = true
    let emailError = ""
    let phoneError = ""

    if (!emailPattern.test(email)) {
      emailError = "Please enter a valid email address."
      valid = false
    }

    if (!phone) {
      phoneError = "Phone number is required."
      valid = false
    } else if (!phonePattern.test(phone)) {
      phoneError = "Please enter a valid phone number."
      valid = false
    }

    setErrors({ email: emailError, phone: phoneError })

    if (valid) {
      console.log({ email, phone })
    }
  }

  const handleChange = event => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
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
      <Title text={"Contact Us"} textAlign={"center"} />
      <Paragraph text={"Have questions or feedback? We're here to help! Use the form below to get in touch with our team. Your satisfaction is our top priority at RecipeQuest."} maxWidth={"sm"} mx={0} textAlign={"center"} />

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
        <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus value={formData.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} />
        <TextField margin="normal" required fullWidth name="phone" label="Phone Number" type="phone" id="phone" autoComplete="current-phone" value={formData.phone} onChange={handleChange} error={!!errors.phone} helperText={errors.phone} />
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
          Send
        </Button>
      </Box>
    </Stack>
  )
}

export default Details
