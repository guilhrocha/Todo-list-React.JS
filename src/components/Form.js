import { Button, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import "./Form.js"

export default function Form({fazerTarefa}) {

  const [escrita, setEscrita] = useState()
  const [id, setId] = useState(0)

  const criarTarefas = (escrita) => {
    const criarObjeto = {text: escrita, id: id}
    setId(id + 1)
    fazerTarefa(criarObjeto)
    document.getElementById("setartarefas").value = ("")
}
  return (
  
    <div className='Style'>
  <Paper style={{ padding: "3%" }}>
      <div style={{display:"flex", justifyContent: "center"}}>
        <TextField id="setartarefas" label="Tarefa" variant="standard" onChange={(e) =>setEscrita(e.target.value)} style={{width: '70%'}}/>
        <Button variant="outlined" onClick={() => criarTarefas(escrita)}>Add</Button>
      </div>
  </Paper>
   </div>
  )
}
