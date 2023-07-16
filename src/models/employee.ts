export interface IEmployee {
    emolyeeId: number;
    name: string;
    isActive: boolean;
    birthday: any
}

export interface IEmployeeList extends IEmployee {
    dateCreated: any;
}