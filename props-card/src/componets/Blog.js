
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
function Blog(props) {
    return (
        <>


            <div className="col-xl-4 col-lg-4 col-md-6 col-12 ">
                <div className="border mb-3 shadow-lg parent rounded-4 ">
                    <img src={props.img} className="w-100 h-100 zoom" />
                    <h5 className="mt-4 ps-3">{props.course}</h5>
                    <p className="ps-3">{props.detail}</p>
                    <hr />
                    <div className="pb-3 ps-3">
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStarHalfAlt className="text-warning me-5" />
                        <div className="py-2 px-4 bg-primary d-inline text-white ms-5">Know more...!</div>
                    </div>

                   




                </div>
                {/* <div className="border text-center p-3  rounded-4 bg-white">
                        <h1 className="bg-warning d-inline p-6 py-3 rounded-circle p-3 px-4 text-white">{props.icon}</h1>
                        <h3 className="mt-4">{props.heading}</h3>
                        <p className="text-muted ">{props.inf}</p>
                </div> */}




            </div>








        </>

    )
}
export default Blog