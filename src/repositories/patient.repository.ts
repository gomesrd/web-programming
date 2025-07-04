import Patient from "../models/patient";
import {AppDataSource} from "../data-source";

const repository = AppDataSource.getRepository(Patient)

async function getPatients(): Promise<Patient[]> {
  return await repository.find();
}

async function getPatientById(id: number): Promise<Patient | null> {

  return await repository.findOneBy(
    {id: id}
  );
}

async function addPatient(request: Patient): Promise<Patient> {
  const newPatient = repository.create({
    code: request.code,
    name: request.name
  });

  return await repository.save(newPatient);
}


async function updatePatient(id: number, data: Patient): Promise<Patient | null> {
  const patient = await getPatientById(id);

  if (!patient) {
    return null;
  }

  patient.name = data.name;
  patient.code = data.code;

  return await repository.save(patient);
}

async function deletePatient(id: number): Promise<boolean> {
  const result = await repository.delete({"id": id});

  return result.affected != null;
}

export default {
  getPatients,
  getPatientById,
  addPatient,
  updatePatient,
  deletePatient
}