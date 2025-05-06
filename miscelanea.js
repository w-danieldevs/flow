//1
/*
let j = [200, -100, 45, 78, 32];
console.log((j[2]));
console.log((j[4]));
*/



//2
/*
let f = ["ab", "cd", "ef", "gh"];
console.log(f[1]);
console.log(f[3]);
*/



//3
/*
let aux = [10, true, "k200", 20.7];
aux.forEach(function(element) {
  console.log(element);
});
*/


//4
/*
let k = [17, 4, 64, 79, 109, 112];
k.forEach(function(element) {
  if (element % 2 !== 0) {
    console.log(element);
  }
});
*/


//5
/*
let h = [true, true, false, true, false];
h[2] = true;
h[3] = false;
*/



//6
/*
let w = ["wc", "jp", "zx", "qr"];
w[1] = true;
w[3] = 30;
*/



//7
/*
function imprimirElementos(arr) {
  arr.forEach(function(element) {
    console.log(element);
  });
}

imprimirElementos([2, 5, 7, 9]);
*/



//8
/*
function contarElementos(arr) {
  return arr.length;
}

console.log(contarElementos([2, 5, 7, 9]));
*/


//9
/*
let arreglo = [30, 44, 54, 89, 100];
console.log(arreglo.indexOf(44));
console.log(arreglo.indexOf(89));
console.log(arreglo.indexOf(70));
*/


//SECCION 2:
// 1
/*
let a1 = [1,2,3,4,5,6,7,8,9,10];
let a2 = [];
let a3 = ["a", true, -1];
let a4 = [2, 4, 5, 7, 1, 34, 89, 0];

console.log(a1.length);
console.log(a2.length);
console.log(a3.length);
console.log(a4.length);
*/



// 2
/*
let arr = [1,2,3,4,5,6,7,8,9,10];
*/


// 2.a
/*
arr.push(345);
console.log(arr);
*/



// 2.b
/*
arr.push(true);
console.log(arr);
*/


// 2.c
/*
arr.push("ADSO");
console.log(arr);
*/


// 2.d
/*
arr.push(455, 78, false);
console.log(arr);
*/



// 2.e
/*
arr.push("ABcd", true, 21);
console.log(arr);
*/


// 3
/*
let arr1 = [1, 2, false];
*/
// 3.a
/*
arr1.splice(2, 1);
console.log(arr1);


*/


// 3.b
/*
let arr2 = [99, false, 17, 45, 7, "abc", 78];
arr2.splice(6, 1);
console.log(arr2);

*/


// 3.c
/*
let arr3 = [-1, -55, -89, 30, 1000];
arr3.splice(1, 1);
console.log(arr3);

*/



// 3.d
/*
let arr4 = ["zxc", 767, 1298, true, false, [3], 1];
arr4.splice(1, 4);
console.log(arr4);


*/


// 3.e
/*
let arr5 = [34, ["q"], 67, 1, 99, 1/2];
arr5.splice(3, 2);
console.log(arr5);
*/


// 4
/*
let a = [2, 6, 9, 0, 5];
let copiaDependiente = a;
console.log(copiaDependiente);
*/


// 5
/*
let b = ["abc", 4, 88, 99];
let copiaIndependiente = b.slice();
console.log(copiaIndependiente);
*/



// 7.a
/*
let arr7 = [1, 17, 8, 9, 3];
for (let i = 0; i < arr7.length; i++) {
  console.log(arr7[i] + 1);
}
*/



// 8
/*
function obtenerLongitud(arr) {
  return arr.length;
}

console.log(obtenerLongitud([1, 2, 3, 4])); // Ejemplo
*/



// 9
/*
function verificarLetra(letra) {
  let alfabeto = ["a", "b", "c", "d", "e", "f", "g"];
  for (let i = 0; i < alfabeto.length; i++) {
    if (alfabeto[i] === letra) {
      console.log(`${letra} está en el arreglo`);
      return;
    }
  }
  console.log(`${letra} no está en el arreglo`);
}

verificarLetra("d");
*/



// 10.1
/*
let arr10 = [3, 50, 70, 600, 40];
arr10.forEach(function (element) {
  console.log(element);
});
*/



// 10.2
/*
arr10.forEach(function (element) {
  console.log(element * 3);
});
*/



// 10.3
/*
let i = 0;
while (i < arr10.length) {
  console.log(arr10[i]);
  i++;
}
*/



// 10.4
/*
for (let i = 0; i < arr10.length; i++) {
  if (arr10[i] % 2 === 0) {
    console.log(arr10[i]);
  }
}
*/



// 11
/*
let arr11 = ["Maria", "Pedro", "Juan", "Pablo", "Diana"];

for (let i = 0; i < arr11.length; i++) {
  if (arr11[i] === "Juan") {
    console.log("Juan está en el arreglo");
    break;
  }
}
*/



// 12
/*
let arr12 = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
let contador = 0;

for (let i = 0; i < arr12.length; i++) {
  if (arr12[i] === "Maria") {
    contador++;
  }
}

console.log("Maria aparece " + contador + " veces");
*/



// 13
/*
let arr13 = [15, 7, 9, 12, 1];
let suma = 0;

arr13.forEach(function (element) {
  suma += element;
});

console.log(suma);
*/




// 14
/*
let arr14 = [-2, 8, 99, 1, 7];
let sumaCuadrados = 0;

arr14.forEach(function (element) {
  sumaCuadrados += element * element;
});

console.log(sumaCuadrados);
*/



// 15
/*
let arr15 = [true, true, false, true, false, false];
let contadorFalse = 0;
let i15 = 0;

while (i15 < arr15.length) {
  if (arr15[i15] === false) {
    contadorFalse++;
  }
  i15++;
}

console.log(contadorFalse);
*/



// 16
/*
let arr16 = ["z", "p", "s", "z", "o", "b", "a", "w", "d"];
let palabra = ["a", "d", "s", "o"];
let contadorPalabra = 0;

for (let i = 0; i < arr16.length; i++) {
  if (palabra.includes(arr16[i])) {
    contadorPalabra++;
  }
}

if (contadorPalabra === palabra.length) {
  console.log("Es posible formar la palabra adso");
} else {
  console.log("No es posible formar la palabra adso");
}
*/


// 17
/*
let arr17 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 10; i <= 20; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}
*/



// 18
/*
let arr = [5, 7, 90, 2, 5, 3, 8, 99];

arr.forEach(function(a) {
  arr.forEach(function(b) {
    if (a + 1 === b) {
      console.log(`${a} y ${b} son consecutivos`);
    }
  });
});
*/



