export class Contact {
  sharing: [
    {
      id: string;
      entity: string
    }
    ];
  contactType: string;
  companyName: string;
  enrich: boolean;
  sfdcDuplicate: boolean;
  sfdcEnrich: boolean;
  clientId: string;
  source: string;
  addresses: [
    {
      fullAddress: string;
      street: string;
      neighborhood: string;
      poBox: string;
      postCode: string;
      city: string;
      region: string;
      country: string;
      type: string
    }
    ];
  emails: [
    {
      primary: boolean;
      type: string;
      email: string;
      status: string;
      consentDetails: {
        description: string;
        received: 0;
        ipAddress: string
      }
    }
    ];
  phoneNumbers: [
    {
      primary: boolean;
      type: string;
      number: string;
      status: string
    }
    ];
  prefix: string;
  firstName: string;
  lastName: string;
  title: string;
  middleName: string;
  suffix: string;
  salutation: string;
  gender: string;
  restrictions: [
    string
    ];
  assignedTo: string;
  websites: [
    {
      primary: boolean;
      type: string;
      url: string
    }
    ];
  tags: [
    string
    ];
  profiles: [
    {
      source: string;
      url: string;
      username: string;
      avatarUrl: string
    }
    ];
  lists: [
    {
      active: boolean;
      currentStatus: string;
      updated: 0;
      name: string;
      listId: 0
    }
    ];
  profileUrl: string;
  metaRefs: [
    {
      systemId: string;
      systemURL: string;
      entityId: string;
      entityName: string
    }
    ];
  customFields: [
    {
      value: {};
      name: string;
      definitionId: 0;
      type: string;
      references: {};
      readOnly: boolean
    }
    ];
  segments: [
    {
      type: string;
      value: string
    }
    ];
  organizationId: string;
  creatorId: string;
  leadscore: 0;
  displayName: string;
  relatedTo: [
    {
      id: string;
      type: string;
      displayName: string;
      companyName: string;
      companyId: string;
      title: string;
      creatorId: string;
      sharing: [
        {
          id: string;
          entity: string
        }
        ];
      profilePicture: string
    }
    ];
  id: string;
  birthday: string;
  snoozedUntil: Date;
  nationality: string;
  locale: string;
  pictures: [
    {
      url: string;
      source: string;
      created: 0;
      id: string;
      default: boolean
    }
    ];
  updated: Date;
  created: Date;
  profilePicture: string;
  favorite: boolean;
}
