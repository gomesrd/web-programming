class Patient {
    id: number;
    code: string;
    name: string;

    private static counter = 1;

    constructor(code: string, name: string) {
        this.id = Patient.counter++;
        this.code = code;
        this.name = name;
    }
}

export default Patient;