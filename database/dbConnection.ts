import { connect } from 'mongoose'

const MONGO_STRING = process.env.MONGO_URL

export const dbConnection = async () => {
  try {
    if( !MONGO_STRING ) return Promise.reject('No se encontró la cadena de conexión a mongo')
    await connect(MONGO_STRING)
    console.log('Database online')
  } catch (error) {
    console.log(error)
  }
}
