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
				url="https://cdn.glitch.global/80aebc28-a561-4c84-b834-de8a4d8d1ea3/pattern-logo.patt?v=1671001465241"
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
				url="https://cdn.glitch.global/80aebc28-a561-4c84-b834-de8a4d8d1ea3/pattern-logo.patt?v=1671001465241"
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
					src="https://cdn.glitch.global/b008c373-328e-4db5-881a-9a03fdfcd8fe/nechto_strashnoe_i_opasnoe.glb?v=1671035516290"
				></a-asset-item>
			</a-assets>
			<a-marker
				preset="custom"
				type="pattern"
				url="https://cdn.glitch.global/80aebc28-a561-4c84-b834-de8a4d8d1ea3/pattern-logo.patt?v=1671001465241"
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
					src="https://cdn.glitch.global/f069a3fe-2715-4086-a9ed-d124a4f1b0f7/audio.mp3?v=1669374525398"
					crossorigin="anonymous"
				></audio>
			</a-assets>
			<a-marker
				preset="custom"
				type="pattern"
				url="https://cdn.glitch.global/80aebc28-a561-4c84-b834-de8a4d8d1ea3/pattern-logo.patt?v=1671001465241"
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
				url="https://cdn.glitch.global/80aebc28-a561-4c84-b834-de8a4d8d1ea3/pattern-logo.patt?v=1671001465241"
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
			<a-marker type="hiro">
				<a-sphere scale="1 1 1" color="red"> </a-sphere>
			</a-marker>
			<a-marker
				preset="custom"
				type="pattern"
				url="https://cdn.glitch.global/80aebc28-a561-4c84-b834-de8a4d8d1ea3/pattern-logo.patt?v=1671001465241"
			>
				<a-box
					depth="1"
					height="1"
					width="1"
					position="0 0.5 0"
					material="opacity:0.5; side:double; color:green;"
				></a-box>
			</a-marker>
			<a-marker type="barcode" value="5">
				<a-sphere scale="1 1 1" color="red"></a-sphere>
			</a-marker>
			<a-marker preset="kanji">
				<a-box
					position="0 0.5 0"
					material="opacity: 0.5; side: double;color:green;"
				>
					<a-torus-knot
						radius="0.26"
						radius-tubular="0.05"
						animation="property: rotation; to:360 0 0; dur: 5000; easing: linear;loop: true"
					>
					</a-torus-knot>
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
				url="https://cdn.glitch.global/80aebc28-a561-4c84-b834-de8a4d8d1ea3/pattern-logo.patt?v=1671001465241"
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
				<img id="img" src="https://cdn.glitch.global/b8a38d81-a5fe-4921-bb2e-1a38a61d675b/snowflake-png.webp?v=1671119598025"/>
			</a-assets>
			<a-marker
				id="marker"
				preset="custom"
				type="pattern"
				url="https://cdn.glitch.global/80aebc28-a561-4c84-b834-de8a4d8d1ea3/pattern-logo.patt?v=1671001465241"
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
		`...`,
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
				url="https://cdn.glitch.global/80aebc28-a561-4c84-b834-de8a4d8d1ea3/pattern-logo.patt?v=1671001465241"
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
				url="https://cdn.glitch.global/80aebc28-a561-4c84-b834-de8a4d8d1ea3/pattern-logo.patt?v=1671001465241"
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
				url="https://cdn.glitch.global/80aebc28-a561-4c84-b834-de8a4d8d1ea3/pattern-logo.patt?v=1671001465241"
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
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
		``,
	];

	return (
		<>
			<div className='code'>
				<div className='code__out'>
					<div className='code__info'>
						{htmlInfo[num].split("\n").length } строк
						<div className='code__nav'>
							<Nav num={num}></Nav>
						</div>
					</div>
					<div className='code__container'>
						<CodeStyle colStr={htmlInfo[num].split("\n").length + 1}></CodeStyle>
						<pre className='code__pre'>{htmlInfo[num]}</pre>
					</div>
				</div>
			</div>
		</>
	);
}
