import { NextApiRequest, NextApiResponse } from 'next'
import { dbConnection } from '../../../database/dbConnection'
import { Contact } from '../../../models/Contact'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  dbConnection()

  if( req.method !== 'POST' ) {
    return res.status(400).json({
      ok: false,
      msg: 'Este endpoint solo permite peticiones POST'
    })
  }

  const { email, message, subject } = req.body

  const required = [email, message, subject]

  if( required.some( value => !value || value.trim() === '' ) ) {
    return res.status(400).json({
      ok: false,
      msg: `Los siguientes datos en req.body son requeridos: ${required.join(', ')}`,
    })
  }

  try {
    const contact = new Contact({ email, message, subject })
    await contact.save()

    return res.status(200).json({ok: true, msg: 'Contacto agregado' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: 'Ocurrió un error al intentar crear el contacto'
    })
  }
}
