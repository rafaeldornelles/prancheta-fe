import { Project } from "./Project"

export interface ProjectStep {
    _id: string
    text: string
    date: Date
    imgs?: String[]
    type: ProjectStepType
    project: Project|String
}

export enum ProjectStepType {
    VISITATION = "visitation",
    FEEDBACK_REQUEST = "feedbackrequest",
    FEEDBACK_RESPONSE = "feedbackresponse"
}