function myFunction() {
	var x = document.getElementById("div1");
	if(x.style.display === "none"){
		x.textContent = "js site B"
		x.style.display = "block";
	}
	else{
		x.style.display = "none";
		x.textContent = "js site B"
	}
}