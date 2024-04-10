import { NgForOf, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Prod } from '../prod';
import { HttpClient } from '@angular/common/http';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore, doc, getDoc, collection, getDocs} from "firebase/firestore";
import { ProductService } from '../prod.service';
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
  imports: [RouterLink, NgForOf, NgIf],
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

  // fetchPosts() {
  //   // const db = getFirestore();
  //   // const docRef = doc(db, "Androids", "3fSwToYz2BBKeHs6PPRj");
  //   // const docSnap = await getDoc(docRef);
  //   // console.log(docSnap.data());
  //   // this.products = docSnap.data();
  //   // init services
  //   const db = getFirestore()

  //   // collection ref
  //   const colRef = collection(db, 'Androids')

  //   // get collection data
  //   getDocs(colRef)
  //     .then(snapshot => {
  //       // console.log(snapshot.docs)
  //       // let phones = []
  //       snapshot.docs.forEach(doc => {
  //         this.phones.push({ ...doc.data(), id: doc.id})
  //       })
  //       // console.log(this.phones)
  //     })
  //     .catch(err => {
  //       console.log(err.message)
  //     })
  // }
  

  
}
// export class MainPageComponent implements OnInit{

//   products!: Prod[];


//   constructor(private heroService: HeroService) { }

//   ngOnInit() {
//     this.getHeroes();
//   }

//   getHeroes(): void {
//     this.heroService.getHeroes()
//     .subscribe(products => this.products = products);
//   }


// }
