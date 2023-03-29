import { useRecoilValue } from "recoil"
import { iconState } from "../atoms/iconState"

export const Profile = () => {

  const icon = useRecoilValue(iconState)

  return(
    <div className="plofile">
        <h2>Profile</h2>
        <img src={icon} alt="プロフィール画像" className="icon"/>
        <ul>
          <li>
            <h3>名前</h3>
            <p>せつこ</p>
            <h3>生年月日</h3>
            <p>1993年 6月2日</p>
          </li>
        </ul>
    </div>
  )
}