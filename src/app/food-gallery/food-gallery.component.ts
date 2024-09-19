import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-food-gallery',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './food-gallery.component.html',
  styleUrl: './food-gallery.component.scss',
})
export class FoodGalleryComponent {
  foodGallery: Array<Image> = [
    {
      path: "https://www.giallozafferano.it/images/251-25135/Spaghetti-alla-Carbonara_450x300.jpg",
      name: "Spaghetti alla Carbonara",
      description: "Un classico piatto di pasta italiano con pancetta, uova, e pecorino romano."
    },
    {
      path: "https://www.giallozafferano.it/images/237-23742/Hamburger_450x300.jpg",
      name: "Hamburger",
      description: "Un succulento hamburger con carne di manzo, lattuga, pomodoro e formaggio."
    },
    {
      path: "https://www.giallozafferano.it/images/5-554/Pizza-margherita_450x300.jpg",
      name: "Pizza Margherita",
      description: "Pizza tradizionale italiana con mozzarella, pomodoro e basilico fresco."
    },
    {
      path: "https://www.giallozafferano.it/images/207-20768/Guacamole_450x300.jpg",
      name: "Guacamole",
      description: "Salsa messicana a base di avocado, lime, cipolla e coriandolo."
    },
    {
      path: "https://www.giallozafferano.it/images/241-24109/Sushi-vegetariano_450x300.jpg",
      name: "Sushi Vegetariano",
      description: "Roll di sushi con verdure fresche e riso sushi avvolti in alga nori."
    },
    {
      path: "https://www.giallozafferano.it/images/35-3529/Cappuccino_450x300.jpg",
      name: "Cappuccino",
      description: "Un espresso italiano con schiuma di latte, perfetto per la colazione."
    },
    {
      path: "https://www.giallozafferano.it/images/ricette/242/24222/foto_hd/hd450x300.jpg",
      name: "Chana Masala",
      description: "Un piatto indiano piccante a base di ceci, pomodoro e spezie."
    },
    {
      path: "https://www.giallozafferano.it/images/209-20962/Falafel_450x300.jpg",
      name: "Falafel",
      description: "Polpette fritte di ceci o fave, spesso servite con pita e hummus."
    },
    {
      path: "https://www.giallozafferano.it/images/195-19589/Tortilla-di-patate_450x300.jpg",
      name: "Tortilla Española",
      description: "Frittata spagnola fatta con patate e cipolla."
    },
    {
      path: "https://www.giallozafferano.it/images/6-635/Cotoletta-alla-parmigiana_450x300.jpg",
      name: "Pollo alla Parmigiana",
      description: "Pollo impanato, fritto e coperto con salsa di pomodoro e formaggio."
    },
    {
      path: "https://www.giallozafferano.it/images/194-19457/Pancakes_450x300.jpg",
      name: "Pancakes",
      description: "Frittelle americane soffici, spesso servite con sciroppo d'acero."
    },
    {
      path: "https://www.giallozafferano.it/images/7-741/Parmigiana-di-melanzane_450x300.jpg",
      name: "Parmigiana di Melanzane",
      description: "Fette di melanzane fritte con salsa di pomodoro e formaggio."
    },
    {
      path: "https://www.giallozafferano.it/images/201-20158/Zuppa-di-cipolle-alla-francese_450x300.jpg",
      name: "Zuppa di Cipolle",
      description: "Una zuppa ricca francese a base di cipolle caramellate e brodo."
    },
    {
      path: "https://www.giallozafferano.it/images/211-21138/Hummus_450x300.jpg",
      name: "Hummus",
      description: "Crema di ceci con olio d'oliva, tahina, limone e aglio, tipica del Medio Oriente."
    },
    {
      path: "https://www.giallozafferano.it/images/236-23639/Mac-and-cheese_450x300.jpg",
      name: "Mac and Cheese",
      description: "Pasta americana al forno con una salsa cremosa di formaggio cheddar."
    },
    {
      path: "https://www.giallozafferano.it/images/196-19673/Insalata-di-patate_450x300.jpg",
      name: "Insalata di Patate",
      description: "Un contorno freddo con patate, maionese, uova e spezie."
    },
    {
      path: "https://www.giallozafferano.it/images/237-23768/Fonduta-di-formaggio_450x300.jpg",
      name: "Fonduta di Formaggio",
      description: "Formaggio fuso servito con pane, un piatto tipico svizzero."
    },
    {
      path: "https://www.giallozafferano.it/images/229-22919/Caesar-salad_450x300.jpg",
      name: "Insalata Caesar",
      description: "Insalata con pollo grigliato, lattuga romana, crostini e salsa Caesar."
    },
    {
      path: "https://www.giallozafferano.it/images/210-21079/Spaghetti-alla-puttanesca_450x300.jpg",
      name: "Pasta alla Puttanesca",
      description: "Un piatto di pasta italiano con pomodoro, olive, capperi e acciughe."
    },
    {
      path: "https://www.giallozafferano.it/images/238-23811/Spaghetti-con-le-polpette_450x300.jpg",
      name: "Spaghetti con Polpette",
      description: "Pasta italiana servita con polpette di carne e salsa di pomodoro."
    },
    {
      path: "https://www.giallozafferano.it/images/226-22647/Cioccolata-calda_450x300.jpg",
      name: "Cioccolata Calda",
      description: "Bevanda calda e cremosa a base di cioccolato fondente e latte."
    }
  ];
}

interface Image {
  path: string;
  name: string;
  description: string;
}