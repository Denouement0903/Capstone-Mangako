<template>
  <div class="about">
    <h1 class="display-1 my-5 p-5 animate__animated animate__fadeInRightBig">About</h1>
    <div class="background w-75"></div>
<div class="ripped-page"></div>

<div class="content-container">
	<div class="content">

		<h1>Mangako</h1>
		<p>For Lucy had her work cut out for her. The doors would be taken off their hinges; Rumpelmayer's men were coming. And then, thought Clarissa Dalloway, what a morning--fresh as if issued to children on a beach.</p>

		<p>What a lark! What a plunge! For so it had always seemed to her, when, with a little squeak of the hinges, which she could hear now, she had burst open the French windows and plunged at Bourton into the open air. How fresh, how calm, stiller than this of course, the air was in the early morning; like the flap of a wave; the kiss of a wave; chill and sharp and yet (for a girl of eighteen as she then was) solemn, feeling as she did, standing there at the open window, that something awful was about to happen; looking at the flowers, at the trees with the smoke winding off them and the rooks rising, falling; standing and looking until Peter Walsh said, "Musing among the vegetables?"--was that it?--"I prefer men to cauliflowers"--was that it? He must have said it at breakfast one morning when she had gone out on to the terrace--Peter Walsh. He would be back from India one of these days, June or July, she forgot which, for his letters were awfully dull; it was his sayings one remembered; his eyes, his pocket-knife, his smile, his grumpiness and, when millions of things had utterly vanished--how strange it was!--a few sayings like this about cabbages.</p>

		<p>She stiffened a little on the kerb, waiting for Durtnall's van to pass. A charming woman, Scrope Purvis thought her (knowing her as one does know people who live next door to one in Westminster); a touch of the bird about her, of the jay, blue-green, light, vivacious, though she was over fifty, and grown very white since her illness. There she perched, never seeing him, waiting to cross, very upright.</p>

		<p>For having lived in Westminster--how many years now? over twenty,--one feels even in the midst of the traffic, or waking at night, Clarissa was positive, a particular hush, or solemnity; an indescribable pause; a suspense (but that might be her heart, affected, they said, by influenza) before Big Ben strikes. There! Out it boomed. First a warning, musical; then the hour, irrevocable. The leaden circles dissolved in the air. Such fools we are, she thought, crossing Victoria Street. For Heaven only knows why one loves it so, how one sees it so, making it up, building it round one, tumbling it, creating it every moment afresh; but the veriest frumps, the most dejected of miseries sitting on doorsteps (drink their downfall) do the same; can't be dealt with, she felt positive, by Acts of Parliament for that very reason: they love life. In people's eyes, in the swing, tramp, and trudge; in the bellow and the uproar; the carriages, motor cars, omnibuses, vans, sandwich men shuffling and swinging; brass bands; barrel organs; in the triumph and the jingle and the strange high singing of some aeroplane overhead was what she loved; life; London; this moment of June.</p>

		<p>For it was the middle of June. The War was over, except for some one like Mrs. Foxcroft at the Embassy last night eating her heart out because that nice boy was killed and now the old Manor House must go to a cousin; or Lady Bexborough who opened a bazaar, they said, with the telegram in her hand, John, her favourite, killed; but it was over; thank Heaven--over. It was June. The King and Queen were at the Palace. And everywhere, though it was still so early, there was a beating, a stirring of galloping ponies, tapping of cricket bats; Lords, Ascot, Ranelagh and all the rest of it; wrapped in the soft mesh of the grey-blue morning air, which, as the day wore on, would unwind them, and set down on their lawns and pitches the bouncing ponies, whose forefeet just struck the ground and up they sprung, the whirling young men, and laughing girls in their transparent muslins who, even now, after dancing all night, were taking their absurd woolly dogs for a run; and even now, at this hour, discreet old dowagers were shooting out in their motor cars on errands of mystery; and the shopkeepers were fidgeting in their windows with their paste and diamonds, their lovely old sea-green brooches in eighteenth-century settings to tempt Americans (but one must economise, not buy things rashly for Elizabeth), and she, too, loving it as she did with an absurd and faithful passion, being part of it, since her people were courtiers once in the time of the Georges, she, too, was going that very night to kindle and illuminate; to give her party. But how strange, on entering the Park, the silence; the mist; the hum; the slow-swimming happy ducks; the pouched birds waddling; and who should be coming along with his back against the Government buildings, most appropriately, carrying a despatch box stamped with the Royal Arms, who but Hugh Whitbread; her old friend Hugh--the admirable Hugh!</p>

		<p>"Good-morning to you, Clarissa!" said Hugh, rather extravagantly, for they had known each other as children. "Where are you off to?"</p>

		<p>"I love walking in London," said Mrs. Dalloway. "Really it's better than walking in the country."</p>

	</div>
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


h1, h2, h3, h4, h5, h6, p {
  color: black
}

body {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	overflow: hidden;
	margin: 0;
	padding: 0;
}

.background {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
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
	top: 10px;	background: url('https://i.postimg.cc/43r5VFKz/download.gif');
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

hr {
	width: 80%;
	opacity: 0.7;
	margin-top: 20px;
	margin-bottom: -60px;
	border-radius: 50px;
	padding: 40px;
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
