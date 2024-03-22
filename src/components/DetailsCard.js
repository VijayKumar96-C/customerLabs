import React, { useState } from "react";
import SegmentCard from "./SegmentCard";

function DetailsCard({setIshow}) {
    const [segName, setSegName] = useState("")
    const [selectedSchema, setSelectedSchema] = useState("")
    const [selectedValue, setSelectedValue] = useState("")
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

    const handleNameChange = (e) => {
        setSegName(e.target.value)
    }
    const handlChange = (e) => {
        const val = e.target.value
        const values = arr.filter((ele) => ele.value === val)
        setSelectedValue(val)
        setSelectedSchema([...selectedSchema, { [values[0].name]: values[0].value }])
    }
    const handleClick = () => {
        const newArr = (data.length != 0 ? data : arr).filter((ele) => ele.value != selectedValue)
        setData(newArr)
        const obj = { data: newArr }
        setSegments([...segments, obj])
    }
    const handleSaveClick = () => {
        console.log({ segment_name: segName, schema: selectedSchema })
    }


    return (
        <div className="w-full relative bg-white h-screen" >
            <div className="h-16 bg-cyan-500 px-4 pt-4 text-white" >
                <b > &lt; Saving Segment</b>
            </div>
            <div className="p-6" >
            <label>Enter the Name of the Segment</label> <br />
            <input
                className="my-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-black"
                placeholder="Name of the Segment"
                type="text"
                onChange={handleNameChange} />
            <p className="py-4" >To save you segment, you need to add the schemas to build the query</p>
            {segments && segments.map((ele, i) => {
                return <SegmentCard key={i + 1} data={ele.data} />
            })}
            <select
                className="my-4 w-96 h-12 border border-black"
                onChange={handlChange}  >
                <option value="">Add Schema to segment</option>
                {
                    (data.length != 0 ? data : arr).map((ele) => {
                        return (<option key={ele.id} value={ele.value} >{ele.name}</option>)
                    })
                }
            </select> <br />
            <a className="text-green-400 underline underline-offset-4" onClick={handleClick} >+ Add new schema</a><br />
            </div>
            <div className="w-full mt-12 py-8 pl-6  bg-gray-200" >
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSaveClick} >Save the segment</button>
                <button
                onClick={()=>{setIshow(false)}}
                    className="text-black hover:bg-green-700 hover:text-white  border border-black font-bold py-2 px-4 mx-2 rounded text-red-700"
                >Cancel</button>
            </div>
        </div>
    )
}

export default DetailsCard