// Mobile Navbar
const toggleBtn = document.getElementsByClassName("toggle-btn")[0]
const navLinks = document.getElementsByClassName("nav-links")[0]

toggleBtn.addEventListener("click", () => {
	navLinks.classList.toggle("active")
	toggleBtn.classList.toggle("active")
})

// Drop Down Description
const des = document.getElementsByClassName("description")
const indicator = document.getElementsByClassName("indicator")
const split = document.getElementsByClassName("split")

document.querySelectorAll(".btn").forEach(function callback(item, i) {
	item.addEventListener("click", () => {
		des[i].classList.toggle("active")
		indicator[i].classList.toggle("active")
		var split_index = parseInt(i / 2)
		if (i / 2 != split_index) {
			if (des[i - 1].classList.contains("active") === false) {
				split[split_index].classList.toggle("active")
			}
		}
		if (i / 2 === split_index) {
			if (des[i + 1].classList.contains("active") === false) {
				split[split_index].classList.toggle("active")
			}
		}
	})
})

// Scroll Highlighting
const A = document.getElementById("A")
const B = document.getElementById("B")
const C = document.getElementById("C")
const D = document.getElementById("D")
const END = document.getElementById("END")
const scrollbar = document.getElementsByClassName("scroll-bar-links")

function getPosition(element) {
	let x = 0
	let y = 0
	while (element) {
		x += element.offsetLeft - element.scrollLeft + element.clientLeft
		y += element.offsetTop - element.scrollLeft + element.clientTop
		element = element.offsetParent
	}

	return { x: x, y: y - 5 }
}

window.addEventListener("scroll", () => {
	const scrolled = window.scrollY
	const positionA = getPosition(A)
	const positionB = getPosition(B)
	const positionC = getPosition(C)
	const positionD = getPosition(D)
	const positionEND = getPosition(END)

	document.querySelectorAll(".scroll-bar-links").forEach((item) => {
		item.classList.remove("active")
		console.log("Clear")
	})

	if (scrolled > positionA.y && scrolled < positionB.y) {
		scrollbar[0].classList.add("active")
	}
	if (scrolled > positionB.y && scrolled < positionC.y) {
		scrollbar[1].classList.add("active")
	}
	if (scrolled > positionC.y && scrolled < positionD.y) {
		scrollbar[2].classList.add("active")
	}
	if (scrolled > positionD.y && scrolled < positionEND.y) {
		scrollbar[3].classList.add("active")
	}
})

// Change Scroll Behavior
function scrollTo(elementId) {
	document.getElementById(elementId).scrollIntoView({ behavior: "smooth" })
}
