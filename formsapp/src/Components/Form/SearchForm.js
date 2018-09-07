import React, {Component} from 'react'
import axios from 'axios'

import { ToastContainer } from 'react-toastify'
import notify from '../notify'

class SearchFroms extends Component{
    state={
        creator_id: 1,
        loaded: false,
        forms:[],
    }

    componentDidMount(){
        let token = undefined
        if(localStorage.hasOwnProperty('token')){
            token = 'Bearer ' + localStorage.getItem('token')
        }

        axios.get(`http://localhost:5000/form/getForms/${this.state.creator_id}`, { headers: { Authorization: token } }).then((res)=>{
            this.setState({forms:res.data, loaded: true})
            console.log(res)//treba dodati ako nema od tog korisnika anketa 
        }).catch((err)=>{
            if(err.response.status == 403 ){
                window.location.href = '/unauthorizes'
            }else{
                notify(err.message)
            }
        })
    }

    render(){ return(
        <div className='container'>
            {this.state.loaded === false && <div>Loading...</div>}
            {this.state.loaded && <div>
                <br/>
                <a className="btn-large waves-effect waves-light yellow darken-4 center center" href='/form'>NEW FORM</a>
                <br/>
                {this.state.forms.map((form)=>(
                <div className = 'card white '>
                            <h1>
                                {form.title}
                            </h1>
                            <p>
                                {form.description}
                            </p>
                            <div>
                                Link: {" "}
                                <a href={`/fill/${form._id}`} className='grey-text'>
                                    http://localhost:3000/fill/{form._id}
                                </a>
                            </div>

                            <div>
                                Results: {" "}
                                <a href={`/result/${form._id}`} className='grey-text'>
                                    http://localhost:3000/result/{form._id}
                                </a>
                            </div>
                        
                </div>
            ))}
            </div>
        }
        <ToastContainer/>
        </div>
    )}
}

export default SearchFroms