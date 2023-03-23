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
import video13 from "../video/video-1.mp4"
import video14 from "../video/video-2.mp4"
import video15 from "../video/video-3.mp4"
import video16 from "../video/video-4.mp4"
import video17 from "../video/video-5.mp4"
import video18 from "../video/video-6.mp4"
import video19 from "../video/video-7.mp4"
import video20 from "../video/video-8.mp4"
import video21 from "../video/video-9.mp4"
import video22 from "../video/video-10.mp4"
import video23 from "../video/video-11.mp4"
import video24 from "../video/video-12.mp4"
import video25 from "../video/video-13.mp4"
import video26 from "../video/video-14.mp4"
import video27 from "../video/video-15.mp4"
import video28 from "../video/video-16.mp4"
import video29 from "../video/video-17.mp4"

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
		video13,
		video14,
		video15,
		video16,
		video17,
		video18,
		video19,
		video20,
		video21,
		video22,
		video23,
		video24,
		video25,
		video26,
		video27,
		video28,
		video29,
	];
	return (
		<video controls loop autoplay>
			<source src={videoInfo[num]}></source>
		</video>
	);
}
