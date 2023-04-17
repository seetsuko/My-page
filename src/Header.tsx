import React from "react"
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// import { useRecoilState } from 'recoil'
// import { menuOpenState } from './atoms/menuOpenState';

export const Header = () => {

  // const [ open, setOpen ] = useRecoilState(menuOpenState)

  return(
    <header>
      {/* <IconButton
        size="large"
        color="inherit"
        onClick={()=>setOpen(!open)}
        >
        {open ?<CloseIcon/>:<MenuIcon />}
      </IconButton> */}
      <h1>Setsuko's Profile Website</h1>
    </header>
  )
}