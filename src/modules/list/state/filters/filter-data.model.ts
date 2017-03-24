import { EventEmitter } from '@angular/core';
let moment = require('moment');

export class ListFilterDataModel {
  public id: string = moment().toDate().getTime().toString();
  public value: any = '';

  public onChange: EventEmitter<any> = new EventEmitter<any>();

  public changed(value: any) {
    this.value = value;
    this.onChange.emit(value);
  }

  constructor(data?: any) {
    if (data) {
      this.id = data.id || this.id;
      this.value = data.value;
      this.onChange = data.onChange;
    }
  }
}
