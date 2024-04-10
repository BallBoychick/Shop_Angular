import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../prod.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit{
  @Input() product: any

  constructor(
    private productServ: ProductService,
    private route: ActivatedRoute

  ) {}


  ngOnInit() {
    // this.product$ = this.productServ.getPhoneById("3fSwToYz2BBKeHs6PPRj");

  }

}
