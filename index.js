// ---- ex -  1


// for (let i = 0; i < 47; i++) {
//     if ((i % 2) === 0) {
//         console.log(i);

//     }

// }


// ----- ex -2


// let somme = 0
// for (let i = 109; i < 588; i++) {
//     if ((i % 2) != 0) {
//         somme += i
//         console.log(`le chiffre impair : ${i} `);
//     }

// }

// console.log(somme);



// ---- ex -3



// const numbers = [1, 2, 3, 4, 5]

// const squares = []

// const roots = []

// for (let i = 1; i <= numbers.length; i++) {

//     let puissance = Math.pow(i, 2)
//     squares.push(puissance)

// }

// console.log(squares);


// for (let i = 0; i < numbers.length; i++) {

//     let racine = Math.sqrt(squares[i])

//     roots.push(racine)

// }

// console.log(roots);


// ----- ex -4

// let basic = 3

// for (let i = 0; i <= 10; i++) {


//     let result = basic * i
//     console.log(`${basic} * ${i} = ${result``}`);

// }


// ----- ex -5



// for (let i = 0; i <= 10; i++) {

//     for (let j = 0; j <= 10; j++) {

//         let result = i * j
//         console.log(`${i} * ${j} = ${result}`);

//     }



// }


// --- ex -6


// let factorielle = "7!"
// let i = 1
// let result = 1

// for (let i = 1; i <= 7; i++) {

//     result *= i

// }

// console.log(`${factorielle} = ${result}`);



// ---- ex - 7



// for (let f = 0; f < 9; f++) {

//     let result = 1
//     if (f === 7) {
//         console.log(`0! = ${result}`);

//     } else {
//         for (let i = 1; i <= f; i++) {

//             result *= i
//             console.log(`${i}! = ${result}`);
//         }

//     }


// }


// ---- ex - 8


// let sqMeter = 0
// let sum = 0

// for (let i = 5; i <= 10; i++) {


//     sqMeter = i * i
//     sum += sqMeter
//     console.log(sum);

// }



//---- ex- 9

let result = 0

for (let i = 100; i <= 1000; i++) {

    if ((i % 7) === 0) {
        result++

    }
}
console.log(result);

// ---- ex - 10



