/* eslint-disable react/prop-types */
import React from 'react';
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
  FaArrowDown,
  FaBars,
  FaChartPie,
  FaChevronLeft,
  FaExclamation,
  FaFacebook,
  FaFileInvoice,
  FaFilter,
  FaHome,
  FaInstagramSquare,
  FaMailBulk,
  FaPhone,
  FaSearch,
  FaSpinner,
} from 'react-icons/fa';

const defaultSize = 1;

export const ArrowDownNormalIcon = ({ size }) => (
  <FaArrowDown size={`${size || defaultSize}rem`} />
);

export const MailIcon = ({ size }) => (
  <FaMailBulk size={`${size || defaultSize}rem`} />
);

export const PhoneIcon = ({ size }) => (
  <FaPhone size={`${size || defaultSize}rem`} />
);

export const FbIcon = ({ size }) => (
  <FaFacebook size={`${size || defaultSize}rem`} />
);

export const InstaIcon = ({ size }) => (
  <FaInstagramSquare size={`${size || defaultSize}rem`} />
);

export const PlotsIcon = ({ size }) => (
  <FaChartPie size={`${size || defaultSize}rem`} />
);

export const HomeIcon = ({ size }) => (
  <FaHome size={`${size || defaultSize}rem`} />
);

export const OperationsIcon = ({ size }) => (
  <FaFileInvoice size={`${size || defaultSize}rem`} />
);

export const MenuIcon = ({ size }) => <FaBars size={`${size}rem`} />;

export const ArrowUpIcon = ({ size }) => (
  <FaArrowAltCircleUp size={`${size || defaultSize}rem`} />
);

export const ArrowDownIcon = ({ size }) => (
  <FaArrowAltCircleDown size={`${size || defaultSize}rem`} />
);

export const SearchIcon = ({ size }) => (
  <FaSearch size={`${size || defaultSize}rem`} />
);

export const FilterIcon = ({ size }) => (
  <FaFilter size={`${size || defaultSize}rem`} />
);

export const LeftIcon = ({ size }) => (
  <FaChevronLeft size={`${size || defaultSize}rem`} />
);

export const SpinnerIcon = ({ size }) => (
  <FaSpinner size={`${size || defaultSize}rem`} />
);

export const InfoIcon = ({ size }) => (
  <FaExclamation size={`${size || defaultSize}rem`} />
);
