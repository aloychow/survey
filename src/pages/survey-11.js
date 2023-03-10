import Head from 'next/head'
import styled from 'styled-components'
import Link from "next/link";

import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  color: #000000;
  background: #F3F8FE;
  
  justify-content: center;
  align-items: center;
  
  padding: 8rem 3rem;
`

const ContentText = styled.div`
  color: #000000;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  
  padding: 1rem 0;
  margin-top: 2rem;
`;


export default function Survey1() {
  
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  
  const [correct, setCorrect] = React.useState(false);
  
  const [data, setData] = React.useState([]);
  
  
  const handleAge = (event) => {
    setAge(event.target.value);
  }
  
  const handleGender = (event) => {
    setGender(event.target.value);
  }
  
  React.useEffect(() => {
    if (age != "" & gender != "") {
      setData([age, gender])
      setCorrect(true);
    }
  }, [age, gender, correct])
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <MainContainer>
        <h1 style={{fontSize:"1.5rem", textAlign:"center"}}>General Questions</h1>
        <ContentText>1. How old are you?</ContentText>

        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="age"
          >
            <FormControlLabel value="<18" control={<Radio />} label="Under 18" onClick={(event)=>handleAge(event)}/>
            <FormControlLabel value="18-24" control={<Radio />} label="18 - 24" onClick={(event)=>handleAge(event)}/>
            <FormControlLabel value="25-34" control={<Radio />} label="25 - 34" onClick={(event)=>handleAge(event)}/>
            <FormControlLabel value="35-44" control={<Radio />} label="35 - 44" onClick={(event)=>handleAge(event)}/>
            <FormControlLabel value="45-54" control={<Radio />} label="45 - 54" onClick={(event)=>handleAge(event)}/>
            <FormControlLabel value="55-64" control={<Radio />} label="55 - 64" onClick={(event)=>handleAge(event)}/>
            <FormControlLabel value=">65" control={<Radio />} label="65 and over" onClick={(event)=>handleAge(event)}/>
          </RadioGroup>
        </FormControl>
        
        <ContentText>2. What is your gender?</ContentText>
        
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="gender"
          >
            <FormControlLabel value="M" control={<Radio />} label="Male" onClick={(event)=>handleGender(event)}/>
            <FormControlLabel value="F" control={<Radio />} label="Female" onClick={(event)=>handleGender(event)}/>
            <FormControlLabel value="O" control={<Radio />} label="Other" onClick={(event)=>handleGender(event)}/>
          </RadioGroup>
        </FormControl>
        
        <br />
        <br />
        
        { 
          correct 
          ?
          <Link style={{ textDecoration: "none" }}
            href={{
              pathname: "survey-21",
              query: data, // the data
            }}
        
          >
            <Button variant="contained" endIcon={<ArrowForwardIcon />}>
              Next
            </Button>
          </Link>
          :
          <Button disabled variant="contained" onClick={()=>handleClick()} endIcon={<ArrowForwardIcon />}>
            Next
          </Button>
        }
 
      </MainContainer>
    </>
  )
}
