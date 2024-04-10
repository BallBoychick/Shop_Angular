import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Prod } from '../prod';
import { HeroService } from '../prod.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterLink, NgForOf],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})

// export class MainPageComponent {}
export class MainPageComponent implements OnInit{

  products!: Prod[];


  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(products => this.products = products);
  }


}
