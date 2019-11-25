document.getElementById("id_logic").innerHTML = "Logic version=2019.11.25.5";
document.getElementById("id_start").addEventListener("click",start);
document.getElementById("id_stop").addEventListener("click",stop);
var timer_id;
var unghi={};
unghi.valoare=0;
var muncitor=undefined;
function desenare(unghi)
{
	/*context.clearRect(0,0,canvas.width,canvas.height);
		var x=canvas.width/2+ raza_mare*Math.cos(unghi.valoare*Math.PI/180);
		var y=canvas.height/2+ raza_mare*Math.sin(unghi.valoare*Math.PI/180);
		context.beginPath();
		context.arc(x,y,raza_mica,0,2*Math.PI);
		context.stroke();
	    unghi.valoare++;
		if(unghi.valoare==360);
		unghi.valoare=0;*/
     var canvas=document.getElementById("id_canvas");
	 var context=canvas.getContext("2d");
	 var R=100;
	 var r=10;
	 context.clearRect(0,0,canvas.width,canvas.height);
	 context.beginPath();
	 var x=canvas.width/2+ R*Math.cos(unghi.valoare/180*Math.PI);
	 var y=canvas.height/2+ R*Math.sin(unghi.valoare/180*Math.PI);
	 context.arc(x,y,r,0,2*Math.PI);
	 context.stroke();
	 unghi.valoare++;
	 if(unghi.valoare==360)
	 {
		 unghi.valoare=1;
	 }
}
function start()
{
	document.getElementById("id_start").disabled=true;
	document.getElementById("id_stop").disabled=false;
	/*var canvas=document.getElementById("id_canvas");
	var context=canvas.getContext("2d");*/
	if(!muncitor){
    muncitor=new Worker("calcul_prime.js");
	muncitor.onmessage=function(e)
	{
		document.getElementById("id_prime").innerHTML=e.data;
	}
	muncitor.postMessage("start");
	}
	else {
		muncitor.postMessage("start");
	}
	var raza_mare=100;
	var raza_mica=10;
 //timer_id=setInterval(desenare,20,context , canvas , raza_mica, raza_mare , unghi);	
 timer_id=setInterval(desenare,20,unghi);
}
function stop()
{
	clearInterval(timer_id);
	document.getElementById("id_start").disabled=false;
	document.getElementById("id_stop").disabled=true;
	mucitor.postMessage("stop");
}