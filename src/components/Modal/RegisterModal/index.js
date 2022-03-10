/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Step,
  StepLabel,
  Stepper,
} from '@material-ui/core';
import { Content } from './styles';
import RegisterForm from './RegisterForm';
import PriceContent from '../PriceModal/PriceContent';

function getSteps() {
  return ['Informe seus dados para cadastro', 'Assinatura'];
}

export default function RegisterModal({ Component }) {
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveStep(0);
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <RegisterForm callback={handleNext} />;
      case 1:
        return <PriceContent />;
      default:
        return <RegisterForm callback={handleNext} />;
    }
  }

  return (
    <>
      <div onClick={handleClickOpen}>
        {Component}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Cadastro no GERENCIFY</DialogTitle>
        <DialogContent>
          <Content>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {getStepContent(activeStep)}
          </Content>
        </DialogContent>
      </Dialog>
    </>
  );
}

// PriceModal.propTypes = {
//   capitalData: PropTypes.shape({
//     capitalDate: PropTypes.any,
//   }).isRequired,
//   reloadCallback: PropTypes.func.isRequired,
// };
