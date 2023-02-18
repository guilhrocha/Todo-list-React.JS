import { Container, List } from "@mui/material";
import { useState } from "react";
import Form from "../Form";
import Listas from "../Listas";
import "./Home.css"

export default function Home() {

    const [tarefas, setTarefas] = useState([])

    const fazerTarefa = (tarefa) => {
        setTarefas([...tarefas, tarefa])

    }

    const deletarTarefa = (id) => {
        var deletar = tarefas.filter((tarefa) => tarefa.id !== id)
        setTarefas(deletar)
    }

  return (
    <div>
        <h1>Lista de Tarefas</h1>
        <Container maxWidth="xs" className="container">
        <Form fazerTarefa={fazerTarefa} />
        <List sx={{ marginTop: "1em"}}>
        {tarefas.map((tarefa) =>(
        <div key={tarefa.id} style={{marginTop: "1em"}}>
        <Listas tarefa={tarefa} deletarTarefa={deletarTarefa}/> 
        </div>
        ))}
        </List>
        </Container>
    </div>
  );
}