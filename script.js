const hamburger = document.querySelector("#hamburger");
const closeBtn = document.querySelector("#close-btn");
const nav = document.querySelector("#mobile-nav");
const navItems = document.querySelector("#nav-items");

hamburger.addEventListener("click", handleNav);
closeBtn.addEventListener("click", handleNav);

function handleNav() {
	hamburger.classList.toggle("hidden");
	closeBtn.classList.toggle("hidden");
	nav.classList.toggle("opacity-100");
	if (hamburger.classList.contains("hidden")) {
		navItems.style.display = "flex";
	} else {
		navItems.style.display = "none";
	}
}
