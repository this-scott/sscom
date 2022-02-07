import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import slidecss from './homeslider.module.css';
import { Navigation, Autoplay } from 'swiper';

export default function Homeslider() {
    return (
        <div className={slidecss.swipediv}>
            <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{delay: 8000}}>
                    <SwiperSlide>
                    <div className={slidecss.swipedimg}>
                        <img src="/images/16.jpg"
                        layout="fill" alt='gary'/>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={slidecss.swipedimg}>
                            <img src="/images/70.jpg"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={slidecss.swipedimg}>
                            <img src="/images/30.jpg"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div className={slidecss.swipedimg}>
                            <img src="/images/81.jpg"
                            layout="fill"
                            />
                        </div>
                    </SwiperSlide>
            </Swiper>
            <div className={slidecss.fancytext}>
                <h1>The Scott Styslinger Experience</h1> Version 0.9:UGH (Still Broken on Mobile)</div>
        </div>
    )
}

