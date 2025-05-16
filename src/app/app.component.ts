import { Component } from '@angular/core';
import { NgForOf, NgIf, NgSwitch, NgSwitchCase } from "@angular/common";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NgSwitch, NgSwitchCase, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  currentImageIndex = 0;
  inCart = false;
  activeTab = 'описание';
  cities = [
    { name: 'Москва', stock: 5, date: '22.04.2025', isFastDelivery: true},
    { name: 'Ростов', stock: 2, date: '29.04.2025', isFastDelivery: false }
  ];
  images = [
    'assets/images/item.png',
    'assets/images/key.png',
    'assets/images/item.png',
  ];

  data = [
    { name: 'Тип ТС', value: 'грузовые автомобили, автобусы, сельхозтехника' },
    { name: 'Применяемость', value: 'КАМАЗ, ЛИАЗ, CASE с дв. CUMMINS ISBe/ISDe' },
    { name: 'Марка ТС', value: 'КАМАЗ, ЛИАЗ, CASE' },
    {
      name: 'КроссКоды',
      value: `FC6206\nWK950/3\n110-16-008\n6127\nFF185М\n1457434180\nKC28\nKF3041`
    },
    { name: 'Состав комплекта', value: 'Фильтр очистки топлива: 1 шт.' },
    { name: 'Модель двигателя', value: 'Cummins ISD 6.7, Cummins ISB 6.7' },
    { name: 'Марка двигателя', value: 'Cummins Inc.' },
    { name: 'Доп. информация', value: '-' }
  ];

  touchStartX = 0;
  touchEndX = 0;

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  handleSwipe() {
    const deltaX = this.touchEndX - this.touchStartX;

    if (deltaX > 50) {
      this.prevImage();
    } else if (deltaX < -50) {
      this.nextImage();
    }
  }

  prevImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  nextImage() {
    if (this.currentImageIndex < this.images.length - 1) {
      this.currentImageIndex++;
    }
  }

  switchImage(index: number) {
    this.currentImageIndex = index;
  }

  toggleCart() {
    this.inCart = !this.inCart;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}