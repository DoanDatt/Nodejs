import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()
// import 'dotenv/config'
// connect to MongoDB
const uri = process.env.MONGO_URI as string
console.log(process.env.MONGO_URI)
class DatabaseService {
  private client: MongoClient
  constructor() {
    this.client = new MongoClient(uri)
  }
  async connect() {
    try {
      await this.client.db('admin').command({ ping: 1 })
      console.log('Pinged the database. Connection is successful!')
    } finally {
      await this.client.close()
    }
  }
}
// create a object from DatabaseService class
const databaseService = new DatabaseService()
export default databaseService
