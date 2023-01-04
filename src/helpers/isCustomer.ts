import { ValidateCustomer } from "../interfaces";


const isCustomer  = ( value: ValidateCustomer ) => {

    const requiredProperties =[ 'firstName', ' lastName', 'role'];

    requiredProperties.map((property: string)=> {
       if(!value.hasOwnProperty(property)){
           return false;
       }
    });

    if(value.role === 'vipCustomer'){
        if(!value.hasOwnProperty('creditCard')){
            return false;
        }
    }

    if(value.role === 'regularCustomer'){
        if(!value.hasOwnProperty('phoneNumber')){
            return false;
        }
    }
    
    return true;
}



module.exports = { isCustomer };


