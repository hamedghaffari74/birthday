import React, { useContext, useState ,useEffect} from 'react'
import ImageUser from './ImageUser'
import { Link } from 'react-router-dom'
import { __esModule } from '@testing-library/jest-dom/dist/matchers'
import Context from '../Context/Context'
import axios from 'axios'

const Profile = ({ esme, date, asl, img }) => {

    const [act, setAct] = useState(false)

    useEffect (()=> {
        if (day == birthday[2] && month== birthday[1]) {
         axios.put(`https://birthday-c3a46-default-rtdb.asia-southeast1.firebasedatabase.app/person/${asl.key}.json` , {reminder: !asl.reminder , esme , date ,img});
            alert('  امروز تولد '  +asl.esme + '  عزیز است')
         setAct(true)
        } 
      },[])

      const d = new Date()
      const day = d.getDate();
      const month = d.getMonth()+1;
      
      const datestr =String(date)
      const birthday  = datestr.split('-');
    


    let context = useContext(Context)
    let closebtn = (id) => {
        axios.delete(`https://birthday-b0c8d-default-rtdb.asia-southeast1.firebasedatabase.app/person/${asl.key}.json`)
            .then(response => context.dispatch({ type: 'delete', payload: { key: asl.key } }))
            .catch(err => console.log(err))
    }
  
    return (
        <div className="card mb-3 " style={{ minWidth: '450px' }}>
            <div className="row g-0 ">
                <div className="col-md-4 ">
                    <ImageUser />
                </div>
                <div className="col-md-8 ">
                    <div className={`card-body  pt-1 pe-0 ${act ? 'active' : ''}`}>
                        <button type="button" onClick={closebtn} className="btn-close pt-0  float-end " aria-label="Close"></button><br></br>
                        <h3 className="card-title CardTittel" >{esme}</h3>
                        <br />
                        <h3 className="card-text CardTittelDate">{date}</h3>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile 
