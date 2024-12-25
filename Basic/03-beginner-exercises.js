// 1. Escribe un comentario en una línea.
// Esto es un comentario en una línea.

// 2. Escribe un comentario en varias líneas.
/*
Esto es
un comentario
en varias líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos.
let myName = "Aitor Machado"
let age = 29
let isStudent = true
let undefinedValue
let nullValue = null
let mySymbol = Symbol("mysymbol")
let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129)
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n

// 4. Imprime por consola el valor de todas las variables.
console.log(myName)
console.log(age)
console.log(isStudent)
console.log(undefinedValue)
console.log(nullValue)
console.log(mySymbol)
console.log(myBigInt)
console.log(myBigInt2)

// 5. Imprime por consola el tipo de todas las variables.
console.log(typeof myName)
console.log(typeof age)
console.log(typeof isStudent)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)
console.log(typeof myBigInt2)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo.
myName = "Juan Pérez" 
age = 35
isStudent = false
undefinedValue
nullValue = null
mySymbol = Symbol("mysymbol1")
myBigInt = BigInt(1234567890123456789012345678901234567890)
myBigInt2 = 1234567890123456789012345678901234567890n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo.
myName = 35  
age = "Juan Pérez"
isStudent = null
undefinedValue = Symbol("mysymbol1") 
nullValue = false
mySymbol
myBigInt = 1.82
myBigInt2 = 29

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos.
const myName1 = "Domingo"
const age1 = 40
const isStudent1 = true
const undefinedValue1 = undefined
const nullValue1 = null
const mysymbol1 = Symbol("mysymbol")
const myBigInt1 = BigInt(817239871289371986589716389471628379612983761289376129)
const myBigInt3 = 817239871289371986589716389471628379612983761289376129n

// 9. A continuación, modifica los valores de las constantes.
/*
myName1 = "Roberto"
age1 = 50
isStudent1 = false
undefinedValue1 = "defined"
nullValue1 = "Not null"
mysymbol1 = Symbol("mysymbol1")
myBigInt1 = BigInt(817239871289371986589716389471628379612983761289376128)
myBigInt3 = 817239871289371986589716389471628379612983761289376128n
*/

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse.
console.log("¡Hecho!")