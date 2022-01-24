import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Container} from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function App() {
    return (
        <div className="App">
            <Container maxWidth="lg">
                <ActionAreaCard/>
                <VerticalTabs/>
            </Container>

        </div>
    );
}

function ActionAreaCard() {
    return (
        <Card sx={{
                maxWidth: 1300
            }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image="https://p4.wallpaperbetter.com/wallpaper/670/488/988/5bd2b86064e76-wallpaper-preview.jpg"
                    alt="green iguana"/>
                <CardContent>
                    <Typography gutterBottom="gutterBottom" variant="h5" component="div">
                        도라에몽
                    </Typography>
                    <Typography variant="body2" color="text.secondary">도라에몽은 일본의 SF 만화이다. 작가는 후지코 F.
                        후지오로 도라에몽은 그의 대표작이며 라이프워크였다. 2020년 50주년을 맞이했다. 일본 문화의 상징적인 만화이자 일본을 대표하는 국민
                        만화이며, 일본뿐만 아니라 한국과 중화권, 동남아에서 엄청난 인기를 누리고 있다.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 300 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}

export default App;