import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import cross from "../img/cross.png";
import qr from "../img/qr-code.gif";
import patternLogo from "../img/pattern-logo.png";
import patternCity from "../img/pattern-city.png";
import patternDanila3D from "../img/pattern-Danila3D.png";
import patternNatali3D from "../img/pattern-Natali3D.png";
import patternArseniy3D from "../img/pattern-Arseniy3D.png";
import patternKate3D from "../img/pattern-Kate3D.png";

export default function Carousel() {
	const [active, setActive] = useState(false);
	const comandCards = [
		{
			imageSrc: patternLogo,
			title: "Наша команда",
		},
		{
			imageSrc: patternCity,
			title: "Наш город",
		},
		{
			imageSrc: patternDanila3D,
			title: "Программист Backend",
		},
		{
			imageSrc: patternNatali3D,
			title: "Дизайнер",
		},
		{
			imageSrc: patternArseniy3D,
			title: "Программист Frontend",
		},
		{
			imageSrc: patternKate3D,
			title: "Моделлер",
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
				{comandCards.map((card, index) => (
					<div className='slider__container' key={index}>
						<div className='slider__brame'>
							<p className='slider__title'>{card.title}</p>
						</div>
						<div className='slider__frame'>
							<img
								className='slider__img'
								alt={card.title}
								src={card.imageSrc}
								width='100'
								height='100'
							/>
							<div className='slider__overlay'>
								<div className='slider__overlay-element slider__top-left'></div>
								<div className='slider__overlay-element slider__top-right'></div>
								<div className='slider__overlay-element slider__bottom-left'></div>
								<div className='slider__overlay-element slider__bottom-right'></div>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}
