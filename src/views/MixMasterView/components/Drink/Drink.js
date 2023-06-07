import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import {useTheme} from '@mui/material/styles'
import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import DetailsModal from './components/DetailsModal'

const Drink = ({item = {}}) => {
  const theme = useTheme()
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Box display={'block'} width={1} height={1} sx={{boxShadow: 1}}>
        <Card
          sx={{
            width: 1,
            height: 1,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 'none',
            bgcolor: 'transparent',
            backgroundImage: 'none'
          }}
        >
          <CardMedia
            title={item.strDrink}
            image={item.strDrinkThumb}
            sx={{
              position: 'relative',
              height: 320,
              overflow: 'hidden',
              borderRadius: 2
            }}
          >
            <Box
              padding={2}
              bgcolor={'background.paper'}
              boxShadow={2}
              borderRadius={2}
              position={'absolute'}
              top={16}
              right={16}
              display={'flex'}
              alignItems={'center'}
              sx={{cursor: 'pointer'}}
              title={'Favorite'}
            >
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={20}
                height={20}
                color={'text.primary'}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </Box>
            </Box>
          </CardMedia>

          <Stack
            mt={2}
            direction="row"
            spacing={1}
            alignItems={'center'}
            justifyContent={'space-between'}
            gap={1}
            mx={3}
          >
            <Typography
              variant={'subtitle2'}
              component={'p'}
              sx={{
                fontWeight: 600,
                display: 'inline-block',
                whiteSpace: 'pre',
                textOverflow: 'ellipsis',
                maxWidth: '100%',
                overflowX: 'hidden'
              }}
            >
              {item.strDrink}
            </Typography>
            <Chip
              size={'small'}
              sx={{fontSize: '11px'}}
              label={item.strAlcoholic}
              variant={item.strAlcoholic !== 'Alcoholic' ? 'outlined' : ''}
            />
          </Stack>

          <Box marginTop={2}>
          <DetailsModal item={item} idDrink={item.idDrink}/>
          <Button
              variant={'contained'}
              color={'primary'}
              size={'large'}
              fullWidth
              startIcon={<LocalBarOutlinedIcon />}
            >
              Details
            </Button>
            <Button
              size={'large'}
              sx={{
                color: theme.palette.text.primary,
                marginTop: 1
              }}
              fullWidth
            >
              Quick Look
            </Button>
          </Box>
        </Card>
      </Box>
    </Grid>
  )
}
export default Drink 
