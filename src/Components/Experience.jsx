

export default function Experience() {
    const ExpList = [
        {name: 'HTML', color: '#c24d2c', length: '50%'},
        {name: 'CSS', color: '#2f89fc', length: '75%'},
        {name: 'Javascript', color: '#ffc93c', length: '70%'},
        {name: 'React', color: '#0092ca', length: '40%'},
        {name: 'Tailwind', color: '#8971d0', length: '80%'},
        {name: 'Python', color: '#4c9173', length: '60%'},
        {name: 'React Native', color: '#1ee3cf', length: '45%'},
        {name: 'Flutter', color: '#49beb7', length: '25%'},
    ]

  return (
    <>
        <div className='w-[100%] bg-gray-700 pl-20 lg:pl-44 pr-6'>
            <div className='w-[100%] flex justify-center flex-col'>
            <div className='flex justify-center'>
                <h1 className='pt-7 text-white font-PtSans font-bold text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px]'>My <span className='text-gray-900 bg-white px-2 py-1 rounded-md'>Experince</span></h1>
            </div>
                <div className='my-10 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                    {
                        ExpList.map((elem, ind)=>{
                         
                            return(
                                <div className='my-5 relative text-white flex flex-col  font-semibold font-PtSans' key={ind}>
                                    <h1>{elem.name} <span style={{color: `${elem.color}`}} >{elem.length}</span></h1>
                                    <span className="h-1" style={{backgroundColor: `${elem.color}`, width
                                    : `${elem.length}`}}></span>                                 
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>
  )
}
