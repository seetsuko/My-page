import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
// import { Router } from './routes/Router';

export const App = () =>{
  
  // const open = useRecoilValue(menuOpenState)

  // console.log(open)

  return(
    <div>
      <Header />
      {/* {open && <Sidebar />}  */}
      {/* <Router /> */}
      <Footer />
    </div>
  )
}

