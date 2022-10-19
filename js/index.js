// Iteration 1: Names and Input

const hacker1="Yuri"
console.log(`The driver's name is ${hacker1}`)
const hacker2="Miguel"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let nome_driver=""
for (let i = 0; i< hacker1.length; i++){
   
    nome_driver+=`${hacker1[i].toUpperCase()} `
    
}
console.log(nome_driver)

let nome_navigator=""
for (let i = 0; i< hacker2.length; i++) {
    nome_navigator+=`${hacker2[(hacker2.length-1)-i]}`
}
console.log(nome_navigator)

arra=[hacker1,hacker2]
arra.sort()

if ( hacker1 === hacker2) {
    console.log("What?! You both have the same name?")
} else if ( hacker1 === arra[0] ) {
    console.log("The driver's name goes first.")

} else {
    console.log("Yo, the navigator goes first definitely.")
}

// Bônus 1

const loren= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus at similique, vero aspernatur, nobis quaerat perspiciatis sapiente, deleniti illum laborum quidem voluptatem? Quaerat, repellendus perferendis natus doloribus sed illo et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus at similique, vero aspernatur, nobis quaerat perspiciatis sapiente, deleniti illum laborum quidem voluptatem? Quaerat, repellendus perferendis natus doloribus sed illo et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus at similique, vero aspernatur, nobis quaerat perspiciatis sapiente, deleniti illum laborum quidem voluptatem? Quaerat, repellendus perferendis natus doloribus sed illo et."

words=loren.split(" ")
console.log(`A string tem ${words.length} palavras`)

let i=0
for (let value of words) {
    if (value === 'et' || value === 'et,' || value === 'et.') {
        i+=1
    }
}
console.log(`A string tem ${i} "ets".`)


//Bônus 2

let frase="A man, a plan, a canal, Panama!"

let carac=",./?!;:@#$%¨&*(){}[]+-~^= _"
carac_array=carac.split("")
nova_frase=""
for (let i = 0; i< frase.length ; i++){
    if (carac_array.includes(frase[i])){
    } else {
        nova_frase+=frase[i]
    }
}
frase=nova_frase.toLowerCase()
reverse=""
for (let i = 0; i< frase.length; i++) {
    reverse+=`${frase[(frase.length-1)-i]}`
}
if (frase === reverse){
    console.log(`A string é um palíndromo`)
} else {
    console.log(`A string não é um palíndromo`)
}


