import React, { useState, useMemo } from 'react';
import styles from './guide.scss';
import classNames from 'classnames/bind';
import CarOwner from './components/CarOwner';
import Tenants from './components/Tenants';

function Guide() {
    const cx = classNames.bind(styles);
    const [activeTab, setActiveTab] = useState('use');
    const renderContent = useMemo(() => {
        switch (activeTab) {
            case 'own':
                return <CarOwner />;
            case 'use':
                return <Tenants />;
            default:
                return null;
        }
    }, [activeTab]);
    return (
        <>
            <div className="contain_guide">
                <h1>HƯỚNG DẪN</h1>
                <a href="#">
                    <div
                        className={activeTab === 'own' ? cx('normal') : cx('active')}
                        onClick={() => setActiveTab('use')}
                    >
                        <span>Khách Thuê</span>
                    </div>
                    <div
                        className={activeTab === 'use' ? cx('normal') : cx('active')}
                        onClick={() => setActiveTab('own')}
                    >
                        <span>Chủ Xe</span>
                    </div>
                </a>
            </div>
            <div className="content_render">{renderContent}</div>
        </>
    );
}

export default Guide;
