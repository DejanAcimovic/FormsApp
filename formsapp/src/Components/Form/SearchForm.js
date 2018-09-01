import React, {Component} from 'react'
import axios from 'axios'

class SearchFroms extends Component{
    state={
        creator_id: 1,
        loaded: false,
        forms:[],
    }

    componentDidMount(){
        axios.get(`http://localhost:5000/form/getForms/${this.state.creator_id}`).then((res)=>{
            this.setState({forms:res.data, loaded: true})
            console.log(res)//treba dodati ako nema od tog korisnika anketa 
        }).catch((err)=>{
            console.log(err)
        })
    }

    render(){ return(
        <div className='container'>
            {this.state.loaded === false && <div>Loading...</div>}
            {this.state.loaded && this.state.forms.map((form)=>(
                <div className = 'container blue-grey'>
                            <h1>
                                {form.title}
                            </h1>
                            <p>
                                {form.description}
                            </p>
                            <div>
                                Link: 
                                <a href={`http://localhost:3000/fill/${form._id}`}>
                                    http://localhost:3000/fill/{form._id}
                                </a>
                            </div>
                        
                </div>
            ))}
        </div>
    )}
}

export default SearchFroms