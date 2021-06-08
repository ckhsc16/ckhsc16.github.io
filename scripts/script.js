// Mobile Navbar
const toggleBtn = document.getElementsByClassName("toggle-btn")[0]
const navLinks = document.getElementsByClassName("nav-links")[0]
const scrollbar = document.getElementsByClassName("scroll-bar-links")

toggleBtn.addEventListener("click", () => {
	navLinks.classList.toggle("active")
	toggleBtn.classList.toggle("active")
})

// Description Show up
const des = document.getElementsByClassName("description")
const indicator = document.getElementsByClassName("indicator")
const split = document.getElementsByClassName("split")

document.querySelectorAll(".btn").forEach(function callback(item, i) {
	item.addEventListener("click", () => {
		des[i].classList.toggle("active")
		indicator[i].classList.toggle("active")
		var split_index = parseInt(i / 2)
		split[split_index].classList.toggle("active")
	})
})

// Scroll Highlight
const A = document.getElementById("A")
const B = document.getElementById("B")
const C = document.getElementById("C")
const D = document.getElementById("D")

function getPosition(element) {
	var x = 0
	var y = 0
	while (element) {
		x += element.offsetLeft - element.scrollLeft + element.clientLeft
		y += element.offsetTop - element.scrollLeft + element.clientTop
		element = element.offsetParent
	}

	return { x: x, y: y - 5 }
}

window.addEventListener("scroll", () => {
	const scrollHeight = document.documentElement.scrollHeight
	const scrolled = window.scrollY
	var positionA = getPosition(A)
	var positionB = getPosition(B)
	var positionC = getPosition(C)
	var positionD = getPosition(D)

	if (scrolled > positionA.y && scrolled < positionB.y) {
		scrollbar[0].classList.add("active")
		scrollbar[1].classList.remove("active")
		scrollbar[2].classList.remove("active")
		scrollbar[3].classList.remove("active")
	}

	if (scrolled > positionB.y && scrolled < positionC.y) {
		scrollbar[1].classList.add("active")
		scrollbar[0].classList.remove("active")
		scrollbar[2].classList.remove("active")
		scrollbar[3].classList.remove("active")
	}

	if (scrolled > positionC.y && scrolled < positionD.y) {
		scrollbar[2].classList.add("active")
		scrollbar[0].classList.remove("active")
		scrollbar[1].classList.remove("active")
		scrollbar[3].classList.remove("active")
	}

	if (scrolled > positionD.y) {
		scrollbar[3].classList.add("active")
		scrollbar[0].classList.remove("active")
		scrollbar[1].classList.remove("active")
		scrollbar[2].classList.remove("active")
	}
})
