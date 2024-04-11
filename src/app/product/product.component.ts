import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../prod.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { NgIf } from '@angular/common';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { url } from 'inspector';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf, ProductComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  product$: any;
  
  constructor(
    private productServ: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // async ngOnInit() {
  //   this.product$ = this.route.params
  //   .pipe( switchMap( params => {
  //     return this.productServ.getPhoneById(params['id'])
  //   }))

    
  //   console.log(this.product$)
  //   var index = this.router.url.indexOf("/product/") + "/product/".length;
  //   var desiredPart = this.router.url.slice(index);

  //   console.log(desiredPart);

  //   const db = getFirestore();
  //   const docRef = doc(db, 'Androids', desiredPart);
  //   const docSnap = await getDoc(docRef);
  //   const data = JSON.parse(JSON.stringify(docSnap.data()));
  //   console.log(JSON.stringify(data));
  //   return this.product$ = docSnap.data()
  //   }
  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => this.productServ.getPhoneById(params['id']))
    ).subscribe(product => {
      this.product$ = product;
    });
  }
  }
