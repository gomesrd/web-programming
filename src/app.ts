import dotenv from "dotenv"
import {AppDataSource} from "./data-source";
import {setupApp} from "./setupApp";

dotenv.config()

AppDataSource.initialize()
  .then(async r => {
    console.log("Database connected successfully!")
  })
  .catch((err) => {
    console.error('❌ Error connecting to the database:', err);
    process.exit(1);
  });

const app = setupApp();
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
  console.log(`✨ API is ready to use!`);
  console.log(`📚 API Documentation: http://localhost:${PORT}/docs`);
});