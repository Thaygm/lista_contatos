import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/contatos'
import * as enums from '../../utils/enums/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      nomeCompleto: 'Renato Alves',
      telefone: '61 99999-1234',
      email: 'renato@gmail.com',
      prioridade: enums.Prioridade.FAVORITOS,
      tipo: enums.Tipo.FAMILIA
    },
    {
      id: 2,
      nomeCompleto: 'Luiz Mendes',
      telefone: '61 99999-9876',
      email: 'luiz@hotmail.com',
      prioridade: enums.Prioridade.NORMAL,
      tipo: enums.Tipo.AMIGOS
    },
    {
      id: 3,
      nomeCompleto: 'Solange Giani',
      telefone: '61 99999-6543',
      email: 'solange@gmail.com',
      prioridade: enums.Prioridade.FAVORITOS,
      tipo: enums.Tipo.TRABALHO
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    }
  }
})

export const { remover, editar } = contatosSlice.actions
export default contatosSlice.reducer
