var squares = document.querySelectorAll(".square")
var colors = randomgenerator(9);
var pickedcolor = randompicker();
var heading = document.querySelector(".correct"),heading2 = document.querySelector("h1"),heading3 = document.querySelector("h3");
var res = document.querySelector(".result");
var resetbutton = document.querySelector(".reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
var red = document.querySelector(".red"),green = document.querySelector(".green"),blue = document.querySelector(".blue");
var u = 0,g = 1;
heading.textContent = pickedcolor;
percentage(pickedcolor);
hardbtn.style.color = "white";
easybtn.style.color = "#6798FF";
main();
easybtn.addEventListener("click",function(){
	u = 1;
	g = 0;
	// hardbtn.classList.remove("selected");
	// easybtn.classList.add("selected") ;
	hardbtn.style.backgroundColor = "white";
	// hardbtn.style.color = 
	easybtn.style.color = "#6798FF";
	colors = randomgenerator(3);
	pickedcolor = randompicker();
	easybtn.style.color = "white";
	easybtn.style.backgroundColor = "#6798FF";
	hardbtn.style.color = "#6798FF";
	heading.textContent = pickedcolor;
	percentage(pickedcolor);
	resetbutton.style.color = "#6798FF";
	resetbutton.style.backgroundColor = "white";
	for(var i=0;i<squares.length;i++){
		if (i<3){
			squares[i].style.backgroundColor = colors[i];
			squares[i].addEventListener("click",function(){
				var clickedcolor = this.style.background;
				this.textContent = ""
				if (clickedcolor === pickedcolor){
					heading.textContent = clickedcolor;
					res.textContent = "CORRECT ";
					colorall(clickedcolor);
					for(var i=3;i<squares.length;i++){
						squares[i].style.backgroundColor = "#232323";
					}
					heading2.style.background = clickedcolor;
					heading3.style.backgroundColor = clickedcolor;
					resetbutton.textContent = "PLAYAGAIN";
				}
				else{
					this.style.background = "#232323";
					res.textContent = "TRY AGAIN ";
				}
			});
		}
		else{
			squares[i].style.backgroundColor = "#232323";
		}
	}
});
hardbtn.addEventListener("click",function(){
	u = 0;
	g = 1;
	// easybtn.classList.remove("selected");
	// hardbtn.classList.add("selected") ;
	hardbtn.style.color = "white";
	hardbtn.style.backgroundColor = "#6798FF";
	easybtn.style.color = "#6798FF";
	easybtn.style.backgroundColor = "white";
	colors = randomgenerator(9);
	pickedcolor = randompicker();
	heading.textContent = pickedcolor;
	percentage(pickedcolor);
	resetbutton.style.color = "#6798FF";
	resetbutton.style.backgroundColor = "white";
	main();
});





function main(){
for(var i=0;i<colors.length;i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click",function(){
		var clickedcolor = this.style.background;
		this.textContent = ""
		if (clickedcolor === pickedcolor){
			heading.textContent = clickedcolor;
			res.textContent = "CORRECT ";
			colorall(clickedcolor);
			heading2.style.background = clickedcolor;
			heading3.style.backgroundColor = clickedcolor;
			resetbutton.textContent = "PLAYAGAIN";
		}
		else{
			this.style.background = "#232323";
			res.textContent = "TRY AGAIN ";
		}
	});
}
}
function colorall(color){
	for(var i= 0;i<squares.length;i++){
		squares[i].style.background = color;
		// squares[i].style.transition = al
	}
}
function randompicker(){
	var random = Math.floor(Math.random()*(colors.length));
	return colors[random];
}
function rand(){
	var ran = Math.floor(Math.random()*(255)+1);
	return ran;
}
function randomgenerator(x){
	var arr = [];
	for(var i=0;i<x;i++){
		var t = "rgb("+rand()+", "+rand()+", "+rand()+")";
		arr.push(t);
	
	}
	
	return arr;
	
}
resetbutton.addEventListener("click",function(){
	hardbtn.classList.add('selected');
	easybtn.classList.remove('selected');
	colors = randomgenerator(9);
	pickedcolor = randompicker();
	heading.textContent = pickedcolor;
	percentage(pickedcolor);
	main();
	resetbutton.textContent = "MORE COLORS";
	heading2.style.backgroundColor = "#6798FF";
	heading3.style.backgroundColor = "#6798FF";
	res.textContent = '';
	hardbtn.style.color = "white";
	easybtn.style.color = "#6798FF";
	easybtn.style.backgroundColor = "white";
	hardbtn.style.backgroundColor = "#6798FF";
	// resetbutton.style.color = "white";
	// resetbutton.style.backgroundColor ="#6798FF" ;
})
resetbutton.addEventListener("mouseover",function(){
	this.style.backgroundColor = "#6798FF";
	this.style.color = "white";
});
resetbutton.addEventListener("mouseout",function(){
	this.style.backgroundColor = "white";
	this.style.color = "#6798FF";
});
easybtn.addEventListener("mouseout",function(){
	if (u === 0)
	{this.style.backgroundColor = "white";
	this.style.color = "#6798FF";}
});
easybtn.addEventListener("mouseover",function(){
	if (u === 0){
	this.style.color = "white";
	this.style.backgroundColor = "#6798FF";}
});
hardbtn.addEventListener("mouseout",function(){
	if (g === 0){
	this.style.backgroundColor = "white";
	this.style.color = "#6798FF";}
});
hardbtn.addEventListener("mouseover",function(){
	if (g === 0){
	this.style.color = "white";
	this.style.backgroundColor = "#6798FF";
	}
});
function percentage(pickedcolor){
	var r,gre,b;
r = pickedcolor.slice(4,pickedcolor.indexOf(","));
pickedcolor = pickedcolor.slice(pickedcolor.indexOf(",")+1);
gre = pickedcolor.slice(0,0+pickedcolor.indexOf(","));
pickedcolor = pickedcolor.slice(pickedcolor.indexOf(",")+1);
b = pickedcolor.slice(0,0+pickedcolor.indexOf(")"));
var total = 0;
r = Number(r);
gre = Number(gre);
b=Number(b);
	total = r+gre+b;
red.textContent = Math.round((r*100)/total+1);
	green.textContent = Math.round((gre*100)/total+1);
	blue.textContent = Math.round((b*100)/total+1);
}
