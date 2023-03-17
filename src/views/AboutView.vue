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
		<p>South Africa is behind in a lot of ways, one of those ways is in the arts and culture scene. 
			How might I approach this problem? Incorporation of Japanese specific comic books known as ‘Manga’.  Manga are extremely popular in Japan and its reach has journeyed to the west.
			</p>

		<p>What my E-commerce site hopes to accomplish is to bring the brilliance and joy of Manga to South Africa by making it readily available. By doing this, I will curate a passion for cross cultural exchange through exciting tales of action, adventures, horror and a lot more…</p>

		<p>This will include digital as well as physical copies, like Amazon and Crunchyroll merged making it more streamlined for consumers to acquire specific manga all in one place instead of scouring the internet and filtering through sketchy websites.</p>
		
		<p>I chose this idea because I have a keen interest in Japan and anything related to Asian and or otherwise anything outside my own culture. This helps me and us grow and have a broader, open, perspective on things in our world.</p>
	</div>
	<h4 class="display-4">Where can you find us?</h4>
	<!-- contact -->
	<ul class="list-unstyled">
		<li>
			<h5>Firebase</h5>
			<!-- Firebase -->
			<a href="#" class="fb-ic" target="_blank">
			</a> 
			<img loading="lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADhUlEQVR4nO2ZT4hVVRzHP5WTqOQiNy0UAsGFG8lVuJFU3GQrUchNtCjdxKihhqNpKqXhzHNMxMFm7i3BYEAo/EM66jhzjv9wIFGRFKU/lhsLXEiBf+Yr97zxed+8e59N99w374E/+O7u4vM5v/PO/M4ZeF4NWAqZr5C/FTCXRiyFtCtECrisDbxIo5UCepxAMe/SaKWAP2IC19VBE41S2sdEBQzGBKKt9AGNUgp4swy+mD/VzTgaoRTyfoJA1IXlZd+JF1TgpAp8Tz2VQr5MEbijr3ml9F0bi1VALq3Mpl5KIYcSBYoSLe6bbl5SG1dLAgVOUi+lkJupAiF3tZdXVWBpDP6ZXVC03SxbZbils7yeH3w34xTyqIqA1MU2tXGrQiClC4rgDTtlkYvhvfwEvuGNqvBRtvFQ2yvgE7ugaKtZOkvwRYEt+Ql0saQqfCfSSqTPUgRiXRiC/7YMvpju/AQCNlcV+BypGWk5qtYFXeFlWQ4kwEcd+Ck/gZADqfB7kVYMCUTZmCKwg1My/JAIb13uRb+LfAQCrqYKbIrBp3WhHelIKrhKOcdk//AdNCnkfiJ8xxBw87B8+j/gLdJp5vgX6GR66upvSICPd2En0o//Ed66LPMvELAwEX53yuo/SXQiHR0RvGRozUNgfaLAuirwa5AOjxDeuhzMQ2B/BfxXVeA/GfG2USzX/AuEXBw2uElrU+DXZoKXLA804PGWF13cFfBPmUAhBb4F6VgmeLn0M82fQMjUitVfkwC/HqnHA7x1R+nb/gS6eKdMYHsCfPSX94QneOuywp9AwOrYuCytyh1eMuz2JxASxMblcvjNSL2e4a0TOO5PIOB82bj8BH4L0qkc4K3L737goxtTdFWMj8tRvkDqyw1eMgzqKBOyC+xjcsW4vNUdc/nB25LEDF8v0U/H5dYawVsnsMiHQHNpXC4MtbYW8NalJbtAwB43Lu+qObxkCbML7OJndfBoFOAlw5nsAt/xW83BbUngr+wChnmyXBkFgevqZ0FmAScxQJMMzTLcrQH4PRk26ghjvcCXiZxnkgztsjzMYbsMuoeuXl7zDl4h0sdMWYxH+As6zazcwRMeZRfJ8GsG+NsyfCiN4n86NcB4t2ct/45gxe+7rXiOidRLqY8pKY+1w9OjfqZTryXLWzJcSjwWfV4T8yz1MkaWj2S4IcMvMnzs9ZXheVE/9RhWKOxUDYbwOwAAAABJRU5ErkJggg==">
		</li>
		<li>
			<h5>Github</h5>
			<!-- Github -->
			<a href="https://github.com/Simp4Hitagi/Capstone-Mangako" class="tw-ic" target="_blank">
				<img loading="lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVUlEQVR4nO2ZTWsUQRCGO4lehUCURFO1y+pBEPSQo6BXQUmqNsxBvEp+gAdzDOrVg4IYxIMifuRfBSGeIrJO9SZExJZ2JmFol52P3emZCVNQMAzbve8zXV01Na1Ua6211pprRqkZzbgpjN+s22t7TzVGPMErzWiSLgRvzZaaVU0Ur5sAYVLE1x4i7HeuCqNOA/gHwbhdmz1hNlbODggu2+uwv3yrURAmUHOa8Itm/DEkXIkg8KZmCDNBUIXhFImHTwlBzYEwt9UZTbgzQtC+rF+6bn+juXtD1uGahdIEz4Xwdy3Cydgnz/h5zFPdP+h3O+44IXha+Z4wUdh8TAuLwV2cd8ceBD2sdGObQM0JwYcscR3eW1pwx3+/c+VcZdnJbKlZYXyfRUC8MR+5c9hUW0mKNZH4d1nFxwC/7Avcifg4pLzXCaPUjJ0oj/ikH88jBF8P+9jzmmJN9Er8uqj4JEAsxh+EiZ78m0nEuwBRWMDu4VqnW3qd0Iybk4ofBXAMoRmX8tYJndhTqRZ3UaUARBC9C3nrhBDu1QZgVJ0Ig8XzUwMoM4Rif+j+55BwY+x8a/jYW/pMBSAYCC3ft72EdWF8oBl+TrUmTANizArEYQFH1ksraFn73KIA2kevUGQlhPGPZnxxAkDwMr6XZ47t6b0P5YQQhifuHMLwrBLxhSCCzqJybLgKFysTnxeiSJ7X3rqybBC587x47YvTIHzkeR8rUXqen9QmrRNSh++kRSFqIb4oRK3En5rP640/4DgVR0z/HfIR7lm3zUjlZwGttdaaqqX9BXBaAh7aBFdkAAAAAElFTkSuQmCC"></a>
		</li>
		<li>
			<h5>Render</h5>
			<!-- Render-->
			<a href="https://mangako.onrender.com" class="gplus-ic" target="_blank">
				<img loading="lazy" src="https://i.postimg.cc/kXn1KP1c/render.png" style="height: 38px !important; width: 38px !important" alt="">
			</a>
		</li>
		<li>
			<h5>LinkedIn</h5>
			<!--Linkedin -->
			<a href="https://www.linkedin.com/in/deno-rautenbach-b1698018a" class="li-ic" target="_blank">
				<img loading="lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADOElEQVR4nO1ZS2tTQRQ++Fq4tAq+xR+h2L24FqEoundZosXMGCtxZbvWlrT0HyhawcfGhdgYTWm1JGcaXHRh26hgm742SWzqyJmbhKTm5s7NnXsTIR8cmMyEyffNnDlz5gSgiy668I6+J3uBp3uBYQSYeAYM54GLNeDid9nWgKMoj0UgnLkAUbkH2o57eAo4DgMTWeBCurRl4DgE4dTJ4Inf/XIEOI4Dw2ILxOuNYRGYiMHtr4eDIc/EdeCY80z8XyGrEMZr/hG/ObsfuJgwTpzvNhxTv2UU0dmDwPGN/+RFZTdeq980t/IBkufVnXgLUXHAu4BA3EbY7ISIeSV/w3byO58lhBKWUdu/nbjaIvlMD3BcsSN/ZQLlj42i/LlZVG3/RGCutRBLcd5u0lBCka8gu16wdsI/Vxp1R55ux2aXVCghv28UqgKo7a8ApMvutJvVH246YdmFyH1o9S+Pp30+B4JcaUiPPCVZKk9xmDCwQywqbpRVSaPz6qd7HScLfZLQ/6HeqK/ZGEtLGJiREPpY7ktYn6lfV0RYnHcWQOmu00T9cbkb1Gc/NiXPRKfl6Pus/JbLy+L2jlxeL8ixeFaefTCtv4NMcI0dEM9NC7j4aE5u5rdlI2zlS/LSSEpPBMOnGgJQmBZAJJthK19SO6ThTmkdATnTAnQQm8paZ6J5JFrROQNF0wLI58OTC/L4/aQy9mJB9dViMZfXuEuw0BYBRNhaXbRsYEb11aK088eKTp4F+OBCxwaTZfJVIvLoYNJ+Dk8u5MMhbkhM93vc9SE2H0aNCWA6YdSXi8zYDjBnAVR06lgBeE4vmWNiqfME4KJ+NY9S104TwPChHnmdB03gArAAkbkT4ApUEegUAQwfg2vcEodsH/Uqp4/XG/U5jenOwevIr7ZeN6VapVNE8t3m+8ATqFbZNvI4Ap5B71CGk20Q8Aqi7/aBEVChlQquQZFn4qW54m5tkbdZZDLpNlFTK98IVKu0i07eVv2X9wOrLSLTo8p9dMF4X/GCivMUtgMH3Y6UdjjlTo1XfEmlB65vWD9ASRYVnahuQzk7PTzoZadqmpSSUFukymNMZZUd8TdrF13Af4+/0+/tR7SO3T4AAAAASUVORK5CYII=">
			</a>
		</li>
		<li>
			<h5>Instagram</h5>
			<!--Instagram-->
			<a href="https://www.instagram.com/denonouement09/" class="ins-ic" target="_blank">
				<img loading="lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAANU0lEQVR4nO2Z51NU65aHvTPnfJo/ZKbOp6k6VWNABJrQuffuQBAJKgpmxRxQvJhQDBgBRQmSbAktIBJFBROimHPO5xjwqAQB+5l6927aa9Xcqep77nyYKlfVW13s3ey1nt9Ku2DEiB/2w37YD/t/YWlyk2luVEtHdNypXnnS6a9Swmnsk9qJnNhOTNwpJsWeYmrMCWZEtzI36jgLIlpYEt5Eir2J1bZG1ssNbJTq2Wo+xg5jHVn6o+zTHiU/tJaikBpKNa7+ikDXw5pxrn0NY6r+858WeEZow78lhzd2WCe3I4KWEs5gnXwa++R2oia2M2FiG/Fxp0iIOcm0Ca3Mij5OclQLiyKaWBbeyCp7A2nWetbLx8iwHGOb+Si7jEfJNtSSq6shP6yG4pBqDmmOUBl0hOoAF8f8q4aa/CqyOn/N+flPBz8nsuV51KQ2Iie1Ez6xnYhJIvA2oie2ERN/ivjYEyTEtpIY08rM6BbmjW9mQVQTSyMaSXHUs9pez1rrMTbKdWyx1LHdXMtuYy179dUc0FZTGHaEslAXTo2LqiAXNeMUAJr9KjkxqqL5T0Gk2BvaJsaeID7uJHHxJ4n1nPi4E0yMO8HkuFamxrYyfUILsyY0M3d8IwuiGlkSUc+K8GOsstexxnaUDdZaMuRaMi017DJVk22sJlfvIl/rojjMhTO4igpNFdVBldQFVNDgX0nLmApOja7gzKjDmf9Q8NukGu2M6BZ3UsxxEsWJVYOdGnucqTEtiOvTJzQzM7qZOdFNJI9vYFFUA0sj60kJr2O14yhrHbWk22rYbK1hm3SEXWYX2SYXucYq8vSVFIVVUhpaQUVIBa7gCo4GllMfUE6z/2FaxxymbfRhzv6Xc/D06PL/8BlgrbW2eV5UE3Ojm5kd3cys6CZF5VkTmpgd3cSKaSdoqHrAi8cf+dI/hK822DfI+3vd3Cq+yTFbNTUaJ/WBTprGOWkd66TNz8np0Yc4P9LJ2ZHODJ8BUu1H3y6JrGdxVD2LxtezMKqeBeOPsXD8MQozu+jvHfQ56L8L0zPApdQ2GgNLOe5fxsmxZZwZU8r50aV0jCrj/MhDl30GSHPUDqRG1LIyopaUSM+JqKF0aydut+r4dudrCla3kx5TwzpHFemOCjbby9lqKyfT6mSn9RBZUhn7LKXkmUs4aCyhxFDMIX0xR6Qy2hc18tu558qz3G4311aepM2/iDN+xXSMKebC6GIujCrl/MjSbp+CT0zM+XmDw8V6xxHlrHW4WBfuInNKHV88yreWXCM9vJyN4eVkOJxsdTjJtJex01bKblsJ2dZicuViDlgOUmAppNhUSJmxgHJDAZW6Amq0edSF5dEQksf9A5eUZw59/sJFSxkdfgVcHFNI5+giFWJk8ZBPAKmprT9ts6lKbrWXs8V+mM0OJ2fLbyqOHlx4wTZHKZmOEnbYi9llL2K3/SDZtkL22grYby0gX87noJxHiSWPQ+b9lJtycRlzqdbnUqvL5UHpZYb6BnlcfJlTmn28P/NEefaLvEt0+e3n0pg8Lo4poHP0QTpHFfkG0Jra+lOWXEaWtZQ91hL22IqV8/bRe8VJ9aoGcuwF5Njy2WfLZ7/tAAds+ymw5VJo3UeJvJcyaS+HLTlUmrNxmbKoMWZRZ9xNo34Pzbo9DPUOqKr3DHBOs4c7ydXKz71333Bl7F4u++XS5XeAS2PyuTiq0EeAgNaf8qVC8uQC5eRb88mz5jHQpzotHp9PgW0vB205FFlzKLFmU2bN4pB1DzXx+7nt7ODDwzcM9Q0o5+OD33lYep628dmc0G2jXZvJ85IOBeJlUQddmu1c0+coz/7aM8DVsVlcGZvDZb99CsTFMflffQJwhof/q9OyH6clV1GyTM6hTM72Tg2ndReH5Z1UWHdQIe/AZd3OEXkbnZtqGez98nenzVDPF+6uqaJTm86lsI1cCd7EteBN3AzK4FbAZu/3rvvv4pr/Hi/EJb/9vgNUm3dzxLybamkn1ZYd1MiZXge18hbq5M3UWTdRL2+iUU7nysYq8Eyndx13ubr8IOfC07ngSOfW8kI+nL+j3nS7eZLm5FZoGrdD07inWcO9oHXcDUz3Pv/GuO1c99+pQFwdm02X3z7fAEhN/Zcm41aaTVtpMm+m2byJFstGr4NWaR0n5bWckNM4Ja3mXHwGQ739yr2nBxu5IKVwybyCLvMKrpqWc924jBuG5bwpaFTL5HMfT8PX8zgkhUfBq3ig+Sv3NWu9z78VsOU7iCtjs30HOG3cwGnjek6b13LGvIaz5tVeBx1SCh3SMjqlpVyUl/DqULNy/Y+OG1yzzOemZQG3zcncMc/jvjGZh6Z5PDbM44l+Pn3nbijf/VjUxLPQJTwJWc7jkJU8DP72/DuBGz0QmQrEVf/dbt8ARoz4S5dhNV2mVVw2pnDZvJwr5qXfalSazw1pLrekOdyRZ9P/SF1GL1ds46E0jceWJJ6ak3huTuSVOYnXxkR+NyTxRj+N7qXble8O3H/Oi7AFPA9bzNPQZUo2hu1e0PrvIK757/Ad4I5+KXeNi7hnnM998zwemOd4HTySknhimcozKYFn0mTcfWr5/B6RyBtLrHLeWWLoNsfwhymGD6ZYuo0TeW+czDv7bLUVevt4rZvDS20yz8MW8jT0m0APNGnfQVwfl+k7wAv9XF4YZvLCOI1Xpqm8tiR4Hby1xPBOiua9FEW3HI67t1e53hMZTa9kpVey0SPZ6bE4+GyJ4JM5io/maD4ImPBpKkBPH7/rp/NaN4uX2nm8CFv4TSClL4YhNnEzYIvvAG8MSbwzJtBtjFdU/Gge73UgguyTJPplC/2yCffDB8r1wZXL+GI18kU20S+blft9kqwCWRx8skTSs0Jt1qH7j3lnmMIbfRK/6WbySjvP+/wnISt4FJzqgdjA7cAMRvhqIt0fTHGKcp8sEfRY7F4HX2QjA1Y9g1Ytg7Yw3M4iVdULZxmyhSpHXB+06hiwGhSgPtmigA9duKh8t7+kgm5TvCKSEEtADJva3Ct4GJzKfc0a7gal+w4g6lao/tkSrjgWag6bCPCrPRi3PQgcgZAgQe9n9WZpLjgClOtuu4avthCGbGEK8FDxQU/59NATk+ApqzjeGScrEMM23BOiscV0uh+0zneAj+YoJe2iBESZiAC8JgKMDIToQIgJhLgg2LFKWVKKdZ2B9ckwSQ9xOlidjLvznHrP7WZgwzpFlM+WcEWkYYhhUxt7kTKdhvvBZwA1eEkpF1EqQnGviaAnBkFCEEzVQJIGpmkgJ/VbJv4n6/nM142pDFh1iii9kuyF6DbFeb/2WjebF9r535WSzwBK8FajUstf7RqICIC+HtXDLKMa8KxgmBMM80IgOQTmh0CKHeoL4dld6O9Vf+fJXXAVQJKkZE+IIUT5okB4MhGZ8DfTaQavtHP/ppRWwgj+4hNAv2x0D9q0Sh0TGQCxgfD0ngqwY4Ea8KIQWBIKy0Jhhecs9/wsri8MUeEEqMjSpCCYEAjhwxA6ZVqJKdWbkuadTmpTi/GazLOwxUoWxGT0CWDAqnN7lRfBT9FAndqE3DyrBrkyDFaHwZowWKv9dtI811NCYakHRGRKZG1ykFqCAsIWovSWGBBDFzo906mKd4YEZUe80s1V9oOy5HwFGLKFuIUTxdmUIJgRDCvt0O8po+N5sF4LG3WwWQdbdLDV85mhg3QtrNOqICIzi0NgbjBM90CITDgC1bFbUuidTh+jp/HeOIk3hkTPklN7wWeAr/aAP5QpI5wJp6JkhJqlf/02bR6cg8qlsNcGewyQZVA/d+lhu16FESAiQyJbwxAiE0kGWJMMnWe906l//UbE9BMNLZac2gvzeBa28NMIX43IcdeID1JrVzhdHAqrwlRVXWvgy/8ybXy1ns8Mpq/xTKUIZfOLRSpe/sT70vPQ+Td8B4gO2KKMyZnBag2Lel6jVctjhx7yo6CrBN7dF3+l8j1oMZ0e34WKAtwTrZ6Gtii7Ryw48fL31pCoNPMLbfJW3wEmaH4hKWhIUV+UjqhlUQ6Zesg2QJ4Rik1w2AxVFqi2QI3ns9ICTjMUmWC/US0r0R+iZ1Z5Sml2sLpDRI85ApVxLXZDj2TzltFbwxRe62cMvtQt+MVnAAViRlAmC0LUJhTTRdT0br0alAi+3KwGXS9BkwzNMjRJcEyCIxYV7qAJ9hlgp17NnphQYoKJ8TpNg1KmEQEM2UKUvSP2gnjpE68yYhr9pp++7R8KXgFI/PVnFgU3KKpt8KifY4ACo6qwULtBghMytFvhtBXarHBcVqFcFigzqdnK8mRB9JAoRyHMjGB1N0QFKntBjNQ+Tx+IV++3hsn1/Jr45/5HoECkhmWSrh1Sal+oKUqjwgx1ErTKcMYKF23QZYcLNhWkRYZaTxYKTSq4EEAIIQQRS3BmsDrlxgsAjQogS3yyhA9+MEZv+dPBfweSofuFXfpt7Ddcp8T0Wal7of4pqxr0NTvcdsAVO5y3qVkRgAJUAAtwMVpFH6V6AGYFq+9T0QpA94Csu9wnmTf9YQn/939a4D/sh/2wHzbi/9L+GxmBVYSR4FR5AAAAAElFTkSuQmCC">
			</a>
		</li>
	</ul>

	<button type="button" class="btn btn-danger btn-lg m-3">Let's Talk</button>

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
