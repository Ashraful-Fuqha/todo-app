import { TaskCard } from '@/components/TaskCard'

function Home() {

  return (
    <div className='container mx-auto px-7 bg-background'>
      <div className='pb-5'>
          <h4 className='text-xl'>Hello, <span>{"Micel"}</span></h4>
          <div className='flex gap-2'>
            <h1 className='text-5xl font-semibold'>Your <br />Project <span className='font-normal text-3xl'>{"(4)"}</span></h1>
            <img src="/p1.jpg" alt="" className='w-20 h-20 rounded-full' />
          </div>
      </div>
      <div className='py-3 grid grid-cols-1 gap-2 min-[810px]:grid-cols-[repeat(auto-fill,minmax(310px,1fr))] min-[810px]:gap-5'>
        <TaskCard/>
      </div>
    </div>
  )
}

export default Home