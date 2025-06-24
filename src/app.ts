import express, {Request, Response, NextFunction} from "express"
import dotenv from "dotenv"
dotenv.config()

import patientRouter from "./routers/PatientRouter"

const app = express()

app.use(express.json());

app.use("/patients", patientRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.send("Hello me, it's me again...");
});

const PORT = process.env.PORT || 12345 //define o 12345 como default

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});