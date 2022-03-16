import React, { useState } from 'react';
import { Navigation } from 'react-minimal-side-navigation';
import {
  FbIcon,
  InstaIcon,
  MenuIcon,
  PhoneIcon,
} from '../../../Icons/FontAwsome';
import logoTransparent from '../../../../assets/logoTransparent.png';
import TreatmentsArray from '../../../../utils/TreatmentsArray';
import {
  HeaderContainer,
} from '../styles';
import { ContactInformation, HeaderContentMobile, SidebarContent } from './styles';
import { history } from '../../../../routes';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

const Mobile = props => {
  console.log(props);

  const [sidebarIsVisible, setSidebarIsVisible] = useState(false);

  return (
    <>
      <HeaderContainer mobile>
        <HeaderContentMobile reducedSize>
          <div onClick={() => setSidebarIsVisible(!sidebarIsVisible)}>
            <MenuIcon size={1.5} />
          </div>
          <div>
            <img src={logoTransparent} alt="Logo Quantify" />
          </div>
          <div />
        </HeaderContentMobile>
      </HeaderContainer>
      <SidebarContent visible={sidebarIsVisible}>
        <Navigation
          activeItemId="/management/members"
          onSelect={({ itemId }) => {
            if (itemId !== '/tratamentos' && itemId !== '/institucional') {
              console.log(itemId);
              setSidebarIsVisible(false);
              history.push(itemId);
            }
          }}
          items={[
            {
              title: 'Home',
              itemId: '/',
            },
            {
              title: 'Institucional',
              itemId: '/institucional',
              subNav: [
                {
                  title: 'Sobre a Dra Francini Pereira',
                  itemId: '/sobre',
                },
                {
                  title: 'Francini Pereira Biomedicina Estética',
                  itemId: '/clinica',
                },
              ],
            },
            {
              title: 'Tratamentos',
              itemId: '/tratamentos',
              subNav: TreatmentsArray.map(treatments => ({
                title: treatments.label,
                itemId: `/tratamentos/${treatments.key}`,
              })),
            },
            {
              title: 'Contato',
              itemId: '/contato',
            },
          ]}
        />
        <ContactInformation>
          <div>
            <PhoneIcon size={0.75} />
            <span>(51) 99826-7185</span>
          </div>
          <div>
            Segunda à Sexta das 8:30h às 19h
          </div>
          <div>
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
            >
              <FbIcon size={2.5} />
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
            >
              <InstaIcon size={2.7} />
            </a>
          </div>
        </ContactInformation>
      </SidebarContent>
    </>
  );
};

export default Mobile;
