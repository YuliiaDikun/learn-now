import React from 'react'
import SocialMedia from '../SocialMedia/SocialMedia';
import Logo from '../Logo/Logo';
import { StyledFooter, StyledP } from './Footer.styled';
const Footer = () => {
  return (
    <StyledFooter>
      <Logo/>
      <div>
        <StyledP>Follow us in social media:</StyledP>
        <SocialMedia/>
      </div>
    </StyledFooter>
  )
}

export default Footer