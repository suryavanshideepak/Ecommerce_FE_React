import React from 'react'
import { data } from '../../utility/demoData'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../app/cartSlice'

const ProductCard = () => {
    const { cart, selectedCart } = useSelector((state) => state?.cart)
    const dispatch = useDispatch()

    const handleAddToCart = (id) => {
        dispatch(addToCart(id))
    }

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-10 w-100">
                        {data.map((item, index) => {
                            return (
                                <div className="row p-2 bg-white border rounded">
                                    <div className="col-md-3 mt-1"><img alt='image1' className="img-fluid img-responsive rounded product-image" src={item.image} /></div>
                                    <div className="col-md-6 mt-1">
                                        <h5>{item.productName}</h5>
                                        <div className="d-flex flex-row">
                                            <div className="ratings mr-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><span>310</span>
                                        </div>
                                        <div className="mt-1 mb-1 spec-1"><span>100% cotton</span><span className="dot"></span><span>Light weight</span><span className="dot"></span><span>Best finish<br /></span></div>
                                        <div className="mt-1 mb-1 spec-1"><span>Unique design</span><span className="dot"></span><span>For men</span><span className="dot"></span><span>Casual<br /></span></div>
                                        <p className="text-justify text-truncate para mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br /><br /></p>
                                    </div>
                                    <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                        <div className="d-flex flex-row align-items-center">
                                            <h4 className="mr-1">${item.offerPrice}</h4><span className="strike-text">${item.mrp}</span>
                                        </div>
                                        <h6 className="text-success">Free shipping</h6>
                                        <div className="d-flex flex-column mt-4">
                                            <button className="btn btn-primary btn-sm" type="button">Details</button>
                                            {
                                                selectedCart?.length && selectedCart?.find((cartItem) => cartItem?.id === item.id) ?
                                                    <button
                                                        className="btn btn-outline-primary btn-sm mt-2"
                                                        disabled={true}
                                                        type="button"
                                                    >
                                                        Added to wishlist
                                                    </button> :
                                                    <button
                                                        className="btn btn-outline-primary btn-sm mt-2"
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