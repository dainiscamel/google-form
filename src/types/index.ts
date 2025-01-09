export interface FormState {
  title: string;
  description: string;
  questionType: string;
  question: string;
  options: Array<{
    id: string;
    text: string;
    isOther?: boolean;
  }>;
  hasOther: boolean;
  required: boolean;
}

export interface Option {
  id: string;
  text: string;
  isOther?: boolean;
}
