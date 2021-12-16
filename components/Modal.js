/* eslint-disable @next/next/no-img-element */
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import data from '../data';
import styles1 from '../styles/resp_img.module.css';
import { useRouter } from 'next/router';

const Modal = ({ src, showmodal }) => {
  const [loc] = useState(useRouter().pathname);

  const [slides, setSlides] = useState(
    data.filter((u) => u.url === loc).map((i) => i.photos)
  );
  const [error, setError] = useState(false);
  const startIndex = slides[0].find((slide) => slide.src === src);
  let [index, setIndex] = useState(startIndex.id);

  const handleClick = (dir) => {
    if (dir === 'left') {
      setIndex(index > 0 ? index - 1 : (index = slides[0].length - 1));
    } else {
      setIndex(index < slides[0].length - 1 ? index + 1 : (index = 0));
    }
  };

  return (
    <>
      {slides && (
        <div className={styles1['modal-overlay']}>
          <div className={styles1.imgContainer}>
            <img
              className={styles1['modal-img']}
              src={slides[0][index].src}
              alt=''
            />
            <button
              className={styles1['close-modal']}
              onClick={() => showmodal(false)}
            >
              <FaTimes />
            </button>
          </div>

          <div className={styles1['btns']}>
            <button className={`${styles1.left} ${styles1.btn}`}>
              <FaChevronLeft dir='left' onClick={() => handleClick('left')} />
            </button>
            <button className={`${styles1.right} ${styles1.btn}`}>
              <FaChevronRight
                dir='right'
                onClick={() => handleClick('right')}
              />
            </button>
          </div>
        </div>
      )}
      {error && <h1>Nothing to show...</h1>}
    </>
  );
};

export default Modal;
