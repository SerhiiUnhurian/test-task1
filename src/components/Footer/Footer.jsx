import React from 'react'


function Footer() {
  return (
    <footer>
      <div className='footer-content'>
          <ul className='socials'>
            <li><a href='#'><i class="fa-brands fa-linkedin fa-xl" ></i></a></li>
            <li><a href='#'><i class="fa-brands fa-instagram fa-xl"></i></a></li>
            <li><a href='#'><i class="fa-brands fa-telegram fa-xl"></i></a></li>
            <li><a href='#'><i class="fa-brands fa-facebook fa-xl"></i></a></li>
          </ul>
      </div>
      <div className='footer-bottom'>
        <span>Copyright &copy; {new Date().getFullYear()} All Rights Reserved</span>
      </div>
    </footer>
  )
}

export default Footer;