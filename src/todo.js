
import { useEffect, useState } from 'react';
import './todo.css'

function Todo() {

    const [items , setItems] = useState([]);

    const [selected , setSelected] = useState([]);

    const [showItems , setShowItems] = useState(false);
    const [showSelected , setShowSelected] = useState(true);

    const [search , setSearch] = useState("");

    useEffect(()=>{
            getItems();
    } , [search]);

    async function getItems() {
        let x = await fetch("https://api.frontendeval.com/fake/food/mi");
        let data = await x.json();

        if(search.length === 0)
        {
            setItems([]);
            setShowSelected(true);
        }
        else{
            setItems(data);
            setShowItems(true);
            setShowSelected(false);
            
        }
    }
    
    function insertItem(item) {

        if(item.length !== 0)
        {
            setSelected([...selected , item]);
        }

        setSearch("");

        setShowItems(false);

        setShowSelected(true);

    }

    function deleteItem(item) {
        let arr = [];

        arr = selected.filter((ele)=>{ return item !== ele});

        setSelected(arr);
    }

    return(
        <>
            <div className="parent">

                <div className="child">
                    <input type="text" placeholder="Enter the item name" value={search} onChange={(e)=>{setSearch(e.target.value)}} />

                    <button onClick={(e)=>{insertItem(search)}}>✔</button>
                </div>

                {
                    showItems && 
                    <div className="items">
                    {
                        items.filter((ele)=>{
                            return ele.toLowerCase().includes(search.toLowerCase());
                        })
                        .map((ele,idx)=>{
                            return (
                                <div className='item' key={idx}>
                                    <p>{ele}</p>
                                    <button onClick={(e)=>{insertItem(ele)}}>✔</button>
                                    
                                </div>
                            )
                        })
                    }
                </div>
                }

                {
                    showSelected &&

                    <div className='selected-items'>
                    {
                        selected.map((ele,idx)=>{
                            return (
                                <div className='selected-item' key={idx}>
                                    <p>{ele.toUpperCase()}</p>
                                    <button onClick={(e)=>{deleteItem(ele)}}>🗑</button>
                                    
                                </div>
                            )
                        })
                    }
                </div>
                }
                
            </div>
        </>
    )
}

export default Todo;