import { Component } from '@angular/core';
import { CityStockComponent } from "../city-stock/city-stock.component";
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-info-section',
    imports: [
        CityStockComponent,
        NgForOf
    ],
  templateUrl: './info-section.component.html',
  styleUrl: './info-section.component.scss'
})
export class InfoSectionComponent {
    cities = [
        { name: 'Москва', stock: 5, date: '22.04.2025', isFastDelivery: true},
        { name: 'Ростов', stock: 2, date: '29.04.2025', isFastDelivery: false }
    ];
}
