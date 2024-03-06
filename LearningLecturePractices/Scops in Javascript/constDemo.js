// const x = 10;
// x = 9; // error

const obj = {x: 10};
obj.y = 9;
// adding new and modify the property are allow in const object
obj = {}; // Assine  new object are not allo in  const object
// const stops reAssignment  of variable but it does not stop addition or modification of properties of an object
