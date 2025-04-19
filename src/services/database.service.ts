import { Collection, Db, MongoClient } from 'mongodb'
import 'dotenv/config'
import User from '~/models/schemas/User.schema'
// connect to MongoDB
const uri = process.env.MONGO_URI as string

class DatabaseService {
  // quản lý kết nối với mongoDB
  private client: MongoClient
  // đại diện cho csdl cụ thể
  private db: Db
  constructor() {
    // kết nối đến MongoDB
    this.client = new MongoClient(uri)
    // lấy csdl cụ thể từ mongoDB
    this.db = this.client.db(process.env.DB_NAME)
  }
  async connect() {
    try {
      await this.db.command({ ping: 1 })
      // send ping command to the server and get the response with a promise
      console.log('Pinged the database. Connection is successful!')
    } catch (error) {
      // await this.client.close()
      console.log('error', error)
      throw error
    }
  }
  get users(): Collection<User> {
    return this.db.collection(process.env.DB_USER as string)
  }
}
// create a object from DatabaseService class
const databaseService = new DatabaseService()
export default databaseService
