function PropArray({items = [], clickMethod}){

    return (
        <ul>
            {items.map((item,index)=> (
                <li key={index} onClick={ ()=> clickMethod(item)
                }>{item}</li>
            ))}
        </ul>
    );

}

export default PropArray