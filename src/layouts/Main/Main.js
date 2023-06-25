import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useTheme} from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import AppBar from '@mui/material/AppBar'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack'
import Link from 'components/Link'

import useScrollTrigger from '@mui/material/useScrollTrigger'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Zoom from '@mui/material/Zoom'
import NoSsr from '@mui/material/NoSsr'

import Container from 'components/Container'

import {Topbar, Sidebar, Footer} from './components'

import pages from '../navigation--main'

const Main = ({children, colorInvert = false, bgcolor = 'transparent'}) => {
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  })

  const scrollTo = (id) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`)
      if (!element) {
        return
      }
      window.scrollTo({left: 0, top: element.offsetTop, behavior: 'smooth'})
    })
  }

  const [openSidebar, setOpenSidebar] = useState(false)

  const handleSidebarOpen = () => {
    setOpenSidebar(true)
  }

  const handleSidebarClose = () => {
    setOpenSidebar(false)
  }

  const open = isMd ? false : openSidebar

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38
  })

  return (
    <Box id="js--main-top">
      <Box bgcolor={bgcolor} position={'relative'} zIndex={theme.zIndex.appBar}>
        <Container paddingTop={'8px !important'} paddingBottom={'0 !important'}>
    <Stack direction={'row'} justifyContent={'flex-end'} spacing={2} alignItems={'center'}>
    <Stack direction={'row'} spacing={.5} alignItems={'center'}>
      <Chip label="New" variant={'outlined'} size={'small'} sx={{fontSize: 'xx-small', height: '2em'}} color={'secondary'}/>
    <Link to={'/mixmaster/'}>MixMaster</Link>
    </Stack>
    <Link to={'/snapscape/'}>SnapScape</Link>
    </Stack>
        </Container>
      </Box>
      <AppBar
        position={'sticky'}
        sx={{
          top: 0,
          backgroundColor: trigger ? theme.palette.background.paper : bgcolor
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container paddingY={1}>
          <Topbar onSidebarOpen={handleSidebarOpen} pages={pages} colorInvert={trigger ? false : colorInvert} />
        </Container>
      </AppBar>
      <Sidebar onClose={handleSidebarClose} open={open} variant="temporary" pages={pages} />
      <main>
        {children}
        <Divider />
      </main>
      <Container paddingY={4}>
        <Footer />
      </Container>
      <NoSsr>
        <Zoom in={trigger}>
          <Box
            onClick={() => scrollTo('js--main-top')}
            role="presentation"
            sx={{position: 'fixed', bottom: 24, right: 32, zIndex: 10000}}
          >
            <Fab color="primary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </Box>
        </Zoom>
      </NoSsr>
    </Box>
  )
}

Main.propTypes = {
  children: PropTypes.node,
  colorInvert: PropTypes.bool,
  bgcolor: PropTypes.string
}

export default Main
