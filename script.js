const extendHex = (shortHex) => {
    // write your code here
let str ="#";
let count = 0;
for (let i=1;i<shortHex.length;i++){
    if(shortHex[i]>='A' && shortHex[i]<='Z'){
        count++;
    }
    str+=shortHex[i]+shortHex[i];
    
}
if(count>0){
    return str.toUpperCase();
}
return str.toLowerCase();
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
