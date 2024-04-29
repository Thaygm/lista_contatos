import { useEffect, useState } from 'react'
import * as S from './styles'
import { remover, editar } from '../../stores/reducers/contatos'
import { useDispatch } from 'react-redux'
import ContatoClass from '../../models/contatos'

type ContatoProps = ContatoClass

const Contato = ({
  nomeCompleto,
  prioridade,
  telefone: telefoneOriginal,
  email: emailOriginal,
  tipo,
  id
}: ContatoProps) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    setTelefone(telefoneOriginal)
    setEmail(emailOriginal)
  }, [telefoneOriginal, emailOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setTelefone(telefoneOriginal)
    setEmail(emailOriginal)
  }

  return (
    <S.Card>
      <S.nomeCompleto>{nomeCompleto}</S.nomeCompleto>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="tipo" tipo={tipo}>
        {tipo}
      </S.Tag>
      <S.Telefone
        disabled={!estaEditando}
        value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
      />
      <S.Email
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nomeCompleto,
                    prioridade,
                    telefone,
                    email,
                    tipo,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
