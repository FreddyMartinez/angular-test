import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.scss']
})
export class MainFrameComponent {
  
  @Select(state => state.auth.username)
  user$: Observable<string>;

  constructor() { }

}
