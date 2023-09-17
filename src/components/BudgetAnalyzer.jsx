import react,{ useState } from 'react'
import Navbar from './Navbar/Navbar'
import "./BudgetContent.css";
import axios from 'axios';

const BudgetContent = () =>{
    const [income, setIncome] = useState("");
    const [home, setHome] = useState("");
    const [food, setFood] = useState("");
    const [fun, setFun] = useState("");

    const [display,setDisplay] = useState(false)

    const [suggestions,setSuggestions]=useState([])
    const [incomeper,setIncomeper]=useState('')
    const [totalexp,setTExpense] = useState('')
 
    
    const budget =async (e)=>{
        e.preventDefault()

        const aa = {
            "income" : income,
            "expenses" : {
                "House": home,
                "Food": food,
                "Fun" : fun
            }
        }

        console.log(aa);
        await axios.post('http://10.5.214.100:5000/budgetanalyzer', aa)
          .then((response) => {
            console.log(response.data);
            setDisplay(true)
            setSuggestions(response.data["Budget_Suggestions"]);
            setIncomeper(response.data["Income_Percentage"]);
            setTExpense(response.data["Total_Expenses"]);
          })
          .catch((error) => {
            console.log(error);
          })
    }
    

    return(
        <>
        <Navbar />
            <div className="budgetcontent">
            <div className='Form-input'>
                <br></br>
                <h3>
                    Analyze your Budget based on your Expenses
                </h3>
                <br></br>
                <form>
                <div className='form'>
                <div>
                <label>
                    Income <br />
                    <input type='text' name='income' 
                    onChange={(e) => {
                    setIncome(e.target.value);
                    }}
                    value={income}
                />
                </label>
                <br />
                </div>
                <div>
                <label>
                    Home <br />
                    <input type='text' name='home' 
                    onChange={(e) => {
                    setHome(e.target.value);
                    }}
                    value={home} 
                />
                </label>
                </div>
                <label>
                    Food <br />
                    <input type='text' name='food' 
                    onChange={(e) => {
                    setFood(e.target.value);
                    }}
                    value={food}
                />
                </label>
                <label>
                    Fun <br />
                    <input type='text' name='fun'
                    onChange={(e) => {
                    setFun(e.target.value);
                    }}  
                    value={fun}
                />
                </label>
                
                <div>
                <button  onClick={budget}>Submit</button>
                </div>
                </div>
                </form> 
            </div>
            <br />

            { (display)?
            <div className='Output'>
                
                <div className='suggestions'>
                    <h4 className='suggHeading'>Suggestions:</h4>
                    <h4>{suggestions[0]}</h4><br />
                    <h4>{suggestions[1]}</h4><br />
                    <h4>{suggestions[2]}</h4><br />
                </div>
                <div>
                    <h4 className='suggHeading'>Income:</h4>
                    <h4> {income}</h4>
                </div>
                <div>
                    <h4 className='suggHeading'>Income %:</h4>
                    <h4> {incomeper}</h4>
                </div>
                <div>
                    <h4 className='suggHeading'>Total Expense:</h4>
                    <h4>{totalexp}</h4>
                </div>
            </div> : <h1>Here Is What We Suggest</h1>
            }

            
            </div>
        </>
    );
    
};
export default BudgetContent;
