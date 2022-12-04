interface Props {
  email   : string;
  message : string;
  subject : string;
}

export const createContactRequest = async ({email, message, subject}: Props) => {

  try {
    const url = '/api/contact'
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, message, subject}),
    })
  
    const data = await res.json()

    if( !res.ok ) {
      console.error(res)
      return Promise.reject('No se pudo realizar la petición')
    }
    
    if( !data.ok ) {
      return Promise.reject(data.msg)
    }
  } catch (error) {
    console.error(error)
  }
}
