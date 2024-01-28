import React from "react";
import { Card,CardBody,CardImg,CardImgOverlay,CardTitle } from "reactstrap";
const MenuList=props=>{
    console.log(props.dish)
    return(
        <div>
            <Card style={{marginTop:"10px"}}>
                <CardBody>
                    <CardImg src={props.dish.image}
                            alt={props.dish.name}
                            style={{width:"100%",
                                    opacity:"0.5"
                        }}
                            
                    />
                    <CardImgOverlay>
                        <CardTitle style={{textAlign:"center"}}><h1>{props.dish.name}</h1></CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}

export default MenuList;
