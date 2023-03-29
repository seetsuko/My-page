import { useRecoilValue } from "recoil"
import { iconState } from "../atoms/iconState"

export const Home = () => {

  const icon = useRecoilValue(iconState)

  return(
    <div className="home">
        <img src={icon} alt="プロフィール画像" className="icon"/>
        <h2>Welcome and thank you for visiting my website. </h2>
    </div>
  )
}