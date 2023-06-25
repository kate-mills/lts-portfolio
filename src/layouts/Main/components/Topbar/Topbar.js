import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import Link from 'components/Link';
import Logo from 'svg/Logo'

import { NavItem } from './components';
import ThemeModeToggler from 'components/ThemeModeToggler'

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const {
    landings: landingPages,
    apps: appsPages,
  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component={Link}
        to="/"
        title="kateMills"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={Logo}
          height={1}
          width={1}
        />
      </Box>

      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box mr={2}>
          <NavItem
            title={'Landings'}
            id={'landing-pages'}
            items={landingPages}
          />
        </Box>
        <Box mr={2}>
          <NavItem
            title={'Apps'}
            id={'apps'}
            items={appsPages}
          />
        </Box>
        <ThemeModeToggler/>
        <Box marginLeft={2}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/contact"
            size="large"
          >
            Contact
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <ThemeModeToggler/>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
              marginLeft: 1,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
