import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from './Link';
import Typography from '@mui/material/Typography';

import ThemeModeToggler from 'components/ThemeModeToggler';

const TopNav = ({ colorInvert = true }) => {
  return (
    <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <Link
          underline="none"
          to="/mixmaster"
          color={colorInvert ? 'common.white' : 'text.primary'}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
         Apps
          <Box
            padding={0.5}
            display={'inline-flex'}
            borderRadius={1}
            bgcolor={'primary.main'}
            marginLeft={1}
          >
            <Typography
              variant={'caption'}
              sx={{ color: 'common.white', lineHeight: 1 }}
            >
              new
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <Link
          underline="none"
          to="/"
          color={colorInvert ? 'common.white' : 'text.primary'}
        >Docs
        </Link>
      </Box>
      <Box> <ThemeModeToggler /> </Box>
    </Box>
  );
};

TopNav.propTypes = {
  colorInvert: PropTypes.bool,
};

export default TopNav;
