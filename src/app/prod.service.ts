import { Injectable, NgModule, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc, collection, getDocs} from "firebase/firestore";
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppRoutingModule } from './app.routes';
import { Prod } from './prod';
import { MainPageComponent } from './main-page/main-page.component';
import { Book } from './Book';
NgModule({
  exports: [ ],
  imports: [ MainPageComponent],
})
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
@Injectable()
export class ProductService {
  post: any = [];
  products: any;
  phones: any = [];

  sus: Book | undefined;
  constructor(
    private http: HttpClient) { }
    
    
  getAll() {
    const db = getFirestore()

    // collection ref
    const colRef = collection(db, 'Androids')

    // get collection data

    
    getDocs(colRef)
      .then(snapshot => {
        // let phones = []
        
        snapshot.docs.forEach(doc => {
          this.phones.push({ ...doc.data(), id: doc.id})
        })
        // console.log(this.phones);
      })
      .catch(err => {
        console.log(err.message)
      })

      return this.phones;
  }


  async getPhoneById(id: string) {
    
    const db = getFirestore();
    const docRef = doc(db, 'Androids', id);
    // console.log("SADASDS")
    const docSnap = await getDoc(docRef);
    // console.log(docSnap);
    const data = JSON.parse(JSON.stringify(docSnap.data()));
    return data
    // try {
    //   const docSnap = await getDoc(docRef);
    //   console.log(docSnap.data())
    //   const data = JSON.parse(JSON.stringify(docSnap.data()));
    //   // console.log(data.name);
    //   const transformedData = of(data).pipe(
    //     map((res) => {
    //       return {
    //         ...res,
    //         id,
    //         date: new Date(res.date)
    //       }
    //     })).subscribe((result) => {
    //       console.log(result);
    //     });
    //     return 1;
    // } catch (err) {
    //   console.error('Error getting document:', err);
    //   return null;
    // }
  }
  

}