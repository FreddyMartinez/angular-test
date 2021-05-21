import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { NameStateModel } from 'src/app/store/name.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-name',
  templateUrl: './get-name.component.html',
  styleUrls: ['./get-name.component.sass']
})
export class GetNameComponent {
  @Select(state => state.name)
  name$: Observable<NameStateModel>;

  constructor() { }

}
