import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { Container, Resultado } from './styles'
import { RootReducer } from '../../stores'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) =>
          item.nomeCompleto.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'tipo') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.tipo === valor
        )
      }
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complemento =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todos') {
      mensagem = `${quantidade} contato(s) encontrado(s) como: todos ${complemento}`
    } else {
      mensagem = `${quantidade} contato(s) encontrado(s) como: "${`${criterio}=${valor}`}" ${complemento}`
    }

    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltragem(contatos.length)

  return (
    <Container>
      <Resultado>{mensagem}</Resultado>
      <ul>
        {contatos.map((c) => (
          <li key={c.nomeCompleto}>
            <Contato
              id={c.id}
              telefone={c.telefone}
              email={c.email}
              nomeCompleto={c.nomeCompleto}
              tipo={c.tipo}
              prioridade={c.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}
export default ListaContatos
