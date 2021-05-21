const SET_NAME = '[Name] Set';
const RESET_NAME = '[Name] Reset';

export class SetName {
    static readonly type = SET_NAME;

    constructor(public payload: string) {}
}

export class ResetName {
    static readonly type = RESET_NAME;

    constructor() {}
}
