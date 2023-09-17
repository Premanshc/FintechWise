import react,{ useState,useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import "./ExpenseManager.css";
import axios from 'axios';

const ExpenseManagerContent = () =>{
    const [data,setData] = useState([])

    useEffect(async ()=>{
        await axios.get('http://10.5.214.100:5000/expenditureanalysis')
          .then((response) => {
            console.log(response.data);
            setData(response.data)
          })
          .catch((error) => {
            console.log(error);
          })
    },[])
    return(
        <>
        <Navbar />
        <div className='expensecontent'>
            <h1>Expenditure Prediction</h1>
                <div className="items">
                <h2>2025-09-10</h2> 
                <h2>4233.32</h2>
            </div>
            

            <div className="items">
                <h2>2025-09-10</h2> 
                <h2>4233.32</h2>
            </div>
        <div>

            </div>
        </div>
        </>
    );
    
};
export default ExpenseManagerContent;
