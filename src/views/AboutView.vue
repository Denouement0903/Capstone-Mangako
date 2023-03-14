<template>
  <div class="about">
    <h1 class="display-1 my-5 p-5 animate__animated animate__fadeInRightBig">About</h1>
    <div class="background w-100 my-auto"></div>
<div class="ripped-page"></div>

<div class="content-container">
	<div class="content">

		<h3 class="display-3">Who are we?</h3>
		<p>Mangako was established by Deno Rautenbach. He sought to bridge the cultural gap between Japan and South Africa.</p>
		<p>Currently comprised of solely one team member. I would love recruit individuals with the same burning passion.</p>
		<h3 class="display-3">Our Mission</h3>
		<p></p>

		<p></p>

		<p></p>
	</div>
	<h4 class="display-4">Where can you find us?</h4>
	<!-- contact -->
	<button type="button" class="btn btn-danger btn-lg">Let's Talk</button>

</div>
  </div>
</template>
<style scoped>
* {
	box-sizing: border-box;
}

::-webkit-scrollbar {
	width: 20px;
}

::-webkit-scrollbar-track {
	background: red;
	background-image: url("https://www.transparenttextures.com/patterns/black-paper.png");
}

::-webkit-scrollbar-thumb {
	background: rgb(253, 19, 19);
}

::-webkit-scrollbar-thumb:hover {
	background: black;
}


body {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	overflow-x: hidden;
	margin: 0;
	padding: 0;
}

.background {
	top: 0;
	left: 0;
	z-index: -1;
	filter: blur(10px);
}

.ripped-page {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 0;
	mix-blend-mode: hard-light;
	opacity: 0.8;
}

.content-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: auto;
	filter: drop-shadow(5px 5px 25px black);
}

.content {
	position: relative;
	top: 0px;	
	background: url('https://i.postimg.cc/43r5VFKz/download.gif');
	background-size: 1000px;
	background-position: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	width: 50%;
	height: auto;
	padding: 30px 80px 50px 80px;
	z-index: 1;
	filter: brightness(0.95) sepia(30%) saturate(80%);
	border-radius: 30px;
	height: 70vh;
	clip-path: polygon(
		0% 0%,
		0% 93%,
		5% 98%,
		6% 99%,
		8% 95%,
		12% 94%,
		15% 97%,
		17% 93%,
		20% 98%,
		22% 97%,
		25% 99%,
		31% 94%,
		35% 93%,
		39% 96%,
		43% 93%,
		45% 94%,
		47% 95%,
		50% 92%,
		52% 96%,
		54% 93%,
		58% 92%,
		60% 95%,
		62% 93%,
		65% 96%,
		69% 93%,
		72% 93%,
		75% 94%,
		79% 97%,
		81% 94%,
		85% 93%,
		88% 92%,
		90% 95%,
		93% 93%,
		95% 92%,
		97% 95%,
		100% 97%,
		100% 0%
	);
	overflow: auto;
}

@media screen and (max-width: 1650px) {
	.content {
		width: 60%;
	}
}

@media screen and (max-width: 1500px) {
	.content {
		width: 70%;
	}
}

@media screen and (max-width: 868px) {
	.content {
		padding: 30px 60px 50px 60px;
		width: 75%;
	}
}

@media screen and (max-width: 560px) {
	.content {
		padding: 30px 30px 50px 30px;
		width: 80%;
	}
}


@media screen and (max-width: 1071px) {
	h1 {
		font-size: 60pt;
	}
}

@media screen and (max-width: 756px) {
	h1 {
		font-size: 46pt;
		line-height: 46pt;
		padding: 20px 0px;
	}
}

@media screen and (max-width: 370px) {
	h1 {
		font-size: 40pt;
	}
}

@media screen and (max-width: 700px) {
	h3 {
		margin-bottom: 70px;
	}
}

p {
	font-size: 16pt;
	font-weight: 400;
	line-height: 28pt;
	color: #f4eded;
	letter-spacing: 0.5px;
	word-spacing: 3px;
	text-shadow: 0.2px 0.2px 1.3px Sienna;
}

p:first-of-type {
	align-self: flex-start;
	font-weight: 600;
	position: relative;
}

p span {
	font-size: 600%;
	font-weight: 1;
	opacity: 0.8;
}

@media screen and (max-width: 600px) {
	p {
		font-size: 14pt;
	}
}

</style>
