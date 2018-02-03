export class Comment {

  constructor(
    public comment: string,
    public user: any,
    public date: Date,
    public rating?: number
  ) {}
}
