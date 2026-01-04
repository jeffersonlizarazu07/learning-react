const myArray: number[] = [1,2,3,4,5,6];
myArray.push(7);
console.log(myArray);

const myArray2 = [...myArray, 10];
console.log(myArray2);
myArray2.push(7);
console.log(myArray2);
myArray2.pop()
console.log(myArray2);

const myArray3 = myArray2.slice(0, -2);
console.log(myArray3);