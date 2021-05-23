import React from 'react';
import { Grid, Avatar } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import peopleData from '../../utils/peopleData';
import './StoryComponent.css';

const StoryComponent = () => {
  return (
    <div>
      <Grid container>
        <Grid item className='mt_10'className='avatarGrpUsers'>
          <AvatarGroup max={8} spacing={-5} className='avatarGrpUsers'>
            <Avatar alt='' src='../assets/images/avatars/avatar1.png' />
            <Avatar alt='' src='../assets/images/avatars/avatar1.png' />
            <Avatar alt='' src='../assets/images/avatars/avatar1.png' />
            <Avatar alt='' src='../assets/images/avatars/avatar2.png' />
            <Avatar alt='' src='../assets/images/avatars/avatar3.png' />
            <Avatar alt='' src='../assets/images/avatars/avatar4.png' />
            <Avatar alt='' src='../assets/images/avatars/avatar5.png' />
            <Avatar alt='' src='../assets/images/avatars/avatar6.png' />
          </AvatarGroup>
        </Grid>
      </Grid>
    </div>
  );
};

export default StoryComponent;
