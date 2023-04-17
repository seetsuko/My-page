import React from "react"
import { Routes, Route } from "react-router-dom"
// import { Contact } from "../page/Contact"
// import { Hobby } from "../page/Hobby"
// import { Home } from "../page/Home"
// import { Profile } from "../page/Profile"

export const Router = () => {

  // console.log(process.env.PUBLIC_URL)

  return(
    <div className="route">
      <p>ルーターページ</p>
      {/* <Hobby /> */}
      {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/profile" element={<Profile />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="/contact" element={<Contact />} /> */}
      {/* </Routes> */}
    </div>
  )
}