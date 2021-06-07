function showInput() {
	var div_input = document.getElementById("input")
	var div_result = document.getElementById("result")
	div_input.style.display = "block"
	div_result.style.display = "none"
}

function showResult() {
	var div_input = document.getElementById("input")
	var div_result = document.getElementById("result")
	div_input.style.display = "none"
	div_result.style.display = "block"
}

;(function getData() {
	var request = new XMLHttpRequest()
	request.open("GET", "/scripts/list.json", true)

	request.onload = function () {
		if (request.status >= 200 && request.status < 400) {
			// Success!
			data = JSON.parse(request.responseText)
		} else {
			// We reached our target server, but it returned an error
		}
	}

	request.onerror = function () {
		// There was a connection error of some sort
	}

	request.send()
})()

function main() {
	var input = document.getElementById("name").value
	var result = document.getElementById("r")
	var result1 = document.getElementById("r1")
	var result2 = document.getElementById("r2")
	var link1 = document.getElementById("a")
	var link2 = document.getElementById("b")
	result.innerHTML = ""
	result1.innerHTML = ""
	result2.innerHTML = ""
	link1.innerHTML = ""
	link2.innerHTML = ""

	try {
		first_link = "/pages/" + data[input][1] + "1.html"
		second_link = "/pages/" + data[input][2] + "2.html"
		result.innerHTML =
			data[input][0] +
			"｜" +
			input +
			"，您好。<br>您參加的分場是：<br>（請在分場入場時向工作人員出示此畫面）"
		result1.innerHTML = "上半場：" + data[input][1] + " 場次"
		link1.innerHTML = "場次介紹與論文全文"
		result2.innerHTML = "下半場：" + data[input][2] + " 場次"
		link2.innerHTML = "場次介紹與論文全文"
		showResult()
	} catch (e) {
		result.innerHTML =
			"請再次檢查您輸入的資料是否與報名時相符，若仍無法索取入場券，請聯繫工作人員。"
		showResult()
	}
}

function link1_href() {
	window.location.href = first_link
}

function link2_href() {
	window.location.href = second_link
}
