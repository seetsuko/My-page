import React from "react"
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useRecoilState } from 'recoil'
import { menuOpenState } from "./atom/menuOpenState";
import { Link } from "react-router-dom";

export const Header = () => {

  const [ open, setOpen ] = useRecoilState(menuOpenState)

  return(
    <header>
      <IconButton
        size="large"
        color="inherit"
        onClick={()=>setOpen(!open)}
        >
        {open ?<CloseIcon/>:<MenuIcon />}
      </IconButton>
      <Link to="/" className="title"><h1>Setsuko's Profile Website</h1></Link>
    </header>
  )
}