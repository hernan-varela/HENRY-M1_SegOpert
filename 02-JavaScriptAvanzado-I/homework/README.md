
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) { // 8 , 9 , 10
  var x = 10;
  console.log(x + "imprime 10");
  console.log(a + "imprime 8");
  var f = function(a, b, c) { //reasigna valores (8 , 9 , 10)
    b = a;//8
    console.log(b + "imprime 9");
    b = c;//10
    var x = 5; // declara una nueva variable x
  }
  f(a,b,c); //8 , 10 , 10
  console.log(b + "imprime 10");
}
c(8,9,10);
console.log(b + "imprime 10");
console.log(x + "imprime 1");
```

```javascript
console.log(bar+ "Imprime undefined");
console.log(baz + "Imprime no definida");
foo();
function foo() { console.log('Hola!'); } //se imprime por el hiosting se lleva toda la funcipn completa
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor + " imprime franco "); //por que el bar noo respeta el contexto de ejecucion y lo sobreescribe
```

```javascript
var instructor = "Tony";
console.log(instructor + "imprime tony");
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor + "imprime franco");
   }
})();
console.log(instructor + "imprime Tony");
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor + "imprime the flash");
    console.log(pm + "imprime Reverse Flash");
}
console.log(instructor + "imprime the flash");
console.log(pm + "imprime franco");
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" 
"2" * "3"
4 + 5 + "px"  //9px
"$" + 4 + 5
"4" - 2   //si lo resta
"4px" - 2  // Al querer restar un str cun un retorna NaN
7 / 0   //infinity
{}[0]   // [0]
parseInt("09")  //9
5 && 2 //2
2 && 5 //5
5 || 0 //5
0 || 5 //5
[3]+[3]-[10]   // 23 ?????????
3>2>1  //false
[] == ![]
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a + "==> undefined"); //undefined
   console.log(foo() + "==> 2"); // 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;   // al hacer el hoisting dentro de esta contexto de ejec creo la variable snack = undeined
}



console.log(getFood(false) + " ==> Undefined ")
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname() + " ==> Aurelio De Rosa");

var test = obj.prop.getFullname;

console.log(test() + "this quedo apntando hacia el objeto global y alli no hay in thuis.nombre");
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```
