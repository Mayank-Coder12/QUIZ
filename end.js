var points = sessionStorage.getItem("points");

var head_result = document.getElementById("result-header");
var body_result = document.getElementById("result-body");

if(points>=5){
 head_result.innerText = "That's nice! You've got "+points;
 body_result.innerHTML ="You worked hard and it paid off!"
}

else{
 head_result.innerText = "Oops! You've got "+points;
 body_result.innerHTML ="You worked hard and it paid off!"
}

function reset(){
 location.href="quiz.html";
}