var num=Math.random();
var numm=num*5;
var numb=Math.round(numm)+1;
var num2=Math.random();
var numm2=num*6;
var numb2=Math.ceil(numm2)
if(numb==numb2)
{
    numb2=Math.round(Math.random()*5)+1}
var a1="images/dice"+numb+".png"
var a2="images/dice"+numb2+".png"
document.querySelector(".img1").setAttribute("src",a1)
document.querySelector(".img2").setAttribute("src",a2)

if (numb>numb2)
{
    document.querySelector("h1").innerHTML="player1 won"
}
else if(numb<numb2)
{
    document.querySelector("h1").innerHTML="player2 won"   
}
else{
    document.querySelector("h1").innerHTML="tie"
}