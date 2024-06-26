import React, { useEffect, useState } from 'react';
import { Navigation } from 'react-minimal-side-navigation';
import {
  FbIcon,
  InstaIcon,
  MenuIcon,
} from '../../../Icons/FontAwsome';
import logoTransparent from '../../../../assets/logo-mobile.png';
import TreatmentsArray from '../../../../utils/TreatmentsArray';
import {
  HeaderContainer,
} from '../styles';
import { ContactInformation, HeaderContentMobile, SidebarContent } from './styles';
import { history } from '../../../../routes';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { facebookLink, instagramLink, whatsAppLink } from '../../../../utils/SocialMediaLinks';

const Mobile = () => {
  const [sidebarIsVisible, setSidebarIsVisible] = useState(false);

  useEffect(() => {
    const onOutsideClick = e => {
      if (!document.getElementById('sidebar-content').contains(e.target) && !(e.target instanceof SVGElement) && sidebarIsVisible) {
        setSidebarIsVisible(false);
      }
    };

    window.removeEventListener('click', onOutsideClick);
    window.addEventListener('click', onOutsideClick);

    return () => window.removeEventListener('click', onOutsideClick);
  }, [sidebarIsVisible]);

  return (
    <>
      <HeaderContainer mobile>
        <HeaderContentMobile reducedSize>
          <div onClick={() => setSidebarIsVisible(!sidebarIsVisible)}>
            <MenuIcon size={1.5} />
          </div>
          <div>
            <img src={logoTransparent} alt="Logo clinica" />
          </div>
          <div />
        </HeaderContentMobile>
      </HeaderContainer>
      <SidebarContent id="sidebar-content" visible={sidebarIsVisible}>
        <Navigation
          activeItemId="/management/members"
          onSelect={({ itemId }) => {
            if (itemId !== '/tratamentos' && itemId !== '/institucional') {
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
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noreferrer"
            >
              <span>(51) 99826-7185</span>
            </a>
          </div>
          <div>
            Segunda à Sexta das 8:30h às 19h
          </div>
          <div>
            <a
              href={facebookLink}
              target="_blank"
              rel="noreferrer"
            >
              <FbIcon size={2.5} />
            </a>
            <a
              href={instagramLink}
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
