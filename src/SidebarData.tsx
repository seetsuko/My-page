import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MailIcon from '@mui/icons-material/Mail';

type sidebar ={
  title:string
  icon:JSX.Element
  link:string
}
export const SidebarData:sidebar[] = [
  {
    title: "HOME",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "PROFILE",
    icon: <AccountCircleIcon />,
    link: "/profile",
  },
  {
    title: "HOBBY",
    icon: <MusicNoteIcon />,
    link: "/hobby",
  },
  {
    title: "CONTACT",
    icon: <MailIcon />,
    link: "/contact",
  },

]