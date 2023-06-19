import { useState, useEffect } from 'react'
import List from './List'
import Form from '../Form'
import {} from './style.css'

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Munise",
      phone_number: 1234,
    },
    {
      fullname: "Hera",
      phone_number: 3467,
    },
    {
      fullname: "Esra",
      phone_number: 5478,
    }
  ])

  useEffect(()=> {
    console.log(contacts);
  }, [contacts])

  return (
    <div className='container'>
      <h1>Contacts</h1>
      <List contacts={contacts}/>
      <br/>
      <Form addContact = {setContacts} contacts = {contacts}/>
    </div>
  )
}

export default Contacts
