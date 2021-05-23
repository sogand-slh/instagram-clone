import React from 'react';
import { Grid, Container, Typography, Divider } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import StoryComponent from '../../components/StoryComponent/StoryComponent';
import './HomePage.css';

const HeaderHp = () => {
  return (
    <div className='header_hp'>
      <Grid container spacing={2}>
        <Grid item xs={11}>
          <Typography variant='h4'>Instagram</Typography>
        </Grid>
        <Grid item xs={1} alignContent='flex-end'>
          <SendIcon />
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
};

const HomePage = () => {
  return (
    <Container className='container'>
      <Grid container xs={12}>
        <Grid item xs={12} className='mt_10 mb_5'>
          <HeaderHp />
        </Grid>
        <Grid item>
          <StoryComponent />
        </Grid>
      </Grid>
    </Container>
  );
};
export default HomePage;
