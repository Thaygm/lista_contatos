import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/Contato'

type ContatoProps = {
  nomeCompleto: string
  telefone: string
  email: string
  prioridade: enums.Prioridade
  tipo: enums.Tipo
}

const Contato = ({
  nomeCompleto,
  prioridade,
  telefone,
  email,
  tipo
}: ContatoProps) => {
  const [estaEditado, setEstaEditado] = useState(false)

  return (
    <S.Card>
      <S.nomeCompleto>{nomeCompleto}</S.nomeCompleto>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="tipo" tipo={tipo}>
        {tipo}
      </S.Tag>
      <S.Telefone value={telefone} />
      <S.Email value={email} />
      <S.BarraAcoes>
        {estaEditado ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditado(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditado(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
