import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({dish}) {
    return (
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}
  

    const DishDetail = (props)=> {
        const dish = props.dish;
        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={dish.comments}/>
                    </div>

                </div>);
        }
        else {
            return (
                <div></div>
            );
        }
    }

    

    function RenderComments({comments}) {
        if (comments != null) {
            const com = comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <ul>
                            <li className='list-unstyled .d-inline'>
                                <div className='row'>
                                    {comment.comment}
                                </div>
                                <div className='row'>
                                    --{comment.author},
                                {new Intl.DateTimeFormat("en-GB", {
                                    year: "numeric",
                                    month: "short",
                                    day: "2-digit"
                                }).format(comment.Date)}

                                </div>
                            </li>
                        </ul>
                    </div>
                );

            });
            return (
                <div>
                    <h4>Comments</h4>
                    {com}
                </div>
            );

        }


        else {
            return (
                <div>No Comments</div>
            );
        }

    }

export default DishDetail;