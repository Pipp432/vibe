export type CourseType ={
  courseID:number;
  section:number ;
  semester:number ;
  year:string;
  name:string ;
  major:string ;
  faculty:string ;
}
export type ProfessorType={
  emailChula:string; 
  firstName:string;
  lastName:string;
  role:string;
}
export type CommentType={
  commentID:number;
  text: string,
  courseID: number,
  section:number ,
  semester:number ,
  year:string,

}
export type CommentContextType={
  contextCommentID: number;
  commentID:number;
  text:string,
  context :string;
  contextComment: string,
  emotionScore: number,

}
