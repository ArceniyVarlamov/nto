import * as React from "react";
import { Link } from "react-router-dom";

export default function Video(
	{ num } = {
		num: 1,
	},
) {
	const videoInfo = [
		"https://cdn.glitch.me/e9f0b425-427c-442a-8767-e609606db14f/https___solution1.glitch.me%20-%20Google%20Chrome%202022-12-16%2011-25-10.mp4?v=1671173729771",
		"https://cdn.glitch.global/e9f0b425-427c-442a-8767-e609606db14f/https___solution2.glitch.me%20-%20Google%20Chrome%202022-12-16%2011-26-29.mp4?v=1671173642540",
		"https://cdn.glitch.global/e9f0b425-427c-442a-8767-e609606db14f/%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%203%20-%20Google%20Chrome%202022-12-16%2011-28-57.mp4?v=1671173649464",
		"https://cdn.glitch.me/e9f0b425-427c-442a-8767-e609606db14f/https___solution4.glitch.me%20-%20Google%20Chrome%202022-12-16%2011-31-21.mp4?v=1671173645721",
		"https://cdn.glitch.me/e9f0b425-427c-442a-8767-e609606db14f/%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%205%20-%20Google%20Chrome%202022-12-16%2011-32-43.mp4?v=1671173799873",
		"https://cdn.glitch.global/e9f0b425-427c-442a-8767-e609606db14f/%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%206%20-%20Google%20Chrome%202022-12-16%2011-34-40.mp4?v=1671173809485",
		"https://cdn.glitch.global/e9f0b425-427c-442a-8767-e609606db14f/https___solution7.glitch.me%20-%20Google%20Chrome%202022-12-16%2011-39-39.mp4?v=1671173647486",
		"https://cdn.glitch.global/e9f0b425-427c-442a-8767-e609606db14f/%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%208%20-%20Google%20Chrome%202022-12-16%2011-41-46.mp4?v=1671173838024",
		"https://cdn.glitch.global/e9f0b425-427c-442a-8767-e609606db14f/%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%209%20-%20Google%20Chrome%202022-12-16%2012-11-10.mp4?v=1671174713707",
		"https://cdn.glitch.me/e9f0b425-427c-442a-8767-e609606db14f/%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%2010%20-%20Google%20Chrome%202022-12-16%2011-42-59.mp4?v=1671173843673",
		"https://cdn.glitch.global/e9f0b425-427c-442a-8767-e609606db14f/%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%2011%20-%20Google%20Chrome%202022-12-16%2011-43-52.mp4?v=1671173651372",
		"https://cdn.glitch.global/e9f0b425-427c-442a-8767-e609606db14f/%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%2012%20-%20Google%20Chrome%202022-12-16%2011-44-50.mp4?v=1671173653413",
    "",
    "",
    ""
	];
	return (
		<video controls loop autoplay>
			<source src={videoInfo[num]}></source>
		</video>
	);
}
