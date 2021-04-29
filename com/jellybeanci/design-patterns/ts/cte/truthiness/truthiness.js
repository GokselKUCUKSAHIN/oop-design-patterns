const greet = (msg) => console.log(msg);

const statament = false;
const otherStatement = true;

statament && greet("false");
otherStatement && greet("true");
