import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Prod } from '../prod';
import { HttpClient } from '@angular/common/http';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore, doc, getDoc, collection, getDocs} from "firebase/firestore";
import { ProductService } from '../prod.service';
import { ProductPageComponent } from '../product-page/product-page.component';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfftqgIII_V5ltJ1FpQ_gq_oL0us6ypek",
  authDomain: "shopangular-4f640.firebaseapp.com",
  databaseURL: "https://shopangular-4f640-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shopangular-4f640",
  storageBucket: "shopangular-4f640.appspot.com",
  messagingSenderId: "249617603434",
  appId: "1:249617603434:web:81fa4fc76d96a32b512313"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterLink, NgForOf, NgIf, CommonModule, ProductPageComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})

export class MainPageComponent implements OnInit{
  // http = inject(HttpClient);
  post: any = [];
  // products: any;
  products$ : any;
  phones: any = [];

  constructor(private productServ: ProductService
  ) {}

  ngOnInit(): void {
    this.products$ = this.productServ.getAll()
  }
  

  
}
