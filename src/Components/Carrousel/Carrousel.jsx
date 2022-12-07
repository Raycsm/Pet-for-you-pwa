import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './Carrousel.css'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/banner_cat.jpg?alt=media&token=a2b6fbfe-613e-4ba3-8839-199cf4bd7d1f',
  },
  {
    imgPath:
      'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/banner_dog.jpg?alt=media&token=968d8cd3-08c8-49ca-8db6-22382f237208',
  },

];

function Carrousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{maxWidth:550, marginTop:3, textAlign:'center'}} className="box">
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 250,
                  maxWidth:650,
                  width: '100%',  
                }}
                src={step.imgPath}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={{justifyContent:'center'}}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
      />
    </Box>
  );
}

export default Carrousel;