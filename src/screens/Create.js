import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import uniqid from 'uniqid';

const Create = ({setNotes}) => {
    const [form, setForm] = useState({title: '', text: ''})
    const [id, setId] = useState(uniqid())

    function handleChange(e) {
    const {value, name} = e.target
    setForm({...form, [name]: value, id })
    }


    function addNote() {
      if(form.title!=='' || form.text !==''){
        setNotes(note => [...note, form])
        setId(uniqid())
        setForm({ title: '', text: ''})
      }
     
    }

 return (
     <Container>
         <Form className='mt-3' style={{width: "50%"}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control onChange={handleChange} value={form.title} name='title' type="email" placeholder="Enter Title..." />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Text</Form.Label>
    <Form.Control onChange={handleChange} value={form.text} name='text' type="text" placeholder="Enter Text....." />
  </Form.Group>
</Form>
<button className='btn btn-dark' onClick={addNote}>Add Note</button>
     </Container>
 );
}

export default Create;
