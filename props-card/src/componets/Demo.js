function Demo(props){
    return(
        <>
        <img src={props.image} alt="" />
        <h4></h4>


        <img src={props.img} />
        <h1 className="text-center">{props.city}</h1>
        </>
    )
}
export default Demo