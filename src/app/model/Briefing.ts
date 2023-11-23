import { Project } from "./Project"
import { Question } from "./Question"
import { User } from "./User"

export interface Briefing {
    _id: string
    sender: User|string,
    client: Client,
    questions: Question[],
    answeredAt?: Date,
    sendedAt: Date,
    project?: Project|String
}

export interface Client {
    name: string,
    email: string
}