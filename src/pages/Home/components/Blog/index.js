import React from 'react';
import Slider from 'react-slick';
import './blog.scss';

//! Function
function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
}
const Blog = () => {
    const data = [
        {
            id: 0,
            detail: 'Là một tỉnh thuộc duyên hải miền Trung, Huế được biết đến với vẻ đẹp mộng mơ, êm đềm mà dịu dàng. Nét duyên ấy khiến bất kỳ ai cũng muốn được đến Huế một lần trong đời.',
            img: 'https://n1-cstg.mioto.vn/g/2022/05/11/10/KCNPAHH2.jpg',
            title: 'DU LỊCH CỐ ĐÔ _ LỰA CHỌN PHƯƠNG TIỆN GÌ?',
        },
        {
            id: 1,
            detail: 'Mùa hè đến với ánh nắng mặt trời tỏa ra sức nóng và nhiệt độ tăng lên cao như chảo lửa. Đây là thời điểm mà bạn không muốn rời đi đâu ngoài chiếc cabin mát lạnh trên chiếc xe của bạn,...',
            img: 'https://n1-cstg.mioto.vn/g/2022/04/28/08/44EGIP94.jpg',
            title: 'CHĂM SÓC XE Ô TÔ TRONG MÙA HÈ NẮNG NÓNG',
        },
        {
            id: 2,
            detail: 'Trong quá trình tham gia giao thông, các chủ xe ô tô khó có thể lường trước được những rủi ro, thiệt hại có thể xảy ra đối với bản thân. Chính vì vậy,',
            img: 'https://n1-cstg.mioto.vn/g/2022/03/01/14/C9JL7WBI.jpg',
            title: 'THAM KHẢO BẢNG GIÁ BẢO HIỂM XE CÁC HÃNG',
        },
        {
            id: 3,
            detail: 'Mùa hè đến với ánh nắng mặt trời tỏa ra sức nóng và nhiệt độ tăng lên cao như chảo lửa. Đây là thời điểm mà bạn không muốn rời đi đâu ngoài chiếc cabin mát lạnh trên chiếc xe của bạn, ',
            img: 'https://n1-cstg.mioto.vn/g/2022/04/28/08/44EGIP94.jpg',
            title: 'CHĂM SÓC XE Ô TÔ TRONG MÙA HÈ NẮNG NÓNG',
        },
        {
            id: 4,
            detail: 'Trong quá trình tham gia giao thông, các chủ xe ô tô khó có thể lường trước được những rủi ro, thiệt hại có thể xảy ra đối với bản thân. ',
            img: 'https://n1-cstg.mioto.vn/g/2022/03/01/14/C9JL7WBI.jpg',
            title: 'THAM KHẢO BẢNG GIÁ BẢO HIỂM XE CÁC HÃNG',
        },
        {
            id: 5,
            detail: 'Là một tỉnh thuộc duyên hải miền Trung, Huế được biết đến với vẻ đẹp mộng mơ, êm đềm mà dịu dàng. Nét duyên ấy khiến bất kỳ ai cũng muốn được đến Huế một lần trong đời.',
            img: 'https://n1-cstg.mioto.vn/g/2022/05/11/10/KCNPAHH2.jpg',
            title: 'DU LỊCH CỐ ĐÔ _ LỰA CHỌN PHƯƠNG TIỆN GÌ?',
        },
        {
            id: 6,
            detail: 'Mùa hè đến với ánh nắng mặt trời tỏa ra sức nóng và nhiệt độ tăng lên cao như chảo lửa. Đây là thời điểm mà bạn không muốn rời đi đâu ngoài chiếc cabin mát lạnh trên chiếc xe của bạn, ',
            img: 'https://n1-cstg.mioto.vn/g/2022/04/28/08/44EGIP94.jpg',
            title: 'CHĂM SÓC XE Ô TÔ TRONG MÙA HÈ NẮNG NÓNG',
        },
        {
            id: 7,
            detail: 'Trong quá trình tham gia giao thông, các chủ xe ô tô khó có thể lường trước được những rủi ro, thiệt hại có thể xảy ra đối với bản thân. Chính vì vậy,',
            img: 'https://n1-cstg.mioto.vn/g/2022/03/01/14/C9JL7WBI.jpg',
            title: 'THAM KHẢO BẢNG GIÁ BẢO HIỂM XE CÁC HÃNG',
        },
        {
            id: 8,
            detail: 'Mùa hè đến với ánh nắng mặt trời tỏa ra sức nóng và nhiệt độ tăng lên cao như chảo lửa. Đây là thời điểm mà bạn không muốn rời đi đâu ngoài chiếc cabin mát lạnh trên chiếc xe của bạn, ',
            img: 'https://n1-cstg.mioto.vn/g/2022/04/28/08/44EGIP94.jpg',
            title: 'CHĂM SÓC XE Ô TÔ TRONG MÙA HÈ NẮNG NÓNG',
        },
        {
            id: 9,
            detail: 'Trong quá trình tham gia giao thông, các chủ xe ô tô khó có thể lường trước được những rủi ro, thiệt hại có thể xảy ra đối với bản thân. Chính vì vậy, bảo hiểm xe ô tô chính là',
            img: 'https://n1-cstg.mioto.vn/g/2022/03/01/14/C9JL7WBI.jpg',
            title: 'THAM KHẢO BẢNG GIÁ BẢO HIỂM XE CÁC HÃNG',
        },
    ];
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3.18,
        slidesToScroll: 1.05,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    infinite: true,
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
        <div className="container_blog">
            <h1> Blogs</h1>
            <Slider {...settings}>
                {data.map((item) => {
                    return (
                        <a href="#">
                            <div className="content" key={item.id}>
                                <p>{item.detail}</p>
                                <h2>Xem tiếp {'>'}</h2>
                                <div class="bar-line"></div>
                                <div className="card">
                                    <img src={item.img} alt={item.title} />
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        </a>
                    );
                })}
            </Slider>
        </div>
    );
};

export default Blog;
