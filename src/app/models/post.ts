export class Post {
  userId: number;
  id: number;
  title: string;
  body: string;

  constructor(rawStoredPost: any) {
    this.userId = rawStoredPost.userId;
    this.id = rawStoredPost.id;
    this.title = rawStoredPost.title;
    this.body = rawStoredPost.body;
  }
}
