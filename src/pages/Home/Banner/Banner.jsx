import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import './Banner.css'
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
			<div ref={sliderRef} className='keen-slider'>
				<div className='keen-slider__slide slide'>1</div>
				<div className='keen-slider__slide slide'>2</div>
				<div className='keen-slider__slide slide'>3</div>
				<div className='keen-slider__slide slide'>4</div>
				<div className='keen-slider__slide slide'>5</div>
				<div className='keen-slider__slide slide'>6</div>
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
