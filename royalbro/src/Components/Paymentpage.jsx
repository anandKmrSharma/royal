
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';



const Paymentpage= ()=>{

    return(

        <>
        <h1>Payment page</h1>
        <h1>Payment page</h1>

        <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Choose payment method</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="google pay" control={<Radio />} label="google pay" />
        <FormControlLabel value="upi" control={<Radio />} label="upi" />
        <FormControlLabel value="card" control={<Radio />} label="card " />
      </RadioGroup>
      <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          submit
        </Button>
    </FormControl>
    
        </>
    )
}

export {Paymentpage};







