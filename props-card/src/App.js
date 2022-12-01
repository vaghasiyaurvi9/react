import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './componets/Card';
import Card from './componets/Card';
import Blog from './componets/Blog';
import { FaStar } from "react-icons/fa";
import Demo from './componets/Demo';


// const info = [
//   {"name":"kishan","surname":"vaghasiya","city":"surat"},
//   {"name":"kishan","surname":"vaghasiya","city":"surat"},
//   {"name":"kishan","surname":"vaghasiya","city":"surat"},
// ];

// const arr = [
//   {"course":"web developer","img": require('./img/1.jpg') 
//   , "detail":"What Is The UX Design Process? UI/UX design was firstly introduced by Donald Norman in the end 1990s. UX design is to"},

//   {"course":"Blender 3D Design","img": require('./img/2.jpg')

//     ,"detail":"What Is The UX Design Process? UI/UX design was firstly introduced by Donald Norman in the end 1990s. UX design is to"
//   },
//   {"course":"flutter","img": require('./img/2.jpg')

//   ,"detail":"What Is The UX Design Process? UI/UX design was firstly introduced by Donald Norman in the end 1990s. UX design is to"
// },

// ]


// const image=[
//   {"image1":require('./img/3.jpg'),"city":"surat yogi chok","course":"fultter"},
//   {"image1":require('./img/2.jpg'),"city":"surat yogi chok","course":"fultter"},
// ];


// const info = [
//   { "img": require('./img/4.jpg'), "course": "full stack", "detail": "The internet has grown exponentially. In this world, everyone has internet access and a large percentage of the public uses the" },
//   { "img": require('./img/5.png'), "course": "Master In ASP.net development", "detail": "Advanced ASP.net development" },
//   { "img": require('./img/6.jpg'), "course": "full stack", "detail": "The internet has grown exponentially. In this world, everyone has internet access and a large percentage of the public uses the" },
//   { "img": require('./img/7.jpg'), "course": "full stack", "detail": "The internet has grown exponentially. In this world, everyone has internet access and a large percentage of the public uses the" },
//   { "img": require('./img/8.jpg'), "course": "full stack", "detail": "The internet has grown exponentially. In this world, everyone has internet access and a large percentage of the public uses the" },
//   { "img": require('./img/9.jpg'), "course": "full stack", "detail": "The internet has grown exponentially. In this world, everyone has internet access and a large percentage of the public uses the" },
//   { "img": require('./img/1.jpg'), "course": "full stack", "detail": "The internet has grown exponentially. In this world, everyone has internet access and a large percentage of the public uses the" },
//   { "img": require('./img/2.jpg'), "course": "full stack", "detail": "The internet has grown exponentially. In this world, everyone has internet access and a large percentage of the public uses the" },
//   { "img": require('./img/3.jpg'), "course": "full stack", "detail": "The internet has grown exponentially. In this world, everyone has internet access and a large percentage of the public uses the" },
//   // {"icon":<FaStar/>,"detail":"The internet has grown exponentially. In this world, everyone has internet access and a large percentage of the public uses the"},
// ];

// const iconcard = [
//   { "icon": <FaAccessibleIcon />, "heading": "Industry Experts As Trainers", "inf": "Our trainers have 5+ years of industry experience coupled with extensive research and analysis." }, 
//    { "icon": <FaAccessibleIcon />, "heading": "Industry Experts As Trainers", "inf": "Our trainers have 5+ years of industry experience coupled with extensive research and analysis." },
//    { "icon": <FaAccessibleIcon />, "heading": "Industry Experts As Trainers", "inf": "Our trainers have 5+ years of industry experience coupled with extensive research and analysis." },
//    { "icon": <FaAccessibleIcon />, "heading": "Industry Experts As Trainers", "inf": "Our trainers have 5+ years of industry experience coupled with extensive research and analysis." },
//    { "icon": <FaAccessibleIcon />, "heading": "Industry Experts As Trainers", "inf": "Our trainers have 5+ years of industry experience coupled with extensive research and analysis." },
//    { "icon": <FaAccessibleIcon />, "heading": "Industry Experts As Trainers", "inf": "Our trainers have 5+ years of industry experience coupled with extensive research and analysis." },
// ];


const Urvish=[
  {"image":require('./img/1.jpg'),"iconn":<FaStar/>,"course":"fullstack"},
  {"image":require('./img/1.jpg'),"iconn":<FaStar/>,"course":"fullstack"},
];

var kishan=[
  {"img":require('./img/4.jpg'),"city":"surat"},
];
function App() {
  return (
    <>

    <div>
     {
      Urvish.map((a)=>{
        return(
          <Demo image={a.image} iconn={a.iconn} course={a.course}/>
        )
      })
     }
    </div>

    <div>
      {
        kishan.map((i)=>{
          return(
            <Demo img={i.img} city={i.city}/>
          )
        })
      }
    </div>




      {/* <div>
        {
          second.map((b)=>{
            return(
              <Card img={b.img} time={b.time} sirname={b.sirname}/>

            )
          })
        }
      </div>

<div>
  {
    third.map((dk) =>{
      return(
        <Card img={dk.img} city={dk.city}/>
      )
    })
  }
</div>



    <div>{
      image.map((a)=>{
        return(
          <Card image1={a.image1} city={a.city} course={a.course}/>

        )
      })
    }
    </div>

    
      <About />
    
<div>
  {
    info.map((i)=>{
      return(
        <>
          <Card name={i.name} surname={i.surname} city={i.city}/>
        </>
      )
    })

    
  }  
</div>


<ul>
  {
    arr.map((a)=>{
      return(
        <Card course={a.course} img={a.img} detail={a.detail}/>
      )
    })
  }
</ul>
 */}
      {/* <div className="container">

        <div className='row'>
          {
            info.map((t) => {
              return (
                <>
                  <Blog img={t.img} course={t.course} detail={t.detail} />
         

                </>
              );

            })
          }
        </div> */}

      {/* </div> */}


      <div className='container'>
       <div className="row">
       {
          iconcard.map((h) => {
            return (
              <Blog icon={h.icon} heading={h.heading} inf={h.inf} />
            );
          })
        }
       </div>
      </div>


    </>
  );
}
export default App;
