const invisible = document.querySelectorAll(".invisible");
document.body.onmousemove = move;
document.body.ontouchmove = move;
document.addEventListener("contextmenu", (event) => event.preventDefault());
document.body.onmousedown = function (e) {
	if (e.button == 0) {
		mainToggle();
	}
	if (e.button == 2) {
		ultravioletToggle();
	}
};
let timer;
document.body.ontouchstart = function (e) {
	timer = setTimeout(function () {
		ultravioletToggle();
	}, 500);
};

document.body.ontouchend = function (e) {
	clearTimeout(timer);
};


function move(e) {
	const x = e.pageX || e.touches[0].pageX;
	const y = e.pageY || e.touches[0].pageY;
	document.body.style.setProperty("--left", x + "px");
	document.body.style.setProperty("--top", y + "px");
}

function mainToggle() {
	document.body.classList.toggle("on");
}

function ultravioletToggle() {
	document.body.classList.toggle("ultraviolet");
	invisible.forEach((element) => {
		element.classList.toggle("visible");
	});
}
