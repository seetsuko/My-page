import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
  return(
      <footer>
        <p>ⓒ 2023 Setsuko</p>
        <div>
          <a className='icon-link' href="https://twitter.com/drop_drop_stc"><p>twitter<TwitterIcon/></p></a>
          <a className='icon-link' href="https://github.com/seetsuko"><p>github<GitHubIcon /></p></a>
          
        </div>
      </footer>
  )
}