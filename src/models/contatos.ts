import * as enums from '../utils/enums/Contato'

class Contato {
  nomeCompleto: string
  telefone: string
  email: string
  prioridade: enums.Prioridade
  tipo: enums.Tipo
  id: number

  constructor(
    nomeCompleto: string,
    telefone: string,
    email: string,
    prioridade: enums.Prioridade,
    tipo: enums.Tipo,
    id: number
  ) {
    this.nomeCompleto = nomeCompleto
    this.prioridade = prioridade
    this.tipo = tipo
    this.telefone = telefone
    this.email = email
    this.id = id
  }
}

export default Contato
