// user.model.ts
import {
  randJobArea,
  randJobTitle,
  randJobDescriptor,
  randCompanyName,
  randPhoneNumber,
  randAddress,
  Address,
  randAmount,
  randCatchPhrase,
  randSubscriptionPlan,
} from '@ngneat/falso';

export class User {
  id: number;
  name: string;
  email: string;
  imageUrl: string;
  phoneNumber: string;
  jobTitle: string;
  company: string;
  jobDescription: string;
  address: Address;
  salesRevenue: string;
  catchPhrase: string;
  subscriptionPlan: string;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.imageUrl = data.imageUrl;
    (this.phoneNumber = randPhoneNumber({ countryCode: 'US' })),
      (this.jobDescription = randJobDescriptor()),
      (this.jobTitle = randJobTitle()),
      (this.company = randCompanyName()),
      (this.address = randAddress({ includeCounty: false })),
      (this.salesRevenue = randAmount({ min: 1000, symbol: '$' })),
      (this.catchPhrase = randCatchPhrase()),
      (this.subscriptionPlan = randSubscriptionPlan());
  }
}
