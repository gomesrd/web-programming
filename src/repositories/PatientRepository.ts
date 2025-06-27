import Patient from "../models/patient";

const patients: Patient[] = [];

function getPatients() : Patient[] {
    return patients;
}

function addPatient(request: Patient) : Patient {
    const patient = new Patient(request.code, request.name);
    patients.push(patient);

    return patient;
}

function updatePatient(id: number, request: Patient) : Patient | undefined {
    const index = patients.findIndex(item => item.id === id);

    if (index === -1)
        return undefined;

    patients[index].code = request.code;
    patients[index].name = request.name;

    return patients[index];
}

export default {
    getPatients,
    addPatient,
    updatePatient
}