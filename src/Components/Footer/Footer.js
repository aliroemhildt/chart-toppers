import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <p className='created-by'>Created by Ali Roemhildt</p>
      <div className='footer-links-container'>
        <a className='footer-link linkedin' href='https://www.linkedin.com/in/aliroemhildt/'>LinkedIn</a>
        <a className='footer-link github' href='https://github.com/aliroemhildt'>GitHub</a>
      </div>
    </footer>
  )
}

export default Footer;