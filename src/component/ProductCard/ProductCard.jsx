import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, getAllProducts } from '../../app/cartSlice'
import ProductDetailsPage from '../../pages/ProductDetailsPage'

const ProductCard = () => {
    const { selectedCart, cart } = useSelector((state) => state?.cart)
    const dispatch = useDispatch()

    const handleAddToCart = (id) => {
        dispatch(addToCart(id))
    }

    useEffect(() => {
        dispatch(getAllProducts())
    },[])

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-10 w-100">
                        {cart.length && cart.map((item, index) => {
                            return (
                                <div className="row p-2 bg-white border rounded m-1">
                                    <div className="col-md-3 mt-1"><img alt='image1' className="img-fluid img-responsive rounded product-image" src={item.image} /></div>
                                    <div className="col-md-6 mt-1">
                                        <h5>{item.productName}</h5>
                                        <div className="d-flex flex-row">
                                            <div className="ratings text-warning mr-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><span>310</span>
                                        </div>
                                        <div className="mt-1 mb-1 spec-1"><span>100% cotton</span><span className="dot"></span><span>Light weight</span><span className="dot"></span><span>Best finish<br /></span></div>
                                        <div className="mt-1 mb-1 spec-1"><span>Unique design</span><span className="dot"></span><span>For men</span><span className="dot"></span><span>Casual<br /></span></div>
                                        <ul className='d-flex justify-content-between'>
                                            <li>Brand : {item.brand}</li>
                                            <li>Product Type : {item.productType}</li>
                                        </ul>
                                        <p className="text-justify text-truncate para mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br /><br /></p>
                                    </div>
                                    <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                        <div className="d-flex flex-row align-items-center">
                                            <h4 className="mr-1">${item.offerPrice}</h4><span className="strike-text text-decoration-line-through text-danger">${item.mrp}</span>
                                        </div>
                                        <h6 className="text-success">Free shipping</h6>
                                        <div className="d-flex flex-column mt-4">
                                            <button className="btn btn-light btn-sm" data-toggle="modal" data-target=".bd-example-modal-lg" style={{backgroundColor:'rgb(244, 51, 151)',color:'white'}} type="button">Details</button>
                                            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-lg">
                                                <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Product Details</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                    <ProductDetailsPage item={item}/>
                                                </div>
                                            </div>
                                            </div>
                                            {
                                                selectedCart?.length && selectedCart?.find((cartItem) => cartItem?.id === item.id) ?
                                                    <button
                                                        className="btn btn-outline-light btn-sm mt-2"
                                                        style={{border:'1px solid grey',color:'grey'}}
                                                        disabled={true}
                                                        type="button"
                                                    >
                                                        Added to wishlist
                                                    </button> :
                                                    <button
                                                        className="btn btn-outline-light btn-sm mt-2"
                                                        style={{border:'1px solid rgb(244, 51, 151)',color:'rgb(244, 51, 151)'}}
                                                        type="button"
                                                        onClick={() => handleAddToCart(item.id)}
                                                    >
                                                        Add to wishlist
                                                    </button>
                                            }

                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard