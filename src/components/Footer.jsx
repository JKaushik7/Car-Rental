import { IconMail, IconPhoneCall } from "@tabler/icons-react";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>CAR</span> Connect
              </li>
              <li>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li>
                <a href="tel:123456789">
                  <IconPhoneCall /> &nbsp; +91 12345 67890
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                carrental@gmail.com">
                  <IconMail />
                  &nbsp; carconnect@gmail.com
                </a>
              </li>

              {/* <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://xpeedstudio.com/"
                >
                  Design by XpeedStudio
                </a>
              </li> */}
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="#home">COMPANY PROFILE</a>
              </li>
              <li>
                <a href="#home">HELP & SUPPORT</a>
              </li>
              <li>
                <a href="#home">ABOUT US</a>
              </li>
              <li>
                <a href="#home">CAREERS</a>
              </li>
              <li>
                <a href="#home">BLOG</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Sun: </li>
              <li> 9:00AM - 9:00PM</li>
              {/* <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li> */}
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
