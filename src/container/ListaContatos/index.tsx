import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { Container } from './styles'
import { RootReducer } from '../../stores'

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state)
  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {contatos.map((c) => (
          <li key={c.nomeCompleto}>
            <Contato
              nomeCompleto={c.nomeCompleto}
              telefone={c.telefone}
              email={c.email}
              tipo={c.tipo}
              prioridade={c.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
