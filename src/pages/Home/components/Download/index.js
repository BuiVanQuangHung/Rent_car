import React from 'react';
import './download.scss';

const DownloadApp = () => {
    return (
        <div className="container_download">
            <div className="content">
                <img className="img_phone up" src="https://www.mioto.vn/static/media/phone-1.fdd95338.png" alt="" />
                <img className="img_phone down" src="https://www.mioto.vn/static/media/phone-2.d3366aa4.png" alt="" />
                <div className="content_download">
                    <h1>Ứng dụng cho điện thoại </h1>
                    <p>Tải ngay ứng dụng tại App Store hoặc Google Play</p>
                    <div className="store">
                        <a href="https://mioto.app.link/android_mioto">
                            <img
                                src="https://res.cloudinary.com/kingdom123/images/f_auto,q_auto/v1638260322/img-ios/img-ios.png?_i=AA"
                                alt=""
                            />
                        </a>
                        <a href="https://mioto.app.link/android_mioto">
                            <img
                                src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/googlePlay.df026781.png"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadApp;
