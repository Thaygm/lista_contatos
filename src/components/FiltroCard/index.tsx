import * as S from './styles'

export type FiltroProps = {
  ativo?: boolean
  contador?: number
  legenda?: string
}

const FiltroCard = ({ ativo, contador, legenda }: FiltroProps) => (
  <S.Card ativo={ativo}>
    <S.Contador>{contador}</S.Contador>
    <S.Label>{legenda}</S.Label>
  </S.Card>
)

export default FiltroCard
