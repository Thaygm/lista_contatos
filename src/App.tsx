import { Provider } from 'react-redux'
import BarraLateral from './container/BarraLateral'
import ListaContatos from './container/ListaContatos'
import EstiloGlobal, { Container } from './styles'
import store from './stores'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaContatos />
      </Container>
    </Provider>
  )
}

export default App
