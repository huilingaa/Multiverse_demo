import "./App.css";
import { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Technology from "./components/Technology";
// import Tech from "./components/Tech";
// import Music from "./components/Music";
import Swiper from 'swiper';
import 'swiper/css';
// import { Route, Routes } from "react-router-dom";
// import Ribbon from "./components/Ribbon";
// import Awwards from "./components/Awwards";
// import { AnimatePresence } from "framer-motion";
// import Sidebar from "./components/Siderbar";
// import MenuIcon from "@mui/icons-material/Menu";
function App() {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0)
  useEffect(() => {
    console.log(swiperRef, 9897)
    swiperRef.current.swiper = new Swiper('.swiper-container', {
      mousewheel: true,
      direction: 'vertical',
      followFinger : false,
      speed: 1000,
    });
    swiperRef.current.swiper.on('slideChange', function () {
      console.log(this.activeIndex);
      setActive(this.activeIndex)
    });
  }, [])
  const handleToNext = () => {
    swiperRef.current.swiper.slideNext();
  }
  const [nowNum, setNowNum] = useState(0)
  const handleWheel = (e) => {

    console.log('bhvbhgvhg',e)

    const next = nowNum + e.deltaY;
    const num = next <= 0 ? 0 : next > 10000 ? 10000 : next
    setNowNum(num);
    if (e.deltaY > 0 && num === 10000) {
      handleToNext()
    } else {
      console.log('朝下')
    }
    console.log(nowNum)
  }
  return (
    <div className="App">
      {
       active === 0 && <div className="wrap" onWheel={e => handleWheel(e)}></div>
      }

      <Navbar />
      <div ref={swiperRef} className="swiper-container" >
        <div className="swiper-wrapper">
          <div className="swiper-slide">
             <Introduction toNext={handleToNext} active={active} nowNum={nowNum}/>
          </div>
          <div className="swiper-slide">
            <Technology />
          </div>
        </div>
      </div>

      {/* <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/music" element={<Music />} />
          <Route path="/awwards" element={<Awwards />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/menuicon" element={<MenuIcon />} />
        </Routes>
      </AnimatePresence> */}
      {/* <Ribbon /> */}
    </div>
  );
}

export default App;
