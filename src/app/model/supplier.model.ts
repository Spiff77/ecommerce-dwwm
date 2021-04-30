import {Person} from './person.model';
import {Product} from './product.model';
import {Taxable} from './taxable';

export class Supplier extends Person implements Taxable{

  constructor(id: number,
              firstname: string,
              lastname: string,
              public companyName: string,
              public bankAccountNumber: string,
              public ca: number = 0,
              active?: boolean,
              age?: number
              ) {
    super(id, firstname, lastname, active, age);
  }

  calculateCa(): number {
    return this.ca * .8;
  }
}
