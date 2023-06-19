import * as React from 'React'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'



const Printable = (id) => {

function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
}




  return (
    <Box>
      <Button onClick={printDiv(id)}>Print It</Button>
    </Box>
  )
}

export default Printable

