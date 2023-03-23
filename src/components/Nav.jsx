import * as React from "react";
import { Link } from "react-router-dom";
import arrow from "../img/arrow.png";
import arrowFull from "../img/full-arrow.png";

export default function Nav({ num }) {

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

	return (
		<>
			<div className='nav'>
				<Link to={`/task?num=${+num}`}>
					<img
						className='nav__back'
						src={arrowFull}
            alt="<"
					></img>
				</Link>
				<div className='nav__block'>
					<Link to={`/html?num=${+num - 1 === -1 ? 28 : +num - 1}`}>
						<img
							className='description__str1'
							src={arrow}
              alt=">"
						></img>
					</Link>
					<p>{+num + 1}</p>
					<Link to={`/html?num=${+num + 1 === 29 ? 0 : +num + 1}`}>
						<img
							className='description__str2'
							src={arrow}
              alt=">"
						></img>
					</Link>
				</div>
			</div>
			<a
				href={tasksInfo[num]}
				className='nav__solution'
				target='_blink'
			>
				Демонстрация
			</a>
		</>
	)
}
