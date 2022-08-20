//////////////////////////////////////////////////////////////////////////////////
// p1

/*
//1-----------------------------------------------
console.log(Number("234a"));       // not a number (NaN)

//2-----------------------------------------------
console.log('1' + 2 + 2);          // 122

//3-----------------------------------------------
let apples = "2";
let oranges = "3";
console.log(  + apples + oranges); // 23

//4------------------------------------------------
let counter = 1;
console.log(2 * ++counter);       // 4

//5------------------------------------------------
console.log(undefined == null);   // true
console.log(undefined === null);  // false
console.log(null == "\n0\n");     // false
console.log(null === +"\n0\n");   // false 
*/

//////////////////////////////////////////////////////////////////////////////////
// p2

/*
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
return new Promise((resolve, reject) => {
    rl.question('enter a list of 3 number: ',(arr)=>{
      var list = arr.split(' ');
      console.log(list);
      var a1 = Number(list[0]);
      var a2 = Number(list[1]);
      var a3 = Number(list[2]);

      if (a1 + a2 > a3 && a1 + a3 > a2 && a2 + a3 > a1){
        console.log("yes");
      }
      else {
          console.log("no");
      }

      rl.close();
      resolve(list);
    });
})
*/

//////////////////////////////////////////////////////////////////////////////////
// p3

/*
const readline = require("readline");
const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r2.question('enter a number: ', num=>{
    var b = Number(num);
    var count = 0;
    if (b == 0){
        count = 1;
    }
    else {
        while( b >= 1 ){
            ++count;
            b /= 10;
        }
    }
    console.log(count);
    r2.close();
  });
*/

//////////////////////////////////////////////////////////////////////////////////
// p4

/*
const readline = require("readline");
const r3 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

return new Promise((resolve, reject) => {
  r3.question('enter a list of 2 number: ',(arr)=>{
    var list = arr.split(' ');
    console.log(list);
    var b = Number(list[0]);
    var c = Number(list[1]);
    let i = 1;

    for ( i=1; i<=b; ++i ){
      if (b%i == 0 && c%i == 0){
        console.log(i);
      }
    }

    r3.close();
    resolve(list);
  });
})
*/

//////////////////////////////////////////////////////////////////////////////////