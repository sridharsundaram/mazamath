var low, high, gen;
low = argument0;
high = argument1;

gen = random_int32() / $3FFFFFFF;
return low + floor(gen * (high - low)); // in range [low, high)

