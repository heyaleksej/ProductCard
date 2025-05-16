import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-footer',
  imports: [
    NgForOf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  activeFooterIndex = 0;
  footerItems = [
    { icon: 'assets/icons/catalog.svg', label: 'Каталог' },
    { icon: 'assets/icons/delivery.svg', label: 'Заказы' },
    { icon: 'assets/icons/news.svg', label: 'Новости' },
    { icon: 'assets/icons/big-cart.svg', label: 'Корзина' },
    { icon: 'assets/icons/profile.svg', label: 'Профиль' },
  ];
}
