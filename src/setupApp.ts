import express, {Request, Response} from 'express';
import routers from "./routers";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './docs/swagger.json';

export function setupApp(): express.Express {
  const app = express();

  app.use(express.json());
  app.use(express.static('public'));
  app.use("/api/v1", routers);
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use((_, res) => {
    res.status(404).json({
      error: 'Not Found', message: 'The requested resource could not be found.',
      status: 404, timestamp: new Date().toISOString()
    });
  });
  app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({
      status: 'healthy',
      message: '🩺 FateCare API is running smoothly!',
      timestamp: new Date().toISOString()
    });
  });

  return app;
}
