import React from 'react'

const RecipeItem = (props) => (
    <div className="col-sm-3 mt-4">
        <div className="card">
            <a href={props.href}>
                <img className="card-img-top img-fluid" src={props.thumbnail} alt={props.title} />
            </a>
            <div className="card-body">
                <h5 className="card-title">
                    {
                        props.titleArr.map((char, i) => {
                        console.log(props.searchString)
                        if(props.title.toLowerCase().includes(props.searchString.toLowerCase()) && (props.searchString != '')) {
                            let index = props.title.toLowerCase().indexOf(props.searchString.toLowerCase()); 
                            console.log(index);
                            if((i >= index) && (i <= props.searchString.length+index - 1)) {
                                    return (
                                        <mark>{char}</mark>
                                    )
                            }else {
                                return char
                            }
                        } else {    
                            return (char);
                        }
                    })
                    }
       
                </h5>
                <p className="card-text">
                    <strong>Ingredients: </strong>{props.ingredients}
                </p>
            </div>
        </div>
    </div>
)

export default RecipeItem;