import React from 'react'
import AddTask from '../AddTask/addtask'
import ConfirmBox from '../Components/ConfirmBox'
const Todolist = (props) => {
    const [list, setList] = React.useState([])
    const [visiblity, setVisiblity] = React.useState(false)
    var box;
    const addItems = val => {
        if (!val.value) { return }
        else {
            const todolist = [...list, val]
            setList(todolist)
            console.log(list, "list.value")
            // alert(val.value)
        }
    }
    const toggle = (currentval) => {
        let temp = [...list]
        temp[currentval].isComplete = !temp[currentval].isComplete
        console.log(temp[currentval].isComplete, "currentval.isComplete")
        setList(temp)
    }
    const remove = (index) => {
      
            let temp = [...list]
            temp.splice(index, 1)
            setList(temp)
            console.log(list, "currentval.splice")
        
    }
    const edit = (index) => {
        let temp = [...list]
        temp[index].onEdit = !temp[index].onEdit
        setList(temp)
    }
    const update = (data, index) => {
        let temp = [...list]
        temp[index].value = data
        setList(temp)
        console.log(list, "currentval.splice")

    }
    return (
        <div>
            <AddTask AddItems={addItems} AddToDo={list} Toggle={toggle}
                Remove={remove} Edit={edit} Update={update} />
            {visiblity &&
                <div><ConfirmBox visiblity={true}/></div>
            }
        </div>
    );
}
export default Todolist;