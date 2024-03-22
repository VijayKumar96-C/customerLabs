import React from "react";

function SegmentCard({data}) {
    const handlChange = (e) => {
        console.log(e.target.value)
    }
    return(
        <div>
           {data.length !==0  && (
                    <select onChange={handlChange} >
                            {data.map((ele)=>{
                                return(<option key={ele.id} value={ele.value} >{ele.name}</option>)
                            })}
                    </select>
                )}
        </div>
    )

}

export default SegmentCard
