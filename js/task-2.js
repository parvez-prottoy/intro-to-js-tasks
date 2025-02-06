// 75.25, 65, 80, 35.45, 99.50
const mathematics = 75.25;
const biology = 65;
const chemistry = 80;
const physics = 35.45;
const bangla = 99.5;

const totalMark = mathematics + biology + chemistry + physics + bangla;
const averageMark = parseFloat((totalMark / 5).toFixed(2));
console.log(averageMark);
