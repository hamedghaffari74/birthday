import React ,{useEffect ,useState , useContext} from 'react'
import Adrian from './../Image-src/Adrian.jpg'
import axios from 'axios'
import Context from '../Context/Context'

const ImageUser = ({asl ,img}) => {
  
let context = useContext(Context)

  return (
    <div>
   <img src={Adrian} alt='photo' className='Imageuser'/>

    </div>
  )
}

export default ImageUser
