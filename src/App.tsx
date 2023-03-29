import './App.css';
import { Sidebar } from './page/Sidebar';
import { Footer } from './Footer';
import { Header } from './Header';
import { Router } from './routes/Router';
import { menuOpenState } from './atoms/menuOpenState';
import { useRecoilValue } from 'recoil';

function App() {

  const open = useRecoilValue(menuOpenState)

  console.log(open)

  return (
    <div>
      <Header />
      {open && <Sidebar />} 
      <Router />
      <Footer />
    </div>
  );
}

export default App;
