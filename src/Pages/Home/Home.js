import React, { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import "./Home.css";
import Sundarban from "../../images/sundorbon.png";
import Sajek from "../../images/Sajek.png";
import Sreemongol from "../../images/Sreemongol.png";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

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

    const sundarBans = <div>
      <h1 className="text-5xl">Sundarbans</h1>
      <p>Sundarbans is a mangrove area in the delta formed by the confluence of the Padma, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans the area from the Baleswar River in Bangladesh's division of Khulna to the Hooghly River in India's state of West Bengal.</p>
    </div>;

    const coxsBazar = <div>
      <h1 className="text-5xl">Cox's Bazar</h1>
      <p>Cox's Bazar is a city, fishing port, tourism centre, and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach. It is located 150 km south of the city of Chittagong.</p>
    </div>;

    const sajek = <div>
      <h1 className="text-5xl">Sajek Valley</h1>
      <p>Sajek Tripuri Valley is one of the most popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union,Baghaichhari Upazila in Rangamati District.The valley is 2,000 feet above sea level.</p>
    </div>

  return (
    <div className="home-page-background">
      <Header></Header>
      <div className="text-white lg:w-[80%] lg:mx-auto flex flex-col lg:flex-row items-center p-5 md:mt-40">
        <div className="md:w-[45%] mr-10">
          {
            marginCount === 1?sundarBans:marginCount === 2? coxsBazar: sajek
          }
          <button>Booking</button>
        </div>
        <div className="lg:w-[55%] w-[80%] mt-10 lg:mt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-[100%]">
                <div className={`w-[100%] ${marginCount === 1?'border-4 rounded-3xl border-yellow-300 bg-yellow-300':''}`}>
                    <img src={Sundarban} className='w-[100%] h-[100%]' alt="" />
                </div>
                <div className={`w-[100%] ${marginCount === 2?'border-4 rounded-3xl border-yellow-300 bg-yellow-300':''}`}>
                    <img src={Sajek} className='w-[100%] h-[100%]' alt="" />
                </div>
                <div className={`w-[100%] ${marginCount === 3?'border-4 rounded-3xl border-yellow-300 bg-yellow-300':''}`}>
                    <img src={Sreemongol} className='w-[100%] h-[100%]' alt="" />
                </div>
          </div>
          <div>
            <button className="bg-white text-black mr-2 w-10 h-10 text-2xl rounded-full pl-2" onClick={()=>setMarginCount(marginCount-1)}><AiOutlineArrowLeft></AiOutlineArrowLeft></button>
            <button className="bg-white text-black mr-2 w-10 h-10 text-2xl rounded-full pl-2" onClick={()=>setMarginCount(marginCount+1)}><AiOutlineArrowRight></AiOutlineArrowRight></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
