import { ConnectionManager } from 'typeorm'
import { dbName } from '../config/config'
import { Warn } from './entities/warn'

const connectionManager = new ConnectionManager()

connectionManager.create({
  name: dbName,
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Warn]
})

export default connectionManager
