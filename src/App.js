import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Components/Search"
import Posts from "./Components/Posts"



function App() {
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');



    useEffect(() => {
        setLoading(true)
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((result) => {
                console.table(result.data)
                const selectData = [];
                result.data.forEach(user => {
                    selectData.push({ value: user.id, text: user.username })
                })
                setUsers(selectData)
                setLoading(false)
            })
    }, [])



    const renderUsers=()=>{
        return (
            <ul>
                {users.filter(x=>x.text.toLowerCase().includes(search)).map(user =>
                    <li key={user.value} onClick={()=>{
                        setSelectedUserId(user.value)
                    }}>{user.text}</li>)}
            </ul>
        )
    }
    return (
        <>
            {!selectedUserId && <Search onSearch={(text) => {
                setSearch(text)
            }} />}
            {loading ? <div> ...loading</div> : !selectedUserId?  renderUsers() : null}
            {selectedUserId && <Posts userId={selectedUserId} onGoBack={()=>{setSelectedUserId(null)}} />}
        </>
    )



}
export default App