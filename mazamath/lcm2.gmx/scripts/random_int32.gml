// Pseudo random number generator parameters
// modulus = 2^32
var increment, multiplier;
multiplier = 1103515245;
increment = 12345;
// x_n should be seeded
global.x_n = (multiplier * global.x_n + increment) & $3FFFFFFF; // bits 30..0
return global.x_n;

