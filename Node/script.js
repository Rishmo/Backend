let n=5;

for(let i=0; i<n; i++){
    console.log("Hello ", i);
}

console.log("bye!");


console.log(process.argv);

let args = process.argv;

for(i=2; i<args.length; i++){
    console.log("Hello ",args[i]);
}