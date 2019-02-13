var redBall=document.querySelector(".red-ball");
var greenBall=document.querySelector(".green-ball");
var orangeBall=document.querySelector(".orange-ball");

var goText=document.querySelector(".instruction");
var easeText=document.querySelector(".ease-note");
var mode=document.querySelector("#ctrl-toggle");

var isAuto=true;
var timer=0;

function automatic() {
    setRed();
    setGreen();
	setOrange();
}
var auto=setInterval(automatic, 15200);

var t=0;
var timeout,timeout1,timeout2; 
function setRed() {
	if (t === 0)
    {
		timeout = 100;
		t = 1;
		timeout1 = 300;
	}
    else
    {
		timeout = 5000;
		timeout1 = 6500;
		timeout2 = 11500;
	}
    setTimeout(function() {
                   timer = 0;
                   redBall.style.background = "red";
                   redBall.classList.add("on");
                   goText.innerHTML = "STOP";
                   easeText.innerHTML = "Please be patient...";
               }, 1);

	setTimeout(function() {
                   redBall.style.background = "var(--bg)";
                   redBall.classList.remove("on");
               }, timeout);
}


function setOrange() {

	setTimeout(function() {
                   timer = 0;
                   orangeBall.style.background = "orangered";
                   orangeBall.classList.add("on");
                   goText.innerHTML = "Get Ready";
                   easeText.innerHTML = "Almost ready to go...";
               }, timeout1);

	setTimeout(function() {
                   orangeBall.style.background = "var(--bg)";
                   orangeBall.classList.remove("on");
               }, 10000);
}


function setGreen() {

	setTimeout(function() {
                   timer = 0;
                   greenBall.style.background = "green";
                   greenBall.classList.add("on");
                   goText.innerHTML = "GO";
                   easeText.innerHTML = "And thats it...";
               }, 11500);

	setTimeout(function() {
                   greenBall.style.background = "var(--bg)";
                   greenBall.classList.remove("on");
               }, 15100);
}

//Detects Errors in some IDEs because of the ES6 syntax.
//But it should run fine

var timing=setInterval(function() {
                           //var min=new Date().getMinutes();
                           //var sec=new Date().getSeconds();
                           //document.querySelector(".time").innerHTML=min+":"+sec;


                           document.querySelector(".time").innerHTML = (timer++) + " sec";
                       }, 1000);

/*Manual*/
mode.addEventListener("click", switchMode);
function switchMode() {
    isAuto = !isAuto;
    if (!isAuto)
    {
        clearInterval(auto);
        clearInterval(timing);
        timer=0;
    }
    else
    {
       auto=setInterval(automatic, 15200);
         timing=setInterval(function() {
                           document.querySelector(".time").innerHTML = (timer++) + " sec";
                       }, 1000);
    }
}
