import React from 'react'

const RecipeItem = (props) => (
    <div className="col-sm-3 mt-4">
        <div className="card">
            <a href={props.href}>
                <img className="card-img-top img-fluid" src={props.thumbnail} alt={props.title} />
            </a>
            <div className="card-body">
                <h5 className="card-title">
                    {/* {props.title.substr(0, props.index)}
                    <mark>{props.title.substr(props.index, props.search)}</mark>
                    {props.title.substr(props.search+props.index, props.title.length)}
                    <br/> */}
                    {props.title}
                </h5>
                <p className="card-text">
                    <strong>Ingredients: </strong>{props.ingredients}
                </p>
            </div>
        </div>
    </div>
)

export default RecipeItem;