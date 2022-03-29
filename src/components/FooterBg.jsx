import React, { useLayoutEffect, useState } from 'react';
import footerBg from "../images/footer.svg";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const FooterBg = () => {

  const [width, height] = useWindowSize();

  return (
    <div>
      {width>=1150 && <img src={footerBg} className="footer-bg"/>}
    </div>
  )
}

export default FooterBg;