import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="logo"><span className="job">Job</span><span className="hunt">Hunt</span></div>
        <div className="para">
        The quickest and most effective way to get hired by the top firm working in your career interest areas.
        </div>
      </div>
    <div className="bottom">
        <div className="quick">
            <ul>
                <li><b>Quick Links</b></li>
                <li>Home</li>
                <li>Jobs</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className="links">
            <ul>
                <li><b>Follow Us</b></li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
                <li>SnapChat</li>
            </ul>
        </div>
        <div className="contact">
            <ul>
                <li><b>Contact Us</b></li>
                <li>📞 +3232 2323 232</li>
                <li>📧 sales@jobhunt.in</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Footer
