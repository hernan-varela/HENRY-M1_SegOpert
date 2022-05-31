"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
 
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

 BinarySearchTree.prototype.insert= function(dato){ 
  if (dato === this.value) {
    return undefined;
  } 
  if(dato > this.value){
     if(!this.right){
       this.right = new BinarySearchTree(dato)
     }else{
       this.right.insert(dato)
     }
   }if(dato < this.value){
     if(!this.left){
       this.left = new BinarySearchTree(dato)
     }else{
       this.left.insert(dato)
     }
   }
 }; 


BinarySearchTree.prototype.size  = function(){ // retorna la cantidad total de nodos
  //si solo tengo un nodo retorno 1
  if(this.right === null && this.left === null) return 1;

  //si solo tengo un hijo del lado derecho
  if(this.right  &&  this.left === null) return 1 + this.right.size();

  //si solo tengo un hijo del lado izquierdo
  if(this.left && this.right === null) return 1 + this.left.size()

  //si tengo ambos hijos
  if(this.left && this.right) return 1 + this.left.size() + this.right.size();

}



BinarySearchTree.prototype.contains = function(value){
   // verifico si no esta en el primer nodo
  if(this.value === value) return true; 

  //Si es mayor voy a el lado derecho
  if(value > this.value){
    if(this.right === null) return false; // si mi arbol izquierdo no existe

    else
    return this.right.contains(value);      
  }

  //si es menor que la raiz voy al lado izquierdo
  else{
    if(this.left === null) return false;

    else return this.left.contains(value)   
  }

} 

BinarySearchTree.prototype.depthFirstForEach = function (cb,order){
  if(!order || order === 'in-order'){
    this.left && this.left.depthFirstForEach(cb,order)
    cb(this.value)
    this.right && this.right.depthFirstForEach(cb,order)

  }else if(order === 'pre-order'){
    cb(this.value)
    this.left && this.left.depthFirstForEach(cb,order)
    this.right && this.right.depthFirstForEach(cb,order)
  }else{
    this.left && this.left.depthFirstForEach(cb,order)
    this.right && this.right.depthFirstForEach(cb,order)
    cb(this.value)
  }
}

 BinarySearchTree.prototype.breadthFirstForEach = function(cb,arr=[]){
  if(this.left) arr.push(this.left)

  if(this.right) arr.push(this.right)

  cb(this.value)

  if(arr.length > 0){
    arr.shift().breadthFirstForEach(cb,arr)
  }
 };



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
