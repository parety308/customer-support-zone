import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav/Nav'
import Banner from './Components/Banner/Banner'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import { ToastContainer } from 'react-toastify';
const fetchTickets = async () => {
  const res = await fetch('/Tickets.json');
  return res.json();
}
const ticketsPromise = fetchTickets();
function App() {
  const [InProgress, SetInProgress] = useState([])
  const handleProgress = (ticket) => {
    const newTicket = [...InProgress, ticket];
    SetInProgress(newTicket);
  }
  const removeProgress = (ticket) => {
    const remainingProgress = InProgress.filter(t => ticket.id !== t.id);
    SetInProgress(remainingProgress);
  }
  const [resolved, SetResolved] = useState([]);
  const handleResolved = (ticket) => {
    const newResolved = [...resolved, ticket];
    SetResolved(newResolved);
  }
  return (
    <div className='bg-[#FFFFFF]'>
      <Nav></Nav>
      <Banner InProgress={InProgress} resolved={resolved}></Banner>
      <Main
        ticketsPromise={ticketsPromise}
        handleProgress={handleProgress}
        InProgress={InProgress}
        removeProgress={removeProgress}
        handleResolved={handleResolved}
        resolved={resolved}
      ></Main>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  )
}

export default App
