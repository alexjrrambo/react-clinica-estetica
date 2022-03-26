import {
  Divider,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';

import TreatmentsArray from '../../utils/TreatmentsArray';
import {
  ContentLeft,
  ContentRight,
  InformationContent,
  LinkStyled,
  MainContainer,
} from './styles';

const defaultState = {
  key: '',
  label: '',
  description: '',
  image: '',
};

const Treatments = props => {
  const [treatment, setTreatment] = useState(defaultState);

  useEffect(() => {
    const treatmentFiltered = TreatmentsArray.filter(treatmentData => treatmentData.key === props.match.params.treatment);

    if (treatmentFiltered.length > 0) {
      setTreatment(treatmentFiltered[0]);
    }
  }, [props]);

  return (
    <MainContainer>
      <ContentLeft>
        <Paper sx={{ width: 250, maxWidth: '100%' }}>
          <MenuList>
            {TreatmentsArray.map((treatments, index) => (
              <div key={treatments.key}>
                <LinkStyled to={`/tratamentos/${treatments.key}`}>
                  <MenuItem>
                    <ListItemText>{treatments.label}</ListItemText>
                  </MenuItem>
                </LinkStyled>
                {TreatmentsArray.length !== index + 1 && <Divider />}
              </div>
            ))}
          </MenuList>
        </Paper>
      </ContentLeft>
      <ContentRight>
        <InformationContent>
          <h1>{treatment.label}</h1>
          <p>
            {parse(treatment.description)}
          </p>
        </InformationContent>
        <div>
          <img src={treatment.image} alt="" />
        </div>
      </ContentRight>
    </MainContainer>
  );
};

export default Treatments;
