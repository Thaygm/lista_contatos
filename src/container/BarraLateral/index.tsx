import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="AMIGOS" contador={1} />
        <FiltroCard legenda="FAMILIA" contador={2} />
        <FiltroCard legenda="TRABALHO" contador={3} />
        <FiltroCard legenda="FAVORITOS" contador={4} />
        <FiltroCard legenda="NORMAL" contador={5} />
        <FiltroCard legenda="TODOS" contador={10} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)
export default BarraLateral
