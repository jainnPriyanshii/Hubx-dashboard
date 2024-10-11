import * as React from 'react';
import { Box, Typography, Card, CardContent, Button, Divider, Stack, Icon } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Tabs, Tab, IconButton, MenuItem, Select } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HelpIcon from '@mui/icons-material/Help';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PublishedWithChangesRoundedIcon from '@mui/icons-material/PublishedWithChangesRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import DescriptionIcon from '@mui/icons-material/Description';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import ContactsIcon from '@mui/icons-material/Contacts';
import TimerIcon from '@mui/icons-material/Timer';
import { useState } from 'react';


// / Dummy data for Chart
const data = [
  { date: '2021-02-03', newUsers: 0 },
  { date: '2021-02-04', newUsers: 0.5 },
  { date: '2021-02-05', newUsers: 0.75 },
  { date: '2021-02-06', newUsers: 0 },
  { date: '2021-02-07', newUsers: 1 },
  { date: '2021-02-08', newUsers: 0 },
  { date: '2021-02-09', newUsers: 2 },
];

export default function Dashboard() {
  const [value, setValue] = useState(true)
  const [timeRange, setTimeRange] = useState('7 Days');


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTimeRangeChange = (event) => {
    setTimeRange(event.target.value);
  };
  return (
    <Box sx={{ padding: 3, backgroundColor: '#f5f5f5' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <Typography variant="h6">Dashboard</Typography>

        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-start' }}>
          <Button startIcon={<AddIcon />} sx={{ color: 'grey', width: '36%' }}>Create Course</Button>
          <Button startIcon={<VisibilityIcon />} sx={{ color: 'grey', width: '36%' }}>Preview Homepage</Button>
          <Button startIcon={<VisibilityIcon />} sx={{ color: 'grey', width: '36%' }}>Preview After Loginpage</Button>
          <Button startIcon={<PowerSettingsNewIcon />} sx={{ color: 'grey', width: '36%' }}>View Welcome Screen</Button>
          {/* <Button sx={{ color:'grey',width:'44%' }}>View Welcome Screen</Button> */}
        </Box>
        {/* <Box sx={{display:'flex',marginLeft:60,gap:2}}> */}
        <Button startIcon={<HelpIcon />} sx={{ color: '#00C49F' }}>Help</Button>
        {/* </Box> */}
      </Box>



      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>

        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <CalendarTodayIcon fontSize="small" />
          <Typography variant="subtitle1" sx={{ ml: 1 }}>Your School</Typography>
        </Box>


        <Tabs value={value} onChange={handleChange} sx={{ flex: 1 }}>
          <Tab label="New Signups" />
          <Tab label="Revenue" />
          <Tab label="Product Sales" />
          <Tab label="Active Learners" />
        </Tabs>


        <Select
          value={timeRange}
          onChange={handleTimeRangeChange}
          displayEmpty
          sx={{mr:28, bgcolor: '#f5f5f5', borderRadius: '16px',  }}
        >
          <MenuItem value="7 Days">Last 7 Days</MenuItem>
          <MenuItem value="30 Days">Last 30 Days</MenuItem>
          <MenuItem value="90 Days">Last 90 Days</MenuItem>
        </Select>
        <Button sx={{ backgroundColor: '#00C49F', color :'white',width:'200px' ,fontWeight:'bold'}}
      onClick={() => CaculatorWithRedirect()}
      href="/calculator"
      
    >
      Invite
    </Button>
      </Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      


      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>

        <Box sx={{ flex: 2 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">New Signups</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="newUsers" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Box>

<Box sx={{height:'500'}}>
        <Stack direction="row" spacing={5} sx={{ flex: 1, height: '120px',my:5 }}>
          {[
            { label: 'All Users', value: 1 ,Icon:<AccountCircleIcon/>},
            { label: 'Conversions', value: '0%',Icon:<PublishedWithChangesRoundedIcon/> },
            { label: '30 Days Sales', value: 0 ,Icon:<WorkRoundedIcon/>},

          ].map((stat, index) => (
            <Card key={index}>
              <CardContent>
                <Typography variant="h6"sx={{textAlign:'center',color:'#00C49F'}}>{stat.Icon}</Typography>
                <Typography variant="h6" sx={{color:'grey'}}>{stat.label}</Typography>
                <Typography variant="subtitle1" sx={{textAlign:'center',fontWeight:'bold'}}>{stat.value}</Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
        <Stack direction="row" spacing={5} sx={{ flex: 1, height: '120px',my:5 }}>
          {[
            { label: 'Avg Time', value: 1 ,Icon:<AlarmOnIcon/>},
            { label: 'Courses Add', value: '0%',Icon:<DescriptionIcon/> },
            { label: 'Course Category', value: 0,Icon:<LoyaltyIcon/> },

          ].map((stat, index) => (
            <Card key={index}>
              <CardContent>
              <Typography variant="h6" sx={{textAlign:'center',color:'#00C49F'}}>{stat.Icon}</Typography>
                <Typography variant="h6"sx={{color:'grey'}}>{stat.label}</Typography>
                <Typography variant="subtitle1" sx={{textAlign:'center' ,fontWeight:'bold'}}>{stat.value}</Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
      </Stack>

        <Divider sx={{ my: 3 }} />


        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>

          <Box sx={{ flex: 1 }}>
            <Card>
              <CardContent>
                <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>New Users
                <Button  sx={{marginLeft:14,height:20 ,borderRadius:10,backgroundColor: '#00C49F',color:'white',mt:-8,fontWeight:'bold'}}>See All</Button>
                </Typography>
              

                <Box>
                
                  <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>Hubx</Typography>
                  <Typography variant="caption">24 minutes ago</Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>


          <Box sx={{ flex: 1 }}>
            <Card>
              <CardContent>
                <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>How to sell courses blog
                <Button  sx={{marginLeft:30,height:30,fontSize:'10px' ,borderRadius:10,backgroundColor: '#00C49F',color:'white',mt:-8,fontWeight:'bold'}}>See All</Button>

                </Typography>
                <Box mt={2}>
                  {[
                    'Blended Learning: What It Is, Why It Matters & How to Apply',
                    'Join the Course Sales Bootcamp',
                    '12 Steps to Creating Awesome Live Classes in 2021',
                    '12 Steps to Creating Awesome Live Classes in 2021',
                    '12 Steps to Creating Awesome Live Classes in 2021',
                    '12 Steps to Creating Awesome Live Classes in 2021',
                    '12 Steps to Creating Awesome Live Classes in 2021',
                  ].map((post, index) => (
                    <Typography key={index} variant="body2" gutterBottom sx={{color:'#00C49F'}}>
                      {post}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>


          <Box sx={{ flex: 1 }}>
            <Card>
              <CardContent>
                <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>Events Log
                <Button  sx={{marginLeft:13,height:30,fontSize:'10px' ,borderRadius:10,backgroundColor: '#00C49F',color:'white',mt:-8,fontWeight:'bold'}}>See All</Button>

                </Typography>
                <Box mt={2}>
                  <Typography sx={{fontSize:'16px',fontWeight:'bold'}} >Hubx</Typography>
                  <Typography variant="caption">Logged in 27 minutes ago</Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>


          <Box sx={{ flex: 1 }}>
            <Card>
              <CardContent>
                <Typography sx={{fontSize:'20px',fontWeight:'bold'}} >Trial Period
                
                </Typography>
                
                <Box mt={2}>
                  <Button sx={{color:'white',borderRadius:'50%',backgroundColor:'#00C49F',height:120,fontWeight:'bold',fontSize:'20px'}}>30 Days Left</Button>
                  <Button   sx={{ mt: 2 ,backgroundColor:'purple',color:'white',borderRadius:12,ml:14}}>
                    Upgrade Now! 
                  </Button>
                </Box>
              </CardContent>
            </Card>
            <Card sx={{mt:2}}>
              <CardContent >
                <Typography sx={{fontWeight:'bold'}} >Online User(1)</Typography>
                <Typography >HUBX</Typography>
                
                <Box mt={2}>
                  <Button   sx={{ mt: 2 ,backgroundColor:'#00C49F',color:'white',ml:14}}>
                    Contact
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Stack>
    </Box>
  );
}
