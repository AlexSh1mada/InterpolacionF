var x0 = 2;
var x1 = 4;
var x2 = 1;
var f0 = 640;
var f1 = 2790;
var f2 = 425;
var x = 3;
var fx1 = 0;
var fx2 = 0;

fx1 = f0*((x-x1)/(x0-x1))+f1*((x-x0)/(x1-x0));

fx2 = (((x-x1)/(x0-x1))*((x-x2)/(x0-x2))*f0)+(((x-x0)/(x1-x0))*((x-x2)/(x1-x2))*f1)+(((x-x0)/(x2-x0))*((x-x1)/(x2-x1))*f2);

console.log(fx1);
console.log(fx2);