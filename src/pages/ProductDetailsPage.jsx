import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../app/cartSlice'

const ProductDetailsPage = ({ item = {} }) => {
    const { selectedCart } = useSelector((state) => state?.cart)
    const dispatch = useDispatch()

    const handleAddToCart = (id) => {
        dispatch(addToCart(id))
    }
    return (
        <div>
            <div className="container">
                <div className="row p-5">
                    <div className="col-md-5 ">
                        <div className='border p-2'>
                            <img className='border-rounded' alt={item.productName} src={item.image} width={"100%"} />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <h2 className='text-secondary'>{item.productName}</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <div className="d-flex flex-row">
                            <div className="ratings text-warning mr-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><span>310</span>
                        </div>
                        <div className='d-flex w-100'>
                            <button
                                className="btn btn-warning btn-sm w-50 m-1"
                                style={{ color: 'white' }}
                                type="button">
                                Buy Now
                            </button>
                            {
                                selectedCart?.length && selectedCart?.find((cartItem) => cartItem?.id === item.id) ?
                                    <button
                                        className="btn btn-outline-light btn-sm w-50 py-2 m-1"
                                        style={{ border: '1px solid grey', color: 'grey' }}
                                        disabled={true}
                                        type="button"
                                    >
                                        Added to wishlist
                                    </button> :
                                    <button
                                        className="btn btn-outline-light btn-sm w-50 py-2 m-1"
                                        style={{ border: '1px solid rgb(244, 51, 151)', color: 'rgb(244, 51, 151)' }}
                                        type="button"
                                        onClick={() => handleAddToCart(item.id)}
                                    >
                                        Add to wishlist
                                    </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsPage