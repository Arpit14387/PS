function test() 
{   
var a; var b; var c; var d;


    a= Math.random();
    a=a*6 +1;
    b= Math.random();
    b=b*6 +1;
    a= Math.floor(a);
    b= Math.floor(b);
{
if(a>b)
document.getElementById("info").innerHTML ="PLAYER 1 WINS";

else if(b>a)
document.getElementById("info").innerHTML ="PLAYER 2 WINS";

else if(a==b)
document.getElementById("info").innerHTML ="DRAW, ROLL AGAIN!!!";
}




for(var x=1;x<=6;x++)
{
    if(x==a)
c= x + ".png";
    if(x==b)
d= x + ".png";


document.getElementById("img1").innerHTML= "<img src='" + c + "'>";
document.getElementById("img2").innerHTML= "<img src='" + d + "'>"; 


}
}
