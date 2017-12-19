import {User} from './user';
export class Student extends User {
  constructor(
    public firstName?: string,
    public lastName?: string,
    public email?: string,
    public gender?: string,
    public description?: string,
    public age?: number,
    public profileImage?: string,
    public studentClass?: string,
    public university?: string,
    public semester?: number,
  ) {
    super(firstName, lastName, email, gender, description, age, profileImage);
  }
}
