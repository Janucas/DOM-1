/* Posicionarnos en el elemento #contenedorCartas y mostrarme por consola los siguientes elementos:*/
const father = document.querySelector("#contenedorCartas");
console.log(father);

//1) Su primer hijo
console.log("=========== EJERCICIO 1 ============")
let son1 = father.children[0];
console.log("primer hijo: ",son1)

/*2) Su tercer hijo*/
console.log("=========== EJERCICIO 2 ============")
let son3 = father.children[2];
console.log("tercer hijo: ", son3);

/*3) El siguiente hermano del tercer hijo*/
console.log("=========== EJERCICIO 3 ============")
let nextSon = son3.nextElementSibling;
console.log("Siguiente hermano del tercer hijo: ", nextSon);

/*4) Su último hijo*/
console.log("=========== EJERCICIO 4 ============")
let lastSon = father.lastElementChild;
console.log("Ultimo hijo:", lastSon);

/*5) Su padre*/
console.log("=========== EJERCICIO 5 ============")
console.log("Su padre: ", father)

/*6) El padre del padre*/
console.log("=========== EJERCICIO 6 ============")
let fatherFather = father.parentElement;
console.log("El padre de su padre: ", fatherFather)

/*7) Su hermano anterior*/
console.log("=========== EJERCICIO 7 ============")
let preBrother = nextSon.previousElementSibling;
console.log("Su hermano anterior: ", preBrother)

/*8) Las clases del último hijo */
console.log("=========== EJERCICIO 8 ============")
console.log("Clases del ultimo hijo: ", lastSon.classList);