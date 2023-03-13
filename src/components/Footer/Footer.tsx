import React from 'react'
import SocialMedia from 'components/SocialMedia/SocialMedia';
import Logo from 'components/Logo/Logo';
import { StyledFooter, StyledP } from './Footer.styled';
const Footer:React.FC = () => {
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