import { Project } from "./Project"
import { ProjectStepType } from "./ProjectStep"

export interface answerFeedbackRequest {
    key: string
    text: string
    type: ProjectStepType
}