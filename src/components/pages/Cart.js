import React from 'react'
import Footer from '../layout/Footer'
import Nav from '../layout/Nav'

const Cart = () => {
    return (
        <>
        <Nav/>
         {/* <!-- start of cart items  --> */}
            {/* <div className="container"> */}
                <div className="row m-auto">
                    <div className="col-md-8 m-auto p-3 mt-3">
                        <table className="table-secondary table-bordered">
                            <thead >
                                <tr>
                                    <th className="p-3 ">Product Name</th>
                                    <th className="p-3 ">Price</th>
                                    <th className="p-3 ">Image</th>
                                    <th className="p-3 ">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="p-3 ">Macbook Air</th>
                                    <th className="p-3 ">Rs. 200000</th>
                                    <th className="p-3 "><img src="https://helios-i.mashable.com/imagery/reviews/03y8gbj1mqCuexgXxFJ5vyX/hero-image.fill.size_1248x702.v1623391330.jpg" alt="" height="100px"/></th>
                                    <th className="p-3 "><button className="btn btn-warning">Remove</button></th>
                                </tr>
                                <tr>
                                    <th className="p-3 ">Macbook Air</th>
                                    <th className="p-3 ">Rs. 200000</th>
                                    <th className="p-3 "><img src="https://helios-i.mashable.com/imagery/reviews/03y8gbj1mqCuexgXxFJ5vyX/hero-image.fill.size_1248x702.v1623391330.jpg" alt="" height="100px"/></th>
                                    <th className="p-3 "><button className="btn btn-warning">Remove</button></th>
                                </tr>
                                <tr>
                                    <th className="p-3 ">Macbook Air</th>
                                    <th className="p-3 ">Rs. 200000</th>
                                    <th className="p-3 "><img src="https://helios-i.mashable.com/imagery/reviews/03y8gbj1mqCuexgXxFJ5vyX/hero-image.fill.size_1248x702.v1623391330.jpg" alt="" height="100px"/></th>
                                    <th className="p-3 "><button className="btn btn-warning">Remove</button></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            {/* </div> */}

        {/* <!-- end of cart items  -->    */}
        <Footer/>
        </>
    )
}

export default Cart
