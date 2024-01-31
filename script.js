const extendHex = (shortHex) => {
    // write your code here
let str =["#"];
let count = 0;
	if(shortHex.length>3){
		for (let i=1;i<shortHex.length;i++){
			if(shortHex[i]>='A' && shortHex[i]<='Z'){
				count++;
			}
			str.push(shortHex[i]+shortHex[i]);
		}
	}
	else{
		for (let i=0;i<shortHex.length;i++){
		    if(shortHex[i]>='A' && shortHex[i]<='Z'){
		        count++;
		    }
		    str.push(shortHex[i]+shortHex[i]);
		}
	}

if(count>0){
    return str.join("").toUpperCase();
}
return str.join("").toLowerCase();
};
// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
