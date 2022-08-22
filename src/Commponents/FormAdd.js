import React from 'react'
import axios from 'axios'
import Context from '../Context/Context'

class FormAdd extends React.Component {
    
  

    state = { esme: '' , date: '', img: ''}
    static contextType = Context

    formHandler(e) {
        e.preventDefault();
        let person = { esme: this.state.esme ,date: this.state.date , img:this.state.img , reminder:false}
        axios.post(`https://birthday-b0c8d-default-rtdb.asia-southeast1.firebasedatabase.app/person.json`, person)

            .then(response => this.Context.dispatch({ type: 'add-person', payload: { person: { ...person, key: response.data.name } } }))
            .catch(err => console.log(err))
            this.setState({date: '' })
            this.setState({esme: '' })
            this.setState({img: '' })

    }
   
    inputHandlerName(e) { this.setState({ esme: e.target.value })}
    inputHandlerDate(e) { this.setState({ date:e.target.value })}
    inputHandlerImage(e) { this.setState({img:e.target.value })}
    render() {
       
        return (
            <form className="mb-3" style={{ minWidth: '450px' }} onSubmit={this.formHandler.bind(this)}>
                      <label className="form-label">لطفا یک عکس را وارد کنید</label>
                <input type="file" className="form-control  " id="exampleFormControlInput1" value={this.state.img} onChange={this.inputHandlerImage.bind(this)}/>
                <label className="form-label">نام خود را وارد کنید</label>
                <input type="text" className="form-control bg-info" id="exampleFormControlInput1" value={this.state.esme} onChange={this.inputHandlerName.bind(this)} />
                <label className="form-label">لطفا تاریخ تولد را وارد  کنید</label>
                <input type="date" className="form-control bg-info" id="exampleFormControlInput1" value={this.state.date} onChange={this.inputHandlerDate.bind(this)} />
                <button className='btn btn-primary' type='submit' > ثبت</button>
            </form>
        )
    }
}
export default FormAdd
