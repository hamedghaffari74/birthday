import React ,{useEffect ,useState , useContext} from 'react'
import Adrian from './../Image-src/Adrian.jpg'
import axios from 'axios'
import Context from '../Context/Context'

const ImageUser = ({asl ,img}) => {
  
let context = useContext(Context)

 let pic =context.state.person.map(item=> <img key={item.key} src={item.img} alt='photo' height={'auto'} width={'auto'} className='Imageuser'></img>) 
  console.log(pic);
  return (
    <div>
   
     {pic}
    </div>
  )
}

export default ImageUser
