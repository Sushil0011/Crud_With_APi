import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
const Index = () => {


  const [mydata, setData] = useState([])
const [input,setInput]=useState('')

const [toggle,setToggle]=useState(true)
const [eid,setEid]=useState(null);


  const fetchdata = async () => {


    const res = await axios.get("https://642bec39208dfe254722fdf8.mockapi.io/product")
    const data = await res.data;
    await setData(data)
  }



  



  // console.log( "Fetched",mydata)









  const addData=(e)=>{
e.preventDefault();

if(!input){
  alert("Enter Name")
}


// else if(input && !toggle){
  
// console.log(eid)
//  axios.put(`https://642bec39208dfe254722fdf8.mockapi.io/product/${eid}`,{
//     name:input

//   })
//   .then(()=>{
//     fetchdata();
//   })
// console.log(input)
// }


else{
axios.post("https://642bec39208dfe254722fdf8.mockapi.io/product",{
  name:input
}).then(()=>{
  fetchdata();
})

setInput("");

  }
}


  const deletehandler=  async(elem)=>{

  const res= await axios.delete(`https://642bec39208dfe254722fdf8.mockapi.io/product/${elem.id}`).then((()=>{
    fetchdata();
  }))

  }




// const updatehandler=(elem)=>{
// setToggle(false)
// setInput(elem.name)
// setEid(elem.id)

// }



  useEffect(() => {
    fetchdata();




  }, [])

  return (



    <div className='w-screen h-screen gap-[2rem] flex flex-col items-center   p-[4rem]'>

      <h1 className='text-3xl uppercase  font-bold' >Crud With Api</h1>

      <form  className='flex flex-col items-center gap-[2rem]'>

        <input type="text" placeholder='enter name' value={input} onChange={(e)=>setInput(e.target.value)}  className='w-[400px] p-[15px] shadow-2xl   outline-none border-none' />
<button className='w-[150px]  bg-black text-white p-[15px]'  onClick={addData}>
  
   Post Data
  
 </button>

      </form>




      <section className='w-[90vw]  py-[4rem]  flex items-center gap-[1.5rem]   flex-col'>
         

         {

          mydata.map((elem)=>{
            // console.log(elem)
            return(
              <div    key={elem.id} className='w-[400px] flex justify-between bg-slate-100 p-[15px]' >{elem.name}  
              
              <div className='flex gap-[2rem]'>

<Link href={`/update/${elem.id}`}> Update</Link> 
                <button  onClick={ ()=>deletehandler(elem)}>
                Delete
                </button>
              </div>
              
              
              </div>
            )


          })
         }
      
      </section>
    </div>
  )
}

export default Index