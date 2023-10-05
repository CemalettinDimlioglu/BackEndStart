//  "use strict";
 

// // const exampleObject= {

// // propertyName:'value',
// // methodName:function () {

// //      return 'This is method'
// // }

// // }
// // console.log(exampleObject.propertyName);
// // console.log(exampleObject.methodName());

// const Car = {
//   brand: "Ford",
//   model: "Mustang",
//   year: 1967,
//   isAutoGear: true,
//   colors: ["white", "red"],
//   details: {
//     color1: "red",
//     color2: "white",
//     engineSize: 4900,
//   },
//   startEngine: function () {
//     return "Motor çalıştı";
//   },
// };
// console.log(Car.colors[1]);
// console.log(Car.colors.engineSize);
// console.log(Car.startEngine());
// console.log(Car ['brand']);
// console.log(Car.details['engineSize']);
// console.log(Car['details']['engineSize']);
// console.log(Car['startEngine']());

const testArray = ["value0", "value1", "value2", "value3"];

const [first, second, ...others] = testArray
console.log(first, second, ...others);

const newArr = [...testArray, "new-value", "new-value2"];
console.log(newArr);

const Car = {
  brand: "Ford",
  model: "Mustang",
  year: 1967,
  isAutoGear: true,
  colors: ["white", "red"],
  details: {
    color1: "red",
    color2: "white",
    engineSize: 4900,
  },
  startEngine: function () {
    return "Motor çalıştı";
  },
};
const {year, model, brand, ...otherItems} = Car

console.log(Car);

 