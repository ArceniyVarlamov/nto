import * as React from "react";
import { Link } from "react-router-dom";
import video1 from "../video/1.mp4"
import video2 from "../video/2.mp4"
import video3 from "../video/3.mp4"
import video4 from "../video/4.mp4"
import video5 from "../video/5.mp4"
import video6 from "../video/6.mp4"
import video7 from "../video/7.mp4"
import video8 from "../video/8.mp4"
import video9 from "../video/9.mp4"
import video10 from "../video/10.mp4"
import video11 from "../video/11.mp4"
import video12 from "../video/12.mp4"


export default function Video(
	{ num } = {
		num: 1,
	},
) {
	const videoInfo = [
		video1,
		video2,
		video3,
		video4,
		video5,
		video6,
		video7,
		video8,
		video9,
		video10,
		video11,
		video12,
		
	];
	return (
		<video controls loop autoplay>
			<source src={videoInfo[num]}></source>
		</video>
	);
}
