import { Routes, Route } from "react-router-dom"
import { Contact } from "../page/Contact"
import { Hobby } from "../page/Hobby"
import { Home } from "../page/Home"
import { Profile } from "../page/Profile"

export const Router = () => {

  console.log(process.env.PUBLIC_URL)

  return(
    <div className="route">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}/>
        <Route path={`${process.env.PUBLIC_URL}/profile`} element={<Profile />}/>
        <Route path={`${process.env.PUBLIC_URL}/hobby`} element={<Hobby />} />
        <Route path={`${process.env.PUBLIC_URL}/contact`} element={<Contact />} /> */}
      </Routes>
    </div>
  )
}