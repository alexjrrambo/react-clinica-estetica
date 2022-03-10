import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import ApexCharts from 'apexcharts';

// import DateTimeUtil from '../../../../utils/DateTimeUtil';

import { Typography } from '@material-ui/core';
import {
  Content,
  FiltroButton,
  FiltroContent,
  FiltroRow,
  FiltroToolbar,
  NotFountContent,
} from '../../styles';

import { InputText } from '../../../Input';
import Loading from '../../../Loading';
import {
  FilterIcon,
  InfoIcon,
  LeftIcon,
  SearchIcon,
} from '../../../Icons/FontAwsome';

const Line = ({ title, hoverDescription, dataRequest }) => {
  const [filters, setFilters] = useState({
    visible: false,
    year: new Date().getFullYear(),
  });

  const [registers, setRegisters] = useState(0);

  const [loading, setLoading] = useState(false);

  const [chart, setChart] = useState({
    options: {
      chart: {
        id: 'line',
        shadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 1,
        },
        toolbar: {
          show: false,
        },
      },
      // colors: ['#77B6EA', '#545454'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      markers: {
        size: 6,
      },
      xaxis: {
        categories: [
          'Jan',
          'Fev',
          'Mar',
          'Abr',
          'Mai',
          'Jun',
          'Jul',
          'Ago',
          'Set',
          'Out',
          'Nov',
          'Dez',
        ],
        title: {
          text: 'Meses',
        },
      },
      yaxis: {
        title: {
          text: 'Valor',
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
    series: [
      {
        name: hoverDescription,
        data: [],
      },
    ],
  });

  const buscaDados = async () => {
    setLoading(true);

    // Requisição com os filters para funcao indicada por props
    const { year } = filters;
    const { values, registers: newRegisters } = await dataRequest(year);

    // Setando categorias e series do grafico
    setChart({
      ...chart,
      series: [
        {
          name: hoverDescription,
          data: values,
        },
      ],
    });

    setRegisters(newRegisters);
    setLoading(false);
  };

  useEffect(() => {
    buscaDados();
  }, []);

  useEffect(() => () => {
    if (chart.registers > 0) {
      ApexCharts.exec('line', 'updateSeries', chart.series);
      ApexCharts.exec('line', 'updateOptions', chart.options, false, true, true);
    }
  }, [chart.series, chart.options]);

  const aplicaFiltro = async () => {
    await buscaDados();

    setFilters({ ...filters, visible: !filters.visible });
  };

  const visibilidadeFiltro = async () => {
    const { visible } = filters;

    setFilters({ ...filters, visible: !visible });
  };

  return (
    <Content>
      <Typography component="h2">{title}</Typography>

      {loading ? (
        <Loading />
      ) : (
        <div>
          <FiltroToolbar>
            <FiltroButton onClick={visibilidadeFiltro}>
              {filters.visible ? <LeftIcon /> : <FilterIcon />}
            </FiltroButton>
            {filters.visible && (
            <FiltroContent>
              <FiltroRow>
                <InputText
                  label="Ano"
                  value={filters.year}
                  onChange={e => setFilters({
                    ...filters,
                    year: e.target.value,
                  })}
                  placeholder="Selecione o ano"
                />
              </FiltroRow>
              <FiltroButton onClick={aplicaFiltro}>
                <SearchIcon />
              </FiltroButton>
            </FiltroContent>
            )}
          </FiltroToolbar>

          {registers > 0 ? (
            <Chart
              options={chart.options}
              series={chart.series}
              type="line"
              height={320}
            />
          ) : (
            <NotFountContent>
              <InfoIcon size={2.5} />
              <span>Sem resultados</span>
            </NotFountContent>
          )}
          <p>
            Resultados para
            {' '}
            {filters.year}
          </p>
        </div>
      )}
    </Content>
  );
};

export default Line;
