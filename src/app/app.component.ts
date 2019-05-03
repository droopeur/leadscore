import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {User} from './_models/user';
import {AuthService} from './_services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'leadscoreapp';

  constructor(

  ) {
  }


}
