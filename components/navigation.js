import styles from '../styles/home.module.css';
import data from '../data';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/logo/ciklogen_cir.svg';
import { useRouter } from 'next/router';
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();
  return (
    <>
      <button
        className={styles['sidebar-toggle']}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? (
          <FaTimes className={styles['sidebar-toggle']} />
        ) : (
          <FaBars className={styles['sidebar-toggle']} />
        )}
      </button>
      {showSidebar && (
        <aside className={styles['sidebar']}>
          <div className={styles['sidebar-header']}>
            <Link href='/'>
              <a>
                <Image
                  className={styles.logo}
                  src={Logo}
                  onClick={() => setShowSidebar(!showSidebar)}
                  width='105'
                  height='105'
                  alt=''
                />
              </a>
            </Link>
          </div>
          <div
            onClick={() => setShowSidebar(!showSidebar)}
            className={styles['links']}
          >
            {data.map(({ url, name }, idx) => (
              <Link key={idx} href={`/${url}`}>
                <a className={styles.link}>{name}</a>
              </Link>
            ))}
          </div>
        </aside>
      )}
    </>
  );
};

export default Navbar;
