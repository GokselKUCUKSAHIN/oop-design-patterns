const greet = (msg) => console.log(msg);

const statament = false;
const otherStatement = true;
const something = () => console.log("Hello there!");
let nothing;
!! statament && greet("false");
!! otherStatement && greet("true");

something && something();
(!! nothing) && nothing.foobar(); // if nothing null then do not call "foobar" function.
