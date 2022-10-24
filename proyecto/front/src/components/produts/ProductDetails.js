import React, { Fragment } from "react";
import MetaData from "../layaout/MetaData";

export const ProductDetails = () =>{
    return (
        <Fragment>
            <MetaData title="duke200"></MetaData>
            <div className="row d-flex justify-content-around">
                <div className="col-12 col-lg-5 img-fluid" id="imagen_producto">
                    <img src="../../images/productos/duke200.jpg" alt="duke200"height="450" width="450"></img>
                </div>
                <div className="col-12 col-lg-5 mt-5">
                    <h3>Motocicleta duke200</h3>
                    <p id='product_id'>producto #23414</p>
                </div>
            </div>
        </Fragment>
    )
}