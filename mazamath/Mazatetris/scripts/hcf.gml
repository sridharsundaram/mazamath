// Maza: Calculate GCD/HCF

{
var a,b,r;
a=max(argument0,argument1);
b=min(argument0,argument1);
while (b!=0) {
r=a mod b;
a=b;
b=r;
}
return a;
}
