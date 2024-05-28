import React from 'react'
import styled from 'styled-components'

function NavBar() {
  return (
    <>
        <NavContainer>
            <h2>NavBar <span>Responsive</span></h2>
        </NavContainer>
    </>
    
  )
}

export default NavBar

const  NavContainer = styled.nav`
    h2{
        font-weight: 400;
        span{
            font-weight:bold;
        }
    }
    padding: .4rem;
    background-color: #333;
    display: flex;
`

