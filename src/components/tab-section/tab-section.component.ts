import { Component } from '@angular/core';
import { NgForOf, NgSwitch, NgSwitchCase } from "@angular/common";

@Component({
  selector: 'app-tab-section',
  imports: [
    NgSwitch,
    NgSwitchCase,
    NgForOf
  ],
  templateUrl: './tab-section.component.html',
  styleUrl: './tab-section.component.scss'
})
export class TabSectionComponent {
  activeTab = 'описание';

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

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
