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
	<script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
	<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
	<body style="margin: 0px; overflow: hidden">
		<a-scene arjs embedded>
			<a-marker
				id="pattern_1"
				type="pattern"
				preset="custom"
				url="pattern_1.patt"
			>
				<a-entity
					id="babr"
					gltf-model="babr_animate.gltf"
					animation-mixer
				></a-entity>
			</a-marker>
			<a-marker
				id="pattern_2"
				type="pattern"
				preset="custom"
				url="pattern_2.patt"
			>
				<a-entity id="person1" gltf-model="person_1.glb"></a-entity>
			</a-marker>
			<a-marker
				id="pattern_3"
				type="pattern"
				preset="custom"
				url="pattern_3.patt"
			>
				<a-entity id="person2" gltf-model="person_2.glb"></a-entity>
			</a-marker>
			<a-marker
				id="pattern_4"
				type="pattern"
				preset="custom"
				url="pattern_4.patt"
			>
				<a-entity id="person3" gltf-model="person_3.glb"></a-entity>
			</a-marker>
			<a-marker
				id="pattern_5"
				type="pattern"
				preset="custom"
				url="pattern_5.patt"
			>
				<a-entity id="person4" gltf-model="person_4.glb"></a-entity>
			</a-marker>
			<a-marker
				id="pattern_6"
				type="pattern"
				preset="custom"
				url="pattern_6.patt"
			>
				<a-entity id="logo" gltf-model="logo_nto.glb"></a-entity>
			</a-marker>
			<a-entity camera></a-entity>
		</a-scene>
	</body>
</html>`,
		`<!DOCTYPE html>
<html>
	<script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
	<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
	<body style="margin: 0px; overflow: hidden">
		<a-scene arjs embedded>
			<a-marker
				id="pattern_1"
				type="pattern"
				preset="custom"
				url="../base/patterns/pattern-logo.patt"
			>
				<a-entity
					id="babr"
					gltf-model="./ref/КУБИК2.glb"
					animation-mixer
				></a-entity>
			</a-marker>
			<a-marker
				id="pattern_2"
				type="pattern"
				preset="custom"
				url="./ref/pattern-box.patt"
			>
				<a-entity id="person1" gltf-model="./ref/конус.glb"></a-entity>
			</a-marker>
			<a-marker
				id="pattern_3"
				type="pattern"
				preset="custom"
				url="./ref/pattern-poligon.patt"
			>
				<a-entity id="person2" gltf-model="./ref/конус1.glb"></a-entity>
			</a-marker>
			<a-marker
				id="pattern_4"
				type="pattern"
				preset="custom"
				url="./ref/pattern-portal.patt"
			>
				<a-entity id="person3" gltf-model="./ref/конус2.glb"></a-entity>
			</a-marker>
			<a-marker
				id="pattern_5"
				type="pattern"
				preset="custom"
				url="./ref/pattern-trans.patt"
			>
				<a-entity id="person4" gltf-model="./ref/КУБИК.glb"></a-entity>
			</a-marker>
			<a-marker
				id="pattern_6"
				type="pattern"
				preset="custom"
				url="./ref/pattern_circle.patt"
			>
				<a-entity id="logo" gltf-model="./ref/КУБИК1.glb"></a-entity>
			</a-marker>
			<a-entity camera></a-entity>
		</a-scene>
	</body>
</html>`,
		`<!DOCTYPE html>
<html>
	<script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
	<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
	<script src="https://cdn.jsdelivr.net/gh/c-frame/aframe-extras@6.1.1/dist/aframe-extras.min.js"></script>
	<body style="margin: 0px; overflow: hidden">
		<script>
			AFRAME.registerComponent("opacity", {
				init: function () {
					var el = this.el;
					this.el.addEventListener("model-loaded", function (e) {
						console.log(el.object3D.children[0].children[0].material.opacity);
						el.object3D.children[0].children.forEach((element) => {
							element.material.opacity = 0.5;
						});
					});
				},
			});
		</script>
		<a-scene
			embedded
			vr-mode-ui="enabled: false;"
			arjs="trackingMethod: best; debugUIEnabled: false;"
			renderer="logarithmicDepthBuffer: true;"
		>
			<a-assets>
				<a-asset-item
					id="obj"
					src="./ref/primitives1.obj"
				></a-asset-item>
				<a-asset-item
					id="mtl"
					src="./ref/primitives1.mtl"
				></a-asset-item>
			</a-assets>
			<a-marker id="marker_1" preset='custom' type='pattern' url='../base/patterns/pattern-logo.patt'>
				<a-obj-model src="#obj" mtl="#mtl" opacity></a-obj-model>

				<a-box color="blue" position="2 -1 0" scale="2 2 2"></a-box>
				<a-sphere
					color="yellow"
					position="3 0.70 2"
					scale="0.7 0.7 0.7"
				></a-sphere>
				<a-cylinder
					color="red"
					position="-2 2.5 2"
					scale="1.5 3 1.5"
				></a-cylinder>
				<a-sphere
					color="violet"
					position="-1.5 1.5 -1.5"
					scale="0.5 0.5 0.5"
				></a-sphere>
				<a-octahedron
					color="green"
					radius="5"
					position="0.4 0 -2.5"
					scale="0.29 0.2 0.29"
					rotation="0 45 0"
				></a-octahedron>
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
	</head>
	<script>
		document.addEventListener("DOMContentLoaded", () => {
			let marker = document.querySelector("#marker");
			let sp = document.querySelector("#sphere");
			marker.addEventListener("markerFound", function () {
				sp.emit("up");
			});
			sp.addEventListener("animationcomplete__1", function () {
				sp.emit("down");
			});
			sp.addEventListener("animationcomplete__2", function () {
				sp.emit("up");
			});
		});
	</script>
	<body style="margin: 0px; overflow: hidden">
		<a-scene embedded arjs>
			<a-assets>
				<img id="img" src="./images/tiles.jpg" />
			</a-assets>
			<a-marker id="marker" preset='custom' type='pattern' url='../base/patterns/pattern-logo.patt'>
				<a-sphere
					id="sphere"
					src="#img"
					position="0 0 0"
					rotation="-90 0 0"
					animation__1="property: position; from:0 0 0; to: 0 5 0; dur: 500;easing: easeOutQuad; startEvents: up"
					animation__2="property: position; from:0 5 0; to: 0 0 0; dur: 500;easing: easeInQuad; startEvents: down"
				></a-sphere>
			</a-marker>
			<a-entity camera></a-entity>
		</a-scene>
	</body>
</html>`,
		`<!DOCTYPE html>
<html>
	<script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
	<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>

	<body>
		<script>
			AFRAME.registerComponent("follow", {
				schema: {
					t1: {
						type: "selector",
					},
				},
				init: function () {
					this.target = this.data.t1.object3D;
				},
				
				update: function () {
					this.toPosition = this.target.position;
				},

				tick: function (time, timeDelta) {
					let t = Math.abs(((time * 0.001) % 2) - 1);
					t = Math.min(t, 0.98);
					t = Math.max(t, 0.02);

					let inter = new THREE.Vector3();
					inter.add(this.toPosition);
					inter.multiplyScalar(0.7);
					inter.y += 5;
					inter.multiplyScalar(t * (1 - t));

					currentPosition = new THREE.Vector3();
					currentPosition.add(this.toPosition);
					currentPosition.multiplyScalar(t * t);
					currentPosition.add(inter);

					this.el.setAttribute("position", currentPosition);
				},
			});
		</script>
		<a-scene>
			<a-entity>
				<a-marker
					preset="custom"
					type="pattern"
					url="../base/patterns/pattern-logo.patt"
				>
					<a-sphere radius="0" id="t1" position="0 0 0"></a-sphere>
					<a-sphere
						radius="0.25"
						follow="t1: #t1;"
						color="blue"
						position="0 1 0"
					></a-sphere>
				</a-marker>
				<a-entity camera></a-entity>
			</a-entity>
		</a-scene>
	</body>
</html>`,
		`<!DOCTYPE html>
<html>
	<script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
	<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>

	<body>
		<script>
			AFRAME.registerComponent("follow", {
				schema: {
					t1: {
						type: "selector",
					},
				},
				init: function () {
					this.target = this.data.t1.object3D;
				},

				update: function () {
					this.toPosition = this.target.position;
				},

				tick: function (time, timeDelta) {
					let t = Math.abs(((time * 0.001) % 2) - 1);
					t = Math.min(t, 0.98);
					t = Math.max(t, 0.02);

					let inter = new THREE.Vector3();
					inter.add(this.toPosition);
					inter.multiplyScalar(0.7);
					inter.y += 5;
					inter.multiplyScalar(t * (1 - t));

					currentPosition = new THREE.Vector3();
					currentPosition.add(this.toPosition);
					currentPosition.multiplyScalar(t * t);
					currentPosition.add(inter);
					this.el.setAttribute("position", currentPosition);
				},
			});
		</script>

		<a-scene>
			<a-marker
				preset="custom"
				type="pattern"
				url="./ref/pattern_circle.patt"
				id="one"
			>
				<a-sphere
					radius="0.25"
					follow="t1: #t1;"
					color="blue"
					position="0 0.2 0"
				></a-sphere>

				<a-sphere radius="0" id="t1" position="0 0 0"></a-sphere>
			</a-marker>
			<a-marker
				preset="custom"
				type="pattern"
				url="../base/patterns/pattern-logo.patt"
				id="two"
			>
			</a-marker>

			<a-entity camera></a-entity>
		</a-scene>
		<script>
			const marker = document.getElementById("one");
			const marker2 = document.getElementById("two");
			const target = document.getElementById("t1");
			let fou = 0;
			marker2.addEventListener("markerFound", () => {
				fou = 1;
			});
			marker2.addEventListener("markerLost", () => {
				fou = 0;
			});

			setInterval(() => {
				if (fou == 1) {
					target.setAttribute(
						"position",
						(
							marker2.object3D.position.x - marker.object3D.position.x
						).toString() +
							" " +
							(
								marker2.object3D.position.y - marker.object3D.position.y
							).toString() +
							" " +
							(
								marker2.object3D.position.z - marker.object3D.position.z
							).toString(),
					);
					console.log(target.object3D.position);
				} else {
					target.setAttribute("position", "0 0 0");
				}
			}, 100);
		</script>
	</body>
</html>`,
		`<!DOCTYPE html>
<html>
	<title>Цилиндрическая дырка в полу</title>
	<script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
	<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>

	<body style="margin: 0px; overflow: hidden">
		<a-scene
			embedded
			vr-mode-ui="enabled: false;"
			arjs="trackingMethod: best; debugUIEnabled: false;"
			renderer="logarithmicDepthBuffer: true;"
		>
			<a-assets>
				<img
					id="tiles"
					src="./images/tiles.jpg"
				/>
			</a-assets>
			<a-marker
				preset="custom"
				type="pattern"
				url="../base/patterns/pattern-logo.patt"
			>
				<a-cylinder
					src="#tiles"
					material="side:back"
					position="0 -1.5 0"
					scale="1 2 1"
				></a-cylinder>
				<a-cylinder
					color="black"
					material="shader:portal; blending:subtractive"
					segments-depth="1"
					segments-height="1"
					segments-width="1"
				></a-cylinder>
				<a-cylinder
					color="black"
					material="shader:portal; blending:subtractive"
					rotation="0 90 0"
					segments-depth="1"
					segments-height="1"
					segments-width="1"
				></a-cylinder>
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
				

				// handle resize event
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
						patternUrl: "../base/patterns/pattern-logo.patt",
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
					map: loader.load("images/sphere-colored.png"),
					color: 0x444444,
					side: THREE.DoubleSide,
					transparent: true,
					opacity: 0.6,
				});

				let portalWidth = 1;
				let portalHeight = 2;

				portal = new THREE.Mesh(
					new THREE.PlaneGeometry(portalWidth, portalHeight),
					defaultMaterial,
				);
				portal.position.y = portalHeight / 2;
				portal.layers.set(1);
				smoothedRoot.add(portal);

				camera.layers.enable(1);

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
		`<!DOCTYPE html>
<html>
	<head>
		<meta
			name="viewport"
			content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
		/>
		<title>Взаимодействие с моделькой</title>
		<script src="https://unpkg.com/three@0.87.1/build/three.js"></script>
		<script src="https://unpkg.com/three@0.87.1/examples/js/controls/OrbitControls.js"></script>
		<script src="https://unpkg.com/three@0.87.1/examples/js/loaders/GLTFLoader.js"></script>
		<script src="js/three.js"></script>
		<script src="jsartoolkit5/artoolkit.min.js"></script>
		<script src="jsartoolkit5/artoolkit.api.js"></script>
		<script src="threex/threex-artoolkitsource.js"></script>
		<script src="threex/threex-artoolkitcontext.js"></script>
		<script src="threex/threex-arbasecontrols.js"></script>
		<script src="threex/threex-armarkercontrols.js"></script>
	</head>

	<body style="margin: 0px; overflow: hidden; font-family: Monospace">
		<script type="module">
			var scene,
				camera,
				renderer,
				clock,
				deltaTime,
				totalTime,
				shadowMesh,
				object;

			var arToolkitSource, arToolkitContext;

			var markerRoot1;

			var material1, mesh1;

			initialize();
			animate();

			function initialize() {
				scene = new THREE.Scene();

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
				renderer.shadowMap.enabled = true;
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
				markerRoot1 = new THREE.Group();
				scene.add(markerRoot1);
				let markerControls1 = new THREEx.ArMarkerControls(
					arToolkitContext,
					markerRoot1,
					{
						type: "pattern",
						patternUrl: "../base/patterns/pattern-logo.patt",
					},
				);
				renderer.shadowMap.enabled = true;
				renderer.shadowMap.type = THREE.PCFSoftShadowMap;

				let loader = new THREE.TextureLoader();

				let sceneGroup = new THREE.Group();
				let floorGeometry = new THREE.PlaneGeometry(200, 200);
				let floorMaterial = new THREE.ShadowMaterial();
				floorMaterial.opacity = 0.8;
				let floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
				floorMesh.rotation.x = -Math.PI / 2;
				floorMesh.receiveShadow = true;
				sceneGroup.add(floorMesh);
				markerRoot1.add(sceneGroup);

				const loaderGltf = new THREE.GLTFLoader();

				loaderGltf.load("./data/чтото.glb", function (gltf) {
					var object = gltf.scene;
					object.scale.set(0.5, 0.5, 0.5);
					object.shadowMap = true;
					object.position.y += 1;
					sceneGroup.add(object);
					document.addEventListener("keydown", (e) => {
						console.log("afsasfddd");
						if (e.key === "w") {
							object.rotation.y -= 0.02;
						}
						if (e.key === "s") {
							object.rotation.y += 0.02;
						}
						if (e.key === "a") {
							object.rotation.x -= 0.02;
						}
						if (e.key === "d") {
							object.rotation.x += 0.02;
						}
					});
				});

				let light = new THREE.DirectionalLight(0xffffff, 1, 20);
				light.position.set(1, 6, 1);
				light.castShadow = true;
				sceneGroup.add(light);

				let lightSphere = new THREE.Mesh(
					new THREE.SphereGeometry(0.1),
					new THREE.MeshBasicMaterial({
						color: 0xffffff,
						transparent: true,
						scale: 3,
						opacity: 0.8,
					}),
				);
				lightSphere.position.copy(light.position);
				sceneGroup.add(lightSphere);

				let ambientLight = new THREE.AmbientLight(0x000);
				ambientLight.position.add(1, 1, 1);
				sceneGroup.add(ambientLight);
			}

			function update() {
				if (arToolkitSource.ready !== false)
					arToolkitContext.update(arToolkitSource.domElement);
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
		<title>Взаимодействие с моделькой</title>
		<script src="https://unpkg.com/three@0.87.1/build/three.js"></script>
		<script src="https://unpkg.com/three@0.87.1/examples/js/controls/OrbitControls.js"></script>
		<script src="https://unpkg.com/three@0.87.1/examples/js/loaders/GLTFLoader.js"></script>
		<script src="js/three.js"></script>
		<script src="jsartoolkit5/artoolkit.min.js"></script>
		<script src="jsartoolkit5/artoolkit.api.js"></script>
		<script src="threex/threex-artoolkitsource.js"></script>
		<script src="threex/threex-artoolkitcontext.js"></script>
		<script src="threex/threex-arbasecontrols.js"></script>
		<script src="threex/threex-armarkercontrols.js"></script>
	</head>

	<body style="margin: 0px; overflow: hidden; font-family: Monospace">
		<script type="module">
			var scene,
				camera,
				renderer,
				clock,
				deltaTime,
				totalTime,
				shadowMesh,
				object;

			var arToolkitSource, arToolkitContext;

			var markerRoot1;

			var material1, mesh1;

			initialize();
			animate();

			function initialize() {
				scene = new THREE.Scene();

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
				renderer.shadowMap.enabled = true;
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
				markerRoot1 = new THREE.Group();
				scene.add(markerRoot1);
				let markerControls1 = new THREEx.ArMarkerControls(
					arToolkitContext,
					markerRoot1,
					{
						type: "pattern",
						patternUrl: "../base/patterns/pattern-logo.patt",
					},
				);
				renderer.shadowMap.enabled = true;
				renderer.shadowMap.type = THREE.PCFSoftShadowMap;

				let loader = new THREE.TextureLoader();

				let sceneGroup = new THREE.Group();
				let floorGeometry = new THREE.PlaneGeometry(200, 200);
				let floorMaterial = new THREE.ShadowMaterial();
				floorMaterial.opacity = 0.8;
				let floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
				floorMesh.rotation.x = -Math.PI / 2;
				floorMesh.receiveShadow = true;
				sceneGroup.add(floorMesh);
				markerRoot1.add(sceneGroup);

				const loaderGltf = new THREE.GLTFLoader();

				loaderGltf.load("./data/shadow.glb", function (gltf) {
					var object = gltf.scene;
					object.scale.set(0.5, 0.5, 0.5);
					object.shadowMap = true;
					object.position.y += 1;
					sceneGroup.add(object);
					document.addEventListener("keydown", (e) => {
						console.log("afsasfddd");
						if (e.key === "w") {
							object.rotation.y -= 0.02;
						}
						if (e.key === "s") {
							object.rotation.y += 0.02;
						}
						if (e.key === "a") {
							object.rotation.x -= 0.02;
						}
						if (e.key === "d") {
							object.rotation.x += 0.02;
						}
					});
				});

				let light = new THREE.DirectionalLight(0xffffff, 1, 20);
				light.position.set(1, 6, 1);
				light.castShadow = true;
				sceneGroup.add(light);

				let lightSphere = new THREE.Mesh(
					new THREE.SphereGeometry(0.1),
					new THREE.MeshBasicMaterial({
						color: 0xffffff,
						transparent: true,
						scale: 3,
						opacity: 0.8,
					}),
				);
				lightSphere.position.copy(light.position);
				sceneGroup.add(lightSphere);

				let ambientLight = new THREE.AmbientLight(0x000);
				ambientLight.position.add(1, 1, 1);
				sceneGroup.add(ambientLight);
			}

			function update() {
				if (arToolkitSource.ready !== false)
					arToolkitContext.update(arToolkitSource.domElement);
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
</html>
`,
		`<!DOCTYPE html>
<html>
	<head>
		<script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
		<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
	</head>
	<body>
		<script>
			AFRAME.registerComponent("dot", {
				schema: {
					message: { type: "string", default: "0 0 0" },
				},
				init: function () {
					let el = this.el;
					el.setAttribute("geometry", "primitive: sphere");
					el.setAttribute("scale", "0.02 0.02 0.02");
					el.setAttribute("material", "color: green");
					el.setAttribute("position", this.data.toString());
				},
			});
		</script>
		<script type="module">
			window.addEventListener("DOMContentLoaded", (event) => {
				fetch("./ref/chaos.json")
					.then(function (response) {
						return response.json();
					})
					.then(function (data) {
						for (let i = 0; i < data.length; i++) {
							var el = document.createElement("a-entity");
							el.setAttribute(
								"dot",
								data[i]["x"].toString() + " " + data[i]["y"].toString() + " " + data[i]["z"].toString(),
							);
							document.querySelector("a-marker").appendChild(el);
						}
					});
			});
		</script>
		<a-scene>
			<a-marker
				preset="custom"
				type="pattern"
				url="../base/patterns/pattern-logo.patt"
			></a-marker>
			<a-entity camera></a-entity>
		</a-scene>
	</body>
</html>`,
		`<!DOCTYPE html>
<html>
	<head>
		<script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
		<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
		<style>
			.button {
				cursor: pointer;
				background-color: rgba(220, 223, 205, 0.5);
				width: 10vh;
				height: 10vh;
				position: fixed;
			}
			.up {
				border-bottom-left-radius: 10px;
				border-bottom-right-radius: 10px;
				top: 0px;
				left: 45%;
			}
			.down {
				bottom: 0px;
				left: 45%;
				border-top-left-radius: 10px;
				border-top-right-radius: 10px;
			}
			.left {
				top: 45%;
				left: 0px;
				border-top-right-radius: 10px;
				border-bottom-right-radius: 10px;
			}
			.right {
				top: 45%;
				right: 0px;
				border-top-left-radius: 10px;
				border-bottom-left-radius: 10px;
			}
		</style>
	</head>
	<body>
		<a-scene
			vr-mode-ui="enabled: false;"
			renderer="logarithmicDepthBuffer: true;"
			embedded
			arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
		>
			<a-assets>
				<img id="tx" src="./images/tiles.jpg" />
			</a-assets>
			<a-marker
				preset="custom"
				type="pattern"
				url="../base/patterns/pattern-logo.patt"
			>
				<a-box id="control" src="#tx"></a-box>
			</a-marker>
			<a-entity camera></a-entity>
		</a-scene>
		<div class="up button"></div>
		<div class="down button"></div>
		<div class="right button"></div>
		<div class="left button"></div>
	</body>
	<script>
		var obj = document.getElementById("control");
		let upb = document.getElementsByClassName("up")[0];
		let downb = document.getElementsByClassName("down")[0];
		let rightb = document.getElementsByClassName("right")[0];
		let leftb = document.getElementsByClassName("left")[0];
		var dx = 25;
		let z = 0;
		let y = 0;
		let x = 0;

		upb.addEventListener("mousedown", () => {
			let set = setInterval(() => {
				obj.setAttribute("rotation", x.toString() + " " + y.toString() + " 0");
				x += 1;
			}, 10);
			upb.addEventListener("mouseup", () => {
				clearInterval(set);
			});
		});
		downb.addEventListener("mousedown", () => {
			let set = setInterval(() => {
				obj.setAttribute("rotation", x.toString() + " " + y.toString() + " 0");
				x -= 1;
			}, 10);
			downb.addEventListener("mouseup", () => {
				clearInterval(set);
			});
		});
		rightb.addEventListener("mousedown", () => {
			let set = setInterval(() => {
				obj.setAttribute("rotation", x.toString() + " " + y.toString() + " 0");
				y += 1;
			}, 10);
			rightb.addEventListener("mouseup", () => {
				clearInterval(set);
			});
		});
		leftb.addEventListener("mousedown", () => {
			let set = setInterval(() => {
				obj.setAttribute("rotation", x.toString() + " " + y.toString() + " 0");
				y -= 1;
			}, 10);
			leftb.addEventListener("mouseup", () => {
				clearInterval(set);
			});
		});
	</script>
</html>`,
		`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
	<script src="https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"></script>

	<body style="margin: 0px; overflow: hidden">
		<a-scene embedded arjs>
			<a-marker
				markerhandler
				preset="custom"
				type="pattern"
				url="../base/patterns/pattern-logo.patt"
				id="white"
			>
				<a-entity id="smth" position="0 0 0">
					<a-box position="0 0.5 0" color="white"></a-box>
				</a-entity>
			</a-marker>
			<a-marker
				markerhandler
				preset="custom"
				type="pattern"
				url="./ref/pattern_circle.patt"
				id="red"
			>
				<a-box position="0 0.5 0" color="red"></a-box>
			</a-marker>
			<a-marker
				markerhandler
				preset="custom"
				type="pattern"
				url="./ref/pattern-trans.patt"
				id="yellow"
			>
			</a-marker>
			<a-entity camera></a-entity>
		</a-scene>
		<script>
			let findWhite = false;
			let findRed = false;
			let white = document.querySelector("#white");
			let red = document.querySelector("#red");
			let smth = document.querySelector("#smth");
			document.querySelector("#white").addEventListener("markerFound", (e) => {
				findWhite = true;
			});
			document.querySelector("#red").addEventListener("markerFound", (e) => {
				findRed = true;
			});
			document.querySelector("#yellow").addEventListener("markerFound", (e) => {
				if (findRed && findWhite) {
					console.log(red.object3D.position);
					let box = document.createElement("a-box");
					console.log(box);
					box.setAttribute("position", {
						x: -white.object3D.position.x + red.object3D.position.x,
						y: -white.object3D.position.y + red.object3D.position.y,
						z: -white.object3D.position.z + red.object3D.position.z,
					});
					box.setAttribute("color", "yellow");
					smth.insertAdjacentElement("beforeend", box);
				}
			});
			document.querySelector("#red").addEventListener("markerLost", (e) => {
				findRed = false;
			});
			document.querySelector("#white").addEventListener("markerLost", (e) => {
				findWhite = false;
			});
		</script>
	</body>
</html>`,
		`<!DOCTYPE html>
<html>
	<script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
	<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
	<script src="https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.1/dist/aframe-extras.min.js"></script>
	<script src="https://ideaspacevr.github.io/aframe-particle-system-component/dist/aframe-particle-system-component.min.js"></script>
	<head>
		<link rel="stylesheet" href="style.css" />
	</head>
	<body>
		<style>
			* {
				font-size: 18px;
				font-weight: 500;
				transition: 0.3s linear;
			}

			#score:hover {
				opacity: 0.9;
			}

			#life:hover {
				opacity: 0.9;
			}

			#restart:hover {
				opacity: 0.9;
			}

			#score {
				cursor: pointer;
				position: fixed;
				left: 10px;
				top: 10px;
				padding: 0 20px;
				height: 50px;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: rgb(255, 217, 225);
				color: crimson;
			}

			#life {
				cursor: pointer;
				position: fixed;
				right: 10px;
				top: 10px;
				height: 50px;
				padding: 0 20px;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: rgb(236, 217, 255);
				color: rgb(50, 20, 220);
				font-size: 24px;
				font-weight: 600;
			}

			#end {
				z-index: 1;
				position: fixed;
				top: 50%;
				left: 50%;
				padding: 20px 30px;
				transform: translate(-50%, -50%);
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: rgba(240, 248, 255);
				color: rgb(110, 110, 110);
			}

			#restart {
				z-index: 1;
				cursor: pointer;
				position: fixed;
				left: 50%;
				bottom: 20px;
				transform: translateX(-50%);
				background-color: rgb(145, 128, 161);
				height: 40px;
				padding: 0 30px;
				color: aliceblue;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			#time {
				cursor: pointer;
				position: fixed;
				left: 50%;
				top: 100px;
				transform: translateX(-50%);
				background-color: rgba(145, 128, 161);
				height: 40px;
				padding: 0 30px;
				color: rgb(0, 0, 0);
				display: flex;
				align-items: center;
				justify-content: center;
			}

			#background {
				position: fixed;
				left: 0;
				top: 0;
				height: 100%;
				width: 100%;
				background-color: rgba(0, 0, 0, 0.2);
			}
		</style>
		<div id="formstat" hidden="true">0</div>
		<div id="lifes" hidden="true">5</div>
		<script>
			AFRAME.registerComponent("follow", {
				schema: {
					t1: {
						type: "selector",
					},
				},
				init: function () {
					this.target = this.data.t1.object3D;
					this.time = 1000;
				},

				update: function () {
					this.toPosition = this.target.position;
					this.color = Math.floor(Math.random() * 3);
				},

				tick: function (time, timeDelta) {
					this.time += timeDelta;
					let t = Math.abs(((this.time * 0.001) % 2) - 1);
					t = Math.min(t, 0.98);
					t = Math.max(t, 0.02);

					this.inter = new THREE.Vector3();
					this.inter.add(this.toPosition);
					this.inter.multiplyScalar(0.7);
					this.inter.y += 5;
					this.inter.multiplyScalar(t * (1 - t));

					currentPosition = new THREE.Vector3();
					currentPosition.add(this.toPosition);
					currentPosition.multiplyScalar(t * t);
					currentPosition.add(this.inter);

					this.el.setAttribute("position", currentPosition);
				},
			});
		</script>
		<script>
			var k = 8000;
			AFRAME.registerComponent("random", {
				schema: {
					t1: {
						type: "selector",
					},
					t2: {
						type: "selector",
					},
					t3: {
						type: "int",
						default: 0,
					},
				},
				init: function () {
					this.color = Math.floor(Math.random() * 3) + 1;
					this.form = Math.floor(Math.random() * 2) + 1;
					if (this.data.t3 == 0) {
						this.kubit = Math.floor(Math.random() * 2);
					} else {
						this.kubit == 0;
					}

					if (this.kubit == 0) {
						if (this.color == 1) {
							if (this.form == 1) {
								this.el.setAttribute(
									"gltf-model",
									"https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/cube2.glb?v=1679536942411",
								);
							} else if (this.form == 2) {
								this.el.setAttribute(
									"gltf-model",
									"https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/%D0%A8%D0%90%D0%A0%D0%B8%D0%BA.glb?v=1679545518759",
								);
							}
						} else if (this.color == 2) {
							if (this.form == 1) {
								this.el.setAttribute(
									"gltf-model",
									"https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/cube.glb?v=1679536937915",
								);
							} else if (this.form == 2) {
								this.el.setAttribute(
									"gltf-model",
									"https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/%D0%A8%D0%90%D0%A0%D0%B8%D0%BA1.glb?v=1679545516312",
								);
							}
						} else if (this.color == 3) {
							if (this.form == 1) {
								this.el.setAttribute(
									"gltf-model",
									"https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/cube1.glb?v=1679536940050",
								);
							} else if (this.form == 2) {
								this.el.setAttribute(
									"gltf-model",
									"https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/%D0%A8%D0%90%D0%A0%D0%B8%D0%BA2.glb?v=1679545515149",
								);
							}
						}
					}

					if (this.kubit == 1) {
						if (this.color == 1) {
							if (this.form == 1) {
								this.el.setAttribute(
									"gltf-model",
									"https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BA%D1%83%D0%B1.glb?v=1679551291681",
								);
							} else if (this.form == 2) {
								this.el.setAttribute(
									"gltf-model",
									"https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%20%D1%88%D0%B0%D1%80.glb?v=1679545517723",
								);
							}
						} else if (this.color == 2) {
							if (this.form == 1) {
								this.el.setAttribute(
									"gltf-model",
									"https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BA%D1%83%D0%B11.glb?v=1679551294917",
								);
							} else if (this.form == 2) {
								this.el.setAttribute(
									"gltf-model",
									"https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%20%D1%88%D0%B0%D1%801.glb?v=1679545511842",
								);
							}
						} else if (this.color == 3) {
							if (this.form == 1) {
								this.el.setAttribute(
									"gltf-model",
									"https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BA%D1%83%D0%B12.glb?v=1679551288450",
								);
							} else if (this.form == 2) {
								this.el.setAttribute(
									"gltf-model",
									"https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%20%D1%88%D0%B0%D1%802.glb?v=1679545513966",
								);
							}
						}
					}
				},

				tick: function () {
					this.pos = this.el.getAttribute("position");
					if (this.pos.x < -1.9) {
						kub.removeAttribute("follow");
						kub.setAttribute("position", "0 0 0");
						t1.setAttribute("position", "0 0 0");
						kub.setAttribute("follow", "t1: #t1");
						kub.removeAttribute("random");
						kub.setAttribute("random", "t1: #score; t2: #formstat;");
					}
					if (this.pos.x > 1.9) {
						setTimeout(() => {
							kub.removeAttribute("follow");
							kub.setAttribute("position", "0 0 0");
							t1.setAttribute("position", "0 0 0");
							kub.setAttribute("follow", "t1: #t1");
						}, 1000);
						this.kubit = 0;
						if (this.color == 1) {
							if (this.form == 1) {
								this.el.setAttribute(
									"gltf-model",
									"https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/cube2.glb?v=1679536942411",
								);
							} else if (this.form == 2) {
								this.el.setAttribute(
									"gltf-model",
									"https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/%D0%A8%D0%90%D0%A0%D0%B8%D0%BA.glb?v=1679545518759",
								);
							}
						} else if (this.color == 2) {
							if (this.form == 1) {
								this.el.setAttribute(
									"gltf-model",
									"https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/cube.glb?v=1679536937915",
								);
							} else if (this.form == 2) {
								this.el.setAttribute(
									"gltf-model",
									"https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/%D0%A8%D0%90%D0%A0%D0%B8%D0%BA1.glb?v=1679545516312",
								);
							}
						} else if (this.color == 3) {
							if (this.form == 1) {
								this.el.setAttribute(
									"gltf-model",
									"https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/cube1.glb?v=1679536940050",
								);
							} else if (this.form == 2) {
								this.el.setAttribute(
									"gltf-model",
									"https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/%D0%A8%D0%90%D0%A0%D0%B8%D0%BA2.glb?v=1679545515149",
								);
							}
						}
					}
					if (this.pos.z > 1.4) {
						if (this.kubit == 1) {
							endGame();
							setTimeout(() => {
								restart();
							}, 4000);
						}
						if (this.data.t2.textContent != this.form - 1) {
							removeLife();
						} else {
							if (this.color == 1) {
								if (this.pos.x > 1) {
									console.log("entrd");
									addScore();
								}
							} else if (this.color == 2) {
								if (this.pos.x < -1) {
									console.log("entgr");

									addScore();
								}
							} else if (this.color == 3) {
								if (this.pos.x < 1) {
									console.log("entbl");
									addScore();
								}
							}
						}

						kub.removeAttribute("follow");
						kub.setAttribute("position", "0 0 0");
						t1.setAttribute("position", "0 0 0");
						kub.setAttribute("follow", "t1: #t1");
						kub.removeAttribute("random");
						kub.setAttribute("random", "t1: #score; t2: #formstat;");
					}
				},
			});
		</script>
		<a-scene>
			<a-marker
				type="pattern"
				preset="custom"
				url="https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/pattern-logo.patt?v=1679558566373"
			>
				<a-sphere
					visible="false"
					radius="0"
					id="t1"
					position="0 0 0"
				></a-sphere>
				<a-entity
					id="kub"
					gltf-model="https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/cube2.glb?v=1679536942411"
					follow="t1: #t1;"
					position="0 0.2 0"
					scale="0.25 0.25 0.25"
					rotation="0 270 0"
					animation-mixer="timeScale: 1.5"
					random="t1: #score; t2: #formstat;"
				></a-entity>
				<a-entity
					geometry="primitive: plane"
					rotation="270 0 0"
					scale="5 3 4"
					position="0 -1 0.5"
					material="src: https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/txtr.jpg?v=1679553089022"
				></a-entity>
				<a-entity
					id="priR"
					geometry="primitive: box"
					position="1.5 0 1.5"
					scale="0.5 0.5 0.5"
					material="color:red"
				></a-entity>
				<a-entity
					id="priB"
					geometry="primitive: box"
					position="0 0 1.5"
					material="color:blue"
					scale="0.5 0.5 0.5"
				></a-entity>
				<a-entity
					id="priG"
					geometry="primitive: box"
					position="-1.5 0 1.5"
					scale="0.5 0.5 0.5"
					material="color:yellow"
				></a-entity>
				<a-entity
					id="priDest"
					gltf-model="https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/%D0%BA%D0%BE%D1%80%D0%B7%D0%B8%D0%BD%D0%B0.glb?v=1679554006765"
					position="-2 -0.5 0"
					scale="0.4 0.3 0.4"
					material="color:black"
				></a-entity>
				<a-entity
					id="priC"
					gltf-model="https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/nechto.glb?v=1679556431439"
					position="2 0 0"
					scale="0.15 0.15 0.15"
				></a-entity>
			</a-marker>
			<a-marker
				type="pattern"
				preset="custom"
				url="https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/pattern_red.patt?v=1679555540178"
				id="red"
			>
				<a-box color="red"></a-box>
			</a-marker>
			<a-marker
				type="pattern"
				preset="custom"
				url="https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/pattern-defolt%20.patt?v=1679559692161"
				id="destroy"
			>
				<a-box color="black"></a-box>
			</a-marker>
			<a-marker
				type="pattern"
				preset="custom"
				url="https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/pattern-trans.patt?v=1679555718889"
				id="change"
			>
				<a-box color="white"></a-box>
			</a-marker>
			<a-marker
				type="pattern"
				preset="custom"
				url="https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/pattern_yellow.patt?v=1679555673696"
				id="green"
			>
				<a-box color="yellow"></a-box>
			</a-marker>
			<a-marker
				type="pattern"
				preset="custom"
				url="https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/pattern_blue.patt?v=1679555629968"
				id="blue"
			>
				<a-box color="blue"></a-box>
			</a-marker>

			<a-marker
				type="pattern"
				preset="custom"
				url="https://cdn.glitch.global/e6350d8a-1230-4020-bbf8-73f1bd38507b/pattern-portal.patt?v=1679564248126"
				id="bo"
			>
				<a-box color="violet"></a-box>
			</a-marker>

			<a-entity camera></a-entity>
		</a-scene>
		<script>
			const markerr = document.getElementById("red");
			const markerg = document.getElementById("green");
			const markerb = document.getElementById("blue");
			const mdest = document.getElementById("destroy");
			const mchan = document.getElementById("change");
			const rbox = document.getElementById("priR");
			const gbox = document.getElementById("priB");
			const bbox = document.getElementById("priG");
			const bch = document.getElementById("priC");
			const markerform = document.getElementById("bo");
			const formst = document.getElementById("formstat");
			const target = document.getElementById("t1");
			const kub = document.getElementById("kub");
			let form = 0;
			mdest.addEventListener("markerLost", () => {
				kub.removeAttribute("follow");
				kub.setAttribute("position", "0 0 0");
				t1.setAttribute("position", "-2 -1 0");
				kub.setAttribute("follow", "t1: #t1");
			});
			mchan.addEventListener("markerLost", () => {
				kub.removeAttribute("follow");
				kub.setAttribute("position", "0 0 0");
				t1.setAttribute("position", "2 0.5 0");
				kub.setAttribute("follow", "t1: #t1");

				setTimeout(() => {
					bch.setAttribute(
						"particle-system",
						"color: #0000AA; particleCount: 200",
					);
					setTimeout(() => {
						bch.removeAttribute("particle-system");
					}, 500);
				}, 500);
			});
			markerform.addEventListener("markerLost", () => {
				form = 1;
				rbox.setAttribute("geometry", "primitive: sphere");
				gbox.setAttribute("geometry", "primitive: sphere");
				bbox.setAttribute("geometry", "primitive: sphere");
				rbox.setAttribute("scale", "0.75 0.75 0.75");
				gbox.setAttribute("scale", "0.75 0.75 0.75");
				bbox.setAttribute("scale", "0.75 0.75 0.75");
				formst.textContent = form.toString();
			});
			markerform.addEventListener("markerFound", () => {
				form = 0;
				rbox.setAttribute("geometry", "primitive: box");
				gbox.setAttribute("geometry", "primitive: box");
				bbox.setAttribute("geometry", "primitive: box");
				rbox.setAttribute("scale", "1 1 1");
				gbox.setAttribute("scale", "1 1 1");
				bbox.setAttribute("scale", "1 1 1");
				formst.textContent = form.toString();
			});
			markerr.addEventListener("markerLost", () => {
				kub.removeAttribute("follow");
				kub.setAttribute("position", "0 0 0");
				t1.setAttribute("position", "1.5 0 1.5");
				kub.setAttribute("follow", "t1: #t1");
			});
			markerg.addEventListener("markerLost", () => {
				kub.removeAttribute("follow");
				kub.setAttribute("position", "0 0 0");
				t1.setAttribute("position", "-1.5 0 1.5");
				kub.setAttribute("follow", "t1: #t1");
			});
			markerb.addEventListener("markerLost", () => {
				kub.removeAttribute("follow");
				kub.setAttribute("position", "0 0 0");
				t1.setAttribute("position", "0 0 1.5");
				kub.setAttribute("follow", "t1: #t1");
			});
		</script>
		<div id="score">Score: 0</div>
		<div id="life">Life counter: 5</div>
		<div id="end" style="display: none">Game ended</div>
		<div id="restart">Restart</div>
		<div id="time">0</div>
		<div id="background" style="display: none"></div>
		<audio controls="controls" id="audio" autoplay loop style="display: none">
			<source
				src="https://cdn.glitch.global/97d03534-e21b-43ae-a68a-a767c9730c83/back-music.mp3?v=1679457122915"
				type="audio/wav"
			/>
			<source
				src="https://cdn.glitch.global/97d03534-e21b-43ae-a68a-a767c9730c83/back-music.mp3?v=1679457122915"
				type="audio/mpeg"
			/>
		</audio>
		<script>
			const score = document.querySelector("#score");
			const life = document.querySelector("#life");
			const end = document.querySelector("#end");
			const start = document.querySelector("#restart");
			const time = document.querySelector("#time");
			const background = document.querySelector("#background");
			const body = document.querySelector("body");
			// поинтов
			let points = 0;
			//жизней
			let lifes = 5;
			// осталось времени
			let left = 90;

			const startAudio = () => {
				let audio = document.createElement("div");
				audio.innerHTML = '<audio controls="controls" id="audio" autoplay loop style="display: none">
				<source
					src="https://cdn.glitch.global/97d03534-e21b-43ae-a68a-a767c9730c83/pop.mp3?v=1679455658810"
					type="audio/wav"
				/>
				<source
					src="https://cdn.glitch.global/97d03534-e21b-43ae-a68a-a767c9730c83/pop.mp3?v=1679455658810"
					type="audio/mpeg"
				/>
			</audio>';
				body.insertAdjacentElement("beforeend", audio);
				setTimeout(() => {
					body.removeChild(audio);
				}, 1000);
			};

			// увеличение очков и обновление счётчика
			const addScore = () => {
				++points;
				score.textContent = "Score: " + points.toString(); // Обновление счётчика очков
			};

			// уменьшение очков и обновление счётчика
			const removeScore = () => {
				--points;
				score.textContent = "Score: " + points.toString(); // Обновление счётчика очков
			};

			// увеличение жизней и обновление счётчика
			const addLife = () => {
				++lifes;
				life.textContent = "Life counter: " + lifes.toString(); // Обновление счётчика жизней
			};

			// показывание бэкграунда и сообщение об окончании игры
			const endGame = () => {
				end.textContent = "Game ended. Your score: " + points.toString();
				end.setAttribute("style", "display: block;");
				background.setAttribute("style", "display: block;");
			};

			const intervalSet = () => {
				let interval;

				interval = setInterval(() => {
					--left;
					setTime();
					if (left === 0) {
						endGame();
						clearInterval(interval);
						return;
					}
				}, 1000);
			};

			intervalSet();

			// уменьшение очков и обновление счётчика
			const removeLife = () => {
				--lifes;
				if (lifes === 0) {
					endGame();
				}
				life.textContent = "Life counter: " + lifes.toString(); // Обновление счётчика жизней
			};

			// обновление счётчика времени
			const setTime = () => {
				let seconds =
					(left % 60).length === 1 ? "0" + (left % 60) : (left % 60).toString();
				time.textContent = "0 " + Math.floor(left / 60) + ":" + seconds;
			};

			// рестарт всех параметров и обновление счётчиков
			const restart = () => {
				left = 90;
				points = 0;
				lifes = 5;
				startAudio();
				end.setAttribute("style", "display: none;");
				background.setAttribute("style", "display: none;");
				setTime();
				life.textContent = "Life counter: " + lifes.toString(); // Обновление счётчика жизней
				score.textContent = "Score: " + points.toString(); // Обновление счётчика очков
			};

			// рестарт игры при клике на кнопку
			start.addEventListener("click", (e) => {
				restart();
			});
		</script>
	</body>
</html>`,
		`<!DOCTYPE html>
<html lang="en">
	<head>
		<script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
		<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
		<script src="https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.1/dist/aframe-extras.min.js"></script>
		<script src="https://ideaspacevr.github.io/aframe-particle-system-component/dist/aframe-particle-system-component.min.js"></script>
		<script src="https://unpkg.com/aframe-pardo-collider-component/dist/aframe-pardo-collider-component.min.js"></script>
		<style>
			html,
			body {
				margin: 0;
				padding: 0;
				width: 100%;
				height: 100%;
			}

			#right {
				display: flex;
				align-items: center;
				justify-content: center;
				position: absolute;
				bottom: 45px;
				width: 100px;
				height: 50px;
				right: 0;
				border: 3px solid #2e6482;
				transform: scaleX(-1);
				padding: 12px;
				cursor: pointer;
				background-color: rgb(0, 0, 0, 0.4);
			}
			#left {
				position: absolute;
				display: flex;
				align-items: center;
				justify-content: center;
				bottom: 45px;
				width: 100px;
				height: 50px;
				left: 0;
				border: 3px solid #2e6482;
				padding: 12px;
				cursor: pointer;
				background-color: rgb(0, 0, 0, 0.4);
			}
			#countc {
				position: absolute;
				bottom: calc(100% - 75px);
				width: 8px;
				left: calc(100% - 98px);

				color: #2e6482;
				font-family: sans-serif;
				font-weight: bold;
				font-size: 35px;
				padding: 12px;
				border-radius: 5px;
				cursor: pointer;
			}
			#for_countc {
				position: absolute;
				bottom: calc(100% - 72px);
				width: 120px;
				left: calc(100% - 130px);
			}
			#time {
				position: absolute;
				bottom: calc(100% - 67px);
				width: 8px;
				right: calc(100% - 80px);

				color: #2e6482;
				font-family: sans-serif;
				font-weight: bold;
				font-size: 19px;
				padding: 12px;
				border-radius: 5px;
				cursor: pointer;
			}
			#for_time {
				position: absolute;
				bottom: calc(100% - 72px);
				width: 100px;
				right: calc(100% - 110px);
			}
		</style>
	</head>
	<body>
		<div id="for_countc">
			<img
				src="https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/balls.png?v=1679077860688"
				style="width: 100%"
			/>
		</div>
		<div id="countc"></div>

		<div id="for_time">
			<img
				src="https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/timer.png?v=1679567448520"
				style="width: 100%"
			/>
		</div>
		<div id="time"></div>

		<script>
			AFRAME.registerComponent("down", {
				tick: function () {
					const box = document.getElementById("plat");
					const cc = document.getElementById("countc");
					let pso = this.el.getAttribute("position");
					if (pso["y"] > 0) {
						pso = pso["x"].toString() + " " + (pso["y"] - 0.02).toString() + " 0";
					}
					this.el.setAttribute("position", pso);
					if (this.el.getAttribute("position")["y"] < 0) {
						let w = Math.random() * 8 - 4;
						this.el.setAttribute("position", w + " 5 0");
					}

					if (
						this.el.getAttribute("position")["x"] <
							box.getAttribute("position")["x"] + 1 &&
						this.el.getAttribute("position")["x"] >
							box.getAttribute("position")["x"] - 1 &&
						this.el.getAttribute("position")["y"] < 1
					) {
						let w = Math.random() * 8 - 4;
						this.el.setAttribute("position", w + " 5 0");
						cc.textContent = (Number(cc.textContent) + 1).toString();
					}
				},
			});
		</script>
		<div id="cell" hidden="true">0</div>
		<a-scene>
			<a-entity camera></a-entity>
			<a-marker  preset="custom"
			id="mr"
				type="pattern"
				url="../base/patterns/pattern-logo.patt" >
				<a-entity
					collider
					id="plat"
					gltf-model="https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/korzina.glb?v=1679561132463"
					position="0 0 0"
					scale="1 1 1"
					rotation="0 0 0"
					class="collidable"
				></a-entity>
			</a-marker>
		</a-scene>

		<div id="left">
			<img
				src="https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/arrow.png?v=1679076542952"
				style="width: 60%; transform: scaleX(-1)"
			/>
		</div>
		<div id="right">
			<img
				src="https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/arrow.png?v=1679076542952"
				style="width: 60%; transform: scaleX(-1)"
			/>
		</div>

		<script id="count">
			count = 0;
			document
				.getElementById("plat")
				.addEventListener("collide", function (evt) {
					count += 1;
				});
		</script>
		<script>
			const marker = document.querySelector("#mr");
			for (let i = 0; i < 3; i++) {
				let newDiv = document.createElement("a-entity");
				newDiv.setAttribute(
					"gltf-model",
					"https://cdn.glitch.global/33aa1ac4-4c6d-49d0-b78a-73b3c9f291aa/omul_pryzhok%20(1).glb?v=1678551063386"
				);
				newDiv.setAttribute("scale", "0.2 0.2 0.2");
				newDiv.setAttribute("rotation", "-90 90 0");
				newDiv.setAttribute("animation-mixer", "clip: *; loop: repeat");
				newDiv.setAttribute("id", "coin" + i);
				newDiv.setAttribute("position", (i * 2 - 2) + " 5 0");
				newDiv.setAttribute("down", "");
				marker.appendChild(newDiv);
			}
		</script>
		<script>
			const plat = document.getElementById("plat");
			const button = document.getElementById("left");
			button.addEventListener("click", function () {
				let pso = plat.getAttribute("position");
				plat.setAttribute("position", (pso["x"] - 1) + " 0 0");
			});
			const button2 = document.getElementById("right");
			button2.addEventListener("click", function () {
				let pso = plat.getAttribute("position");
				plat.setAttribute("position", (pso["x"] + 1) + " 0 0");
			});
		</script>
		<script>
			
			let left = 2;

			const setTime = () => {
				let seconds = (left % 60).toString().length === 1 ? "0" + (left % 60) : (left % 60);
				time.textContent = "0" + Math.floor(left / 60) + ":" + seconds;
			};

			const intervalSet = () => {
				let interval;

				interval = setInterval(() => {
					++left;
					setTime();
				}, 1000);
			};

			intervalSet()      
		</script>
	</body>
</html>`,
		`<!DOCTYPE html>
<html>
	<head>
		<title>AR.js A-Frame</title>
		<script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
		<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
		<script src="https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.1/dist/aframe-extras.min.js"></script>
		<script src="https://ideaspacevr.github.io/aframe-particle-system-component/dist/aframe-particle-system-component.min.js"></script>
		<script
			type="text/javascript"
			src="https://raw.githack.com/AR-js-org/AR.js/master/three.js/build/ar-threex-location-only.js"
		></script>
		<style>
			html,
			body {
				margin: 0;
				padding: 0;
				width: 100%;
				height: 100%;
			}
			#background_status {
				padding: 0px;
				width: 220px;
				margin: auto;
			}
			#status {
				color: #2e6482;
				font-family: sans-serif;
				font-size: 23px;
				font-weight: bold;
				position: absolute;
				bottom: 93%;
				left: 24%;
				cursor: pointer;
			}
			#backbt {
				position: absolute;
				bottom: 10%;
				width: 110px;
				right: 35%;
				cursor: pointer;
			}
		</style>
	</head>
	<body>
		<div id="cell" hidden="true">0</div>
		<div id="background_status">
			<img
				id="loding"
				src="https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/some_div.svg?v=1679064982586"
				style="width: 100%"
			/>
			<div id="status">Выберите сундук</div>
		</div>
		<div id="backbt" onclick="location.reload();">
			<img
				src="https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/rechardg.png?v=1679071637057"
				style="width: 100%"
			/>
		</div>
		<script>
			AFRAME.registerComponent("curl", {
				init: function () {
					this.el.addEventListener("mouseenter", function (evt) {
						document.getElementById("cell").textContent = "1";
						console.log(document.getElementById("cell"));
					});
					this.el.addEventListener("mouseleave", function (evt) {
						document.getElementById("cell").textContent = "0";
						console.log(document.getElementById("cell"));
					});
				},
			});
		</script>
		<script>
			AFRAME.registerComponent("curl2", {
				init: function () {
					this.el.addEventListener("mouseenter", function (evt) {
						document.getElementById("cell").textContent = "2";
						console.log(document.getElementById("cell"));
					});
					this.el.addEventListener("mouseleave", function (evt) {
						document.getElementById("cell").textContent = "0";
						console.log(document.getElementById("cell"));
					});
				},
			});
		</script>
		<script>
			AFRAME.registerComponent("curl3", {
				init: function () {
					this.el.addEventListener("mouseenter", function (evt) {
						document.getElementById("cell").textContent = "3";
						console.log(document.getElementById("cell"));
					});
					this.el.addEventListener("mouseleave", function (evt) {
						document.getElementById("cell").textContent = "0";
						console.log(document.getElementById("cell"));
					});
				},
			});
		</script>
		<a-scene
			vr-mode-ui="enabled: true"
			arjs=" videoTexture: true; debugUIEnabled: true"
			renderer="antialias: true; alpha: true"
		>
			<a-camera camera>
				<a-entity
					cursor="fuse: true; fuseTimeout: 1000"
					position="0 0 -1"
					geometry="primitive: ring; radiusInner: 0.03; radiusOuter: 0.05"
					material="color: #2e6482; shader: flat"
				></a-entity>
			</a-camera>
			<a-entity
				gps-new-entity-place="latitude: 52.276028; longitude: 104.286530"
			>
				<a-entity visibility-changer>
					<!-- Have a hotspot plane that can be detected by the raycaster -->
					<a-entity
						material="color: red"
						id="cp1"
						gltf-model="https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/BOX.glb?v=1679560483496"
						position="0 0 -5"
						scale="0.2 0.2 0.2"
						rotation="0 90 0"
						curl
						animation-mixer="clip: *; loop: repeat"
						class="collidable"
					></a-entity>
					<a-entity
						material="color: red"
						id="cp2"
						gltf-model="https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/BOX.glb?v=1679560483496"
						position="-2 0 -5"
						scale="0.2 0.2 0.2"
						rotation="0 90 0"
						curl2
						animation-mixer="clip: *; loop: repeat"
						class="collidable"
					></a-entity>
					<a-entity
						id="cp3"
						gltf-model="https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/BOX.glb?v=1679560483496"
						position="2 0 -5"
						scale="0.2 0.2 0.2"
						rotation="0 90 0"
						curl3
						animation-mixer="clip: *; loop: repeat"
						class="collidable"
						material="color: red"
					></a-entity>
					<a-entity
						particle-system="color: #0000AA; particleCount: 500"
						id="effects"
						gltf-model="https://cdn.glitch.global/33aa1ac4-4c6d-49d0-b78a-73b3c9f291aa/effects.glb?v=1678513407470"
						position="0 0 0"
						scale="0.2 0.2 0.2"
						rotation="0 90 0"
						animation-mixer="clip: *; loop: repeat"
						class="collidable"
						visible="false"
					>
						<a-entity id="winob" position="-5 6 0" rotation="0 180 0"></a-entity
					></a-entity>
					<!-- transparent ->  прозрачность  -->

					<script>
						let k = 0;
						let w = Math.floor(Math.random() * 3) + 1;
						let obr = Math.floor(Math.random() * 3) + 1;
						const wob = document.getElementById("winob");
						let flag = false;
						console.log(w);
						if (obr == 1) {
							wob.setAttribute(
								"gltf-model",
								"https://cdn.glitch.global/33aa1ac4-4c6d-49d0-b78a-73b3c9f291aa/1_trofey%20(1).glb?v=1678551061825",
							);
						} else if (obr == 2) {
							wob.setAttribute(
								"gltf-model",
								"https://cdn.glitch.global/33aa1ac4-4c6d-49d0-b78a-73b3c9f291aa/chtoto%20(1).glb?v=1678551062320",
							);
						} else if (obr == 3) {
							wob.setAttribute(
								"gltf-model",
								"https://cdn.glitch.global/33aa1ac4-4c6d-49d0-b78a-73b3c9f291aa/omul_pryzhok%20(1).glb?v=1678551063386",
							);
						}
						const button = document.getElementById("backbt");
						function Change() {
							const cp1 = document.getElementById("cp1");
							const cp2 = document.getElementById("cp2");
							const cp3 = document.getElementById("cp3");
							const effects = document.getElementById("effects");
							const disp = document.getElementById("status");
							if (w == k) {
								disp.textContent = "Победа!";

								const imgLoding = document.getElementById("loding");
								imgLoding.setAttribute(
									"src",
									"https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/win_seal.png?v=1679128607563",
								);
								flag = true;
							} else {
								disp.textContent = "Неудача!";

								const imgLoding = document.getElementById("loding");
								imgLoding.setAttribute(
									"src",
									"https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/sad_seal.png?v=1679128763782",
								);
								flag = false;
							}
							if (k == 1) {
								cp1.setAttribute(
									"gltf-model",
									"https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/animayion-box.glb?v=1679562786578",
								);
								if (flag) {
									effects.setAttribute("visible", "true");
									effects.setAttribute("position", "-0.1 -0.5 -5");
								}
							} else if (k == 2) {
								cp2.setAttribute(
									"gltf-model",
									"https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/animayion-box.glb?v=1679562786578",
								);

								if (flag) {
									effects.setAttribute("visible", "true");
									effects.setAttribute("position", "-2.1 -0.5 -5");
								}
							} else if (k == 3) {
								cp3.setAttribute(
									"gltf-model",
									"https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/animayion-box.glb?v=1679562786578",
								);
								if (flag) {
									effects.setAttribute("visible", "true");
									effects.setAttribute("position", "1.9 -0.5 -5");
								}
							}
						}

						button.addEventListener("click", function () {
							console.log(document.getElementById("cell"));
							if (document.getElementById("cell").textContent == "1") {
								k = 1;
							} else if (document.getElementById("cell").textContent == "2") {
								k = 2;
							} else if (document.getElementById("cell").textContent == "3") {
								k = 3;
							}
							Change();
						});

						addEventListener("touchstart", function () {
							console.log(document.getElementById("cell"));
							if (document.getElementById("cell").textContent == "1") {
								k = 1;
							} else if (document.getElementById("cell").textContent == "2") {
								k = 2;
							} else if (document.getElementById("cell").textContent == "3") {
								k = 3;
							}
							Change();
						});
					</script>
				</a-entity>
			</a-entity>
		</a-scene>
	</body>
</html>`,
		`<!DOCTYPE html>
<html lang="en">
	<head>
		<script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
		<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
		<script src="https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.1/dist/aframe-extras.min.js"></script>
		<script src="https://ideaspacevr.github.io/aframe-particle-system-component/dist/aframe-particle-system-component.min.js"></script>

		<style>
			html,
			body {
				margin: 0;
				padding: 0;
				width: 100%;
				height: 100%;
			}
			#background_status {
				width: 220px;
				position: absolute;
				right: 75px;
				bottom: 100px;
			}
			#status {
				color: #2e6482;
				font-family: sans-serif;
				font-size: 23px;
				font-weight: bold;
				position: absolute;
				bottom: 25px;
				left: 24%;
				cursor: pointer;
			}
			#backbt {
				position: absolute;
				bottom: 88%;
				width: 60px;
				left: 10%;
				cursor: pointer;
			}
		</style>
	</head>
	<body>
		<div id="cell" hidden="true">0</div>
		<div id="background_status">
			<img
				id="loding"
				src="https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/some_div.svg?v=1679064982586"
				style="width: 100%"
			/>
			<div id="status">Выберите сундук</div>
		</div>
		<script>
			AFRAME.registerComponent("curl", {
				init: function () {
					this.el.addEventListener("mouseenter", function (evt) {
						document.getElementById("cell").textContent = "1";
						console.log(document.getElementById("cell"));
					});
					this.el.addEventListener("mouseleave", function (evt) {
						document.getElementById("cell").textContent = "0";
						console.log(document.getElementById("cell"));
					});
				},
			});
		</script>
		<script>
			AFRAME.registerComponent("curl2", {
				init: function () {
					this.el.addEventListener("mouseenter", function (evt) {
						document.getElementById("cell").textContent = "2";
						console.log(document.getElementById("cell"));
					});
					this.el.addEventListener("mouseleave", function (evt) {
						document.getElementById("cell").textContent = "0";
						console.log(document.getElementById("cell"));
					});
				},
			});
		</script>
		<script>
			AFRAME.registerComponent("curl3", {
				init: function () {
					this.el.addEventListener("mouseenter", function (evt) {
						document.getElementById("cell").textContent = "3";
						console.log(document.getElementById("cell"));
					});
					this.el.addEventListener("mouseleave", function (evt) {
						document.getElementById("cell").textContent = "0";
						console.log(document.getElementById("cell"));
					});
				},
			});
		</script>
		<a-scene>
			<a-entity camera
				><a-entity
					cursor="fuse: true; fuseTimeout: 1000"
					position="0 0 -1"
					geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
					material="color: #2e6482; shader: flat"
				></a-entity
			></a-entity>
			<a-marker
				preset="custom"
				type="pattern"
				url="https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/pattern-boxies.patt?v=1679559123758"
			>
				<a-entity
					material="color: red"
					id="cp1"
					gltf-model="https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/BOX.glb?v=1679560483496"
					position="0 0 0"
					scale="0.2 0.2 0.2"
					rotation="0 90 0"
					curl
					animation-mixer="clip: *; loop: repeat"
					class="collidable"
				></a-entity>
				<a-entity
					material="color: red"
					id="cp2"
					gltf-model="https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/BOX.glb?v=1679560483496"
					position="-2 0 0"
					scale="0.2 0.2 0.2"
					rotation="0 90 0"
					curl2
					animation-mixer="clip: *; loop: repeat"
					class="collidable"
				></a-entity>
				<a-entity
					id="cp3"
					gltf-model="https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/BOX.glb?v=1679560483496"
					position="2 0 0"
					scale="0.2 0.2 0.2"
					rotation="0 90 0"
					curl3
					animation-mixer="clip: *; loop: repeat"
					class="collidable"
					material="color: red"
				></a-entity>
				<a-entity
					particle-system="color: #0000AA; particleCount: 500"
					id="effects"
					gltf-model="https://cdn.glitch.global/33aa1ac4-4c6d-49d0-b78a-73b3c9f291aa/effects.glb?v=1678513407470"
					position="0 0 0"
					scale="0.2 0.2 0.2"
					rotation="0 90 0"
					animation-mixer="clip: *; loop: repeat"
					class="collidable"
					visible="false"
				>
					<a-entity id="winob" position="0 8 0"></a-entity
				></a-entity>
			</a-marker>
		</a-scene>
		<div id="backbt" onclick="location.reload();">
			<img
				src="https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/rechardg.png?v=1679071637057"
				style="width: 100%"
			/>
		</div>
		<script>
			let k = 0;
			let w = Math.floor(Math.random() * 3) + 1;
			let obr = Math.floor(Math.random() * 3) + 1;
			const wob = document.getElementById("winob");
			let flag = false;
			console.log(w);
			if (obr == 1) {
				wob.setAttribute(
					"gltf-model",
					"https://cdn.glitch.global/33aa1ac4-4c6d-49d0-b78a-73b3c9f291aa/1_trofey%20(1).glb?v=1678551061825",
				);
			} else if (obr == 2) {
				wob.setAttribute(
					"gltf-model",
					"https://cdn.glitch.global/33aa1ac4-4c6d-49d0-b78a-73b3c9f291aa/chtoto%20(1).glb?v=1678551062320",
				);
			} else if (obr == 3) {
				wob.setAttribute(
					"gltf-model",
					"https://cdn.glitch.global/33aa1ac4-4c6d-49d0-b78a-73b3c9f291aa/omul_pryzhok%20(1).glb?v=1678551063386",
				);
			}
			const button = document.getElementById("backbt");
			function Change() {
				const cp1 = document.getElementById("cp1");
				const cp2 = document.getElementById("cp2");
				const cp3 = document.getElementById("cp3");
				const effects = document.getElementById("effects");
				const disp = document.getElementById("status");
				if (w == k) {
					disp.textContent = "Победа!";
					disp.setAttribute(
						"style",
						"font-size: 27px; left:5%; bottom: 38%; position: absolute;",
					);

					const imgLoding = document.getElementById("loding");
					imgLoding.setAttribute(
						"src",
						"https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/win_seal.png?v=1679128607563",
					);
					flag = true;
				} else {
					disp.textContent = "Неудача!";
					disp.setAttribute(
						"style",
						"font-size: 27px; left:4%; bottom: 38%; position: absolute;",
					);

					const imgLoding = document.getElementById("loding");
					imgLoding.setAttribute(
						"src",
						"https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/sad_seal.png?v=1679128763782",
					);
					flag = false;
				}
				if (k == 1) {
					cp1.setAttribute(
						"gltf-model",
						"https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/animayion-box.glb?v=1679562786578",
					);
					if (flag) {
						effects.setAttribute("visible", "true");
						effects.setAttribute("position", "0 0 0");
					}
				} else if (k == 2) {
					cp2.setAttribute(
						"gltf-model",
						"https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/animayion-box.glb?v=1679562786578",
					);

					if (flag) {
						effects.setAttribute("visible", "true");
						effects.setAttribute("position", "-2 0 0");
					}
				} else if (k == 3) {
					cp3.setAttribute(
						"gltf-model",
						"https://cdn.glitch.global/0ecc6900-36b9-4883-8350-3422b24267a8/animayion-box.glb?v=1679562786578",
					);
					if (flag) {
						effects.setAttribute("visible", "true");
						effects.setAttribute("position", "2 0 0");
					}
				}
			}

			button.addEventListener("click", function () {
				console.log(document.getElementById("cell"));
				if (document.getElementById("cell").textContent == "1") {
					k = 1;
				} else if (document.getElementById("cell").textContent == "2") {
					k = 2;
				} else if (document.getElementById("cell").textContent == "3") {
					k = 3;
				}
				Change();
			});

			addEventListener("touchstart", function () {
				console.log(document.getElementById("cell"));
				if (document.getElementById("cell").textContent == "1") {
					k = 1;
				} else if (document.getElementById("cell").textContent == "2") {
					k = 2;
				} else if (document.getElementById("cell").textContent == "3") {
					k = 3;
				}
				Change();
			});
		</script>
	</body>
</html>`,
	];
	let show = true;
	if (num < 0) {
		num = htmlInfo.length - 1;
		show = false;
	}

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
		"Найди бабра (GPS)",
		"Найди бабра (AR)",
	];

	return (
		<>
			<div className='code'>
				<div className='code__out'>
					<div className='code__info'>
						<p>{htmlInfo[num].split("\n").length} строк</p>
						{show ? (
							<>
								<p>{titles[num]}</p>
								<div className='code__nav'>
									<Nav num={num}></Nav>
								</div>
							</>
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
