import { Briefing } from "./Briefing"
import { ProjectStep } from "./ProjectStep"
import { User } from "./User"

export interface Project {
    name: string,
    user: User|string,
    createdAt: Date,
    briefing: Briefing|String
    steps: (String|ProjectStep)[]
}