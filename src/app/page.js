import LatestNews from '@/components/ui/LatestNews/LatestNews';
import SideBar from '@/components/ui/SideBar/SideBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const HomePage = () => {
  return (
    <>
    <Grid container spacing={2}>
      <Grid item xs={8}>
       <LatestNews/>
      </Grid>
      <Grid item xs={4}>
       <SideBar/>
      </Grid>
    </Grid>
  </>
  );
};

export default HomePage;