import ViewList from './pages/viewList'
import Form from './pages/form'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      <div className='app-wrapper'>
        <Header title='Todo List' description='A simple todo list application built with React and TypeScript' />
        
          <Routes>
            <Route index element={<ViewList />} />
            <Route path='/form' element={<Form />} />
            <Route path='/viewList' element={<ViewList />} />
          </Routes>
       </div>
    </>
  )
}

export default App
