import MultipleChoice from "./components/MultipleChoice"
import FillBlank from "./components/FillBlank"

export const QUESTION_TYPE = {
  'multiple-choice': {
    enum: 1,
    label: 'Multiple choice',
    component: MultipleChoice
  },
  'fill-in-blank': {
    enum: 2,
    label: 'Fill in blank',
    component: FillBlank
  },
  // 'single-choice': {
  //   enum: 3,
  //   label: 'Single choice'
  // },
}
