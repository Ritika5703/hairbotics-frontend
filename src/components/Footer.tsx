import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "../styles/FooterStyles";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Column 1: Logo + Tagline */}
        <div className={styles.logoBlock}>
          <div className={styles.logo}>
            Hairbotics<span className={styles.logoHighlight}>.</span>
          </div>
          <p className={styles.tagline}>
            Stay confident. Stay iconic. Let your hair do the talking.
          </p>
        </div>

        {/* Column 2: Navigation links */}
        <div>
          <div className={styles.links}>
            <Link to="/privacy" className={styles.link}>
              Privacy Policy
            </Link>
            <Link to="/terms" className={styles.link}>
              Terms of Service
            </Link>
            <Link to="/contact" className={styles.link}>
              Contact
            </Link>
          </div>
          {/* Footer bottom copy */}
          <div className={styles.copy}>
            &copy; {new Date().getFullYear()} Hairbotics. All rights reserved.
          </div>
        </div>

        {/* Column 3: Social links */}
        <div className={styles.socialMedia}>
          <a href="#" className={styles.socialLink}>
            <FaFacebook />
          </a>
          <a href="#" className={styles.socialLink}>
            <FaInstagram />
          </a>
          <a href="#" className={styles.socialLink}>
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
