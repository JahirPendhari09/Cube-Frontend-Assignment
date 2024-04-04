import React from 'react'

type props ={
  currCustomer :number
}
const MainContainer:React.FC<props> = ({currCustomer}) => {
  return (
    <div className='mx-10 '>
      <h1 className='text-center text-2xl mt-4'>Customer {currCustomer+1} Details here</h1>
      <p className='text-center mt-5 w-10/12 m-auto'>{currCustomer%2 ==0 ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias numquam, sed est repudiandae amet molestias perferendis optio sint velit repellat ipsam explicabo! Quae animi temporibus et voluptates laudantium, velit architecto ad enim quia natus ab, dolorum nam eveniet, error aliquid.':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aspernatur, autem voluptas quibusdam sunt odit vel sint porro omnis, recusandae reiciendis fugit eos nostrum eveniet repellendus ad rerum cumque delectus!'}</p>
      <div className=' grid grid-cols-3 w-11/12 m-auto gap-4 mt-4' >
        {
          new Array(9).fill(1).map((curr)=>{
            return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlUInaG1-Xp2oYbAy2FN57lRqQ0crQ7VdNxJjFeh_adw&s" alt="random-image" className='rounded-xl cursor-pointer'/>
          })
        }
        
      </div>
    </div>
  )
}

export default MainContainer
