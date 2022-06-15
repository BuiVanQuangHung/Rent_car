import React from 'react';
import styles from './Guide.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const Guide = () => {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('guide')}>
            <h1>Hướng dẫn thuê xe</h1>
            <div className={cx('guide_img')}>
                <div className={cx('guide_img1')}>
                    <div className={cx('car_img')}>
                        <Link to="/howitwork">
                            <img src="https://www.mioto.vn/static/media/step-1.640bee37.svg" alt="" />
                        </Link>
                        <p>Đặt xe với Mioto</p>
                    </div>
                    <div className={cx('car_img')}>
                        <Link to="/howitwork">
                            <img src="https://www.mioto.vn/static/media/step-2.75dbfcf5.svg" alt="" />
                        </Link>
                        <p>Nhận xe hoặc giao tận nơi</p>
                    </div>
                </div>
                <div className={cx('guide_img1')}>
                    <div className={cx('car_img')}>
                        <Link to="/howitwork">
                            <img src="https://www.mioto.vn/static/media/step-3.055b2c05.svg" alt="" />
                        </Link>
                        <p>Trải nghiệm chuyến đi</p>
                    </div>
                    <div className={cx('car_img')}>
                        <Link to="/howitwork">
                            <img src="https://www.mioto.vn/static/media/step-4.6b74a919.svg" alt="" />
                        </Link>
                        <p>Kết thúc giao dịch</p>
                    </div>
                </div>
            </div>
            <a className={cx('seemore')} href="/howitwork">
                Xem thêm {'>>>'}
            </a>
        </div>
    );
};

export default Guide;
