import React from 'react'

import styled from 'styled-components'

import { IoLibrary } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Playlists from './Playlists';

const Sidebar = () => {
  return (
    <Container>
      <div className='top_links'>
        <div className='logo'>
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="" />
        </div>
        <ul>
            
        <li className='flex items-center space-x-4'>
        <IoLibrary color='white' size={20}/>
            <span>Home</span>
        </li>
        <li className='flex items-center space-x-4'>
        <FaHome color='white' size={20}/>
            <span>Search</span>
        </li>
        <li  className='flex items-center space-x-4'>
        <FaSearch  color='white'  size={20}/>
            <span>Your Library</span>
        </li>
        </ul>
      </div>
      <Playlists />
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
background-color:black;
color:#b3b3b3;
display:flex;
flex-direction:column;
height:100%;
width:100%;
.top_links{
    display:flex;
    flex-direction:column;
    .logo{
        text-align:center;
        margin:1rem 0;
        img
        {
            max-inline-size:80%;
            block-size:auto;
            margin-left:10px;
        }
    }
    ul{
        display:flex;
        flex-direction:column;
        gap:1rem;
        padding:1rem;
        marfin-left:10px;
        cursor:pointer;
        li{

            &:hover{
                color:white;
            }
        }
    }
}

`