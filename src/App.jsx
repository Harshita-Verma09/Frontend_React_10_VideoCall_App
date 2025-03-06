import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import VideoPage from './components/VideoPage';
import HomePage from './components/HomePage';
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/room/:id",
      element:<VideoPage/>
    }
  ])


  return (
    <>
      <div style={{margin:"4rem" , padding:"3rem"}}>
          <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
