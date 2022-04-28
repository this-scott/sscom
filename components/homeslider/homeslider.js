import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import slidecss from './homeslider.module.css';
import { Navigation, Autoplay } from 'swiper';
import Image from 'next/image';

function Homeslider() {
    return (
        <div className={slidecss.swipediv}>
            <Swiper
            priority='true'
            modules={[Navigation, Autoplay]}
            navigation
            loop='true'
            autoplay={{delay: 8000}}>
                    <SwiperSlide priority='true'>
                    <div className={slidecss.swipedimg}>
                        <Image src="/images/16.jpg"
                        layout="fill" alt='gary' priority='true'/>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={slidecss.swipedimg}>
                            <img src="/images/70.jpg"
                            layout="fill" alt='2'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={slidecss.swipedimg}>
                            <img src="/images/30.jpg"
                            layout="fill" alt='3'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={slidecss.swipedimg}>
                            <img src="/images/81.jpg"
                            layout="fill" alt='4'/>
                        </div>
                    </SwiperSlide>
            </Swiper>
            <div className={slidecss.fancytext}>
                <h1>The Scott Styslinger Experience</h1> Version 0.8.2:BUGGED. Now featuring small optimizations :D</div>
            </div>
    )
}

export default Homeslider