import React, { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import "./Home.css";
import Sundarban from "../../images/sundorbon.png";
import Sajek from "../../images/Sajek.png";
import Sreemongol from "../../images/Sreemongol.png";

const Home = () => {
    const [marginCount, setMarginCount] = useState(1);

    useEffect(()=>{
        if(marginCount > 3){
            setMarginCount(1);
        }
        else if(marginCount <1){
            setMarginCount(3)
        }
    },[marginCount]);

  return (
    <div className="home-page-background">
      <Header></Header>
      <div className="text-white border border-yellow-300 lg:w-[80%] lg:mx-auto flex items-center p-5">
        <div>
          <div>
            <h1>COX'S BAZAR</h1>
            <p>
                Cox's Bazar is a city,fishing port,tourism centre and district
                headquarters in southeastern Bangladesh.It is famous mostly for its
                long natural sandy beach,and it...{" "}
            </p>
          </div>
          <button>Booking</button>
        </div>
        <div className="w-[80%]">
          <div className="grid grid-cols-3">
                <div className={`w-[250px] relative ${marginCount === 1?'border-4 rounded-2xl border-yellow-300 bg-yellow-300':''}`}>
                    <img src={Sundarban} className='w-[100%] h-[100%]' alt="" />
                    <h3 className="absolute top-72 left-20">Sundarban</h3>
                </div>
                <div className={`w-[250px] ${marginCount === 2?'border-4 rounded-2xl border-yellow-300 bg-yellow-300':''}`}>
                    <img src={Sajek} className='w-[100%] h-[100%]' alt="" />
                </div>
                <div className={`w-[250px] ${marginCount === 3?'border-4 rounded-2xl border-yellow-300 bg-yellow-300':''}`}>
                    <img src={Sreemongol} className='w-[100%] h-[100%]' alt="" />
                </div>
          </div>
          <div>
            <button onClick={()=>setMarginCount(marginCount-1)}>prev</button>
            <button onClick={()=>setMarginCount(marginCount+1)}>next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
