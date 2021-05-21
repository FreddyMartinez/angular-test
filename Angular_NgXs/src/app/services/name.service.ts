import { Injectable } from '@angular/core';
//import { NameStore } from './name.store';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor(//private nameStore: nameStore
    ) {
  }

  setName(name: string) {
    //this.nameStore.setName(name);
  }

  resetName() {
    //this.nameStore.resetName();
  }
}