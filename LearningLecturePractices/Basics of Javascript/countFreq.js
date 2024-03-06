let str = "Pushpraj jaiswal";
let freq = {};
for(const char of str){
    if(freq[char]){
        freq[char]++; // present  in the object, increment it.
    }else{
        freq[char]=1; // not present  in the object, add it with value 1.
    }
}
console.log(freq); // { P: 2, u: 2, s: 4, h: 1, p: 2, j: 1, a: 3, i: 1, w: 1 }
//To get the most repeated character in string we can use Math.max() and Object.entries() methods.
let maxChar = Math.max(...Object.values(freq));
let maxFreqChar = Object.keys(freq).find(key => freq[key] === maxChar);
console.log("The Most Repeated Character is : "+maxFreqChar) ;
