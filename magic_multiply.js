function magic_multiply(x,y){
    if (x.constructor == Array){
        let z = []
        for(let i=0; i<x.length; i++){
            z[i] = x[i] * y;
        }
        return z;
    }
    else if (y.constructor == String){
        return "Error: Can not multiply by string";
    }
    else if(x.constructor == String){
        let str1 = ""
        // str1 = x.repeat(y)  
        for (let i = 0;i < y; i++){
            str1 += x; 
        }
        return str1;
    }
    return x * y;
}


let test1 = magic_multiply(5,2);
console.log(test1);

let test2 = magic_multiply(0, 0);
console.log(test2);

let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);

let test4 = magic_multiply(7, "three");
console.log(test4);

let test5 = magic_multiply("Brendo", 4);
console.log(test5);