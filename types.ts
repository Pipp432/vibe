export type CourseType = {
  courseID: string;
  section: number;
  semester: string;
  year: string;
  name: string;
  major: string;
  faculty: string;
  isUploaded: string;
}
export type ProfessorType = {
  emailChula: string;
  firstName: string;
  lastName: string;
  role: string;
}
export type CommentType = {
  commentID: number;
  text: string,
  courseID: number,
  section: number,
  semester: number,
  year: string,

}
export type CommentContextType = {
  contextCommentID: number;
  commentID: number;
  text: string,
  context: string;
  contextComment: string;
  emotionScore: number;

}
export type EmotionObjectType = {
  "approval": number;
  "disapproval": number;
  "confusion": number;
  "joy": number;
  "neutrality": number;
  "graditude": number;
  "disappointment": number;
  "anger": number;
  "admiration": number;
}
export type ContextEmotionObjectType = {
  [key: string]: EmotionObjectType
}
export type ContextType = {
  "context": ContextEmotionObjectType;
}
export type CourseSearchFormDataType = {
  year?: string,
  semester?: string,
  section?: number,
  name?: string,
  courseID?: string,
}
export type LoginDispatchType = {
  type: string,
  payload: ProfessorType
}
