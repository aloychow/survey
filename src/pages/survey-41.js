import Head from 'next/head'
import styled from 'styled-components'
import Link from "next/link";

import * as React from 'react';
import { useRouter } from "next/router";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;
  color: #000000;
  background: #F3F8FE;
  
  justify-content: center;
  align-items: center;
  
  padding: 8rem 1.5rem;
  `
const SubContainer = styled.div`
  width: 100%;
  // max-width: 20rem;
  
  justify-content: left;
  align-items: left;
  
`;

const QuestionContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 1rem;
  margin: 2rem 0;
`;

const ContentText = styled.div`
  color: #000000;
  font-size: 1.125rem;
  font-weight: 400;
  text-align: left;
  
  padding: 0rem 0 1rem 0;
  margin-top: 1rem;
`;

const ImageIcon = styled.div`
    padding: 2rem;
    padding-left: 0;

`;

const labels = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}



export default function Survey1() {
  
  const [hover, setHover] = React.useState(-1);

  const [ARQuestion1, setARQuestion1] = React.useState("");
  const [ARQuestion2, setARQuestion2] = React.useState("");
  const [ARQuestion3, setARQuestion3] = React.useState("");
  const [ARQuestion4, setARQuestion4] = React.useState("");
  
  const [ARQuestion5, setARQuestion5] = React.useState(0);
  
  const [ARQuestion6, setARQuestion6] = React.useState("");
  
  const [correct, setCorrect] = React.useState(false);
  
  const [data, setData] = React.useState([]);
  
  const handleQ1 = (value) => {
    setARQuestion1(value);
  }
  
  const handleQ2 = (value) => {
    setARQuestion2(value);
  }
  
  const handleQ3 = (value) => {
    setARQuestion3(value);
  }
  
  const handleQ4 = (value) => {
    setARQuestion4(value);
  }
  
  const handleQ5 = (value) => {
    setARQuestion5(value);
  }
  
  const handleQ6 = (event) => {
    setARQuestion6(event.target.value);
  }
  
  React.useEffect(() => {
    if (
      ARQuestion1 != "" & 
      ARQuestion2 != "" &
      ARQuestion3 != "" & 
      ARQuestion4 != "" & 
      ARQuestion5 != 0
    ) {
   
      setCorrect(true);
      
      const tempArr = [];
      for (let i = 0; i < 14; i++) {
        tempArr.push(oldData[i]);
      }
      tempArr.push(String(ARQuestion1), String(ARQuestion2), String(ARQuestion3), String(ARQuestion4), String(ARQuestion5), String(ARQuestion6))
      setData(tempArr);

    }
  }, [ARQuestion1, ARQuestion2, ARQuestion3, ARQuestion4, ARQuestion5, ARQuestion6, correct])
  
  React.useEffect(() => {
    // console.log(data);
  }, data)
  
  const router = useRouter();
  const oldData = router.query;
  
  
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <SubContainer>
          <h1 style={{ fontSize: "1.5rem", paddingBottom: "1rem"}}>Product Scenario (AR)</h1>

          <ContentText>Below, you will find a link to an augmented reality Instagram filter where you can test out the phone design yourself. After trying out the augmented reality filter, you may answer the following questions.</ContentText>

          <ContentText>Please review the phone design.</ContentText>
          
          <ContentText><b>First, face your phone camera away from you. Locate a flat surface and tap the screen. This will initialise a floating phone for you to view in Augmented Reality.</b></ContentText>

          <ContentText>
            <Link style={{textDecoration:"underline", color:"red"}} href="https://www.instagram.com/ar/785498479675956/" rel="noopener noreferrer" target="_blank">
              Augmented Reality Phone Link
            </Link>
          </ContentText>


          <QuestionContainer>
            <ContentText>The design of the phone appeals to me.</ContentText>
            
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="age"
              >
                <FormControlLabel value="5" control={<Radio />} label="Strongly Agree" onClick={()=>handleQ1(5)}/>
                <FormControlLabel value="4" control={<Radio />} label="Agree" onClick={()=>handleQ1(4)}/>
                <FormControlLabel value="3" control={<Radio />} label="Neither Agree nor Disagree" onClick={()=>handleQ1(3)}/>
                <FormControlLabel value="2" control={<Radio />} label="Disagree" onClick={()=>handleQ1(2)}/>
                <FormControlLabel value="1" control={<Radio />} label="Strongly Disagree" onClick={()=>handleQ1(1)}/>
              </RadioGroup>
            </FormControl>
          </QuestionContainer>
          
          <QuestionContainer>
            <ContentText>The phone stands out from the other brands available in the market.</ContentText>
            
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="age"
              >
                <FormControlLabel value="5" control={<Radio />} label="Strongly Agree" onClick={()=>handleQ2(5)}/>
                <FormControlLabel value="4" control={<Radio />} label="Agree" onClick={()=>handleQ2(4)}/>
                <FormControlLabel value="3" control={<Radio />} label="Neither Agree nor Disagree" onClick={()=>handleQ2(3)}/>
                <FormControlLabel value="2" control={<Radio />} label="Disagree" onClick={()=>handleQ2(2)}/>
                <FormControlLabel value="1" control={<Radio />} label="Strongly Disagree" onClick={()=>handleQ2(1)}/>
              </RadioGroup>
            </FormControl>
          </QuestionContainer>

          <QuestionContainer>
            <ContentText>Based on the image, the quality of the phone is good.</ContentText>
            
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="age"
              >
                <FormControlLabel value="5" control={<Radio />} label="Strongly Agree" onClick={()=>handleQ3(5)}/>
                <FormControlLabel value="4" control={<Radio />} label="Agree" onClick={()=>handleQ3(4)}/>
                <FormControlLabel value="3" control={<Radio />} label="Neither Agree nor Disagree" onClick={()=>handleQ3(3)}/>
                <FormControlLabel value="2" control={<Radio />} label="Disagree" onClick={()=>handleQ3(2)}/>
                <FormControlLabel value="1" control={<Radio />} label="Strongly Disagree" onClick={()=>handleQ3(1)}/>
              </RadioGroup>
            </FormControl>
          </QuestionContainer>
          
          <QuestionContainer>
            <ContentText>I would buy the phone if it were available in the market.</ContentText>
            
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="age"
              >
                <FormControlLabel value="5" control={<Radio />} label="Strongly Agree" onClick={()=>handleQ4(5)}/>
                <FormControlLabel value="4" control={<Radio />} label="Agree" onClick={()=>handleQ4(4)}/>
                <FormControlLabel value="3" control={<Radio />} label="Neither Agree nor Disagree" onClick={()=>handleQ4(3)}/>
                <FormControlLabel value="2" control={<Radio />} label="Disagree" onClick={()=>handleQ4(2)}/>
                <FormControlLabel value="1" control={<Radio />} label="Strongly Disagree" onClick={()=>handleQ4(1)}/>
              </RadioGroup>
            </FormControl>
          </QuestionContainer>
          
          <QuestionContainer>
            <ContentText>
              On a scale of 1 - 10, how useful are the provided visualisations in
              helping you to answer the above 4 questions? For example, does the 
              visualisations provide enough information in helping you decide whether 
              you should buy it (irregardless of whether yes or no)?
            </ContentText>


            <Box
              sx={{
                width: 350,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={ARQuestion5}
                max={10}
                size="large"
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  handleQ5(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {ARQuestion5 !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : ARQuestion5]}</Box>
              )}
            </Box>
          </QuestionContainer>

          <QuestionContainer>
            <ContentText>Comments (Optional)</ContentText>

            <TextField
              id="outlined-multiline-static"
              label="E.g. The phone is nice, but not my style."
              multiline
              rows={4}
              fullWidth
              onChange={(event)=>handleQ6(event)}
            />
          </QuestionContainer>

          <br />
          <br />

          { 
          correct 
          ?
          <Link style={{ textDecoration: "none" }}
            href={{
              pathname: "survey-51",
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
        </SubContainer>
      </MainContainer>
    </>
  );
}
