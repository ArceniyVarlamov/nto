import * as React from "react";
import { Link } from "react-router-dom";

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
		"...",
		"Дыра в полу",
		"Спрайтовая анимация",
		"Множество объектов",
		"",
		"",
		"",
	];

	return (
		<div className='tasks'>
			<div className='tasks__paragraph'>AR.js</div>
			<div className='tasks__container'>
				{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
					return (
						<Link className='tasks__task box' key={i} to={`/task?num=${i + ""}`}>
							<p className="title">{titles[i]}</p>
							<div className='wave -one'></div>
  						<div className='wave -two'></div>
  						<div className='wave -three'></div>
						</Link>
					);
				})}
			</div>
			<div className='tasks__paragraph'>Three.js, Universal SDK</div>
			<div className='tasks__container'>
				{[12].map((i) => {
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
