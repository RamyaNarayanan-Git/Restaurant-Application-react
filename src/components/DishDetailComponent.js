import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const dish = this.props.dish;
        const comments = this.props.comments;
        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(comments)}
                    </div>

                </div>);
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderDish(dish) {
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

    renderComments(comments) {
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
                                    month: "long",
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
                <div></div>
            );
        }

    }
}
export default DishDetail;