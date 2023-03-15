import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import cross from "../img/cross.png";
import qr from "../img/qr-code.gif";

export default function Carousel() {
	const [active, setActive] = useState(false);
	const hotelCards = [
		{
			imageSrc:
				"https://cdn.glitch.global/e9f0b425-427c-442a-8767-e609606db14f/pattern-logo_4.png?v=1671025598749",
			title: "Наша команда",
			description: "Lorem ipsum dolor sit amet, consectur dolori",
		},
		{
			imageSrc:
				"https://cdn.glitch.global/e9f0b425-427c-442a-8767-e609606db14f/pattern-8876..png?v=1671113464108",
			title: "Наш город",
			description: "Lorem ipsum dolor sit amet, consectur dolori",
		},
		{
			imageSrc:
				"https://cdn.glitch.global/e9f0b425-427c-442a-8767-e609606db14f/photo_5_2022-12-15_19-08-40.jpg?v=1671113422335",
			title: "Программист",
			description: "Lorem ipsum dolor sit amet, consectur dolori",
		},
		{
			imageSrc:
				"https://cdn.glitch.global/e9f0b425-427c-442a-8767-e609606db14f/photo_9_2022-12-15_19-08-40.jpg?v=1671113382303",
			title: "Дизайнер",
			description: "Lorem ipsum dolor sit amet, consectur dolori",
		},
		{
			imageSrc:
				"https://cdn.glitch.global/e9f0b425-427c-442a-8767-e609606db14f/photo_3_2022-12-15_19-08-40.jpg?v=1671113442204",
			title: "Программист",
			description: "Lorem ipsum dolor sit amet, consectur dolori",
		},
		{
			imageSrc:
				"https://cdn.glitch.global/e9f0b425-427c-442a-8767-e609606db14f/photo_4_2022-12-15_19-08-40.jpg?v=1671113435220",
			title: "Моделлер",
			description: "Lorem ipsum dolor sit amet, consectur dolori",
		},
	];
	const settings = {
		dots: true,
		play: true,
		infinite: true,
		autoplay: true,
		speed: 700,
		autoplaySpeed: 5000,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className='slider'>
			<div className='slider__qr'>
				<div className={active ? "slider__background" : ""}></div>
				<div
					className={active ? "slider__in" : "slider__to"}
					onClick={() => setActive(!active)}
				>
					<img src={qr} alt='qr'></img>
				</div>
				<img
					className={active ? "slider__back" : "slider__none"}
					onClick={() => setActive(!active)}
					src={cross}
					alt='<'
				></img>
				<div
					className={active ? "slider__code slider__active" : "slider__code"}
				>
					<img src={qr} alt='qr'></img>
				</div>
			</div>
			<Slider {...settings}>
				{hotelCards.map((card, index) => (
					<div className='slider__container' key={index}>
						<div class='slider__brame'>
							<p className='slider__title'>{card.title}</p>
						</div>
						<div class='slider__frame'>
							<img
								className='slider__img'
								alt={card.title}
								src={card.imageSrc}
								width='100'
								height='100'
							/>
							<div class='slider__overlay'>
								<div class='slider__overlay-element slider__top-left'></div>
								<div class='slider__overlay-element slider__top-right'></div>
								<div class='slider__overlay-element slider__bottom-left'></div>
								<div class='slider__overlay-element slider__bottom-right'></div>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}
