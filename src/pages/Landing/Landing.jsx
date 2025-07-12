import React from 'react';
import './Landing.css';
import TitleLogo from '../../components/landing/TitleLogo';
import LandingIntro from '../../components/landing/LandingIntro';
import LandingShoreButton from '../../components/landing/LandingShoreButton';
import LandingAuthButtons from '../../components/landing/LandingAuthButtons';
import HorizontalRule from '../../components/landing/HorizontalRule';

const Landing = () => {
  return (
    <div className="landing flex column space-evenly">
      <TitleLogo />
      <LandingIntro />
      <LandingShoreButton />
      <HorizontalRule />
      <LandingAuthButtons />
    </div>
  )
}

export default Landing;