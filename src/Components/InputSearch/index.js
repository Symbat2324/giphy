
import React, {useState} from 'react'
import {getGiphy} from '../../Action'
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux'

  

 function InputSearch(props) {
    const[val, setVal]=useState('')
    
    const searchGiphyByName=event=>{
        event.preventDefault();
        props.getGiphy(val)
        setVal('')
    }

    return (
        <div style={{
            background:'#302D4C'
           
        }}>
            <form 
            style={{
                display:'flex',
                marginLeft:'40%',
                marginTop:'20px',
                marginBottom:'20px',
                width:'50px',
                height:'30px'
            }}
            onSubmit={searchGiphyByName}>
                   <input 
                    type="text"
                    value={val}
                    onChange={(event)=>{
                        setVal(event.target.value)
                    }}
                   
                    placeholder='Введите название Giphy' 
                    style={{
                        color:'white',
                        fontWeight:'bold',
                        background: '#464B4C'
                       
                    }}  
                   />
                  <button
                   style={{
                        color:'white',
                        fontWeight:'bold',
                        borderRadius:'5%',
                        background: '#464B4C'
                    }}
                  >Поиск</button>
            </form>
        </div>
    )
}

function  mapDispatchToProps(dispatch){
    return bindActionCreators({getGiphy}, dispatch)
}
export default connect(null, mapDispatchToProps)(InputSearch)
