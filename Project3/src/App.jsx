import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

import "./App.css"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import { Stack } from "@mui/material"

function App() {
  const APP_ID = "5b9e295c"
  const APP_KEY = "d28ecc1e80a82828fb1036c2355e17b9"
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("Drinks")

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json()
      setRecipes(data.hits)
      console.log(data)
    }
    getRecipes()
  }, [query])

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home recipes={recipes} updateSearch={updateSearch} handleSubmit={handleSubmit} search={search} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
