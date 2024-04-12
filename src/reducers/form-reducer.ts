export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
}

export interface FormAction {
  type: FormActions
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any
}

export interface FormState {
  currentStep: number
  name: string
  level: 0 | 1 | null
  email: string
  github: string
}

export function formReducer(state: FormState, action: FormAction) {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload }
    case FormActions.setName:
      return { ...state, name: action.payload }
    case FormActions.setEmail:
      return { ...state, email: action.payload }
    case FormActions.setGithub:
      return { ...state, github: action.payload }
    case FormActions.setLevel:
      return { ...state, level: action.payload }
    default:
      return state
  }
}
