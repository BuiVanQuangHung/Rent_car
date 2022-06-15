import React from 'react';
import './about_us.scss';

const Aboutus = () => {
    const data = [
        {
            id: 0,
            img: 'https://www.mioto.vn/static/media/news-3.9d9e6a24.png',
        },
        {
            id: 1,
            img: 'https://www.mioto.vn/static/media/news-1.8f7e6db8.png',
        },
        {
            id: 2,
            img: 'https://www.mioto.vn/static/media/news-3.9d9e6a24.png',
        },
    ];
    return (
        <div className="container_about_us">
            <h1>Báo chí nói về chúng tôi</h1>
            <div className="about_us_img">
                {data.map((item) => {
                    return (
                        <a href="https://startup.vnexpress.net/tin-tuc/hanh-trinh-khoi-nghiep/mo-hinh-airbnb-trong-linh-vuc-thue-xe-oto-tai-viet-nam-3764274.html">
                            <img key={item.id} src={item.img} alt="" />;
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default Aboutus;
