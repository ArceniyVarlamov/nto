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
import background14 from "../img/background14.jpg"
import background15 from "../img/background15.jpg"
import background16 from "../img/background16.jpg"
import background17 from "../img/background17.jpg"
import background18 from "../img/background18.jpg"
import background19 from "../img/background19.jpg"
import background20 from "../img/background20.jpg"
import background21 from "../img/background21.jpg"
import background22 from "../img/background22.jpg"
import background23 from "../img/background23.jpg"
import background24 from "../img/background24.jpg"
import background25 from "../img/background25.jpg"
import background26 from "../img/background26.jpg"
import background27 from "../img/background27.jpg"
import background28 from "../img/background28.jpg"
import background29 from "../img/background29.jpg"


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
		"Трехмерные фигуры на гранях куба",
		"Объекты внутри куба",
		"Множество динамических объектов на одном маркере",
		"Прыгающий мяч (анимация)",
		"Мяч прыгающий (компонент)",
		"Пин-понг",
		"Цилиндрическая дырка в полу",
		"Портал в виртуальный мир",
		"Управление виртуальным объектом при помощи клавиатуры",
		"Тень с секретом",
		"3D фигура отдельными точками",
		"Управление виртуальной камерой при помощи клавиатуры",
		"Мультимаркер и его взаимодействие",
		"Кубитоклобусы",
		"Собиратель омулей",
		"Найди бабра (GPS)",
		"Найди бабра (AR)",
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
		background13,
		background14,
		background15,
		background16,
		background17,
		background18,
		background19,
		background20,
		background21,
		background22,
		background23,
		background24,
		background25,
		background26,
		background27,
		background28,
		background29
	]

	return (
		<div className='tasks'>
			<div className='tasks__paragraph'>Задачи базового уровня</div>
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
			<div className='tasks__paragraph'>Задачи продвинутого уровня</div>
			<div className='tasks__container'>
				{[12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((i) => {
					return (
						<Link className='tasks__task' key={i} to={`/task?num=${i + ""}`}>
							<p>{titles[i]}</p>
							<img src={img[i]} alt=""></img>
						</Link>
					);
				})}
			</div>
			<div className='tasks__paragraph'>Своя игра</div>
			<div className='tasks__container'>
				{[25].map((i) => {
					return (
						<Link className='tasks__task' key={i} to={`/task?num=${i + ""}`}>
							<p>{titles[i]}</p>
							<img src={img[i]} alt=""></img>
						</Link>
					);
				})}
			</div>
			<div className='tasks__paragraph'>Авторские работы</div>
			<div className='tasks__container'>
				{[26, 27, 28].map((i) => {
					return (
						<Link className='tasks__task' key={i} to={`/task?num=${i + ""}`}>
							<p>{titles[i]}</p>
							<img src={img[i]} alt=""></img>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
