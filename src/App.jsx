import { Box } from '@mui/material'
import './App.css'
import NavBar from './Layout/NavBar'
import { useState } from 'react';

function App() {
  const savedMode = localStorage.getItem("themeMode");
  const [mode, setMode] = useState(savedMode || "light");
  const handleModeChange = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
  }
  return (
    <Box sx={{ background: mode === "light" ? "#FFFFFF" : "#121120" , height:"100vh"}}>
      <NavBar mode={mode} handleModeChange={handleModeChange} />
    </Box>
  )
}

export default App
