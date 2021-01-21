import React from "react"
import Logo from "../navigation/Logo"
import InstagramIcon from "@material-ui/icons/Instagram"
import WhatsAppIcon from "@material-ui/icons/WhatsApp"
//import FacebookIcon from "@material-ui/icons/Facebook"
import { Link } from "gatsby"
import CompanyInfo from "../../data/CompanyInfo"

const data = CompanyInfo

function Footer() {
  const date = new Date().getFullYear()

  return (
    <section className="footer-container">
      <footer className="footer">
        <div className="footer__div--one">
          <Logo />
          <p className="footer__div--one--p">
            Afri-G fully means African Grace. Afri-G is a fashion brand that
            portrays Africa, Fashion, Youth and Grace. Afri-G makes affordable
            classy and casual wears and assesories to your taste.
          </p>
          <div className="footer__input">
            <input type="text" placeholder="Email Address" />
            <button className="footer__input--button">subscribe</button>
          </div>
          <div className="icons">
            <Link
              className="icon"
              to="/https://www.instagram.com/invites/contact/?i=11z8nq9rjvzjf&utm_content=cmanrhi"
            >
              <InstagramIcon />
            </Link>
            <Link
              className="icon"
              to="/https://api.whatsapp.com/send?phone=+2349059301192"
            >
              <WhatsAppIcon className="footer__div--one--socialmedia" />
            </Link>
            {/* <Link className="icon" to="/afrig">
              <FacebookIcon className="footer__div--one--socialmedia" />
            </Link> */}
          </div>
        </div>
        <div className="footer__div--two">
          <h1>Contact Us</h1>
          <div className="footer__div--two--content">
            {data.map((items, index) => (
              <p key={index}>
                <span>{items.span_one}</span>: <span>{items.span_two}</span>
              </p>
            ))}
          </div>
        </div>
        <div className="footer__div--help">
          <h1>help and support</h1>
          <div className="footer__div--help--content">
            <p>
              <Link className="links" to="/help">
                frequently asked questions
              </Link>
            </p>
            <p>
              <Link className="links" to="/help">
                delivery & returns
              </Link>
            </p>
            <p>
              <Link className="links" to="/help">
                Size guide
              </Link>
            </p>
            <p>
              <Link className="links" to="/help">
                terms & conditions
              </Link>
            </p>
            <p className="colored">Copyright &copy; {date}</p>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer
