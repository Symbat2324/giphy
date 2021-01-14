import React from 'react'
import { connect } from 'react-redux'
import img from '../../img/back.jpg'

function Output(props) {
    return (
        <div style={{
            background:'url('+ img +') ',
            backgroundSize:'100%',
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'space-around'
        }}>
           {
               props.giphy[0] ?
               props.giphy[0].map(el=>{
                   return(
                 <div key={el.id}
                        style={{
                            flex: '0 1 30%',
                            width: '100%',
                            overflow: 'hidden'
                        }}
                 >
                    <iframe src={el.embed_url} frameBorder="0" 
                    style={{border: '2px solid #27224C', 
                            padding: '15px',
                            background: '#27224C', 
                            marginRight: '10px', 
                            marginBottom: '10px',
                            width:'120',
                            height:'120',
                            borderRadius:'5%',
                            textShadow:'2 3 3 '
                            }}> </iframe>
                     <p style={{
                         color:'#27224C',
                         fontSize:'20px',
                          fontWeight:'bold'
                     }}>{el.title}</p>
                 </div>
               )
               })
               :<h1>Данных нет.....</h1>
            }
        </div>
    )
}
function mapStateToProps({giphy}){
    return {giphy}
}
 export default connect (mapStateToProps) (Output)
