import { FormState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: FormState = {
  title: "제목 없는 설문지",
  description: "설문지 설명",
  questionType: "객관식 질문",
  question: "",
  options: [{ id: "1", text: "옵션 1" }],
  hasOther: false,
  required: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },

    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },

    setQuestion: (state, action: PayloadAction<string>) => {
      state.question = action.payload;
    },

    setQuestionType: (state, action: PayloadAction<string>) => {
      state.questionType = action.payload;
    },

    addOption: (state) => {
      const newOption = {
        id: Date.now().toString(),
        text: `옵션 ${state.options.filter((opt) => !opt.isOther).length + 1}`,
      };
      state.options = [
        ...state.options.filter((opt) => !opt.isOther),
        newOption,
        ...state.options.filter((opt) => opt.isOther),
      ];
    },

    addOther: (state) => {
      if (!state.hasOther) {
        state.options.push({
          id: Date.now().toString(),
          text: "기타...",
          isOther: true,
        });
        state.hasOther = true;
      }
    },

    deleteOption: (state, action: PayloadAction<string>) => {
      if (state.options.length <= 1) return;

      const option = state.options.find((opt) => opt.id === action.payload);
      if (option?.isOther) {
        state.hasOther = false;
      }
      state.options = state.options.filter((opt) => opt.id !== action.payload);
    },

    updateOptionText: (
      state,
      action: PayloadAction<{ id: string; text: string }>
    ) => {
      const optionIndex = state.options.findIndex(
        (opt) => opt.id === action.payload.id
      );
      if (optionIndex !== -1) {
        state.options[optionIndex] = {
          ...state.options[optionIndex],
          text: action.payload.text,
        };
      }
    },

    toggleRequired: (state) => {
      state.required = !state.required;
    },
  },
});

export const {
  setTitle,
  setDescription,
  setQuestion,
  setQuestionType,
  addOption,
  addOther,
  deleteOption,
  updateOptionText,
  toggleRequired,
} = formSlice.actions;

export default formSlice.reducer;
