import React from 'react';
import Slider from 'react-slick';

//! Data
const data = [
    {
        id: 0,
        img: 'https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/HoChiMinh_v2.jpg',
        title: 'Hồ Chí Minh',
        numberOfCar: '800+',
    },
    {
        id: 1,
        img: 'https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/HaNoi_v2.jpg',
        title: 'Hà Nội',
        numberOfCar: '200+',
    },
    {
        id: 2,
        img: 'https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/DaNang_v2.jpg',
        title: 'Đà Nẵng',
        numberOfCar: '100+',
    },
    {
        id: 3,
        img: 'https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/BinhDuong_v2.jpg',
        title: 'Bình Dương',
        numberOfCar: '50+',
    },
    {
        id: 4,
        img: 'https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/CanTho_v2.jpg',
        title: 'Cần Thơ',
        numberOfCar: '20+',
    },
    {
        id: 5,
        img: 'https://n1-cstg.mioto.vn/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/DaLat_v2.jpg',
        title: 'Đà Lạt',
        numberOfCar: '60+',
    },
];

//! Function
function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
}
const ListCarNormal = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 5.5,
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

    //! Render
    return (
        <div className="container_autocar">
            <h1> Địa điểm nổi bật - Xe có tài xế </h1>
            <Slider {...settings}>
                {data.map((item) => {
                    return (
                        <div className="card" key={item.id}>
                            <img src={item.img} alt={item.title} />
                            <h2>
                                {item.title}
                                <h3>{item.numberOfCar}</h3>
                            </h2>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default ListCarNormal;
