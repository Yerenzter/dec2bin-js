// DECIMAL TO BINARY JAVASCRIPT PROGRAM.

// Convert to integer algorithm.
function int(y) {
    return y - [];
}

// Convert to string algorithm.
function str(y) {
    return y + [];
}

// Character length algorithm.
function len(y) {
    let data = 0;
    
    for(r in str(y)) {
        data += 1;
    }
    
    return data
}

// Character reversing algorithm.
function reverse(y) {
    let data = "";
    let total = len(y);
    
    for(r=len(y)-1; r > -1; r--) {
        data += str(y[r]);
    }
    
    return data;
}

// Decimal to binary algorithm.
function binary(y) {
    let data = 0;
    let r = 0;
    
    while(true) {
        y = Math.floor(y/2);
        
        if(y == 0) {
            break;
        }
        
        data += str(y%2);

         r+= 1;
    }
    
    return reverse(data);
}

// Usage
console.log(binary(24));
