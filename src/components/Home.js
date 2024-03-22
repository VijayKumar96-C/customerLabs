import { useState } from 'react'
import DetailsCard from './DetailsCard'

function Home() {
    const [isShow, setIshow] = useState(false)

    return (
        <div className='flex flex-row static' >
            {isShow ? <span className='w-full blur-md'>
                <div className="h-16 w-full bg-cyan-500 px-4 pt-4 text-white" >
                    <b > &lt; Saving Segment</b>
                </div>
                <div>
                    <button
                        className='text-black border border-black font-bold py-2 px-4 rounded w-36 ml-8 mt-8'
                        onClick={() => { setIshow(!isShow) }} >Save Segment</button>
                </div>
            </span> :
            <span className='w-full'>
            <div className="h-16 w-full bg-cyan-500 px-4 pt-4 text-white" >
                <b > &lt; Saving Segment</b>
            </div>
            <div>
                <button
                    className='text-black border border-black font-bold py-2 px-4 rounded w-36 ml-8 mt-8'
                    onClick={() => { setIshow(!isShow) }} >Save Segment</button>
            </div>
        </span>
            }
            <div className='absolute right-0 bg-slate-200 flex justify-between' >
                <div className='h-screen'>{isShow && <DetailsCard setIshow={setIshow}/>}</div>
            </div>
        </div>

    )
}
export default Home