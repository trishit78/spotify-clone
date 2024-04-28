import React, { useEffect, useState } from 'react' 

import styled from 'styled-components'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import Body from '../Body'
import Footer from '../Footer'
import { useStateProvider } from '../../utils/StateProvider'
import axios from 'axios'
import { reducerCases } from '../../utils/Constants'
const Spotify = () => {


    const [name,setName]=useState('');
   const [{token},dispatch]= useStateProvider();
    useEffect(()=>{
        const getUserInfo = async ()=>{
            const { data } = await axios.get("https://api.spotify.com/v1/me", {
                headers: {
                  Authorization: "Bearer " + token,
                  "Content-Type": "application/json",
                },
            });
            console.log(data.display_name)
            setName(data.display_name)
            
            const userInfo = {
                userId:data.id,
                userName:data.display_name,
            };
            dispatch({type:reducerCases.SET_USER,userInfo});
        }
            getUserInfo();
    },[token,dispatch]);

console.log(name)

  return (
    <Container>
        <div className='spotify_body'>
            <Sidebar />
            <div className='body'>
                <Navbar name={name} />
                <div className='body_contents'>
                    <Body />
                </div>
            </div>
        </div>
        <div className='spotify_footer'>
            <Footer />
        </div>
    </Container>
  )
}

export default Spotify


const Container = styled.div`

    max-width:100vw;
    max-height:100vh;
    overflow:hidden;
    display:grid;
    grid-template-rows:85vh 15vh;
    .spotify_body{
        display:grid;
        grid-template-columns:15vw 85vw;
        height:100%;
        width:100%;
        background:linear-gradient(transparent,rgba(0,0,0,1));
        background-color:rgb(32,87,100);
        .body{
            height:100%;
            width:100%;
            overflow:auto;
        }

    }

`