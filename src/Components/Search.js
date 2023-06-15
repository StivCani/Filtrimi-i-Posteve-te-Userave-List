import React from "react";
function Search(props) {

    const {  onSearch } = props
    return (
        <>
            <div className="templateContainer">
                <div className="searchInput_Container">
                    <input id="searchInput" type='text' placeholder="Put text" onChange={(e) => {
                        onSearch(e.target.value)
                    }
                    }>

                    </input>

                </div>
            </div>
        </>
    )
}

export default Search