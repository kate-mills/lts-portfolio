import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import { useTheme } from '@mui/material/styles';

import Link from 'components/Link';
import Logo from 'svg/Logo'

const Footer = () => {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component={Link}
            to="/"
            title="kateMills"
            width={80}
          >
            <Box
              component={Logo}
              height={1}
              width={1}
            />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component={Link}
                to="/"
                color="text.primary"
                variant={'subtitle2'}
              >
                Home
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                to="/"
                color="text.primary"
                variant={'subtitle2'}
              >Apps
              </Link>
            </Box>
            <Box marginTop={1}>
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to="/"
                size="small"
              >
                Contact Me
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; kateMills. 2023. All rights reserved
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
Thanks for visiting!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
