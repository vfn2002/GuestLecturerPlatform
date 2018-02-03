import { User } from "../../model/user";

export class Comment {

  constructor(
    public comment: string,
    public user: User,
    public date: Date,
    public rating?: number
  ) {}
}
