// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const ImageSlide = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     autoplay: true,
//     speed: 2500,
//     autoplaySpeed: 4000,
//     cssEase: "ease-in-out",
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="mb-10 lg:mb-20">
//       <div className="max-w-screen-2xl mx-6 my-10 lg:my-0 px-4 lg:px-0 lg:ml-32 lg:mr-20">
//         <h2 className="text-3xl sm:text-4xl font-medium font-raleway mb-8">
//           Galeri Kegiatan
//         </h2>
//         <Slider {...settings}>
//           <div className="px-2 justify-center items-center">
//             <img
//               src="../img/service/shipping/shipping_agency/Bekerja_Depan_Layar.JPG"
//               alt="Slide 1"
//               className="object-cover w-screen sm:w-80 h-64 sm:h-52"
//             />
//           </div>
//           <div className="px-2">
//             <img
//               src="../img/service/shipping/shipping_agency/Monthly_Meeting.JPG"
//               alt="Slide 2"
//               className="object-cover w-screen sm:w-80 h-64 sm:h-52"
//             />
//           </div>
//           <div className="px-2">
//             <img
//               src="../img/service/shipping/shipping_agency/Meeting_1-2.jpg"
//               alt="Slide 3"
//               className="object-cover w-screen sm:w-80 h-64 sm:h-52"
//             />
//           </div>
//           <div className="px-2">
//             <img
//               src="../img/service/shipping/shipping_agency/Monitoring_Penyandaran_Kapal.jpg"
//               alt="Slide 4"
//               className="object-cover w-screen sm:w-80 h-64 sm:h-52"
//             />
//           </div>
//           <div className="px-2">
//             <img
//               src="../img/service/shipping/shipping_agency/Boarding_At_Anchorage.jpg"
//               alt="Slide 5"
//               className="object-cover w-screen sm:w-80 h-64 sm:h-52"
//             />
//           </div>
//           <div className="px-2">
//             <img
//               src="../img/service/shipping/shipping_agency/Agent_On_Board.JPG"
//               alt="Slide 6"
//               className="object-cover w-screen sm:w-80 h-64 sm:h-52"
//             />
//           </div>
//           <div className="px-2">
//             <img
//               src="../img/service/shipping/shipping_agency/Document_Checking.JPG"
//               alt="Slide 7"
//               className="object-cover w-screen sm:w-80 h-64 sm:h-52"
//             />
//           </div>
//           <div className="px-2">
//             <img
//               src="../img/service/shipping/shipping_agency/Document_Checking_2.JPG"
//               alt="Slide 8"
//               className="object-cover w-screen sm:w-80 h-64 sm:h-52"
//             />
//           </div>
//           <div className="px-2">
//             <img
//               src="../img/service/shipping/shipping_agency/Reporting.jpg"
//               alt="Slide 9"
//               className="object-cover w-screen sm:w-80 h-64 sm:h-52"
//             />
//           </div>
//           <div className="px-2">
//             <img
//               src="../img/service/shipping/shipping_agency/In_Out_Clearence.jpeg"
//               alt="Slide 10"
//               className="object-cover w-screen sm:w-80 h-64 sm:h-52"
//             />
//           </div>
//           <div className="px-2">
//             <img
//               src="../img/service/shipping/shipping_agency/Free_Pratique_Clearence.JPG"
//               alt="Slide 11"
//               className="object-cover w-screen sm:w-80 h-64 sm:h-52"
//             />
//           </div>
//           <div className="px-2">
//             <img
//               src="../img/service/shipping/shipping_agency/Custom_Clearence.JPG"
//               alt="Slide 12"
//               className="object-cover w-screen sm:w-80 h-64 sm:h-52"
//             />
//           </div>
//           <div className="px-2">
//             <img
//               src="../img/service/shipping/shipping_agency/Hand_Over_Document_Clearence.jpg"
//               alt="Slide 13"
//               className="object-cover w-screen sm:w-80 h-64 sm:h-52"
//             />
//           </div>
//           <div className="px-2">
//             <img
//               src="../img/service/shipping/shipping_agency/Diskusi_Dengan_Pandu2.jpeg"
//               alt="Slide 14"
//               className="object-cover w-screen sm:w-80 h-64 sm:h-52"
//             />
//           </div>
//           <div className="px-2">
//             <img
//               src="../img/service/shipping/shipping_agency/Diskusi_Dengan_Pandu.jpeg"
//               alt="Slide 15"
//               className="object-cover w-screen sm:w-80 h-64 sm:h-52"
//             />
//           </div>
//           <div className="px-2">
//             <img
//               src="../img/service/shipping/shipping_agency/Create_Invoice.jpeg"
//               alt="Slide 16"
//               className="object-cover w-screen sm:w-80 h-64 sm:h-52"
//             />
//           </div>
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default ImageSlide;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  items: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <section className="mb-10 lg:mb-20">
      <div className="max-w-screen-2xl mx-6 my-10 lg:my-0 lg:px-0 lg:mx-32">
        <h2 className="text-3xl sm:text-4xl font-medium font-raleway mb-8 sm:mb-14">
          Galeri Kegiatan
        </h2>
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="px-4">
              {item}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
