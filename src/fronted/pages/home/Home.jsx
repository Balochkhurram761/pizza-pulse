import React, { useState, useEffect } from 'react';
import Banner from '../../components/banner/Banner';
import HeroSection from '../../components/heroSection/HeroSection';
import HeroSection2 from '../../components/heroSection2/HeroSection2';
import HeroSection3 from '../../components/heroSection3/HeroSection3';
import Loader from '../../components/loader/Loader';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate content loading time
        setTimeout(() => {
            setIsLoading(false);
        }, 3000); // 3 seconds delay
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Banner />
                    <HeroSection />
                    <HeroSection2 />
                    <HeroSection3 />
                </>
            )}
        </>
    );
};

export default Home;
