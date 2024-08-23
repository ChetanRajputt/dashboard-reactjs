import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar/SideBar'
import Main from './components/Main/Main'
import ProfileDropdown from './components/ProfileDropdown/ProfileDropdown'

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='flex w-full'>
      <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Main />
      <div className='fixed right-1 lg:right-5 top-2 lg:top-5'>
      <ProfileDropdown isSidebarOpen={isSidebarOpen}/>
      </div>
    </div>
  )
}

export default App
