var ruleaza=false;

onmessage=la_mesaj;
function la_mesaj(e)
{
	if(e.data=="start")
	{
		ruleaza=true;
	}
	else
		if(e.data=="stop")
		{
			ruleaza=false;
		}
}
function is_prime(n)
{
	for(var i=2; i*i<=n;i++)
	{
		if(n%i==0)
			return true;
	}
	return false;
}
function start_calcul(start_numar)
{
	if(ruleaza==false)
		;
	else{
for(var i=sta_nmar;i<start_numar+100;i++)
	if(is_prime(i))
	
		postMessage(i);
		start_numar+=100;
}
if(start_numar<1E13)
{
	setTimeout(start_calcul,1,start_numar);
}
else
{
	postMessage("gata");
}
}
start_calcul(1E11);