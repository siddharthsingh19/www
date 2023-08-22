import React from "react";
import "./testimonial.css";
import img from "../../../assets/anne.png";
import testimonials from "../../../testimonials";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
    return (
        <section id="testimonials">
            <h5>Review From Clients</h5>
            <h2>Testimonials</h2>
            <Swiper
                className=" testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {testimonials.map(({ id, avatar, name, review }) => {
                    return (
                        <SwiperSlide key={id} className="testimonial">
                            <div className="client__avatar">
                                <img src={avatar} alt="" />
                            </div>
                            <h5 className="client__name">{name}</h5>
                            <small className="client__review">{review}</small>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Testimonial;
