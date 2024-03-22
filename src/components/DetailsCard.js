import React, { useState } from "react";
import SegmentCard from "./SegmentCard";

function DetailsCard() {
    const [segName, setSegName] = useState("")
    const [selectedSchema, setSelectedSchema] = useState("")
    const [selectedValue, setSelectedValue]= useState("")
    const [data, setData] = useState([])
    const [segments, setSegments] = useState([])

    let arr = [
        { id: 1, value: "first_name", name: "First Name" },
        { id: 2, value: "last_name", name: "Last Name" },
        { id: 3, value: "gender", name: "Gender" },
        { id: 4, value: "age", name: "Age" },
        { id: 5, value: "account_name", name: "Account Name" },
        { id: 6, value: "city", name: "City" },
        { id: 7, value: "state", name: "State" },
    ]

    const handleNameChange = (e) =>{
        setSegName(e.target.value)
    }

    const handlChange = (e) => {
      const val = e.target.value
      const values= arr.filter((ele)=>ele.value === val)
      setSelectedValue(val)
      setSelectedSchema([...selectedSchema, {[values[0].name]: values[0].value}])
    }
    const handleClick = () =>{
        const newArr=  (data.length !=0 ? data : arr).filter((ele)=>ele.value != selectedValue)
        setData(newArr)
        const obj = { data:newArr}
        setSegments([...segments, obj])
    }

    const handleSaveClick = () =>{
        console.log({segment_name:segName,schema:selectedSchema})
    }

    return (
        <div>
            <label>Enter the Name of the Segment</label>
            <input type="text" onChange={handleNameChange}/>
            <p>To save you segment, you need to add the schemas to build the query</p>
            { segments && segments.map((ele,i)=>{
                return <SegmentCard key={i+1}  data={ele.data} />

            }) }
            <select onChange={handlChange}  >
                <option value="">Add Schema to segment</option>
                {
                    (data.length !=0 ? data : arr).map((ele) => {
                        return (<option key={ele.id} value={ele.value} >{ele.name}</option>)
                    })
                }
                
            </select>
            <a onClick={handleClick} >+ Add new schema</a>
            <button onClick={handleSaveClick} >Save the segment</button>
        </div>
    )

}

export default DetailsCard