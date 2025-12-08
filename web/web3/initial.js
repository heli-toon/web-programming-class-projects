// Single line comment [00:09:17]
/* Multi-line
comment
*/

let x, y, z;
x = 5; 
y = 6; 
z = x + y; // z will be 11

// Reassigning a variable
x = 6; 

// WHILE Loop Example (when the number of iterations is unknown)
let v= 1;

while (v<= 10) { // Condition to continue the loop
    console.log(x);
    v++; // Increment to ensure the loop eventually stops
}

// FOR Loop Example (when the number of iterations is known)
for (let i = 1; i <= 10; i++) {
    // i=1 is the starting time
    // i <= 10 is the ending condition 
    // i++ is the iteration step
    console.log(i);
}