import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {IoSpeedometer, IoPerson, IoHeart, IoNotifications, IoLogOutOutline, IoChatboxEllipses, IoHome, IoLaptopOutline, IoCalendar, IoOptions } from 'react-icons/io5';

const UlAdm = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding:2px 10px;
    font-weight: 700;
  }
  .nav-item2 {
    display: none;
  }
  li a{
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-weight: 700;
    color: var(--White);
    padding: 5px 10px;
    border-radius: 6px;
    margin-left: -15px;
  }
  li a svg {
    margin-bottom: 2px;
    font-size: 16px;
  }
  li a p {
    font-size: 14px;
    font-weight: 600;
  }
  li a:hover{
    padding: 5px 10px;
    color: var(--White);
    background-color: var(--Primary);
  }
  button {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    background: rgba(170,0,0);
    border-radius: 6px;
    margin: 5px 0;
    color: var(--White);
    border: none;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;

  }

  button:hover{
    background-color: var(--ButtonHover);
    color: var(--White);
  }
  .btn {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    background-color: var(--Yellow);
    border-radius: 6px;
    margin: 5px 0;
    color: var(--White);
    border: none;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;

  }

  btn:hover{
    background-color: var(--Blue);
  }


  @media (max-width: 900px) {
    flex-flow: column nowrap;
    background: rgba(170,0,0, 0.9);
    backdrop-filter: blur(4px);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li a{
      width: 80%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      text-decoration: none;
      font-weight: 700;
      color: var(--White);
      padding: 10px 20px;
      border-radius: 6px;
      margin: 5px;
    }
    li a svg {
      margin-right: 10px;
    }
    li a:hover {
      width: 80%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      text-decoration: none;
      font-weight: 700;
      color: var(--White);
      padding: 10px 20px;
      background-color: var(--Primary);
      border-radius: 6px;
      margin: 5px;
    }


    button{
      display: block;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-color: var(--White);
      color: var(--Primary);
      margin-left: 10px;
      margin-right: 10px;
      padding: 10px 0;
    }
    button svg {
      margin-right: 1px;
    }

    button:hover{
      background-color: var(--ButtonHover);
    }
    .btn{
      display: block;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-color:  var(--Secondary);
      margin-left: 10px;
      margin-right: 10px;
      padding: 10px 0;
    }
    .btn svg {
      margin-right: 1px;
    }

    .btn:hover{
      background-color: var(--Blue);
    }

    @media (max-width: 700px) {
      .nav-item2 {
        display: block;
        margin-left: 23px;
        width: 100%;
      }
    }
  }

  }
`;

function HandleOpen(e) {
  e.preventDefault();
}
const RightNav2 = ({ open }) => {
  return (
    <UlAdm open={open}>

       <li className='nav-item'>
            <Link to='/home'>
           <IoSpeedometer /> <p>Painel</p> 
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/imoveis' >
           <IoHome /> <p>Imóveis</p>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/chat' >
           <IoChatboxEllipses /> <p>Chat</p> 
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/agendamentos' >
           <IoCalendar /> <p>Agenda</p> 
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/notificacoes' >
            <IoNotifications /> <p>Alertas</p> 
            </Link>
          </li> 
          <li className='nav-item'>
            <Link to='/minhaconta' >
           <IoPerson /> <p>Perfil</p> 
            </Link>
          </li> 
          <li className='nav-item2'>
            <Link to='/web' >
           <IoLaptopOutline /> <p>Site/App</p> 
            </Link>
          </li> 
          <li className='nav-item2'>
            <Link to='/menu' >
           <IoOptions /> <p>Mais opções</p> 
            </Link>
          </li> 
          <div className="account">
        <button onClick={HandleOpen}><IoLogOutOutline />Sair</button>
      </div>       
    </UlAdm>
  )
}

export default RightNav2
