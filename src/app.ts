import express, {Request, Response, NextFunction} from "express"
import dotenv from "dotenv"
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './docs/swagger.json';
import {AppDataSource} from "./data-source";
import routers from "./routers";

dotenv.config()

AppDataSource.initialize()
  .then(async r => {
    console.log("Database connected successfully!")
  })
  .catch((err) => {
    console.error('❌ Error connecting to the database:', err);
    process.exit(1);
  });

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.use("/api/v1", routers);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'healthy',
    message: '🩺 FateCare API is running smoothly!',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
  console.log(`✨ API is ready to use!`);
  console.log(`📚 API Documentation: http://localhost:${PORT}/docs`);
});