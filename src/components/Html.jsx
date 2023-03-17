import CodeStyle from "./CodeStyle";
import Nav from "./Nav";

export default function Html({ num = 0 }) {
	//! Код каждой демонстрации
	const htmlInfo = [
		`<!DOCTYPE html>
<html>
	<head>
		<script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
		<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>
		<title>Задание 1</title>
	</head>
	<body>
		<a-scene embedded arjs>
			<a-marker
				preset="custom"
				type="pattern"
				url="./patterns/pattern-logo.patt"
			>
				<a-box width="1" height="1" position="-0.15 1 -1.5" color="red"></a-box>
			</a-marker>
			<a-camera></a-camera>
		</a-scene>
	</body>
</html>`,
		`<!DOCTYPE html>
<html>
	<head>
		<script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
		<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
		<title>Задание 2</title>
	</head>
	<body>
		<a-scene embedded arjs>
			<a-marker
				preset="custom"
				type="pattern"
				url="./patterns/pattern-logo.patt"
			>
				<a-sphere radius="0.5" position="0 0.5 0.2" color="red"> </a-sphere>
			</a-marker>
			<a-entity camera></a-entity>
		</a-scene>
	</body>
</html>`,
		`<!DOCTYPE html>
<html>
	<head>
		<script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
		<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
		<title>Задание 3</title>
	</head>
	<body>
		<a-scene embedded arjs>
			<a-assets>
				<a-asset-item
					id="example"
					src="./models/nechto_strashnoe_i_opasnoe.glb"
				></a-asset-item>
			</a-assets>
			<a-marker
				preset="custom"
				type="pattern"
				url="./patterns/pattern-logo.patt"
			>
				<a-entity gltf-model="#example" position="0 -1 0" scale="0.5"></a-entity>
			</a-marker>
			<a-entity camera></a-entity>
		</a-scene>
	</body>
</html>`,
		`<!DOCTYPE html>
<html>
	<head>
		<script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
		<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
		<title>Задание 4</title>
		<script>
			AFRAME.registerComponent("soundhandler", {
				tick: function () {
					var entity = document.querySelector("[sound]");
					if (document.querySelector("a-marker").object3D.visible == true) {
						entity.components.sound.playSound();
					} else {
						entity.components.sound.pauseSound();
					}
				},
			});
		</script>
	</head>
	<body>
		<a-scene embedded arjs soundhandler>
			<a-assets>
				<img
					crossorigin="anonymous"
					id="img"
					src="https://i.scdn.co/image/ab67616d0000b273ee07b239264db04dcf5148cd"
				/>
				<audio
					id="audio"
					src="./audio/audio.mp3"
					crossorigin="anonymous"
				></audio>
			</a-assets>
			<a-marker
				preset="custom"
				type="pattern"
				url="./patterns/pattern-logo.patt"
			>
				<a-plane src="#img" height="1" width="1" rotation="-90 0 0">
					<a-sound src="#audio"></a-sound>
				</a-plane>
			</a-marker>
			<a-entity camera></a-entity>
		</a-scene>
	</body>
</html>`,
		`<!DOCTYPE html>
<html>
	<head>
		<script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
		<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>
		<title>Задание 5</title>
	</head>
	<body>
		<script>
			document.addEventListener("DOMContentLoaded", () => {
				let marker = document.querySelector("#marker");
				let video = document.querySelector("#video");
				marker.addEventListener('markerFound', function() {
					var markerId = marker.id;
					console.log('markerFound', markerId);
					video.play();
				});
				marker.addEventListener('markerLost', function() {
					var markerId = marker.id;
					console.log('markerLost', markerId);
					video.pause();
				});
			});
		</script>
		<a-scene embedded ajs>
			<a-assets>
				<video
					id="video"
					src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
					loop="true"
				></video>
			</a-assets>
			<a-marker
				id="marker"
				preset="custom"
				type="pattern"
				url="./patterns/pattern-logo.patt"
			>
				<a-video src="#video" rotation="-90 0 0"></a-video>
			</a-marker>
			<a-entity camera></a-entity>
		</a-scene>
	</body>
</html>`,
		`<!DOCTYPE html>
<html>
	<head>
		<script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
		<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
		<title>Задание 6</title>
	</head>
	<body style="margin: 0px; overflow: hidden">
		<a-scene
			embedded
			arjs="sourceType: webcam; detectionMode: mono_and_matrix; matrixCodeType: 3x3;"
		>
			<a-marker
				preset="custom"
				type="pattern"
				url="./patterns/pattern-logo.patt"
			>
				<a-box
					depth="1"
					height="1"
					width="1"
					position="0 0.5 0"
					material="opacity:0.5; side:double; color:green;"
				></a-box>
			</a-marker>
			<a-entity camera></a-entity>
		</a-scene>
	</body>
</html>`,
		`<!DOCTYPE html>
<html>
	<head>
		<script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
		<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
		<title>Задание 7</title>
	</head>
	<body>
		<a-scene embedded arjs>
			<a-assets>
				<img
					id="globe"
					src="https://n1s1.hsmedia.ru/f4/1d/ed/f41ded0dc2b73650d310a0ba0d557062/728x364_1_f1ce63c341599851b36901790384932d@4961x2480_0xac120003_15208721401642082348.jpeg"
				/>
			</a-assets>
			<a-marker
				preset="custom"
				type="pattern"
				url="./patterns/pattern-logo.patt"
			>
				<a-sphere
					src="#globe"
					radius="1"
					rotation="0 0 0"
					position="0 2 0"
					animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
				>
				</a-sphere>
			</a-marker>
			<a-camera camera></a-camera>
		</a-scene>
	</body>
</html>`,
		`<!DOCTYPE html>
<html>
	<head>
		<script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
		<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
		<title>Задание 8</title>
	</head>
	<script>
		document.addEventListener("DOMContentLoaded", () => {
			let marker = document.querySelector("#marker");
			let plane = document.querySelector("#plane");
			marker.addEventListener("markerFound", function () {
				var markerId = marker.id;
				console.log("markerFound", markerId);
				plane.emit("up");
			});
			plane.addEventListener("animationcomplete__1", function () {
				console.log("down");
				plane.emit("down");
			});
			plane.addEventListener("animationcomplete__2", function () {
				console.log("up");
				plane.emit("up");
			});
			plane.addEventListener("markerLost", function () {
				var markerId = marker.id;
				console.log("markerLost", markerId);
			});
		});
	</script>
	<body style="margin: 0px; overflow: hidden">
		<a-scene embedded arjs>
			<a-assets>
				<img id="img" src="./img/snowflake.jpg"/>
			</a-assets>
			<a-marker
				id="marker"
				preset="custom"
				type="pattern"
				url="./patterns/pattern-logo.patt"
			>
				<a-plane
					id="plane"
					src="#img"
					position="0 0 0"
					rotation="-90 0 0"
					animation__1="property: position; from: 0 0 0; to: 0 5 0; dur: 500; easing: easeInOutQuad; startEvents: up; stopEvents: down"
					animation__2="property: position; from: 0 5 0; to: 0 0 0; dur: 500; easing: easeInOutElastic; startEvents: down; stopEvents: up"
				>
				</a-plane>
			</a-marker>
			<a-entity camera></a-entity>
		</a-scene>
	</body>
</html>`,
		`<!DOCTYPE html>
<html>
	<head>
		<title>Задание 9</title>
		<link rel="stylesheet" href="style.css">
	</head>
	<body>
		<div class="nine">
				<div class="nine999">
					<div>
						<p>a-box</p>
						<p>Создает примитивную форму куба, с помощью которого можно реализовывать такие объекты, как стены и ящики</p>
					</div>
					<div>
						<p>a-sphere</p>
						<p>Создает примитивный объект сферической формы, с помощью которого можно реализовать такие объекты, как мячи и планеты</p>
					</div>
					<div>
						<p>a-cursor</p>
						<p>Сетка, которая позволяет взаимодействовать со сценой на устройствах, не имеющих ручного контроллера.</p>
					</div>
					<div>
						<p>a-gltf-model</p>
						<p>Отображает 3D модели с разрешением gltf/glb</p>
					</div>
					<div>
						<p>a-entity</p>
						<p>Универсальный объект, который может обеспечивать внешний вид, поведение и функционал элементов.</p>
					</div>
					<div>
						<p>a-video</p>
						<p>Отображает видео как текстуру на плоской поверхности</p>
					</div>
					<div>
						<p>a-image</p>
						<p>Отображает изображение на плоской поверхности</p>
					</div>
					<div>
						<p>a-torus-knot</p>
						<p>Создает примитивный объект, который по форме напоминает крендель</p>
					</div>
					<div>
						<p>a-scene</p>
						<p>Обрабатывает three.js и WebVR/WebXR, с помощью которых настраивает визуализацию, камеру, освещение, VR-эффект и интерфейс</p>
					</div>
					<div>
						<p>a-marker</p>
						<p>Создает объект, который создаёт относительную сетку координат вокруг распознанного фрагмента изображения</p>
					</div>
					<div>
						<p>a-asset-item</p>
						<p>Вызывает загрузчик файла three.js, с помощью которого можно загрузить любой вид файла</p>
					</div>
					<div>
						<p>a-plane</p>
						<p>Создает плоскую поверхность</p>
					</div>
					<div>
						<p>a-asset</p>
						<p>Используется для корректной предзагрузки все файлов разного типа и их дальнейшего корректного отображения.</p>
					</div>
				</div>
			</div>
			<style>
				body {
					margin: 0;
				}
				
				
				.nine {
					margin: 45px auto;
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				
				.nine999 {
					display: flex;
					flex-wrap: wrap;
					flex-direction: column;
					width: 90%;
					font-family: sans-serif;
					font-size: 16px;
				}
				
				.nine999 > div {
					display: flex;
					justify-content: left;
				}
				
				.nine999 p:first-child {
					border: 1px solid black;
					border-radius: 2px;
					width: 20%;
					padding: 10px;
					margin: 0;
				}
				
				.nine999 p:last-child {
					border: 1px solid black;
					border-radius: 2px;
					width: 80%;
					padding: 10px;
					margin: 0;
				}
			</style>
	</body>
</html>`,
		`<!DOCTYPE html>
<html>
	<head>
		<script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
		<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>
		<title>Задание 10</title>
	</head>
	<body>
		<a-scene embedded arjs>
			<a-assets>
				<img
					id="tiles"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR1JAJNzX2pWRjdoeyOllw9s4dTwL-ev5KHiAZ2uX9g696NxL4S2XUCpsLGgFMFJF1CBA&usqp=CAU"
				/>
			</a-assets>
			<a-marker
				preset="custom"
				type="pattern"
				url="./patterns/pattern-logo.patt"
			>
				<a-box
					src="#tiles"
					material="side:front"
					position="0 -1.5 0"
					scale="1.2 3 1.2"
				></a-box>
				<a-box
					color="black"
					material="side:front; shader:portal; blending:subtractive"
					segments-depth="1"
					segments-height="1"
					segments-width="0"
				></a-box>
				<a-box
					color="black"
					material="side:front; shader:portal; blending:subtractive"
					rotation="0 90 0"
					segments-depth="1"
					segments-height="1"
					segments-width="0"
				></a-box>
			</a-marker>
			<a-entity camera></a-entity>
		</a-scene>
	</body>
</html>`,
		`<!DOCTYPE html>
<html>
	<head>
		<script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
		<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
		<script src="https://stemkoski.github.io/A-Frame-Examples/js/aframe-spritesheet-animation.js"></script>
		<title>Задание 11</title>
	</head>
	<body style="margin: 0px; overflow: hidden">
	 <a-scene embedded arjs>
			<a-assets>
				<img
					id="animate"
					src="https://stemkoski.github.io/A-Frame-Examples/images/spritesheet-test.png"
				/>
			</a-assets>
			<a-marker
				preset="custom"
				type="pattern"
				url="./patterns/pattern-logo.patt"
			>
				<a-box
					position="0 0 0"
					animation="property: rotation; to: 0 -360 0; loop: true; easing: linear; dur: 8000"
					material="shader: flat; src: #animate; transparent: true; "
					spritesheet-animation="rows: 2; columns: 8; frameDuration: 0.08; loop: true;"
					rotato
					geometry
				>
				</a-box>
			</a-marker>
			<a-entity camera></a-entity>
		</a-scene>
	</body>
</html>`,
		`<!DOCTYPE html>
<html>
	<head>
		<script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
		<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
		<title>Задание 12</title>
	</head>
	<body style="margin: 0px; overflow: hidden">
		<a-scene embedded arjs>
			<a-assets>
				<img id="basketball" src="https://i.imgur.com/ioLOFLj.png" />
				<img id="wood" src="https://i.imgur.com/onN1zfo.jpeg" />
				<img id="house" src="https://i.imgur.com/YKLgAEN.jpeg" />
			</a-assets>
			<a-marker
				preset="custom"
				type="pattern"
				url="./patterns/pattern-logo.patt"
			>
				<a-plane src="#house" height="3" width="3" position="0 0 -3"></a-plane>
				<a-sphere
					src="#basketball"
					scale="0.5 0.5 0.5"
					position="1 0 1"
				></a-sphere>
				<a-box src="#wood" position="-1 0 -1" scale="0.5 0.5 0.5"></a-box>
				<a-box
					color="blue"
					position="0 0 0"
					scale="0.5 0.5 0.5"
					rotation="0 0 0"
					animation="property: rotation; to:360 360 360; loop: true; dur: 10000"
				></a-box>
			</a-marker>
			<a-entity camera></a-entity>
		</a-scene>
	</body>
</html>`,
		`<!DOCTYPE html>
<html>
	<head>
		<meta
			name="viewport"
			content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
		/>
		<title>Ar cobe</title>
		<script src="https://unpkg.com/three@0.87.1/build/three.js"></script>
		<script src="https://unpkg.com/three@0.87.1/examples/js/controls/OrbitControls.js"></script>
		<script src="https://unpkg.com/three@0.87.1/examples/js/loaders/GLTFLoader.js"></script>
		<script src="jsartoolkit5/artoolkit.min.js"></script>
		<script src="jsartoolkit5/artoolkit.api.js"></script>
		<script src="threex/threex-artoolkitsource.js"></script>
		<script src="threex/threex-artoolkitcontext.js"></script>
		<script src="threex/threex-arbasecontrols.js"></script>
		<script src="threex/threex-armarkercontrols.js"></script>
		<script src="three/addons/loaders/GLTFLoader.js"></script>
	</head>

	<body style="margin: 0px; overflow: hidden; font-family: Monospace">

		<script type="module">
			import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
import { Link } from 'react-router-dom';

			var scene, camera, renderer, clock, deltaTime, totalTime;

			var arToolkitSource, arToolkitContext;

			var patternArray, markerRootArray, markerGroupArray;
			var sceneGroup;

			initialize();
			animate();

			function initialize() {
				scene = new THREE.Scene();

				let ambientLight = new THREE.AmbientLight(0xcccccc, 0.5);
				scene.add(ambientLight);

				camera = new THREE.Camera();
				scene.add(camera);

				renderer = new THREE.WebGLRenderer({
					antialias: true,
					alpha: true,
				});
				renderer.setClearColor(new THREE.Color("lightgrey"), 0);
				renderer.setSize(640, 480);
				renderer.domElement.style.position = "absolute";
				renderer.domElement.style.top = "0px";
				renderer.domElement.style.left = "0px";
				document.body.appendChild(renderer.domElement);

				clock = new THREE.Clock();
				deltaTime = 0;
				totalTime = 0;
				arToolkitSource = new THREEx.ArToolkitSource({
					sourceType: "webcam",
				});

				function onResize() {
					arToolkitSource.onResize();
					arToolkitSource.copySizeTo(renderer.domElement);
					if (arToolkitContext.arController !== null) {
						arToolkitSource.copySizeTo(arToolkitContext.arController.canvas);
					}
				}

				arToolkitSource.init(function onReady() {
					onResize();
				});
				window.addEventListener("resize", function () {
					onResize();
				});
				arToolkitContext = new THREEx.ArToolkitContext({
					cameraParametersUrl: "data/camera_para.dat",
					detectionMode: "mono",
				});

				arToolkitContext.init(function onCompleted() {
					camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
				});

				markerRootArray = [];
				markerGroupArray = [];
				patternArray = [
					"pattern-irkutsk1",
					"pattern-irkutsk2",
					"pattern-irkutsk3",
					"pattern-magnitogorsk1",
					"pattern-magnitogorsk2",
					"pattern-magnitogorsk3",
				];

				let rotationArray = [
					new THREE.Vector3(-Math.PI / 2, 0, 0),
					new THREE.Vector3(0, -Math.PI / 2, Math.PI / 2),
					new THREE.Vector3(Math.PI / 2, 0, Math.PI),
					new THREE.Vector3(-Math.PI / 2, Math.PI / 2, 0),
					new THREE.Vector3(Math.PI, 0, 0),
					new THREE.Vector3(0, 0, 0),
				];

				for (let i = 0; i < 6; i++) {
					let markerRoot = new THREE.Group();
					markerRootArray.push(markerRoot);
					scene.add(markerRoot);
					let markerControls = new THREEx.ArMarkerControls(
						arToolkitContext,
						markerRoot,
						{
							type: "pattern",
							patternUrl: "data/" + patternArray[i] + ".patt",
						},
					);

					let markerGroup = new THREE.Group();
					markerGroupArray.push(markerGroup);
					markerGroup.position.y = -1.25 / 2;
					markerGroup.rotation.setFromVector3(rotationArray[i]);

					markerRoot.add(markerGroup);
				}

				sceneGroup = new THREE.Group();
				sceneGroup.scale.set(1.25 / 2, 1.25 / 2, 1.25 / 2);

				let loader = new THREE.TextureLoader();

				let tileTexture = loader.load("images/tiles.jpg");

				sceneGroup.add(
					new THREE.Mesh(
						new THREE.BoxGeometry(2, 2, 2),
						new THREE.MeshBasicMaterial({
							map: tileTexture,
							side: THREE.BackSide,
						}),
					),
				);

				let sphereGeometry = new THREE.SphereGeometry(0.2, 6, 6);

				let sphereCenters = [
					new THREE.Vector3(-1, -1, -1),
					new THREE.Vector3(-1, -1, 1),
					new THREE.Vector3(-1, 1, -1),
					new THREE.Vector3(-1, 1, 1),
					new THREE.Vector3(1, -1, -1),
					new THREE.Vector3(1, -1, 1),
					new THREE.Vector3(1, 1, -1),
					new THREE.Vector3(1, 1, 1),
				];

				let sphereColors = [
					0x444444, 0x0000ff, 0x00ff00, 0x00ffff, 0xff0000, 0xff00ff, 0xffff00,
					0xffffff,
				];

				for (let i = 0; i < 8; i++) {
					let sphereMesh = new THREE.Mesh(
						sphereGeometry,
						new THREE.MeshLambertMaterial({
							map: tileTexture,
							color: sphereColors[i],
						}),
					);
					sphereMesh.position.copy(sphereCenters[i]);
					sceneGroup.add(sphereMesh);
				}

				let edgeGeometry = new THREE.CylinderGeometry(0.05, 0.05, 2, 32);

				let edgeCenters = [
					new THREE.Vector3(0, -1, -1),
					new THREE.Vector3(0, 1, -1),
					new THREE.Vector3(0, -1, 1),
					new THREE.Vector3(0, 1, 1),
					new THREE.Vector3(-1, 0, -1),
					new THREE.Vector3(1, 0, -1),
					new THREE.Vector3(-1, 0, 1),
					new THREE.Vector3(1, 0, 1),
					new THREE.Vector3(-1, -1, 0),
					new THREE.Vector3(1, -1, 0),
					new THREE.Vector3(-1, 1, 0),
					new THREE.Vector3(1, 1, 0),
				];

				let edgeRotations = [
					new THREE.Vector3(0, 0, Math.PI / 2),
					new THREE.Vector3(0, 0, Math.PI / 2),
					new THREE.Vector3(0, 0, Math.PI / 2),
					new THREE.Vector3(0, 0, Math.PI / 2),
					new THREE.Vector3(0, 0, 0),
					new THREE.Vector3(0, 0, 0),
					new THREE.Vector3(0, 0, 0),
					new THREE.Vector3(0, 0, 0),
					new THREE.Vector3(Math.PI / 2, 0, 0),
					new THREE.Vector3(Math.PI / 2, 0, 0),
					new THREE.Vector3(Math.PI / 2, 0, 0),
					new THREE.Vector3(Math.PI / 2, 0, 0),
				];

				let edgeColors = [
					0x880000, 0x880000, 0x880000, 0x880000, 0x008800, 0x008800, 0x008800,
					0x008800, 0x000088, 0x000088, 0x000088, 0x000088,
				];

				for (let i = 0; i < 12; i++) {
					let edge = new THREE.Mesh(
						edgeGeometry,
						new THREE.MeshLambertMaterial({
							map: tileTexture,
							color: edgeColors[i],
						}),
					);
					edge.position.copy(edgeCenters[i]);
					edge.rotation.setFromVector3(edgeRotations[i]);

					sceneGroup.add(edge);
				}

				const loaderGltf = new THREE.GLTFLoader();

				loaderGltf.load("./data/tank.glb", function (gltf) {
					var object = gltf.scene;
					// console.log(gltf);
					// const mixer = new THREE.AnimationMixer(object);
					// var action = mixer.clipAction(gltf.animations[0]);
					// action.play();
					object.scale.set(0.07, 0.07, 0.07);
					// object.rotation.x= Math.PI / 2;
					sceneGroup.add(object);
				});

				let pointLight = new THREE.PointLight(0xffffff, 1, 50);
				pointLight.position.set(0.5, 3, 2);
				scene.add(pointLight);
			}

			function update() {
				if (arToolkitSource.ready !== false)
					arToolkitContext.update(arToolkitSource.domElement);

				for (let i = 0; i < 6; i++) {
					if (markerRootArray[i].visible) {
						markerGroupArray[i].add(sceneGroup);
						console.log("visible: " + patternArray[i]);
						break;
					}
				}
			}

			function render() {
				renderer.render(scene, camera);
			}

			function animate() {
				requestAnimationFrame(animate);
				deltaTime = clock.getDelta();
				totalTime += deltaTime;
				update();
				render();
			}
		</script>
	</body>
</html>`,
		`<!DOCTYPE html>
<html>
	<head>
		<meta
			name="viewport"
			content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
		/>
		<title>Hello, AR Cube!</title>
		<script src="js/three.js"></script>
		<script src="jsartoolkit5/artoolkit.min.js"></script>
		<script src="jsartoolkit5/artoolkit.api.js"></script>
		<script src="threex/threex-artoolkitsource.js"></script>
		<script src="threex/threex-artoolkitcontext.js"></script>
		<script src="threex/threex-arbasecontrols.js"></script>
		<script src="threex/threex-armarkercontrols.js"></script>
		<script src="threex/threex-arsmoothedcontrols.js"></script>
	</head>

	<body style="margin: 0px; overflow: hidden; font-family: Monospace">
		<script>
			var scene, camera, renderer, clock, deltaTime, totalTime;

			var arToolkitSource, arToolkitContext, smoothedControls;

			var markerRoot1, markerRoot2;

			var portal, portalMaterial;

			initialize();
			animate();

			function initialize() {
				scene = new THREE.Scene();

				let ambientLight = new THREE.AmbientLight(0xcccccc, 0.5);
				scene.add(ambientLight);

				camera = new THREE.Camera();
				scene.add(camera);

				renderer = new THREE.WebGLRenderer({
					antialias: true,
					alpha: true,
				});
				renderer.setClearColor(new THREE.Color("lightgrey"), 0);
				renderer.setSize(640, 480);
				renderer.domElement.style.position = "absolute";
				renderer.domElement.style.top = "0px";
				renderer.domElement.style.left = "0px";
				document.body.appendChild(renderer.domElement);

				clock = new THREE.Clock();
				deltaTime = 0;
				totalTime = 0;

				arToolkitSource = new THREEx.ArToolkitSource({
					sourceType: "webcam",
				});

				function onResize() {
					arToolkitSource.onResize();
					arToolkitSource.copySizeTo(renderer.domElement);
					if (arToolkitContext.arController !== null) {
						arToolkitSource.copySizeTo(arToolkitContext.arController.canvas);
					}
				}

				arToolkitSource.init(function onReady() {
					onResize();
				});

				window.addEventListener("resize", function () {
					onResize();
				});

				arToolkitContext = new THREEx.ArToolkitContext({
					cameraParametersUrl: "data/camera_para.dat",
					detectionMode: "mono",
				});

				arToolkitContext.init(function onCompleted() {
					camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
				});

				logoMarker = new THREE.Group();
				scene.add(logoMarker);

				let markerControls1 = new THREEx.ArMarkerControls(
					arToolkitContext,
					logoMarker,
					{
						type: "pattern",
						patternUrl: "data/pattern-logo.patt",
					},
				);

				let smoothedRoot = new THREE.Group();
				scene.add(smoothedRoot);
				smoothedControls = new THREEx.ArSmoothedControls(smoothedRoot, {
					lerpPosition: 0.5,
					lerpQuaternion: 0.5,
					lerpScale: 1,
				});

				let loader = new THREE.TextureLoader();

				let defaultMaterial = new THREE.MeshBasicMaterial({
					color: 0x444444,
					side: THREE.DoubleSide,
					transparent: true,
					opacity: 0.6,
				});

				let portalWidth = 2;
				let portalHeight = 3;
				let portalBorder = 0;

				portal = new THREE.Mesh(
					new THREE.PlaneGeometry(portalWidth, portalHeight),
					defaultMaterial,
				);
				portal.position.y = portalHeight / 2 + portalBorder;
				portal.layers.set(1);
				smoothedRoot.add(portal);

				camera.layers.enable(1);

				portalMaterial = new THREE.MeshBasicMaterial({
					side: THREE.DoubleSide,
					transparent: true,
					opacity: 0.75,
				});

				let portalBorderMesh = new THREE.Mesh(
					new THREE.PlaneGeometry(
						portalWidth + 2 * portalBorder,
						portalHeight + 2 * portalBorder,
					),
					portalMaterial,
				);
				portalBorderMesh.position.y = portal.position.y;
				portalBorderMesh.layers.set(0);
				smoothedRoot.add(portalBorderMesh);

				let skyMaterialArray = [
					new THREE.MeshBasicMaterial({
						map: loader.load("images/mountain/posx.jpg"),
						side: THREE.BackSide,
					}),
					new THREE.MeshBasicMaterial({
						map: loader.load("images/mountain/negx.jpg"),
						side: THREE.BackSide,
					}),
					new THREE.MeshBasicMaterial({
						map: loader.load("images/mountain/posy.jpg"),
						side: THREE.BackSide,
					}),
					new THREE.MeshBasicMaterial({
						map: loader.load("images/mountain/negy.jpg"),
						side: THREE.BackSide,
					}),
					new THREE.MeshBasicMaterial({
						map: loader.load("images/mountain/posz.jpg"),
						side: THREE.BackSide,
					}),
					new THREE.MeshBasicMaterial({
						map: loader.load("images/mountain/negz.jpg"),
						side: THREE.BackSide,
					}),
				];
				let skyMesh = new THREE.Mesh(
					new THREE.CubeGeometry(30, 30, 30),
					skyMaterialArray,
				);
				skyMesh.layers.set(2);
				smoothedRoot.add(skyMesh);
			}

			function update() {
				if (arToolkitSource.ready !== false)
					arToolkitContext.update(arToolkitSource.domElement);

				smoothedControls.update(logoMarker);
			}

			function render() {
				let gl = renderer.context;
				renderer.clear(true, true, true);

				renderer.autoClear = false;

				gl.enable(gl.STENCIL_TEST);

				camera.layers.set(1);

				gl.stencilFunc(gl.ALWAYS, 1, 0xff);
				gl.stencilOp(gl.KEEP, gl.KEEP, gl.REPLACE);
				gl.stencilMask(0xff);

				gl.colorMask(false, false, false, false);
				gl.depthMask(false);

				renderer.render(scene, camera);

				gl.colorMask(true, true, true, true);
				gl.depthMask(true);

				gl.stencilFunc(gl.EQUAL, 1, 0xff);
				gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);

				camera.layers.set(2);
				renderer.render(scene, camera);

				gl.stencilFunc(gl.NOTEQUAL, 1, 0xff);
				gl.colorMask(true, true, true, true);
				gl.depthMask(true);

				camera.layers.set(0);
				renderer.render(scene, camera);

				renderer.autoClear = true;
			}

			function animate() {
				requestAnimationFrame(animate);
				deltaTime = clock.getDelta();
				totalTime += deltaTime;
				update();
				render();
			}
		</script>
	</body>
</html>`,
		``,
		``,
		``,
		``,
		``,
		``,
		`<html>
	<head>
		<script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
		<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
		<script src="https://stemkoski.github.io/A-Frame-Examples/js/aframe-spritesheet-animation.js"></script>
		<script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
		<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
	</head>
	
	<body style="margin: 0px; overflow: hidden">
		<script>
			document.addEventListener("DOMContentLoaded", () => {
				let marker = document.querySelector("#B");
				let video = document.querySelector("#Danila");
				marker.addEventListener("markerFound", function () {
					var markerId = marker.id;
					console.log("markerFound", markerId);
					video.play();
				});
				marker.addEventListener("markerLost", function () {
					var markerId = marker.id;
					console.log("markerLost", markerId);
					video.pause();
				});
			});
		</script>
	
		<script>
			document.addEventListener("DOMContentLoaded", () => {
				let marker = document.querySelector("#C");
				let video = document.querySelector("#Katia");
				marker.addEventListener("markerFound", function () {
					var markerId = marker.id;
					console.log("markerFound", markerId);
					video.play();
				});
				marker.addEventListener("markerLost", function () {
					var markerId = marker.id;
					console.log("markerLost", markerId);
					video.pause();
				});
			});
		</script>
	
		<script>
			document.addEventListener("DOMContentLoaded", () => {
				let marker = document.querySelector("#D");
				let video = document.querySelector("#Arceny");
				marker.addEventListener("markerFound", function () {
					var markerId = marker.id;
					console.log("markerFound", markerId);
					video.play();
				});
				marker.addEventListener("markerLost", function () {
					var markerId = marker.id;
					console.log("markerLost", markerId);
					video.pause();
				});
			});
		</script>
	
		<script>
			document.addEventListener("DOMContentLoaded", () => {
				let marker = document.querySelector("#F");
				let video = document.querySelector("#Natasha");
				marker.addEventListener("markerFound", function () {
					var markerId = marker.id;
					console.log("markerFound", markerId);
					video.play();
				});
				marker.addEventListener("markerLost", function () {
					var markerId = marker.id;
					console.log("markerLost", markerId);
					video.pause();
				});
			});
		</script>
	
		<script>
			document.addEventListener("DOMContentLoaded", () => {
				let marker = document.querySelector("#G");
				let video = document.querySelector("#Magnitogorsk");
				marker.addEventListener("markerFound", function () {
					var markerId = marker.id;
					console.log("markerFound", markerId);
					video.play();
				});
				marker.addEventListener("markerLost", function () {
					var markerId = marker.id;
					console.log("markerLost", markerId);
					video.pause();
				});
			});
		</script>
	
		<a-scene embedded arjs>
			<a-assets>
				<video
					id="Magnitogorsk"
					src="https://cdn.glitch.me/b008c373-328e-4db5-881a-9a03fdfcd8fe/Magnitogorsk%20%D0%9C%D0%B0%D0%B3%D0%BD%D0%B8%D1%82%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA%202018%204K.mp4?v=1671034712975"
					loop="true"
				/>
			</a-assets>

			<a-assets>
				<video id="Danila" src="./video/danila.mp4" loop="true" />
			</a-assets>

			<a-assets>
				<video id="Katia" src="./video/katya.mp4" loop="true" />
			</a-assets>

			<a-assets>
				<video id="Arceny" src="./video/arseniy.mp4" loop="true" />
			</a-assets>

			<a-assets>
				<video id="Natasha" src="./video/natasha.mp4" loop="true" />
			</a-assets>

			<a-assets>
				<img id="img1" src="./img/prim.png" />
			</a-assets>

			<a-marker
				id="B"
				type="pattern"
				preset="custom"
				url="./patterns/pattern-Danila3D.patt"
			>
				<a-video src="#Danila" rotation="-90 0 0"></a-video>
			</a-marker>

			<a-marker
				id="A"
				type="pattern"
				preset="custom"
				url="./patterns/pattern-logo.patt"
			>
				<a-image src="#img1" rotation="-90 0 0"></a-image>
			</a-marker>

			<a-marker
				id="D"
				type="pattern"
				preset="custom"
				url="./patterns/pattern-Arseniy3D.patt"
			>
				<a-video src="#Arceny" rotation="-90 0 0"></a-video>
			</a-marker>

			<a-marker
				id="C"
				type="pattern"
				preset="custom"
				url="./patterns/pattern-Kate3D.patt"
			>
				<a-video src="#Katia" rotation="-90 0 0"></a-video>
			</a-marker>

			<a-marker
				id="F"
				type="pattern"
				preset="custom"
				url="./patterns/pattern-Natali3D.patt"
			>
				<a-video src="#Natasha" rotation="-90 0 0"></a-video>
			</a-marker>

			<a-marker
				id="G"
				type="pattern"
				preset="custom"
				url="./patterns/pattern-city.patt"
			>
				<a-video src="#Magnitogorsk" rotation="-90 0 0"></a-video>
			</a-marker>

			<a-entity camera></a-entity>
		</a-scene>
	</body>
</html>`,
	];
	let show = true;
	if (num < 0) {
		num = htmlInfo.length - 1;
		show = false;
	}

	return (
		<>
			<div className='code'>
				<div className='code__out'>
					<div className='code__info'>
						<p>{htmlInfo[num].split("\n").length} строк</p>
						{show ? (
							<div className='code__nav'>
								<Nav num={num}></Nav>
							</div>
						) : (
							<div className='code__nav'>Решение командного блока</div>
						)}
					</div>
					<div className='code__container'>
						<CodeStyle
							colStr={htmlInfo[num].split("\n").length + 1}
						></CodeStyle>
						<pre className='code__pre'>{htmlInfo[num]}</pre>
					</div>
				</div>
			</div>
		</>
	);
}
