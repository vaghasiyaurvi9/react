function Card(abc){
    return(
            <>
            {/* <div className="box">
                 <h1>{abc.name}</h1>
                 <h6>{abc.surname}</h6>
                 <p>{abc.city}</p>
            </div>


            <div className="row container">
               <div className="col-4 d-inline border bg-light">
            
             <img src={abc.img} ></img>
                <h1>{abc.course}</h1>
                <p>{abc.detail}</p>
             
               </div>
                
            </div> */}

            {/* <div>
                <img src={abc.image1}></img> 
                <p>{abc.city}</p>
                <h2>{abc.course}</h2>
            </div> */}


            <div>
                <img src={abc.img} ></img>
                <h4>{abc.time}</h4>
                <h1>{abc.sirname}</h1>
                <img src={abc.img}></img>
            </div>


           
            </>
    )
}
export default Card