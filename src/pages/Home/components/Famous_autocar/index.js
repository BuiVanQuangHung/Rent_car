import React from 'react';
import Slider from 'react-slick';
import './famous_auto.scss';

//! Data
const data = [
    {
        id: 0,
        img: 'https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/HoChiMinh_v2.jpg',
        name: 'MAZDA 3 2019',
        title: 'Hồ Chí Minh',
        numberOfCar: '2000+',
    },
    {
        id: 1,
        img: 'https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/HaNoi_v2.jpg',
        title: 'Hà Nội',
        numberOfCar: '700+',
    },
    {
        id: 2,
        img: 'https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/DaNang_v2.jpg',
        title: 'Đà Nẵng',
        numberOfCar: '200+',
    },
    {
        id: 3,
        img: 'https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/BinhDuong_v2.jpg',
        title: 'Bình Dương',
        numberOfCar: '150+',
    },
    {
        id: 4,
        img: 'https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/CanTho_v2.jpg',
        title: 'Cần Thơ',
        numberOfCar: '110+',
    },
    {
        id: 5,
        img: 'https://n1-cstg.mioto.vn/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/DaLat_v2.jpg',
        title: 'Đà Lạt',
        numberOfCar: '60+',
    },
    {
        id: 6,
        img: 'https://n1-cstg.mioto.vn/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/NhaTrang_v2.jpg',
        title: 'Nha Trang',
        numberOfCar: '70+',
    },
    {
        id: 7,
        img: 'https://n1-cstg.mioto.vn/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/QuyNhon_v2.jpg',
        title: 'Quy Nhơn',
        numberOfCar: '60+',
    },
    {
        id: 8,
        img: 'https://n1-cstg.mioto.vn/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/PhuQuoc_v2.jpg',
        title: 'Phú Quốc',
        numberOfCar: '70+',
    },
    {
        id: 9,
        img: 'https://n1-cstg.mioto.vn/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/HaiPhong_v2.jpg',
        title: 'Hải Phòng',
        numberOfCar: '50+',
    },
    {
        id: 10,
        img: 'https://n1-cstg.mioto.vn/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/VungTau_v2.jpg',
        title: 'Vũng Tàu',
        numberOfCar: '70+',
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
const ListCarAuto = () => {
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
        <div className="container_autocar" style={{ marginBottom: '-15rem' }}>
            <h1> Địa điểm nổi bật - Xe tự lái</h1>
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

export default ListCarAuto;
