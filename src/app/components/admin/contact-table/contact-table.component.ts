import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ContactListService} from '../../../_services/contact-list.service';
import {ContactList} from '../../../_models/contactList';
import {Contact} from '../../../_models/contact';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.scss']
})
export class ContactTableComponent implements OnChanges {

  @Input() list: ContactList;
  public contactList: Contact[];
  public length: number;
  displayedColumns: string[] = ['name', 'email', 'phone'];

  constructor(
    private contactService: ContactListService
  ) { }

  ngOnChanges() {
    if (this.list) { //  error from pre-loading empty list
      this.length = this.list.contactsCount;
      // if there is no contact, we do not fill the list (If this is not present, some random contact may appears on empty lists)
      if (this.length > 0) {
        // Get the first contacts of the list
        this.contactService.getContactFromList(this.list.id, 0)
          .subscribe( res => {
            this.contactList = res.data;
          });
      }
    }
  }

  changePage(pageOptions) {
    this.contactService.getContactFromList('3559', pageOptions.pageIndex) .subscribe(res => {
      this.contactList = res.data;
    });
  }
}
