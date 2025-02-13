import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// Load environment variables

export const sequelize = new Sequelize({
  host: process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_DIALECT,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
});

export const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({ alter: true }); // alter: true will update the schema if needed
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
