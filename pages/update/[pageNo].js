import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
const EditPage = () => {

    const router=useRouter();
    const pageno=router.query.pageNo;
    const [editinput,setEditinput]=useState()
    const [eid,setEid]=useState();



    const fetchSingleData=async()=>{

        const res=  await axios.get(`https://642bec39208dfe254722fdf8.mockapi.io/product/${pageno}`)
        const mydata=await res.data;
        // console.log(data)
      setEid(mydata.id)
    
    setEditinput(mydata.name)

    //  await console.log(edata)

    }
    

useEffect(()=>{

  if(pageno!==undefined){
    fetchSingleData();
  }

},[])




const updatehandler=async(e)=>{

e.preventDefault()


alert("Updated Secessfully")
    await axios.put(`https://642bec39208dfe254722fdf8.mockapi.io/product/${eid}`,{
    name:editinput
  }).then(()=>{
    router.push('/')



  })

}


  return (
    <div className="flex py-[4rem] flex-col w-screen  pt-[10rem] h-[100vh] gap-[4rem] items-center  bg-slate-200"  ><h1  className="font-bold text-3xl  uppercase"> You are Updating ID No. {pageno} </h1>

<form  className='flex flex-col items-center gap-[4rem]'   onSubmit={updatehandler}>

<input type="text" placeholder='enter name' value={editinput} onChange={(e)=>setEditinput(e.target.value)}  className='w-[470px] p-[15px] shadow-2xl   outline-none border-none' />
<div  className="flex justify-between  gap-[2rem]">
<button className='w-[150px]  bg-black text-white p-[15px]' type="submit" >Update</button>


<Link    href="/" className='w-[150px] flex justify-center items-center bg-black text-white p-[15px]' >Home </Link>
</div>



</form>

    
    
    
    </div>
  )
}

export default EditPage