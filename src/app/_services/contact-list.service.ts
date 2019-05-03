import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ContactList} from '../_models/contactList';
import {Contact} from '../_models/contact';

@Injectable({
  providedIn: 'root'
})


export class ContactListService {

  constructor(
    private http: HttpClient,
  ) { }
 // This next method will return the list of contactList from the leadscore server
  getLists(): Observable<ContactList[]> {
    return this.http.get<ContactList[]>('https://internal-api-staging-lb.interact.io/v2/lists/');
  }

  // This next method will return this list of the contacts, that we want to display depending on the user's page
  getContactFromList(listID, page) {
    let params = new HttpParams();
    params = params.append('offset', (25 * page).toString());
    params = params.append('limit', '25');
    return this.http.get<{data: Contact[]}>('https://internal-api-staging-lb.interact.io/v2/lists/3559/contacts',
      {
        params
      });
  }
}
