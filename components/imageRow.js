/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import resimgs from '../styles/resp_img.module.css';
import Modal from './Modal';

export const Row = (props) => {
  const [src, setSrc] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      style={{
        height: !props.image && !props.image1 && !props.image2 ? '0' : null,
      }}
      className={resimgs.row}
      onClick={(e) => {
        if (e.target.nodeName === 'IMG') {
          setShowModal(true);
          setSrc(e.target.src);
        }
      }}
    >
      {props.column && (
        <>
          <div className={resimgs.column}>
            <img src={props.image1} alt='' />
            {props.image3 && <img src={props.image3} alt='' />}
          </div>
          <div className={resimgs.column}>
            <img src={props.image2} alt='' />
            {props.image4 && <img src={props.image4} alt='' />}
          </div>
        </>
      )}
      {props.image && (
        <img
          className={resimgs.gridImg}
          src={props.image}
          alt=''
          style={{ width: '100%' }}
        />
      )}

      {showModal && <Modal showmodal={setShowModal} src={src} />}
    </div>
  );
};
