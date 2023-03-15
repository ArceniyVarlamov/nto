import * as React from "react";
import { Link } from "react-router-dom";
import background1 from "../img/background1.jpg"
import background2 from "../img/background2.jpg"
import background3 from "../img/background3.jpg"
import background4 from "../img/background4.jpg"
import background5 from "../img/background5.jpg"
import background6 from "../img/background6.jpg"
import background7 from "../img/background7.jpg"
import background8 from "../img/background8.jpg"
import background9 from "../img/background9.png"
import background10 from "../img/background10.jpg"
import background11 from "../img/background11.jpg"
import background12 from "../img/background12.jpg"
import background13 from "../img/background13.jpg"

export default function Tasks() {
	const titles = [
		"Триггер и оверлей",
		"Текст и простые объекты",
		"Объекты сложной формы",
		"Встроенный звук",
		"Встроенное видео",
		"Мультимаркер",
		"Вращающийся глобус",
		"Движущаяся плоскость",
		"Теги и их значения",
		"Дыра в полу",
		"Спрайтовая анимация",
		"Множество объектов",
		"Волшебный куб",
		"",
		"",
	];

	const img = [
		background1,
		background2,
		background3,
		background4,
		background5,
		background6,
		background7,
		background8,
		background9,
		background10,
		background11,
		background12,
		background13
	]

	return (
		<div className='tasks'>
			<div className='tasks__paragraph'>AR.js</div>
			<div className='tasks__container'>
				{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
					return (
						<Link className='tasks__task' key={i} to={`/task?num=${i + ""}`}>
							<p className="title">{titles[i]}</p>
							<img src={img[i]} alt=""></img>
						</Link>
					);
				})}
			</div>
			<div className='tasks__paragraph'>Three.js, Universal SDK</div>
			<div className='tasks__container'>
				{[12].map((i) => {
					return (
						<Link className='tasks__task' key={i} to={`/task?num=${i + ""}`}>
							<p>{titles[i]}</p>
							<img src={img[i]} alt=""></img>
						</Link>
					);
				})}
			</div>
			<div className='tasks__paragraph'>Игры</div>
			<div className='tasks__container'>
				{[13].map((i) => {
					return (
						<Link className='tasks__task box' key={i} to={`/task?num=${i + ""}`}>
							<p>{titles[i]}</p>
							<div className='wave -one'></div>
  						<div className='wave -two'></div>
  						<div className='wave -three'></div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
