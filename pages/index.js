import React, {useState,useEffect} from 'react';
import { useContext } from 'react';
import Image from 'next/image';
import Countdown from 'react-countdown';


////INTERNAL IMPORT
import  {VotingContext}  from '../context/voter';
import style from '../styles/index.module.css';
import Card from '../components/Card/Card';
import image from "../assets/Candidate1.jpeg";

const MyIndex = () => {
  const{ votingTitle} = useContext(VotingContext);
  return <div>{votingTitle}</div>;
  
};

export default MyIndex;
