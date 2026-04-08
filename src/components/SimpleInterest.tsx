import React, {useEffect, useState} from 'react'

export const SimpleInterest = () => {

    // const [principal , setPrincipal] = useState(0);
    // const [interest , setInterest] = useState(0);
    const [formData, setFormData] = useState({principal: 0, interest: 0, simpleInterest: 0,})
    // const [simpleInterest , setSimpleInterest] = useState(0);

    useEffect(() => {
        //formulae to calculate Si
        const computedSimpleInterest =  (formData.principal * formData.interest) / 100 
        setFormData({...formData, simpleInterest: computedSimpleInterest});
    }, [formData])

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setFormData({...formData, [e.target.name]: e.target.value} )
    }
  return (
    <form action="">
        <h1>{formData.simpleInterest}</h1>
        <input type="number" name="principal" value={formData.principal} onChange={handleChange} />
        <input type="number" name="interest" value={formData.interest} onChange={handleChange} />
    </form>
  )
}
