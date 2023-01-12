const prices: (number | string)[] = [1, 2, 3, 4, 5, 'as'];
prices.push(1);
prices.push('1');

const user: [string, number] = ['nicobytes', 15];
const [username, age] = user;
console.log(username);
console.log(age);
