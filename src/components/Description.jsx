import { useRef } from "react";
import { Link } from "react-router-dom";
import arrow from "../img/rightBlack.png";
import logo from "../img/pattern-logo.png";
import Video from "./Video";
import cube1 from "../img/pattern-irkutsk1.png"
import cube2 from "../img/pattern-irkutsk2.png"
import cube3 from "../img/pattern-irkutsk3.png"
import cube4 from "../img/pattern-magnitogorsk1.png"
import cube5 from "../img/pattern-magnitogorsk2.png"
import cube6 from "../img/pattern-magnitogorsk3.png"

export default function Description(
	{ num } = {
		num: 1,
	},
) {
	const titles = ["Триггер и оверлей",
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
	"AR портал",
	"Маски",
	"Кубики",]
	const tasksInfo = [
		{
			num: 1,
			leftPage: 15,
			rightPage: 2,
			url: "https://arceniyvarlamov.github.io/tasks/base/1.html",
		},
		{
			num: 2,
			leftPage: 1,
			rightPage: 3,
			url: "https://arceniyvarlamov.github.io/tasks/base/2.html",
		},
		{
			num: 3,
			leftPage: 2,
			rightPage: 4,
			url: "https://arceniyvarlamov.github.io/tasks/base/3.html",
		},
		{
			num: 4,
			leftPage: 3,
			rightPage: 5,
			url: "https://arceniyvarlamov.github.io/tasks/base/4.html",
		},
		{
			num: 5,
			leftPage: 4,
			rightPage: 6,
			url: "https://arceniyvarlamov.github.io/tasks/base/5.html",
		},
		{
			num: 6,
			leftPage: 5,
			rightPage: 7,
			url: "https://arceniyvarlamov.github.io/tasks/base/6.html",
		},
		{
			num: 7,
			leftPage: 6,
			rightPage: 8,
			url: "https://arceniyvarlamov.github.io/tasks/base/7.html",
		},
		{
			num: 8,
			leftPage: 7,
			rightPage: 9,
			url: "https://arceniyvarlamov.github.io/tasks/base/8.html",
		},
		{
			num: 9,
			leftPage: 8,
			rightPage: 10,
			url: "https://arceniyvarlamov.github.io/tasks/base/9.html",
		},
		{
			num: 10,
			leftPage: 9,
			rightPage: 11,
			url: "https://arceniyvarlamov.github.io/tasks/base/10.html",
		},
		{
			num: 11,
			leftPage: 10,
			rightPage: 12,
			url: "https://arceniyvarlamov.github.io/tasks/base/11.html",
		},
		{
			num: 12,
			leftPage: 11,
			rightPage: 13,
			url: "https://arceniyvarlamov.github.io/tasks/base/12.html",
		},
		{
			num: 13,
			leftPage: 12,
			rightPage: 14,
			url: "https://arceniyvarlamov.github.io/tasks/advanced/magic-cube.html",
		},
		{
			num: 14,
			leftPage: 13,
			rightPage: 15,
			url: "https://arceniyvarlamov.github.io/tasks/advanced/portal-ar.html",
		},
		{
			num: 15,
			leftPage: 14,
			rightPage: 16,
			url: "https://arceniyvarlamov.github.io/tasks/advanced/masks.html",
			video: "",
		},
		{
			num: 16,
			leftPage: 15,
			rightPage: 17,
			url: "https://arceniyvarlamov.github.io/tasks/games/boxes/boxes.html",
			video: "",
		},
		{
			num: 17,
			leftPage: 16,
			rightPage: 18,
			url: "",
			video: "",
		},
		{
			num: 18,
			leftPage: 17,
			rightPage: 19,
			url: "",
			video: "",
		},
		{
			num: 19,
			leftPage: 18,
			rightPage: 1,
			url: "",
			video: "",
		},
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
		[cube1, cube2, cube3, cube4, cube5, cube6],
		[logo],
		[NaN],
		[NaN],
		[],
		[],
		[],
		[],
		[],
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
				<Link to={`/task?num=${+num - 1 === -1 ? 18 : +num - 1}`}>
					<img className='description__str1' src={arrow} alt='>'></img>
				</Link>
					{titles[num]}
				<Link to={`/task?num=${+num + 1 === 19 ? 0 : +num + 1}`}>
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
				<a target='_blank' href={tasksInfo[num].url}>
					Демонстрация
				</a>
			</div>
		</div>
	);
}
