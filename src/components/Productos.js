const products = [{ id: 1, nombre: "Playo", precio: 450, descripcion:"", cantidad:1, img:"./img/1.jpg" },
{ id: 2, nombre: "Hondo", precio: 400, descripcion:"", cantidad:1, img:"./img/2.jpg" },
{ id: 3, nombre: "Cuenco" , precio: 150, descripcion:"", cantidad:1, img:"./img/3.jpg"},
{ id: 4, nombre: "Aceitero" , precio: 250, descripcion:"", cantidad:1, img:"./img/4.jpg"},
// { id: 5, nombre: "Servilletero" , precio: 150, descripcion:"", cantidad:1, img:"./img/5.jpg"},
// { id: 6, nombre: "Posacuenco" , precio: 100, descripcion:"", cantidad:1, img:'./img/6.jpg'}
];


export const getItems = new Promise((resolve, reject) => {
       setTimeout(()=>{
           resolve (products);
        } ,2000) })
    