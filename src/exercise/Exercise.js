//2a
import { useState } from 'react';

//1a
function Exercise(){
    //2c
    const [num, setNum] = useState(1);
    //2d
const addNum = () => setNum

//1c
return(
    //1e
<div>
    <button onCLick={() => alert('Congrats! YOU HAVE CLICKED THE BUTTON.')} >Click Here</button>
    {/* 2b and 2e */}
<button onClick={() => addNum}>STATE</button>
{/* 2f */}
<h1>{num +1}</h1>
</div>
)
}





//1b
export default Exercise;