import { Component, OnInit } from '@angular/core';
import {User} from '../../_models/user';
import {Router} from '@angular/router';
import {AuthService} from '../../_services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{

  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthService
  ) {}

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
      console.log(this.currentUser);
    });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
