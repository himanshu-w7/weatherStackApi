var chocolate=5;
var wrapper=5;
var choco=0;
while(wrapper>1){
var remWrapper=Math.floor(wrapper%2);
// console.log(remWrapper);
var newChoco=Math.floor(wrapper/2);
// console.log(newChoco);
var choco=choco+newChoco;
// console.log(choco+" "+chocolate);
wrapper=remWrapper+newChoco;
// console.log(wrapper);

}
var totalChocolate=choco+chocolate;
console.log("total chocolate you thusing is "+totalChocolate);