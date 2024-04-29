import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Contato'

type TagProps = {
  prioridade?: enums.Prioridade
  tipo?: enums.Tipo
  parametro: 'tipo' | 'prioridade'
}

function retornaCordeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.FAVORITOS) return variaveis.rosa
    if (props.prioridade === enums.Prioridade.NORMAL) return variaveis.cinza
  } else {
    if (props.tipo === enums.Tipo.AMIGOS) return variaveis.azul
    if (props.tipo === enums.Tipo.TRABALHO) return variaveis.verde
    if (props.tipo === enums.Tipo.TODOS) return variaveis.amarelo
    if (props.tipo === enums.Tipo.FAMILIA) return variaveis.vermelho
  }

  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const nomeCompleto = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCordeFundo(props)};
  border-radius: 8px;
  margin-right: 8px;
  display: inline-block;
`

export const Telefone = styled.input`
  color: #666666;
  font-size: 14px;
  line-height: 20px;
  font-family: 'Roboto Mono', monospace;
  width: 100%;
  margin-bottom: 8px;
  margin-top: 8px;
  resize: none;
  border: none;
  background-color: transparent;
`
export const Email = styled.input`
  color: #666666;
  font-size: 14px;
  line-height: 20px;
  font-family: 'Roboto Mono', monospace;
  width: 100%;
  margin-bottom: 8px;
  margin-top: 8px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
border - top: 1px solid #a1a1a1;
padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
