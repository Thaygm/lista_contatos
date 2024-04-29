import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../stores'
import { alterarTermo } from '../../stores/reducers/filtro'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import * as enums from '../../utils/enums/Contato'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            valor={enums.Tipo.AMIGOS}
            criterio="tipo"
            legenda="AMIGOS"
          />
          <FiltroCard
            valor={enums.Tipo.FAMILIA}
            criterio="tipo"
            legenda="FAMILIA"
          />
          <FiltroCard
            valor={enums.Tipo.TRABALHO}
            criterio="tipo"
            legenda="TRABALHO"
          />
          <FiltroCard
            valor={enums.Prioridade.FAVORITOS}
            criterio="prioridade"
            legenda="FAVORITOS"
          />
          <FiltroCard
            valor={enums.Prioridade.NORMAL}
            criterio="prioridade"
            legenda="NORMAL"
          />
          <FiltroCard criterio="tipo" legenda="TODOS" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
