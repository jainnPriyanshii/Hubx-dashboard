import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from '@mui/material';

function currencyFormat(value) {
  return `₹ ${value.toLocaleString()}`;
}

function calculateReturns(investment, rate, time) {
  // returns the growth value factor
  const returns = investment * ((1 + rate / 100) ** time - 1);
  return Math.round(returns);
}

const COLORS = ['#0088FE', '#00C49F'];

function calculateTotalValue(investment, returns) {
  return investment + returns;
}

export default function MutualFundCalculator() {
  const [investment, setInvestment] = React.useState(100000);
  const [rate, setRate] = React.useState(12);
  const [time, setTime] = React.useState(5);

  const totalInvestment = investment;
  const estimatedReturns = calculateReturns(investment, rate, time);
  const totalValue = calculateTotalValue(investment, estimatedReturns);

  const handleInvestmentChange = (event, newValue) => setInvestment(newValue);
  const handleRateChange = (event, newValue) => setRate(newValue);
  const handleTimeChange = (event, newValue) => setTime(newValue);

  const pieData = [
    { name: 'Total Investment', value: investment },
    { name: 'Estimated Returns', value: estimatedReturns },
  ];

  return (
    <div>
      <Typography
        variant="h5"
        gutterBottom
        textAlign={'center'}
        sx={{ fontWeight: 'bold', marginTop: 2 }}
      >
        Mutual Fund Returns Calculator
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginTop: 2,
        }}
      >
        {/* Left Side: Sliders and Info */}
        <Box sx={{ width: '40%', marginLeft: 2 }}>
          <Typography gutterBottom>Total Investment: {currencyFormat(investment)}</Typography>
          <Slider
            value={investment}
            min={10000}
            max={1000000}
            step={10000}
            onChange={handleInvestmentChange}
            valueLabelDisplay="auto"
            valueLabelFormat={currencyFormat}
          />

          <Typography gutterBottom>Expected Return Rate: {rate}%</Typography>
          <Slider
            value={rate}
            min={1}
            max={20}
            step={0.5}
            onChange={handleRateChange}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${value}%`}
          />

          <Typography gutterBottom>Time Period: {time} Yr</Typography>
          <Slider
            value={time}
            min={1}
            max={30}
            step={1}
            onChange={handleTimeChange}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${value} Yr`}
          />

          <Box sx={{ marginTop: 2  , display:'flex',gap:8}}>
            <Box>
            <Typography sx={{ fontWeight: 'bold' , fontSize: 20,color:"grey"  }}>
              Total Investment:
            </Typography>

            <Typography sx={{ fontWeight: 'bold', fontSize: 20}}> {currencyFormat(totalInvestment)}</Typography>
            </Box>
            <Box>
            <Typography sx={{ fontWeight: 'bold', fontSize: 20 ,color:"grey" }}>
            Estimated Returns:
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 20}}> {currencyFormat(estimatedReturns)}</Typography>
            </Box>
          </Box>
          <Box sx={{marginTop:2,display:'flex',marginLeft:8}}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 ,color:"grey" }}>
              Total Value:
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 20}} >{currencyFormat(totalValue)}</Typography>
          </Box>
        </Box>

        {/* Right Side: Pie Chart */}
        <Box sx={{ width: '60%', height:300, marginRight: 2 ,marginTop :2 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label={(entry) => `${entry.name}: ${currencyFormat(entry.value)}`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => currencyFormat(value)} />
            </PieChart>
            
<Button  sx={{marginLeft:36,width:200,height:40 ,borderRadius:1,fontWeight:'bold',backgroundColor: '#00C49F',color:'white'}}>Invest Now</Button>
        
          </ResponsiveContainer>
        </Box>
       
      </Box>
     
    </div>
  );
}
