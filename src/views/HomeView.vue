<template>
  <div class="home">
    <h1 class="display-1 my-5 p-5 animate__animated animate__fadeInLeftBig">Welcome to Mangako</h1>
    <h2 class="display-3 mx-5 my-5 text-center animate__animated animate__fadeInRightBig">Your ONE-STOP Shop for Manga</h2>
    <h3 class="display-5 mx-5 my-5 text-center">Preview Our Products...</h3>
   <div class="container-fluid">
	<div class="row animate__animated animate__heartBeat">
		
		<h2 class="mx-2">Hover Over the cover...</h2>
		<div class="col-5">
			<div class="book w-25 h-50 mx-auto">
				<div class="book-cover">
				</div>
				<div class="book-content">
				</div>	
			</div>
		</div>
		<div class="col-7">
			<h4>Death Note Volume 1</h4>
			<p>In Tokyo, a disaffected high school student named Light Yagami finds the "Death Note", a mysterious black notebook that can kill anyone as long as the user knows both the target's name and face. Initially terrified of its god-like power, Light considers the possibilities of the Death Note's abilities and kills high-profile Japanese criminals, then targets international criminals. Five days after discovering the notebook, Light is visited by Ryuk, a "shinigami" and the Death Note's previous owner. Ryuk, invisible to anyone who has not touched the notebook, reveals that he dropped the notebook into the human world out of boredom and is amused by Light's actions</p>
			<button type="button" class="btn btn-danger btn-lg">Buy now</button>
		</div>
	</div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
};
</script>
<style>

* {
	box-sizing: border-box;
}

body {
	margin: 0;
	padding: 0;
	overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
p {
	margin: 0;
}

.book {
	--book-height: 60vh;
	--book-ratio: 1.6;
}

.book > div {
	height: var(--book-height);
	width: calc(var(--book-height) / var(--book-ratio));
	overflow: auto;
	transform: scale(0.9);
	border-radius: 6px;
	transform-origin: left;
}

.book-cover {
	background-image: url('https://i.postimg.cc/FFLvzhDR/deathnote-cover-for-download-by-deathnote-club-d1xmeas-fullview.jpg');
	background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  background-attachment: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	z-index: 9;
	text-align: center;
	transition: transform 2s;
}

.book-cover::before {
	content: "";
	position: absolute;
	width: 20px;
	right: 20px;
	top: 0;
	bottom: 0;
}
.separator {
	--separator-size: 8px;
	width: var(--separator-size);
	height: var(--separator-size);
	margin: 50px auto 60px auto;
	border-radius: 50%;
	position: relative;
}

.separator::after,
.separator::before {
	content: "";
	position: absolute;
	width: 12px;
	height: 2px;
	top: calc(50% - 1px);
}

.separator::after {
	left: 15px;
}

.separator::before {
	right: 15px;
}

.book-content {
	transform: scale(0.9) translateY(30px);
	background-image: url('https://i.postimg.cc/0y4YZgJz/q41pcffezvd81.jpg');
	background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  background-attachment: fixed;
	transition: all 0.3s 1s;
}

.book-content h3,
.book-content p {
	opacity: 0;
	transition: all 0.3s 0.3s;
}

h3 {
	padding: 30px;
}

p {
	padding: 0px 30px 10px 30px;
	text-align: justify;
	font-size: 14px;
}

.book-cover > div {
	transition: opacity 0s 0.6s;
}

.book:hover > .book-cover {
	transform: rotateY(180deg) scale(0.9);
}

.book:hover > .book-cover > div {
	opacity: 0;
}

.book:hover > .book-content {
	transform: scale(0.9) translateY(0px);
}

.book:hover > .book-content h3,
.book:hover > .book-content p {
	opacity: 1;
}


h3 {
  background: linear-gradient(90deg, red, #fff, #000);
  letter-spacing: 5px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: no-repeat;
  background-size: 80%;
  animation: shine 4s linear infinite;
  position: relative;
}

@keyframes shine {
  0% {
    background-position-x: -500%;
  }
  100% {
    background-position-x: 500%;
  }
}

</style>