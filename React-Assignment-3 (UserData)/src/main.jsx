import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Title from './components/Title'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserCard from './components/UserCard';

createRoot(document.getElementById('root')).render(
 <div className="container ">
  <Title />  
  <UserCard />
 </div>
)
