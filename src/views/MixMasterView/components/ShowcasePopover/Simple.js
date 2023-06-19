import React, {useState} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Popover from '@mui/material/Popover'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Stack from '@mui/material/Stack'

const Simple = ({item = {}}) => {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.target)
    setOpen(true)
  }

  const ingredients = [
    {title: item.strIngredient1, amount: item.strMeasure1},
    {title: item.strIngredient2, amount: item.strMeasure2},
    {title: item.strIngredient3, amount: item.strMeasure3},
    {title: item.strIngredient4, amount: item.strMeasure4},
    {title: item.strIngredient5, amount: item.strMeasure5},
    {title: item.strIngredient6, amount: item.strMeasure6},
    {title: item.strIngredient7, amount: item.strMeasure7},
    {title: item.strIngredient8, amount: item.strMeasure8},
    {title: item.strIngredient9, amount: item.strMeasure9},
    {title: item.strIngredient10, amount: item.strMeasure10},
    {title: item.strIngredient11, amount: item.strMeasure11},
    {title: item.strIngredient12, amount: item.strMeasure12},
    {title: item.strIngredient13, amount: item.strMeasure13},
    {title: item.strIngredient14, amount: item.strMeasure14},
    {title: item.strIngredient15, amount: item.strMeasure15}
  ]

  const handleClose = () => {
    setAnchorEl(null)
    setOpen(false)
  }

  return (
    <Box
      maxWidth={{sm: 720, md: 1236}}
      width={1}
      //margin={'0 auto'}
      paddingRight={2}
      paddingY={2}
    >
      <Box display={'flex'} justifyContent={'flex-start'}>
        <Box display={'flex'} alignItems={'center'} sx={{cursor: 'pointer'}} onClick={(e) => handleClick(e)}>
          <Typography color={'common.white'}>Learn how to make it</Typography>
          <ExpandMoreIcon
            sx={{
              marginLeft: 0.5,
              width: 16,
              height: 16,
              color: 'common.white',
              transform: open ? 'rotate(180deg)' : 'none'
            }}
          />
        </Box>
        <Popover
          id={item.idDrink}
          className={!!open ? 'print-container' : ''}
          elevation={8}
          variant={'elevation'}
          open={open}
          anchorEl={anchorEl}
          anchorReference="anchorPosition"
          onClose={handleClose}
          anchorPosition={{top: 60, left: 450}}
          anchorOrigin={{vertical: 'top', horizontal: 'left'}}
          transformOrigin={{vertical: 'top', horizontal: 'right'}}
          sx={{
            '.MuiPaper-root': {
              paddingY: 4,
              paddingX: 2,
            },
          }}
        >
          <Box className={!!open ? 'print-content-box' : ''} variant={'elevation'}>
            <Box className={!!open ? 'print-content' : ''}>
              <Box p={2} w={'100%'} maxWidth={360}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={0.5}>
                  <Box className={'mixmaster-header'}>
                    <Typography variant={'h4'}> {item.strDrink} </Typography>
                    <Typography variant={'body1'} color={'text.secondary'} mb={1} sx={{fontFamily: 'calliope-mvb, sans-serif', fontSize: '1.1875rem'}}>
                      {item.strGlass}
                    </Typography>
                  </Box>
                  <img
                    className={'mixmaster-img thumbnail'}
                    src={item.strDrinkThumb}
                    alt={item.strDrink}
                    loading="eager"
                    style={{
                      filter: 'brightness(0.7)',
                      borderRadius: 8,
                      width: '30%',
                      height: '30%',
                      objectFit: 'cover'
                    }}
                  />
                </Stack>
                <Typography gutterBottom variant={'h6'} mt={1}>
                  Ingredients
                </Typography>
                <List className={'ingredient-list'} dense={true} sx={{width: '100%', paddingTop: 0}}>
                  {ingredients.map((ing) => {
                    return ing.title ? (
                      <ListItem className={'ingredient'} key={ing.title} divider={true} w={'100%'}>
                        <Typography
                          className={'ingredient-title'}
                          variant={'body2'}
                          sx={{minWidth: '50%', width: '50%', marginRight: '8px', maxWidth: '40%'}}
                        >
                          {ing.title}
                        </Typography>
                        <Typography variant={'body2'}>{ing.amount}</Typography>
                      </ListItem>
                    ) : null
                  })}
                </List>
                <Typography gutterBottom variant={'h6'} mt={1}>
                  Instructions
                </Typography>
                <Typography variant={'body2'}>{item.strInstructions}</Typography>
              </Box>
            </Box>
          </Box>
        </Popover>
      </Box>
    </Box>
  )
}

export default Simple
