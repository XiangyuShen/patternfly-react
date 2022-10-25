import React from 'react';
import { Wizard, WizardStep } from '@patternfly/react-core';

export const GetCurrentStepWizard: React.FunctionComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [step, setStep] = React.useState(1);
  const onCurrentStepChanged = ({ id }: WizardStep) => {
    if (id) {
      setStep(typeof id === 'string' ? parseInt(id) : id);
    }
  };
  const closeWizard = () => {
    // eslint-disable-next-line no-console
    console.log('close wizard');
  };

  const steps = [
    { id: 1, name: 'First step', component: <p>Step 1 content</p> },
    { id: 2, name: 'Second step', component: <p>Step 2 content</p> },
    { id: 3, name: 'Third step', component: <p>Step 3 content</p> },
    { id: 4, name: 'Fourth step', component: <p>Step 4 content</p> },
    { id: 5, name: 'Review', component: <p>Review step content</p>, nextButtonText: 'Finish' }
  ];
  const title = 'Get current step wizard';
  return (
    <Wizard
      navAriaLabel={`${title} steps`}
      mainAriaLabel={`${title} content`}
      onClose={closeWizard}
      description="Simple Wizard Description"
      steps={steps}
      height={400}
      onCurrentStepChanged={onCurrentStepChanged}
    />
  );
};
