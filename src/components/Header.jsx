import { Link } from "react-router-dom";
import icon from "../img/ar.png";
import * as THREE from "three";
import { useEffect, useState, useRef } from "react";

export default function Header() {
	const GRAVITY = 0.0007;
	const BOUNCE = -0.7;

	let raf, scene, camera, renderer, controls;
	let container, plane;

	const addBall = () => {
		const geo = new THREE.SphereGeometry(Math.random() + 0.5, 10, 10);
		const mat = new THREE.MeshBasicMaterial({
			color: 0x000,
			wireframe: true,
		});
		const msh = new THREE.Mesh(geo, mat);

		msh.position.y = camera.top;
		msh.position.x =
			Math.random() * (camera.right - camera.left) -
			(camera.right - camera.left) / 2;

		msh.userData.vx = 0.1;
		msh.userData.vy = 0.1;

		container.add(msh);
	};

	const onLoad = () => {
		scene = new THREE.Scene();

		camera = new THREE.OrthographicCamera(
			window.innerWidth / -100,
			window.innerWidth / 100,
			window.innerHeight / 100,
			window.innerHeight / -100,
			-10,
			1000,
		);
		const root = document.querySelector(".header");
		renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true,
		});
		renderer.setSize(window.innerWidth, window.innerHeight);
		root.appendChild(renderer.domElement);

		const geo = new THREE.PlaneGeometry(
			camera.right - camera.left,
			camera.bottom - camera.top,
		);
		const mat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
		plane = new THREE.Mesh(geo, mat);
		geo.computeBoundingBox();

		container = new THREE.Group();
		scene.add(container);

		for (let i = 0; i < 10; i++) addBall();

		onEnterFrame();
	};

	const onEnterFrame = () => {
		for (let i = 0; i < container.children.length; i++) {
			const ball = container.children[i];
			const radius = ball.geometry.parameters.radius;
			const b = plane.geometry.boundingBox;

			ball.rotation.z += ball.userData.vx < 0 ? 0.01 : -0.01;
			ball.userData.vy += GRAVITY;

			ball.position.y -= ball.userData.vy;
			ball.position.x += ball.userData.vx;

			if (ball.position.x + radius >= b.max.x) {
				ball.position.x = b.max.x - radius;
				ball.userData.vx *= BOUNCE;
			}
			if (ball.position.x - radius <= b.min.x) {
				ball.position.x = b.min.x + radius;
				ball.userData.vx *= BOUNCE;
			}

			if (ball.position.y + radius >= b.max.y) {
				ball.position.y = b.max.y - radius;
				ball.userData.vy *= BOUNCE;
			}

			if (ball.position.y - radius <= b.min.y) {
				ball.position.y = b.min.y + radius;
				ball.userData.vy *= BOUNCE;
			}
		}
		renderer.render(scene, camera);
		raf = window.requestAnimationFrame(onEnterFrame);
	};

	window.addEventListener("resize", () => {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	});

	setInterval(() => {
		for (let ball of container.children) {
			ball.userData.vy = -0.105;
			if (Math.random() >= 0.5) {
				ball.userData.vx = Math.random() / 10;
			} else {
				ball.userData.vx = -Math.random() / 10;
				
			}
		}
	}, 2000);

	return (
		<div className='header' onLoad={onLoad}>
			<div className='header__container'>
				<Link to='/'>
					<div className='header__text'>Примитив ограниченной дереализации</div>
				</Link>
				<img className='header__logo' alt='AR' src={icon}></img>
			</div>
		</div>
	);
}
