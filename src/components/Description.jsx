import { useRef } from "react";
import { Link } from "react-router-dom";
import arrow from "../img/rightBlack.png";
import logo from "../img/pattern-logo.png";//
import Video from "./Video";
import cube1 from "../img/pattern-irkutsk1.png";
import cube2 from "../img/pattern-irkutsk2.png";
import cube3 from "../img/pattern-irkutsk3.png";
import cube4 from "../img/pattern-magnitogorsk1.png";
import cube5 from "../img/pattern-magnitogorsk2.png";
import cube6 from "../img/pattern-magnitogorsk3.png";
import cube7 from "../img/pattern_circle.png";
import cube8 from "../img/pattern_trans.png";//
import cube9 from "../img/pattern-poligon.png";
import cube10 from "../img/pattern-portal.png";
import cube11 from "../img/pattern-defolt.png";//
import cube12 from "../img/pattern-box.png";
import cube13 from "../img/pattern_red.png";//
import cube14 from "../img/pattern_blue.png";//
import cube15 from "../img/pattern_yellow.png";//

export default function Description(
	{ num } = {
		num: 1,
	},
) {
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
		"Сокровища бабра (GPS)",
		"Сокровища бабра (AR)",
	];
	const tasksInfo = [
		"https://arceniyvarlamov.github.io/tasks/base/1.html",
		"https://arceniyvarlamov.github.io/tasks/base/2.html",
		"https://arceniyvarlamov.github.io/tasks/base/3.html",
		"https://arceniyvarlamov.github.io/tasks/base/4.html",
		"https://arceniyvarlamov.github.io/tasks/base/5.html",
		"https://arceniyvarlamov.github.io/tasks/base/6.html",
		"https://arceniyvarlamov.github.io/tasks/base/7.html",
		"https://arceniyvarlamov.github.io/tasks/base/8.html",
		"https://arceniyvarlamov.github.io/tasks/base/9.html",
		"https://arceniyvarlamov.github.io/tasks/base/10.html",
		"https://arceniyvarlamov.github.io/tasks/base/11.html",
		"https://arceniyvarlamov.github.io/tasks/base/12.html",
		"https://arceniyvarlamov.github.io/tasks/final/1.html",
		"https://arceniyvarlamov.github.io/tasks/final/2.html",
		"https://arceniyvarlamov.github.io/tasks/final/3.html",
		"https://arceniyvarlamov.github.io/tasks/final/4.html",
		"https://arceniyvarlamov.github.io/tasks/final/5.html",
		"https://arceniyvarlamov.github.io/tasks/final/6.html",
		"https://arceniyvarlamov.github.io/tasks/final/7.html",
		"https://arceniyvarlamov.github.io/tasks/final/8.html",
		"https://arceniyvarlamov.github.io/tasks/final/9.html",
		"https://arceniyvarlamov.github.io/tasks/final/10.html",
		"https://arceniyvarlamov.github.io/tasks/final/11.html",
		"https://arceniyvarlamov.github.io/tasks/final/12.html",
		"https://arceniyvarlamov.github.io/tasks/final/13.html",
		"https://arceniyvarlamov.github.io/tasks/games/cube.html",
		"https://arceniyvarlamov.github.io/tasks/games/omul.html",
		"https://arceniyvarlamov.github.io/tasks/games/babr-gps.html",
		"https://arceniyvarlamov.github.io/tasks/games/babr-ar.html",
	];

	const tasksMarkers = [
		[logo],
		[logo],
		[logo],
		[logo],
		[logo],
		[logo],
		[logo],
		[logo],
		[logo],
		[logo],
		[logo],
		[logo],
		[logo, cube12, cube9, cube10, cube8, cube7], //
		[logo],
		[logo],
		[logo],
		[logo],
		[logo, cube7],
		[logo],
		[logo],
		[logo],
		[logo],
		[logo],
		[logo],
		[logo, cube7, cube8],
		[logo, cube8, cube10, cube11, cube13, cube14, cube15],
		[logo],
		[logo],
		[logo],
	];

	const imgDesk = useRef();
	const checkWidth = () => {
		if (imgDesk.current.style.width === "50%") {
			imgDesk.current.style.width = "20%";
			imgDesk.current.style.borderRadius = "";
		} else {
			imgDesk.current.style.width = "50%";
			imgDesk.current.style.borderRadius = "10px";
		}
	};

	return (
		<div className='description'>
			<div className='description__num'>
				<Link to={`/task?num=${+num - 1 === -1 ? 28 : +num - 1}`}>
					<img className='description__str1' src={arrow} alt='>'></img>
				</Link>
				{titles[num]}
				<Link to={`/task?num=${+num + 1 === 29 ? 0 : +num + 1}`}>
					<img className='description__str2' src={arrow} alt=''></img>
				</Link>
			</div>
			<div className='description__show'>
				<div
					className='description__img'
					ref={imgDesk}
					onClick={() => checkWidth()}
				>
					{tasksMarkers[num].map((item) => (
						<img src={item} alt=''></img>
					))}
				</div>
				<div className='description__video'>
					<Video key={num} num={num}></Video>
				</div>
			</div>
			<div className='description__links'>
				<Link className='description__html' to={`/html?num=${num}`}>
					<div>Код решения</div>
				</Link>
				<a target='_blank' href={tasksInfo[num]}>
					Демонстрация
				</a>
			</div>
		</div>
	);
}
