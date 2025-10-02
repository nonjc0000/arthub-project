



import React, { useState, useEffect, useRef } from 'react'


const PageTop = () => {
  const topRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const scrollThreshold = 20; // 滾動超過200px才顯示


  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
     
      if (currentScroll > scrollThreshold) {
        // 向下滾動
        if (currentScroll > lastScrollTop) {
          setShowButton(true);
        }
        // 向上滾動
        else {
          setShowButton(false);
        }
      } else {
        // 在頂部附近時隱藏按鈕
        setShowButton(false);
      }
     
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);


  function gotoTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }


  return (
    <div
      ref={topRef}
      className={`pageTop_box ${showButton ? 'show' : ''}`}
    >
      <button onClick={gotoTop} className='pageTop_link'>
        <div className='pageTop_text'>
          <img src="./images/pageTop/pageTop_text.svg" alt="pageTop_text" />
        </div>
        <div className='pageTop_finger'>
          <img src="./images/pageTop/pageTop_finger.svg" alt="pageTop_finger" />
        </div>
      </button>
    </div>
  )
}




export default PageTop



