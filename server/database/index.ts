import mongoose from 'mongoose';

const intializeDatabaseConnection = async (): Promise<void> => {
  const MONGODB_URL = process.env.DATABASE as string;
  try {
    await mongoose.connect(MONGODB_URL);
    console.info('Database Connected...');
  } catch (err) {
    throw new Error(err);
  }
};
export default intializeDatabaseConnection;
