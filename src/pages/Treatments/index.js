import {
  Divider,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';

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
        <h1>Tratamentos</h1>
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
        <img src={treatment.image} alt="" />
        <InformationContent>
          <h4>{treatment.label}</h4>
          <p>
            {treatment.description}
          </p>
        </InformationContent>
      </ContentRight>
    </MainContainer>
  );
};

export default Treatments;
