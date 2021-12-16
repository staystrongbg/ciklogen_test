import {
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import styles from '../styles/home.module.css';
import styles2 from '../styles/story.module.css';
import Image from 'next/image';
import Logo from '../public/logo/ciklogen_cir.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        <Image
          className={styles.logo}
          src={Logo}
          width='185'
          height='185'
          alt=''
        />
        <div className={styles2['social-icons']}>
          <FaFacebook />
          <FaTwitter />
          <FaGooglePlus />
          <FaInstagram />
        </div>
      </div>
      <p className={styles.createdBy}>&copy; ciklogen 2020</p>
    </footer>
  );
};

export default Footer;
