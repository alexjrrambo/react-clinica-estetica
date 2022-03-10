import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import ApexCharts from 'apexcharts';

// import DateTimeUtil from '../../../../utils/DateTimeUtil';

import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import {
  Content,
  FiltroButton,
  FiltroContent,
  FiltroInputDate,
  FiltroRow,
  FiltroToolbar,
  NotFountContent,
} from '../../../styles';

import { InputText } from '../../../../Input';
import Loading from '../../../../Loading';
import {
  FilterIcon,
  InfoIcon,
  LeftIcon,
  SearchIcon,
} from '../../../../Icons/FontAwsome';

const Bar = ({ title, hoverDescription, dataRequest }) => {
  const { currencyType } = useSelector(state => state.user.data);
  const [chart, setChart] = useState({
    options: {
      chart: {
        id: 'teste',
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: true,
        formatter(val) {
          return `${currencyType || 'R$'} ${val}`;
        },
      },
      xaxis: {
        categories: [],
      },
    },
    series: [
      {
        name: hoverDescription,
        data: [],
      },
    ],
    filters: {
      visible: false,
      dateFrom: '',
      dateTo: '',
      limit: '',
    },
    loading: true,
    registers: 0,
  });
  const [loading, setLoading] = useState(false);

  const buscaDados = async () => {
    setLoading(true);

    // Requisição com os filters para funcao indicada por props
    const { dateFrom, dateTo, limit } = chart.filters;
    const { categories, values, registers } = await dataRequest(
      dateFrom[0],
      dateTo[0],
      limit,
    );

    // Setando categorias e series do grafico
    setChart({
      ...chart,
      options: {
        ...chart.options,
        xaxis: { ...chart.options.xaxis, categories },
      },
      series: [
        {
          name: hoverDescription,
          data: values,
        },
      ],
      registers,
      filters: { ...chart.filters, visible: false },
    });

    setLoading(false);
  };

  useEffect(() => {
    buscaDados();
  }, []);

  useEffect(() => () => {
    if (chart.registers > 0) {
      ApexCharts.exec('teste', 'updateSeries', chart.series);
      ApexCharts.exec('teste', 'updateOptions', chart.options, false, true, true);
    }
  }, [chart.series, chart.options]);

  const aplicaFiltro = async () => {
    await buscaDados();
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
              <FiltroRow>
                <InputText
                  label="Número de resultados"
                  value={chart.filters.limit}
                  onChange={e => setChart({
                    ...chart,
                    filters: {
                      ...chart.filters,
                      limit: e.target.value,
                    },
                  })}
                  placeholder="Deixe em branco para todos"
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
              type="bar"
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

export default Bar;
