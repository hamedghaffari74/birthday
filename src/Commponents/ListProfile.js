import React, { useContext } from 'react'
import Context from '../Context/Context'
import Profile from './Profile';
import axios from 'axios'
import ImageUser from './ImageUser';

const ListProfile = () => {

  let context = useContext(Context)




  // let esme = context.state.person.map((item) => item.map((asl) => console.log(asl.esme)))

  return (
    <div>

      {context.state.person.map((item) => item.map((asl) => <Profile asl={asl} key={asl.key} img={asl.img} date={asl.date} esme={asl.esme} />))}
    </div>
  )
}

export default ListProfile
