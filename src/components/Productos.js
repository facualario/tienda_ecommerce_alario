const products = [
    {   id: 1, 
        nombre: "Playo", 
        precio: 450, 
        descripcion:"Plato playo ideal para platos principales ", 
        cantidad:1, 
        imagen:"./img/1.jpg",
        category:"platos" },

    {   id: 2, 
        nombre: "Hondo", 
        precio: 400, 
        descripcion:"Plato hondo apto para comidas como pastas, sopas y postres", 
        cantidad:1, 
        imagen:"./img/2.jpg",
        category:"platos"  },

    {   id: 3, 
        nombre: "Plato Entrada" , 
        precio: 150, 
        descripcion:"Plato apto para distintos tipos de comida tipo Finger Food", 
        cantidad:1, 
        imagen:"./img/3.jpg",
        category:"platos" },

    {    id: 4, 
        nombre: "Aceitero" , 
        precio: 250, 
        descripcion:"Permite la presentacion del aceite de oliva, con un recipientes", 
        cantidad:1, 
        imagen:"./img/4.jpg",
        category:"accesorios" },


// { id: 5, nombre: "Servilletero" , precio: 150, descripcion:"", cantidad:1, img:"./img/5.jpg"},
// { id: 6, nombre: "Posacuenco" , precio: 100, descripcion:"", cantidad:1, img:'./img/6.jpg'}
];


export const getItems = new Promise((resolve, reject) => {
       setTimeout(()=>{
           resolve (products);
        } ,500) })
        
    