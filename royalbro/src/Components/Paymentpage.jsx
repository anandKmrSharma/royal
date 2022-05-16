
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import {useState} from "react";


const Paymentpage= ()=>{

  const [pay, setPay]= useState(false);
const sucess= ()=>{
    setPay(true)
}

if(pay)
return <>
 <h1 style={{margin:"100px", color:"green"}} >Your payment is succesfull</h1>
</> 
return(
         <>
         <div style={{marginTop: "150px",marginLeft: "30%", backgroundColor:"whitesmoke", width:"500px",height:"500px"}}>


         <h1>Enter your payment details</h1>

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
<Button   onClick={sucess} sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
  submit
</Button>
</FormControl>



         </div>
        
    
        </>
    )
}

export {Paymentpage};







