// store/formSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Option {
  id: string;
  text: string;
}

interface Question {
  id: string;
  type: string;
  title: string;
  options: Option[];
  required: boolean;
}

interface FormState {
  title: string;
  description: string;
  questions: Question[];
}

const initialState: FormState = {
  title: "제목 없는 설문지",
  description: "설문지 설명",
  questions: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    updateDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    addQuestion: (state, action: PayloadAction<Question>) => {
      state.questions.push(action.payload);
    },
    updateQuestion: (
      state,
      action: PayloadAction<{ id: string; question: Partial<Question> }>
    ) => {
      const index = state.questions.findIndex(
        (q) => q.id === action.payload.id
      );
      if (index !== -1) {
        state.questions[index] = {
          ...state.questions[index],
          ...action.payload.question,
        };
      }
    },
    deleteQuestion: (state, action: PayloadAction<string>) => {
      state.questions = state.questions.filter((q) => q.id !== action.payload);
    },
  },
});

export const {
  updateTitle,
  updateDescription,
  addQuestion,
  updateQuestion,
  deleteQuestion,
} = formSlice.actions;

export default formSlice.reducer;
