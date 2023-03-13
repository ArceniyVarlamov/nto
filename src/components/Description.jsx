import {useRef } from "react";
import { Link } from "react-router-dom";
import arrow from '../img/rightBlack.png'
import Video from './Video';

export default function Description(
  { num } = {
    num: 1,
  }
) {

  const tasksInfo = [
		{
			num: 1,
			leftPage: 15,
			rightPage: 2,
			url: "https://solution1.glitch.me/",
		},
		{
			num: 2,
			leftPage: 1,
			rightPage: 3,
			url: "https://solution2.glitch.me/",
		},
		{
			num: 3,
			leftPage: 2,
			rightPage: 4,
			url: "https://solution3.glitch.me/",
		},
		{
			num: 4,
			leftPage: 3,
			rightPage: 5,
			url: "https://solution4.glitch.me/",
		},
		{
			num: 5,
			leftPage: 4,
			rightPage: 6,
			url: "https://solution5.glitch.me/",
		},
		{
			num: 6,
			leftPage: 5,
			rightPage: 7,
			url: "https://solution6.glitch.me/",
		},
		{
			num: 7,
			leftPage: 6,
			rightPage: 8,
			url: "https://solution7.glitch.me/",
		},
		{
			num: 8,
			leftPage: 7,
			rightPage: 9,
			url: "https://solution8.glitch.me/",
		},
		{
			num: 9,
			leftPage: 8,
			rightPage: 10,
			url: "https://solution9.glitch.me/",
		},
		{
			num: 10,
			leftPage: 9,
			rightPage: 11,
			url: "https://solution10.glitch.me/",
		},
		{
			num: 11,
			leftPage: 10,
			rightPage: 12,
			url: "https://solution11.glitch.me/",
		},
		{
			num: 12,
			leftPage: 11,
			rightPage: 13,
			url: "https://solution12.glitch.me/",
		},
		{
			num: 13,
			leftPage: 12,
			rightPage: 14,
			url: "",
		},
		{
			num: 14,
			leftPage: 13,
			rightPage: 15,
			url: "",
		},
		{
			num: 15,
			leftPage: 14,
			rightPage: 1,
			url: "",
			video: "",
		},
	];
  const imgDesk = useRef();
  const checkWidth = () => {
    if (imgDesk.current.style.width == "60%") {
      imgDesk.current.style.width = "20%";
      imgDesk.current.style.borderRadius = "";
    } else {
      imgDesk.current.style.width = "60%";
      imgDesk.current.style.borderRadius = "10px";
    }
  }

  return (
    <div className="description">
      <div className="description__num">
        <Link to={`/task?num=${+num - 1 === -1 ? 14 : +num - 1}`}>
          <img
            className="description__str1"
            src={arrow}
            alt='>'
          ></img>
        </Link>
        Задание {+num + 1}
        <Link to={`/task?num=${+num + 1 === 15 ? 0 : +num + 1}`}>
          <img
            className="description__str2"
            src={arrow}
            alt=''
          ></img>
        </Link>
      </div>
      <div className="description__show">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAAA1BMVEVrbnfW57utAAAASElEQVR4nO3BMQEAAADCoPVPbQo/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICXAcTgAAG6EJuyAAAAAElFTkSuQmCC"
          className="description__img"
          ref={imgDesk}
          onClick={() => checkWidth()}
          alt=''
        ></img>
        <div className="description__video">
          <Video key={num} num={num}></Video>
        </div>
      </div>
      <div className="description__links">
        <Link className="description__html" to={`/html?num=${num}`}>
          <div>Код решения</div>
        </Link>
        <a target="_blank" href={tasksInfo[num].url}>
          Демонстрация
        </a>
      </div>
    </div>
  );
}
