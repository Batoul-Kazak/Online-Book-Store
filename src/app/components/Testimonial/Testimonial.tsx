import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { testimonialData } from "@/app/index";

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="text-center mb-20 max-w-[400px] mx-auto pt-25 flex flex-col gap-15">
          <h2 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            What our customers says?
          </h2>
          <div>
            <h1 className="Books text-xl">Testimonials</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi vel
              earum praesentium laboriosam consequuntur autem tempora in
              maiores, aspernatur reiciendis sunt nobis temporibus nam aperiam
              totam adipisci? Consequatur, facere dolore.
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="300"
          className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
        >
          <Slider {...settings}>
            {testimonialData.map((data) => {
              return (
                <div className="my-6" key={data.id}>
                  <div
                    key={data.id}
                    className=" flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                  >
                    <div>
                      <Image
                        className="rounded-full w-20 h-20"
                        src={data.img}
                        alt={data.name + data.id}
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-gray-500 text-sm">{data.text}</p>
                        <h1 className="text-xl font-bold text-black/80 dark:text-light">
                          {data.name}
                        </h1>
                      </div>
                    </div>

                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                      ,,
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
