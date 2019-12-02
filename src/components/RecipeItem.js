import React from 'react'


const RecipeItem = ({ href, thumbnail, title, ingredients }) => (
    <div className="col-sm-3 mt-4">
        <div className="card">
            <a href={href} target='_blank'>
                <img className="card-img-top img-fluid" src={thumbnail} alt="" />
            </a>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    <strong>Ingredients: </strong>{ingredients}
                </p>
            </div>
        </div>
    </div>

)

export default RecipeItem;