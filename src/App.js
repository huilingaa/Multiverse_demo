import "./App.css";
import "./index.css";
import { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Technology from "./components/Technology";
import Swiper from 'swiper';
import 'swiper/css';
function App() {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0)
  useEffect(() => {
    swiperRef.current.swiper = new Swiper('.swiper-container', {
      mousewheel: true,
      direction: 'vertical',
      followFinger : false,
      speed: 1000,
    });
    swiperRef.current.swiper.on('slideChange', function () {
      console.log(this.activeIndex,'eacs');
      setActive(this.activeIndex)
    });
  }, [])
  const handleToNext = () => {
    console.log('huidfj')
    swiperRef.current.swiper.slideNext();
  }
  const [nowNum, setNowNum] = useState(0)
  const handleWheel = (e) => {
    const next = nowNum + e.deltaY;

    const num = next <= 0 ? 0 : next > 10000 ? 10000 : next
    setNowNum(num);
    if (e.deltaY > 0 && num === 10000&&active==0) {
      handleToNext()
    } 
    if(active==1&&num<10000){
      swiperRef.current.swiper.slidePrev();
    }
  }
  return (
    <div className="App">
      {
        <div className="wrap" onWheel={e => handleWheel(e)}></div>
      }
      <Navbar active={active}  percent={(nowNum / 100).toFixed(2)} />
      <div ref={swiperRef} className="swiper-container" >
        <div className="swiper-wrapper">
          <div className="swiper-slide">
             <Introduction onClick={handleToNext} active={active} nowNum={nowNum}/>
          </div>
          <div className="swiper-slide">
            <Technology  onClick={handleToNext} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
