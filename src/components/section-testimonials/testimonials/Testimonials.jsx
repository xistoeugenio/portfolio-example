import './testimonials.scss'
import { dataTestimonials } from '../../../data'

export default function Testimonials() {
    return (
        <div id='testimonials' className='testimonials'>
            <h1>Testimonials</h1>
            <div className="container">
                {dataTestimonials.map((T) => (
                    <div className={T.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img
                                className='user'
                                src={T.img}
                                alt=""
                            />
                        </div>
                        <div className="center">
                            {T.desc}
                        </div>
                        <div className="bottom">
                            <h3>{T.name}</h3>
                            <h4>{T.title}</h4>
                        </div>
                    </div>))}
            </div>
        </div>
    )
}
