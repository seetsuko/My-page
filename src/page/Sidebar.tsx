import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { menuOpenState } from "../atoms/menuOpenState"
import { SidebarData } from "../compornents/SidebarData"

export const Sidebar = () => {

  const navigation = useNavigate()
  const [ open,setOpen ] = useRecoilState(menuOpenState)

  return(
    <div className="sidebar">
    <ul className="sidebar-list">
      {SidebarData.map((value, key)=>{
        return(
          <li 
            key={key}
            id={window.location.pathname === value.link ? "active" : ""} 
            className="row" 
            onClick={()=>{
              setOpen(false)
              navigation(value.link) 
          }}>
            <div id="icon">{value.icon}</div>
            <div id="title">{value.title}</div>
          </li>
        )
      })}
    </ul>
  </div>
  )
}