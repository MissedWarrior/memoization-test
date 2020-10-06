import React, { useRef, useEffect } from 'react';

/**
 * Component that alerts if you click outside of it
 */
export const ClickOutside = props => {
  const wrapperRef = useRef(null);
  useClickedOutside(wrapperRef, props.callback);

  return (
    <div ref={ wrapperRef }>
      { props.children }
    </div>
  );
};

/**
 * Хук, вызывающий коллбек, если клик был произведён снаружи компонента
 */
const useClickedOutside = (ref, callback) => {

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.addEventListener('click', handleClickOutside);
    return () => {
      body.removeEventListener('click', handleClickOutside);
    };
  }, []);
};
