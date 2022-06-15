import React from 'react';
import { Banner } from './components/Banner/Banner';
import Carousel from './components/Carousel/Carousel';
import Guide from './components/Guide';
import ListCarAuto from './components/Slider_Auto';
import ListCarNormal from './components/Slider_Normal';
import Divider from './components/Divider';
import Aboutus from './components/AboutUs';
import Blog from './components/Blog';
import DownloadApp from './components/Download';

export default function Home() {
    return (
        <>
            <Banner />
            <Carousel />
            <Guide />
            <ListCarAuto />
            <ListCarNormal />
            <Divider />
            <Aboutus />
            <Blog />
            <DownloadApp />
        </>
    );
}
