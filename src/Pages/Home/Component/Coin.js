import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { logDOM } from "@testing-library/react";
// let height = number(prompt("enter new number"));
export default function Coin() {
 
let height =15;
  // let width = (2 * height) - 1;

  
  let  i ,j;
  for (i = 0; i < height; i++) {
    document.write("*");
    for (j = 0; j < height; j++) {
        if ((i == 0 || i == height - 1)
            || (i == parseInt(height / 2)
                && j <= parseInt(height / 2)))
            document.write("*");
        // else
            // continue;
    }
    document.write(`<br/>`);
}
      }
  





//   let n= number(prompt("enter  new number "));
//   let medium =(n+1)/2;

//   if (n>=3  && n%2==1) {
  
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < array.length; j++) {
//      if (i==1) {
//        if(j==i||j==n )
       
//      }
      
//     }
    
//   }
    
//   }
//   }
   
//  }
  
// }
  // const [data, setData] = useState("");

  // const [result, setResult] = useState([]);
  // const [toss, setToss] = useState([]);
  // const handleChange = (e) => {
  //   if (toss[toss.length - 1] == e.target.value) {
  //     console.log("if");
  //     toss.push(e.target.value);
  //     result.pop();
  //     result.push([...toss]);
  //     setResult([...result]);
  //   } else {
  //     console.log("else", e.target.value);
  //     let x = [];
  //     x.push(e.target.value);
  //     setToss([e.target.value]);
  //     result.push(x);
  //     setResult([...result]);
  //   }
  // };
  // console.log("result", result);

  // return (
  //   <>
  //     <table>
  //       {result.map((e) => {
  //         return (
  //           <th>
  //             {e.map((val) => {
  //               return <tr>{val}</tr>;
  //             })}
  //           </th>
  //         );
  //       })}
  //     </table>

  //     <Button onClick={(e) => handleChange(e)} value="head">
  //       head
  //     </Button>
  //     <Button onClick={(e) => handleChange(e)} value="tail">
  //       tail
  //     </Button>
    // </>
  // );

// var items = [1, 2, 3, ];
// var value = ["a", "b", "c","d"];
// var result = {};
// items.forEach((item, i) => (result[item] = value[i]));
// console.log(result);

const number = [-1, -2,0,0, 1, 2, 3,4, -5];

// function count (number){
//   let count =[0];
// number.forEach(function(a){
//   if (a<0){
//     count[0]++
//   }
//   else if ()

// })
// return count;
// }
// let result =count(number)
// alert("negative number is " + result )
function count(number) {
  let count = [];

  number.forEach(function (a) {
    if (a < 0) {
      count++;
    }
    // else if (a>0){
    //   plusNumber++
    // }
  });
  return count;
}
let result = count(number);
// let positive =plusNumber(number);
// alert("negative number is , zero number" + result  )
console.log(result, "result");




function plusNumber(number) {
  let plusNumber = [];

  number.forEach(function (a) {
    if (a > 0) {
      plusNumber++;
    }
  });
  return plusNumber;
}

let positiveNumber = plusNumber(number);
console.log(positiveNumber, "positiveNumber");

function newNumber(number) {
  let newNumber = [];
  number.forEach(function (a) {
    if (a == 0) {
      newNumber++;
    }
  });
  return newNumber;

 
  
}
let zeroNumber = newNumber(number);
console.log(zeroNumber, "zeroNumber");


