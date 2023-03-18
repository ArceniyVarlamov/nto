import * as React from "react";
import { Link } from "react-router-dom";
import arrow from "../img/arrow.png";
import arrowFull from "../img/full-arrow.png";

export default function Nav({ num }) {

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
					<Link to={`/html?num=${+num - 1 === -1 ? 18 : +num - 1}`}>
						<img
							className='description__str1'
							src={arrow}
              alt=">"
						></img>
					</Link>
					<p>{+num + 1}</p>
					<Link to={`/html?num=${+num + 1 === 19 ? 0 : +num + 1}`}>
						<img
							className='description__str2'
							src={arrow}
              alt=">"
						></img>
					</Link>
				</div>
			</div>
			<a
				href={`https://solution${num}.glitch.me/`}
				className='nav__solution'
				target='_blink'
			>
				Демонстрация
			</a>
		</>
	)
}
