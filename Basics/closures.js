const userSpeed = undefined;

const speed1 = userSpeed || 50; // Returns 50 (0 is falsy)
console.log(speed1);
const speed2 = userSpeed ?? 50; // Returns 0  (0 is not null/undefined)
console.log(speed2);
