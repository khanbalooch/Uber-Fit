import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  selectedDays = [];

  setSelectedDays(day: any) {
    this.getSelectedDays();
    if (this.isAlreadyExists(this.selectedDays, day)) {
      this.selectedDays.splice(this.selectedDays.indexOf(day));
    } else {
      this.selectedDays.push(day);
    }
    console.log(this.selectedDays);
  }
  getSelectedDays() {
    return this.selectedDays;
  }

  isAlreadyExists(array, day) {
    return array.includes(day);
  }

  constructor() { }
}
