import { KeyboardDoubleArrowDown } from '@mui/icons-material'
import { init } from 'ityped';
import { useEffect, useRef } from 'react'
import './intro.scss'

export default function Intro() {
    const texRef = useRef();
    const render = useRef(true)


    useEffect(() => {
        if (render.current) {
            render.current = false
            init(texRef.current, {
                showCursor: true,
                backDelay: 1500,
                backSpeed: 60,
                strings: ["Developer", "Designer", "Content Creator"]
            })
        }
    }, [])


    return (
        <div className='intro' id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/homem.png" alt='' />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Safak Kocaoglu</h1>
                    <h3>Freelance <span ref={texRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <KeyboardDoubleArrowDown className='icon' />
                </a>
            </div>
        </div>
    )
}
