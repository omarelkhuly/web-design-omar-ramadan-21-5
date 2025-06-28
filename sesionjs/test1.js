// function checkParams(startNum, breakNum, endNum, contNum) {
//   var values = [startNum, breakNum, endNum, contNum];
//   var names = ["startNum", "breakNum", "endNum", "contNum"];

//   for (var i = 0; i < values.length; i++) {
//     if (values[i]) {
//       console.log(names[i] + " is: " + values[i]);
//     } else if (values[i] === "") {
//       console.log(names[i] + " is an empty string");
//     } else {
//       console.log(names[i] + " is missing");
//     }
//   }
// }

// checkParams(1 , 3 , "" , NaN);



// function checkParams(startNum, breakNum, endNum, contNum) {
//     if (startNum == undefined || breakNum == undefined ||
//         endNum == undefined || contNum == undefined) {
//         console.log('plaese enter all numbers')
//     } else {
//         for (var i = startNum; i <= endNum; i++) {
//             if (i === contNum) continue;
//             else if (i === breakNum) break;
//             else console.log(i);

//         }
//     }
// }

// checkParams(1, 5, 4, 3);

// function checkParams(startNum, breakNum, endNum, contNum) {
//   var values = [startNum, breakNum, endNum, contNum];
//   var names = ["startNum", "breakNum", "endNum", "contNum"];

//   for (var i = startNum; i <= endNum; i++) {
//     if (i === startNum) continue;
//     if (i === contNum) break;

//     if (values[i] !== undefined && values[i] !== null && values[i] !== "") {
//       console.log(names[i] + " is: " + values[i]);
//     } else if (values[i] === "") {
//       console.log(names[i] + " is an empty string");
//     } else {
//       console.log(names[i] + " is missing");
//     }
//   }
// }

// checkParams(80, 0, 3, 10);


// لما تكون القيمه من المصفوفه بتاعتك تكون true إطبع الindex البيساوي true إستخدم ال 
// ueserData.forEach((itemsالمفروض تكون بtrue , i , arr){consol.log(i)})

const userData = [false , 0 , "hello", 42 , " ", NaN , true];

userData.forEach((item, i, arr) => {
  if (item== true) {
    console.log(item);
  }
});


