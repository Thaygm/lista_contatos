import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/contatos'
import * as enums from '../../utils/enums/Contato'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: [
    new Contato(
      'Renato Alves',
      '61 99999-1234',
      'renato@gmail.com',
      enums.Prioridade.FAVORITOS,
      enums.Tipo.FAMILIA,
      1
    ),
    new Contato(
      'Luiz Mendes',
      '61 99999-9876',
      'luiz@hotmail.com',
      enums.Prioridade.NORMAL,
      enums.Tipo.AMIGOS,
      2
    ),
    new Contato(
      'Solange Giani',
      '61 99999-6543',
      'solange@gmail.com',
      enums.Prioridade.FAVORITOS,
      enums.Tipo.TRABALHO,
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const { remover } = contatosSlice.actions
export default contatosSlice.reducer
