import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-sheet',
  templateUrl: './routing-sheet.component.html',
  styleUrls: ['./routing-sheet.component.css']
})
export class RoutingSheetComponent implements OnInit {

  routingsheet: Model.RoutingSheet[];

  constructor() {
    this.routingsheet = [
      {
        id: 1,
        accepted: 'Иванов И. И.',
        time1: '09:00',
        place11: 'Держпром',
        place12: 'Бот. сад',
        time2: '10:05',
        place21: 'Бот. сад',
        place22: 'Центральный рынок',
        time3: '11:05',
        place31: 'Центральный рынок',
        place32: 'Бот. сад',
        time4: '12:05',
        place41: 'Держпром',
        place42: 'Бот. сад',
        time5: '13:05',
        place51: 'Держпром',
        place52: 'Бот. сад',
        lieter: 60,
        gaz: 'A95',
        break: 1,
        relieved: 'Иванов И. И.'
      },
      {
        id: 2,
        accepted: 'Иванов И. И.',
        time1: '09:00',
        place11: 'Держпром',
        place12: 'Бот. сад',
        time2: '10:05',
        place21: 'Бот. сад',
        place22: 'Центральный рынок',
        time3: '11:05',
        place31: 'Центральный рынок',
        place32: 'Бот. сад',
        time4: '12:05',
        place41: 'Держпром',
        place42: 'Бот. сад',
        time5: '13:05',
        place51: 'Держпром',
        place52: 'Бот. сад',
        lieter: 60,
        gaz: 'A95',
        break: 1,
        relieved: 'Иванов И. И.'
      },
      {
        id: 3,
        accepted: 'Иванов И. И.',
        time1: '09:00',
        place11: 'Держпром',
        place12: 'Бот. сад',
        time2: '10:05',
        place21: 'Бот. сад',
        place22: 'Центральный рынок',
        time3: '11:05',
        place31: 'Центральный рынок',
        place32: 'Бот. сад',
        time4: '12:05',
        place41: 'Держпром',
        place42: 'Бот. сад',
        time5: '13:05',
        place51: 'Держпром',
        place52: 'Бот. сад',
        lieter: 60,
        gaz: 'A95',
        break: 1,
        relieved: 'Иванов И. И.'
      }
    ];
   }

  ngOnInit() {
  }

}
