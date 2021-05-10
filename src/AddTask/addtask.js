import React from 'react';
import '../todo.scss';
import Todolist from '../Todolist/Todolist';
const AddTask = (props) => {
    const [txtvalue, setTxtValue] = React.useState('')
    const[txtupdate,setUpdate]=React.useState('')
    const[visiblity,setVisiblity]=React.useState(false)
    const handleChange = (e) => {
        setTxtValue(e.target.value)
    }
    const handleClick = () => {
        let i = 0;
        let index = i++;
        props.AddItems({
            value: txtvalue,
            isComplete: false,
            onEdit: false
        })
        setTxtValue('')
    }
    const todolist = props.AddToDo.map((data) => {
        return (
            <div>{data.value}</div>
        )
    })
    const handleEdit = (updateval,i) => {
        setUpdate(updateval)
        props.Edit(i)
        if(txtupdate!=updateval){
            props.Update(txtupdate,i)
        }
       
        // props.Update(updateval,i)
    }
    const handleUpdateValue = e =>{
        setUpdate(e.target.value)
    }

    return (
        <div>
            <div className="addtask">
                <input type="text" onChange={handleChange} value={txtvalue}></input>
                <input type="submit" value="+" onClick={handleClick}></input>

                {
                    props.AddToDo.map((data, index) => {
                        return (
                            <div key={index} className="items_div">
                                <span className="remove" onClick={() => {
                                    props.Remove(index)

                                }}>X</span>
                                {data.onEdit ?
                                    <input className="edit_txtbox" type="text"
                                    onChange={handleUpdateValue} value={txtupdate}></input>
                                    :
                                    <div className={data.isComplete ? "green" : "li_data"} onClick={
                                        () => props.Toggle(index)
                                    }>{data.value}</div>
                                }
                                <button className="editbtn" name="Edit" disabled={data.isComplete?true:false} onClick={() => handleEdit(data.value,index)}>{data.onEdit?"Update":"Edit"}</button>
                            </div>
                        )
                    })
                }


                {/* <div>{todolist}</div> */}
            </div>
        </div>
    );
}
export default AddTask;