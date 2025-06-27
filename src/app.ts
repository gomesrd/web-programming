import express, {Request, Response, NextFunction} from "express"
import dotenv from "dotenv"
import patientRouter from "./routers/PatientRouter"

dotenv.config()

const app = express()

app.use(express.json());

app.use("/patients", patientRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.send("Welcome to the Patient Management API");
});

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});