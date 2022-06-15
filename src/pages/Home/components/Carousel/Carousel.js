import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './carousel.scss';
const data = [
    {
        id: 0,
        img: 'https://www.mioto.vn/static/media/features-2.b132c16e.jpg',
    },
    {
        id: 1,
        img: 'https://www.mioto.vn/static/media/features-5.6d62e376.jpg',
    },
    {
        id: 2,
        img: 'https://www.mioto.vn/static/media/features-6.683ce1e0.jpg',
    },
    {
        id: 3,
        img: 'https://www.mioto.vn/static/media/features-3.df3f531c.jpg',
    },
    {
        id: 4,
        img: 'https://www.mioto.vn/static/media/features-4.c499646d.jpg',
    },
    {
        id: 5,
        img: 'https://www.mioto.vn/static/media/features-1.ea53dc74.jpg',
    },
];
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
}
const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4.3,
        slidesToScroll: 1.1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div>
            <div className="container">
                <h1>Tính năng nổi bật</h1>
                <Slider {...settings}>
                    {data.map((item) => {
                        return (
                            <div className="card" key={item.id}>
                                <img src={item.img} alt="" />
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default Carousel;
