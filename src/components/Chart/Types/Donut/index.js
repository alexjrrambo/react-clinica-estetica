import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import ApexCharts from 'apexcharts';

// import DateTimeUtil from '../../../../utils/DateTimeUtil';

import { Typography } from '@material-ui/core';
import {
  Content,
  FiltroButton,
  FiltroContent,
  FiltroInputDate,
  FiltroRow,
  FiltroToolbar,
  NotFountContent,
} from '../../styles';

import Loading from '../../../Loading';
import {
  FilterIcon,
  InfoIcon,
  LeftIcon,
  SearchIcon,
} from '../../../Icons/FontAwsome';

const Donut = ({ title, dataRequest }) => {
  const [chart, setChart] = useState({
    series: [],
    options: {
      chart: {
        id: 'donut',
        type: 'donut',
        height: 350,
      },
      labels: ['Vitórias %', 'Derrotas %'],
      colors: ['#2CAC40', '#DB4931'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      }],
    },
    filters: {
      visible: false,
      dateFrom: '',
      dateTo: '',
    },
    loading: true,
    registers: 0,
  });
  const [loading, setLoading] = useState(false);

  const buscaDados = async () => {
    setLoading(true);

    // Requisição com os filters para funcao indicada por props
    const { dateFrom, dateTo } = chart.filters;

    const { values, registers } = await dataRequest(
      dateFrom[0],
      dateTo[0],
    );

    // Setando categorias e series do grafico
    setChart({
      ...chart,
      series: values,
      registers,
    });

    setLoading(false);
  };

  useEffect(() => {
    buscaDados();
  }, []);

  useEffect(() => () => {
    if (chart.registers > 0) {
      ApexCharts.exec('donut', 'updateSeries', chart.series);
      // ApexCharts.exec('donut', 'updateOptions', chart.options, false, true, true);
    }
  }, [chart.series, chart.options]);

  const aplicaFiltro = async () => {
    await buscaDados();

    setChart({ ...chart, filters: { ...chart.filters, visible: false } });
  };

  const visibilidadeFiltro = async () => {
    const { filters } = chart;
    filters.visible = !filters.visible;

    setChart({ ...chart, filters });
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
              {chart.filters.visible ? <LeftIcon /> : <FilterIcon />}
            </FiltroButton>
            {chart.filters.visible && (
            <FiltroContent>
              <FiltroRow>
                <FiltroInputDate
                  label="Data de"
                  value={chart.filters.dateFrom}
                  onChange={date => setChart({
                    ...chart,
                    filters: {
                      ...chart.filters,
                      dateFrom: date,
                    },
                  })}
                  placeholder="Selecionar"
                />
                <FiltroInputDate
                  label="Data até"
                  value={chart.filters.dateTo}
                  onChange={date => setChart({
                    ...chart,
                    filters: {
                      ...chart.filters,
                      dateTo: date,
                    },
                  })}
                  placeholder="Selecionar"
                />
              </FiltroRow>
              <FiltroButton onClick={aplicaFiltro}>
                <SearchIcon />
              </FiltroButton>
            </FiltroContent>
            )}
          </FiltroToolbar>

          {chart.registers > 0 ? (
            <Chart
              options={chart.options}
              series={chart.series}
              type="donut"
              height={320}
            />
          ) : (
            <NotFountContent>
              <InfoIcon size={2.5} />
              <span>Sem resultados</span>
            </NotFountContent>
          )}
        </div>
      )}
    </Content>
  );
};

export default Donut;
