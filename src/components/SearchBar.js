import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from "@mui/icons-material"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate();

    const handleSubmit = (e)=>{
      e.preventDefault()

      if(searchTerm){
        navigate(`/search/${searchTerm}`)
        setSearchTerm("")
      }

    }
    const handleChange = (e)=>{
      setSearchTerm(e.target.value)
    }
  return (
    <Paper component="form" onSubmit={handleSubmit} sx={{borderRadius: 20, border: "1px solid #e3e3e3", pl:2, boxShadow: "none", mr:{ sm:5 }}}>
        <input className="Search-Bar" placeholder="Search..." value={searchTerm} onChange={handleChange} style={{border: "none"}} />
        <IconButton type="submit" sx={{p: "10px", color: "red"}}>
            <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar
