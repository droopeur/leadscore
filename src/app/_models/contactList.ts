import {Contact} from './contact';

export class ContactList {
  activeStatuses: [string]
  completion: number
  contacts: [Contact]
  contactsCount: number
  description: string
  dynamic: boolean
  emailDistributionList: boolean
  endDate: Date
  id: number
  inactiveStatuses: [string]
  lastInteraction: any
  listTriggers: [any]
  mode: string
  name: string
  ownerId: string
  reviewers: [string]
  sharing: [{id: string, entity: string}]
  startDate: Date;
}
