import {SingletonObject} from "./singletonObject";

console.log("Hey_");
setTimeout(_ => {
    const s1 = new SingletonObject("Göksel");
    const s2 = new SingletonObject("Arda");
    const arr: SingletonObject[] = [s1, s2];
    arr.forEach(s => {
        s.sayName();
    })
}, 3000);
