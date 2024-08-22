import React from 'react'
import PageAllCrypto from './component/PageAllCrypto'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import YourFavorite from './component/YourFavorite';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='' element={<PageAllCrypto />}>
            <Route index element={<YourFavorite />}></Route>
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
