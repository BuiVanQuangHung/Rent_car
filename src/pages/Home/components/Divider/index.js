import React from 'react';
import './divider.scss';

const Divider = () => {
    return (
        <div className="container_divider">
            <div className="flex">
                <div className="content">
                    <h1>Bạn muốn cho thuê xe ô tô</h1>
                    <p>Trở thành đối tác của chúng tôi để có cơ hội kiếm thêm thu nhập hàng tháng.</p>
                    <div className="group_button">
                        <button variant="contained">
                            <a href="howitwork">Tìm hiểu ngay </a>
                        </button>
                        <button variant="contained">
                            <a href="howitwork">Đăng ký xe </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Divider;
