import React, { useState } from 'react'

const objStaff = [
    {
        name: "Hoang The Viet",
        age: 25,
        selected: false
    },
    {
        name: "Nguyen Van A",
        age: 30,
        selected: false
    },
    {
        name: "Luu Van B",
        age: 27,
        selected: false
    },
]

const SwitchItem = () => {
    const [left, setLeft] = useState(objStaff || [])
    const [right, setRight] = useState([])
    
    const onSelectItem = (item, arr, type) => {
        const itemSelected = arr.map((i) => {
            if(i.name === item.name) {
                return {
                    ...item,
                    selected: !i.selected
                }
            } 
            return {
                ...i
            }
        })
        
        type === 1 ? setLeft(itemSelected) : setRight(itemSelected)
    }

    const listLeft = left?.map((item, idx) => {
        return <li key={idx} style={{backgroundColor: item.selected ? 'red' : ""}} onClick={() => onSelectItem(item, left, 1)}>{item.name} - {item.age}</li>
    })
    const listRight = right?.map((item, idx) => {
        return <li key={idx} style={{backgroundColor: item.selected ? 'red' : ""}} onClick={() => onSelectItem(item, right, 2)}>{item.name} - {item.age}</li>
    })

    const onSwitchItem = (arr, type) => {
        const itemSelected = arr.filter(item => item.selected === true)
        const itemUnSelected = arr.filter(item => item.selected !== true)
        const iU = itemSelected.map((u) => {
            return {
                ...u,
                selected: false
            }
        })
        if(itemSelected) {
            if(type === 1) {
                setRight((prev) => {
                    return [...prev,  ...iU ];
                  });
            }else {
                setLeft((prev) => {
                    return [...prev,  ...iU ];
                  });
            }
        }
        if(itemUnSelected) {
            if(type === 1) {
                setLeft(itemUnSelected)
            } else {
                setRight(itemUnSelected)
            }
        }
    }
    
    return (
        <div style={{display: 'flex'}}>
        <div style={{width: 300, border: "1px solid #fff"}}>
        <ul>{listLeft}</ul>
        </div>
        <div style={{display: 'flex', flexDirection: "column", margin: "1em"}}>
        <button onClick={() => onSwitchItem(left, 1)}>----/</button>
        <button onClick={() => onSwitchItem(right, 2)}>/----</button>
        </div>
        <div style={{width: 300, border: "1px solid #fff"}}>
        <ul>{listRight}</ul>
        </div>
        </div>
    )
}
export default SwitchItem;