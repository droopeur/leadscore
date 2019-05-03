import { Component, OnInit } from '@angular/core';
import {User} from '../../_models/user';
import {Router} from '@angular/router';
import {AuthService} from '../../_services/auth.service';
import {ContactListService} from '../../_services/contact-list.service';
import {ContactList} from '../../_models/contactList';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  currentUser: User;
  contactLists: ContactList[];

  constructor(
    private router: Router,
    private authenticationService: AuthService,
    private contactService: ContactListService
  ) {}

  ngOnInit(): void {
    // Get the current User
    this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
      console.log(user)
    });
    // Get the list of contactList of the user
    this.contactService.getLists()
      .subscribe(res => {
      this.contactLists = res;
      });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }


}
