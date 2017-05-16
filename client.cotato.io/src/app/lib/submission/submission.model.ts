export class SubmissionResult {
    constructor(
        public newSubmission: Submission[]
    ) { }
}

export class Submission {
    constructor(
        public id: string,
        public code: string,
        public status: number
    ) { }
}