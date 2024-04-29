import * as S from './styles'
import { alterarFiltro } from '../../stores/reducers/filtro'
import * as enums from '../../utils/enums/Contato'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../stores'

export type FiltroProps = {
  legenda: string
  criterio: 'prioridade' | 'tipo' | 'todos'
  valor?: enums.Prioridade | enums.Tipo
}

const FiltroCard = ({ legenda, criterio, valor }: FiltroProps) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarContatos = () => {
    if (criterio === 'todos') return contatos.itens.length
    if (criterio === 'prioridade') {
      return contatos.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'tipo') {
      return contatos.itens.filter((item) => item.tipo === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = contarContatos()
  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
