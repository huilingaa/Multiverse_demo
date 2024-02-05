import React, { useRef } from 'react';
import "../App.css";
import "./Introduction.css";
import videoBg from "../assets/video1.mp4";
// import ScrollEffect from "./Scrolleffect";
// import Navbar from "./Navbar";
import Ribbon from "./Ribbon";
import { Link } from "react-router-dom";
import MouseEffect from "./MouseEffect";
// import transition from "../transition";

const Introduction = (props) => {
  const boxRef = useRef(null);
  const handleScroll = (e) => {
    if ((boxRef.current.scrollHeight - boxRef.current.clientHeight) === boxRef.current.scrollTop) {
      console.log('已经滑动到底部');
    } else {
      console.log('未滑动到底部');
    }
  }
  const handleWheel = (e) => {
    e.stopPropagation();
    if (e.deltaY > 0) {
      console.log('朝上')
    } else {
      console.log('朝下')
    }
  }
  console.log(props.active, 890790878)
  return (
    <div className="introduction">
      {/* <Navbar /> */}

      <div className="box">
        <video src={videoBg} autoPlay muted loop className="video-bg" />

        <div className="scroll-main">
          <div ref={boxRef} className="scroll" onScroll={(e) => handleScroll(e)}>
            <div className="scroll-wrapper">
              {
                new Array(20).fill(0).map((v, i) => {
                  const active = 1 - (Math.abs(props.nowNum - i * 500 ) / 500) / 3
                  const active2 = ((20 - i) * 500 + props.nowNum) / 10000 * 4 - 4 + 1
                  return <p className='absolute-p' style={{
                    opacity: active2 < 0.6 ? 0 : active,
                    transform: `translateY(${ i * 100 - props.nowNum / 5 }px) scale(${active2})`
                  }}>When {i} you want { i % 2 ? 'something' : ''}</p>
                })
              }
            </div>
          </div>
          num / 10000
          <div className="ribbon">
            <Link to={"/awwards"}>
              <Ribbon />
            </Link>
          </div>
        </div>
      </div>
      <Link to={"/technology"}>
        <div className="down">
          <MouseEffect />
        </div>
      </Link>
    </div>
  );
};

export default Introduction;
