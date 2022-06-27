import React, {useEffect, useState} from "react";
import Images from './image';
import HomeData from './banner.json';
import './Home.css';

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [listLength, setListLength] = useState(0);
    const [stopAuto, setStopAuto] = useState(false);
    useEffect(() => {
        if(!stopAuto) {
            const interval = setInterval(() => {
                updateIndex(activeIndex + 1);
            }, 7000)
            return () => {
                if(interval) {
                    clearInterval(interval)
                }
            }
        }
    })
    useEffect(() => {
        if(HomeData && HomeData.bannerData.rightbanner.length)
        setListLength(HomeData.bannerData.rightbanner.length - 1);
    }, [])
    const getBannerSection = () => {
        return <section className="banner">
            <section className="content-container">
            <div className="description-container">
            <ul className="list-container">
                {rightTableData()}
            </ul>
            </div>
            <div className="animation-container">
            {getAnimationContainer()}
            </div>
            </section>
        </section>
    }

    const updateIndex = (newIndex) => {
        if(newIndex > listLength) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }

    const getAnimationContainer = () => {
        return Images.map((val, index) => {
            return <div className={`right-side-sujesstion ${index === activeIndex ? "active" : ''} ${val.size === 'small' ? 'small-size' : ''}`}>
                <img className="writing-sample" src={val.wiritingUrl}/>

            </div>
        })
    }
    
        const rightTableData = () => {
           return HomeData.bannerData.rightbanner.map((val, index) => {
                return <li className={`list-item ${activeIndex === index && 'active'}`} key={index} onClick={() => {
                    updateIndex(index)
                    setStopAuto(true)
                }
                    }>
                    <h5>{val.heading}</h5>
                    <div className="description">{val.subHeading}</div>
                    <div className="progress-bar">
                        <div className="progress-made"/>
                    </div>
                </li>
            })
        }
    return(<div>
        <section>
        {getBannerSection()}
        </section>
        </div>)
}

export default Home;