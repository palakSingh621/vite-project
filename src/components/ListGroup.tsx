
function ListGroup(){
    const items=['agra','delhi','noida','banglore','hydrabad'];
    return (
    <>
        <h1>List</h1>
        <ul className="ListGroup">
           {items.map((item)=>(<li>{item}</li>))}
        </ul>
    </>
    );
}
export default ListGroup; 