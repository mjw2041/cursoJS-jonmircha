console.log("Iterables e Iteradores")
const iterable = [1, 2, 3, 4, 5]
const iterator = iterable[Symbol.iterator]()
console.log(iterable) // [ 1, 2, 3, 4, 5 ]
console.log(iterator) // [Object Iterator]
console.log(iterator.next()) // { value: 1, done: false }  
  // Esre objeto tiene dos propiedades: value e done ( true o false) si ya no hay más elementos por recorrer

  /* Recorriendo el iterable con el iterador */
let next = iterator.next()  
console.log(next) // { value: 1, done: false }
while (!next.done) {
  console.log(next.value) // 1, 2, 3, 4, 5
  next = iterator.next()
}

const iterableS = "Hola Mundo"
const iteratorS = iterableS[Symbol.iterator]()
console.log(iterableS) // [ 1, 2, 3, 4, 5 ]

/* Recorriendo el iterable con el iterador */
next = iteratorS.next()  
console.log(next) // { value: 1, done: false }
while (!next.done) {
  console.log(next.value) // 1, 2, 3, 4, 5
  next = iteratorS.next()
}

const iterableM = new Map([["nombre:", "jon"], ["edad", 35]])
const iteratorM = iterableM[Symbol.iterator]()
console.log(iterableM) 

/* Recorriendo el iterable con el iterador */
next = iteratorM.next()  
console.log(next) 
while (!next.done) {
  console.log(next.value) //
  next = iteratorM.next()
}
