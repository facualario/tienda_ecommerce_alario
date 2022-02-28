import { react , useEffect } from "react";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { database } from "../firebase";


// { id: 5, nombre: "Servilletero" , precio: 150, descripcion:"", cantidad:1, img:"./img/5.jpg"},
// { id: 6, nombre: "Posacuenco" , precio: 100, descripcion:"", cantidad:1, img:'./img/6.jpg'}



export const getItems = new Promise((resolve, reject) => {
    
    const itemsCollection= collection(database, "items")

    getDocs(itemsCollection)
        .then(snapshot => {
            const products = snapshot.docs.map((doc) => ({ id:doc.id, ...doc.data() }))
            resolve(products)
            
            console.log(products)

        })
        .catch(error =>{
            console.log(error)
            reject(error)
        })

    }, []) 

        
    