import React from 'react'
import Classes from './newDesign.module.scss'

function NewDesign(props) {

    return (props.goodsList.map(newProduct => {
        return (
            <div className={Classes.newProduct}>
                <div className={Classes.newProduct__textBox}>
                <h6 className={Classes.newProduct__name}>{newProduct.name}</h6>
                <span className={Classes.newProduct__complectation}>{newProduct.complectation}</span>
                </div>
                
                <img 
                src={newProduct.icon}
                alt={newProduct.name}/>
            </div>
        )
    })
    )
}

export default NewDesign