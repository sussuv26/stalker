var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p3Button = document.getElementById("p3");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winScore = 5;


p1Button.addEventListener("click" , function(){
	if(!gameOver){
	p1Score++;
	if(p1Score === winScore){
		p1Display.classList.add("winner")
		gameOver = true;
	}
	console.log(p1Score);
	p1Display.textContent = p1Score;
}
});

p2Button.addEventListener("click" , function(){
	if(!gameOver){
	p2Score++;
	if(p2Score === winScore){
		p2Display.classList.add("winner")
		gameOver = true;
	}
	p2Display.textContent = p2Score;
}
});

p3Button.addEventListener("click", function(){
  reset();
});

function reset(){
   p1Score = 0;
   p2Score = 0;
   p1Display.textContent = 0;
   p2Display.textContent = 0;
   p1Display.classList.remove("winner");
   p2Display.classList.remove("winner");
   gameOver = false;
}
numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winScore = Number(this.value);
	reset();

});











