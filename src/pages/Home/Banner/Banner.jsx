import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import './Banner.css'
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
const Banner = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [sliderRef, instanceRef] = useKeenSlider({
		initial: 0,
		loop: true,
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel)
		},
	})

	return (
		<div className='slider-wrapper'>
			<div className='slider-info'>
				<h1>
					Affordable <br />
					Price For Car <br />
					Servicing{' '}
				</h1>
				<p>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
				<div className='slider-btns'>
					<button className='btn-fill-orange'>Discover More</button>
					<button className='btn-outline-white'>Latest Project</button>
				</div>
			</div>
			<div ref={sliderRef} className='keen-slider'>
				<div className='keen-slider__slide slide'>
					<img src={img1} alt='' />
				</div>
				<div className='keen-slider__slide slide'>
					<img src={img2} alt='' />
				</div>
				<div className='keen-slider__slide slide'>
					<img src={img3} alt='' />
				</div>
				<div className='keen-slider__slide slide'>
					<img src={img4} alt='' />
				</div>
				<div className='keen-slider__slide slide'>
					<img src={img5} alt='' />
				</div>
				<div className='keen-slider__slide slide'>
					<img src={img6} alt='' />
				</div>
			</div>
			<div className='arrows'>
				<Arrow left onClick={e => e.stopPropagation() || instanceRef.current?.prev()} disabled={currentSlide === 0} />

				<Arrow onClick={e => e.stopPropagation() || instanceRef.current?.next()} disabled={currentSlide === instanceRef?.current?.track?.details?.slides?.length - 1} />
			</div>
		</div>
	)
}
function Arrow(props) {
	const { onClick, disabled } = props
	return (
		<div onClick={onClick} className={`arrow ${props.left ? 'arrow--left' : 'arrow--right'} ${disabled}`}>
			{props.left && <AiOutlineArrowLeft />}
			{!props.left && <AiOutlineArrowRight />}
		</div>
	)
}
export default Banner
