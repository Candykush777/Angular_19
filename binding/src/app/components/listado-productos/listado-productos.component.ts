import { Component } from '@angular/core';
import { Ingrediente } from './listado-productos.model';

@Component({
  selector: 'app-listado-productos',
  standalone: false,
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {


  productos: Ingrediente[] = [
    { nombre: 'Tomate', precio: 1.5, tipo: 'Verdura', img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg' },
    { nombre: 'Lechuga', precio: 2.0, tipo: 'Verdura', img: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Lettuce_in_Field_%285441653254%29.jpg' },
    { nombre: 'Pollo', precio: 5.0, tipo: 'Carnes', img: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Chicken_Leg.JPG' },
    { nombre: 'Queso', precio: 3.5, tipo: 'Lácteos', img: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Cheddar_cheese.jpg' },
    { nombre: 'Manzana', precio: 1.2, tipo: 'Fruta', img: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg' },
    { nombre: 'Cebolla', precio: 1.8, tipo: 'Verdura', img: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Onion.jpg' },
    { nombre: 'Pepino', precio: 1.3, tipo: 'Verdura', img: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Cucumber.jpg' },
    { nombre: 'Zanahoria', precio: 0.9, tipo: 'Verdura', img: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Carrot.jpg' },
    { nombre: 'Plátano', precio: 1.1, tipo: 'Fruta', img: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg' },
    { nombre: 'Naranja', precio: 1.4, tipo: 'Fruta', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg' },
    { nombre: 'Arroz', precio: 2.5, tipo: 'Grano', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Rice_%28unsorted%29.jpg' },
    { nombre: 'Pasta', precio: 1.7, tipo: 'Grano', img: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Spaghetti_al_Pomodoro_%2832904812454%29.jpg' },
    { nombre: 'Leche', precio: 0.8, tipo: 'Lácteos', img: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Milk_glass.jpg' },
    { nombre: 'Huevo', precio: 2.2, tipo: 'Lácteos', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Egg.jpg' },
    { nombre: 'Pan', precio: 1.0, tipo: 'Panadería', img: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Bread_01.jpg' },
    { nombre: 'Aceite', precio: 3.0, tipo: 'Aceites', img: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Olive_oil_in_small_glass_bottle.jpg' },
    { nombre: 'Sal', precio: 0.5, tipo: 'Condimentos', img: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Salt.jpg' },
    { nombre: 'Azúcar', precio: 1.6, tipo: 'Dulces', img: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Sugar.jpg' },
    { nombre: 'Yogur', precio: 1.4, tipo: 'Lácteos', img: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Yogurt_in_glass.jpg' },
    { nombre: 'Mantequilla', precio: 2.8, tipo: 'Lácteos', img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Butter.jpg' }
  ];

/* 
  eliminar(_t6: Ingrediente) {



    this.productos=this.productos.filter((item)=> item !== )
    } */

  
  
  

}
