export interface IUser {
  userid: number;
  username: string;
  preferredname: string;
  age: number;
  qualification: string;
}

export interface ILesson {
  lessonid: number;
  title: string;
  description: string;
  time: string;
  participants: number;
}
