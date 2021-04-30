export abstract class Person {

  protected constructor(public id: number,
                        public firstname: string,
                        public lastname: string,
                        public active: boolean = true,
                        public age?: number ) {
    this.firstname = firstname;
  }

}
