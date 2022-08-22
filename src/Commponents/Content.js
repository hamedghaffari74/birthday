import React from 'react'
import FormAdd from './FormAdd'
import ListProfile from './ListProfile'
const Content = () => {
    return (
        <div className='row Content'>
            <div className='col-4'> <img className=' imgContent' src={`https://tse1.explicit.bing.net/th?id=OIP.mpcDjv-ZdkS9fR6b20en_gHaLH&pid=Api&P=0`} /> </div>
            <div className='col-4'> <FormAdd /> <ListProfile /></div>
            <div className='col-4'><img className=' imgContent' src={`https://tse1.explicit.bing.net/th?id=OIP.mpcDjv-ZdkS9fR6b20en_gHaLH&pid=Api&P=0`} /> </div>

        </div>
    )
}

export default Content
