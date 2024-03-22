import react,{useState} from 'react'
import DetailsCard from './DetailsCard'

function Home() {
    const [isShow, setIshow] = useState(false)
    return(
        <div>
            <div>Hello from Home component</div>
            <button onClick={()=>{setIshow(!isShow)}} >Save Segment</button>
            {isShow && <DetailsCard/>}
        </div>
        
    )
}
export default Home