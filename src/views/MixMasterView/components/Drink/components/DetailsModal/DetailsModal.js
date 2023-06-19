import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import {useTheme} from '@mui/material/styles'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: 1,
  boxShadow: 24,
  p: 4
}

const Ingredient = ({title = '', amount = ''}) => {
  return (
    <ListItemText>
      <Typography ml={1} variant={'caption'} component={'span'}>
        {amount}
      </Typography>
      <Typography variant={'overline'} component={'span'}>
        {' '}
        {title}
      </Typography>
    </ListItemText>
  )
}

export default function BasicModal({item, idDrink}) {
  const theme = useTheme()

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
  return (
    <Box className="MixMaster hidden" maxWidth={'100vw'} id={idDrink}>
      <Divider />
      <Button size={'large'} sx={{color: theme.palette.text.primary, marginTop: 1}} fullWidth onClick={handleOpen}>
        Learn to make it like a pro!
      </Button>

      <Button
        size={'large'}
        sx={{color: theme.palette.text.primary, marginTop: 1}}
        fullWidth
        onClick={(e) => {
          e.preventDefault()
          handlePrint(idDrink)
        }}
      >
        Print Drink
      </Button>

      <Modal
        className="MixMaster-ModalItem"
        open={open}
        onClose={handleClose}
        aria-labelledby={`modal-modal-title-${idDrink}`}
        aria-describedby={`modal-modal-description-${idDrink}`}
      >
        <Box sx={style}>
          <Stack direction="row" gap={1} flexWrap="wrap">
            <Typography id={`modal-modal-title-${idDrink}`} variant="h5" component="h2">
              {item.strDrink}
            </Typography>

            <Chip
              size={'small'}
              sx={{fontSize: '10px'}}
              label={item.strAlcoholic}
              variant={item.strAlcoholic !== 'Alcoholic' ? 'outlined' : ''}
            />

            <Chip size={'small'} sx={{fontSize: '10px'}} label={`${item.strGlass}`} variant={'outlined'} />
          </Stack>

          <Box marginY={1}>
            <Divider />
          </Box>

          <Box>
            <Typography variant="subtitle1" component="p">
              Ingredients
            </Typography>
            <Stack>
              <List>
                {ingredients.map((ing, i) => {
                  return !!ing.title ? (
                    <Ingredient title={ing.title} amount={ing.amount} key={`${ing.title}--${i}`} />
                  ) : null
                })}
              </List>
            </Stack>
          </Box>
          <Box marginY={1}>
            <Divider />
          </Box>
          <Box>
            <Typography variant="subtitle1" component="p">
              {' '}
              Instructions
            </Typography>
            <Typography id={`modal-modal-description-${idDrink}`} sx={{mt: 2}} variant={'body2'}>
              {item.strInstructions}
            </Typography>
          </Box>
          <Box marginY={1}>
            <Divider />
          </Box>
          <Typography variant="cursive" component={'p'}>
            MixMaster
          </Typography>
        </Box>
      </Modal>
    </Box>
  )
}

const handlePrint = (id) => {
  const bodyElement = document.getElementById(id)

  bodyElement.classList.remove('hidden')
  bodyElement.classList.add('print')
  console.log(bodyElement)
  window.print()
  bodyElement.classList.remove('print')
  bodyElement.classList.add('hidden')
}
