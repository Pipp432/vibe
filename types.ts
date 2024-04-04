export type CourseType = {
  courseID: string;
  section: number;
  semester: string;
  year: string;
  name: string;
  major: string;
  faculty: string;
  isUpload: number;
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
  "Teaching": EmotionObjectType;
  "Assessment": EmotionObjectType;
  "Teaching Material": EmotionObjectType;
  "Facility": EmotionObjectType;
  "None": EmotionObjectType;

}
export type ContextType = {
  "context":ContextEmotionObjectType; 
}
