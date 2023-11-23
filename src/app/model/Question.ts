export interface Question {
    _id: string,
    questionType: QuestionType;
    caput: string;
    options?: QuestionOption[];
    answer?: string;
    placeholder?: string,
    trailingText?: string
}

export enum QuestionType {
    TEXT = "text",
    MULTIPLE_OPTIONS = "multiple",
    SINGLE_OPTION = "single",
    CURRENCY = "currency",
    YESNO = "yesno",
    NUMBER = "number"
}

export interface QuestionOption {
    _id: string
    text: string;
    image?: string;
}
