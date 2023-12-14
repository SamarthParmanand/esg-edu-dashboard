"use client";

// import ArrowPathIcon from '@heroicons/react/24/solid/ArrowPathIcon';
// import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import { Button, Card, CardActions, CardContent, CardHeader, Divider, SvgIcon, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { Chart } from "./chart";
import SyncIcon from "@mui/icons-material/Sync";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const useChartOptions = () => {
  const theme = useTheme();

  return {
    zoom: {
      enabled: true,
      type: "x",
      autoScaleYaxis: false,
      zoomedArea: {
        fill: {
          color: "#90CAF9",
          opacity: 0.4,
        },
        stroke: {
          color: "#0D47A1",
          opacity: 0.4,
          width: 1,
        },
      },
    },
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: [theme.palette.primary.main, alpha(theme.palette.primary.main, 0.25)],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
      type: "solid",
    },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "40px",
      },
    },
    stroke: {
      colors: ["transparent"],
      show: true,
      width: 2,
    },
    theme: {
      mode: theme.palette.mode,
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true,
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true,
      },
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      labels: {
        offsetY: 5,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => (value > 0 ? `${value}K` : `${value}`),
        offsetX: -10,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
  };
};

const SalesChart = (props) => {
  const { chartSeries } = props;
  const chartOptions = useChartOptions();

  return (
    <Card>
      <CardHeader
        action={
          <Button color="inherit" size="small" startIcon={<SyncIcon />} style={{ color: "grey" }}>
            Sync
          </Button>
        }
        title={
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Page Views
          </Typography>
        }
      />
      <CardContent>
        <Chart height={350} options={chartOptions} series={chartSeries} type="bar" width="100%" />
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button style={{ color: "grey" }} color="inherit" endIcon={<ArrowRightAltIcon />} size="small">
          Overview
        </Button>
      </CardActions>
    </Card>
  );
};

export default SalesChart;