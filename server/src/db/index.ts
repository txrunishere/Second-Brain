import mongoose from 'mongoose'
import { config } from '../conf/config'

const connectDB = async () => {
  try {
    const mongooseConnectionInstence = await mongoose.connect(config.mongoUrl)
    console.log(
      `Connection Successful`,
      mongooseConnectionInstence.connection.name,
      mongooseConnectionInstence.connection.host
    )
  } catch (error) {
    console.log("Error while connect to DB: ", error)
    process.exit(1) // Exit the process with failure
  }
}

export default connectDB