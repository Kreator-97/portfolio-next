import { FormEvent, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'

import { createContactRequest } from '../services/contact'

const placeholderMsg = 'Escribe tu mensaje'
const initialSubject = 'work-puporsal'

export const Contact = () => {
  const [ email, setEmail ] = useState('')
  const [ subject, setSubject ] = useState(initialSubject)
  const [ message, setMessage ] = useState(placeholderMsg)

  const onSubmit = async (e:FormEvent) => {
    e.preventDefault()

    const required = [email, message, subject]

    if( required.some( value => value.trim() === '' || !value ) ) {
      console.warn('Los campos son obligatorios')
      return
    }

    if( message === placeholderMsg ) {
      console.warn('Por favor deja tu mensaje')
      return
    }

    try {
      await createContactRequest({ email, subject, message })
      setEmail('')
      setSubject(initialSubject)
      setMessage(placeholderMsg)
      toast.success('Gracias por contactar conmigo')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded w-full mx-auto mt-8 shadow-md" id="contact">
      <h2 className="text-dark dark:text-light text-center font-bold">Contacta conmigo</h2>
      <form className="pt-4 mx-auto max-w-2xl" onSubmit={onSubmit} >
        <select
          name="subject"
          id="suject"
          defaultValue={ subject}
          onChange={ (e) => setSubject(e.target.value) }
          className='bg-slate-50 dark:bg-slate-600 text-dark dark:text-light w-full px-4 py-2 rounded mb-4 font-bold block shadow'
        >
          <option value="work-purpose">Propuesta de trabajo</option>
          <option value="collaboration">Colaboración</option>
          <option value="personal-contact">Contacto Personal</option>
          <option value="custom">Otros (descríbelo en el mensaje)</option>
        </select>
        <input
          type="email"
          required
          placeholder="Correo..."
          className="bg-slate-50 dark:bg-slate-600 text-dark dark:text-light placeholder:text-dark dark:placeholder:text-light w-full px-4 py-2 rounded mb-4 font-bold shadow"
          onChange={ (e) => setEmail(e.target.value) }
          value={ email }
        />
        <textarea
          required
          className="bg-slate-50 dark:bg-slate-600 text-dark dark:text-light w-full px-4 py-2 rounded h-24 font-bold shadow"
          value={ message }
          onChange={ (e) => setMessage(e.target.value) }
          onFocus={ (e) => {
            if( e.target.value === placeholderMsg ) {
              setMessage('')
            }
          }}
          onBlur={ (e) => {
            if( e.target.value.trim() === '' ) {
              setMessage(placeholderMsg)
            }
          }}
        >
        </textarea>
        <button className='bg-accent font-bold border border-accent text-light p-2 text-center w-full max-w-md mx-auto rounded block mt-4 transition-colors hover:bg-accentDark hover:border-light shadow'>
          Enviar
        </button>
      </form>
      <Toaster
        toastOptions={{
          className: 'bg-emerald-600 text-light',
          icon: '⭐',
          position: 'top-center',
          duration: 3000,
          style: { fontWeight: 700 }
        }}
      />
    </div>
  )
}
