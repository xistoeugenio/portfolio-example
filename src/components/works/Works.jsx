import {
    KeyboardDoubleArrowLeft,
    KeyboardDoubleArrowRight,
    // Language,
    //  MobileFriendly,
    //   StickyNote2,
} from '@mui/icons-material'
import { useState } from 'react';
import { data } from '../../data';
import './works.scss';

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
            setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }
    return (
        <div className='works' id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) =>
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className='leftContainer'>
                                    <div className="imgContainer">
                                        {d.icon}
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.desc}
                                    </p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img
                                    src="data:image/jpeg;base64,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"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>)}
            </div>
            <KeyboardDoubleArrowLeft className='arrow left' onClick={() => handleClick("left")} />
            <KeyboardDoubleArrowRight className='arrow right' onClick={() => handleClick()} />
        </div>
    )
}
