import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCartItem } from '../app/cartSlice'

const CartPage = () => {
    const { selectedCart } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
    const handleItemRemoveFromCart = (id) => {
        dispatch(removeCartItem(id))
    }
    return (
        <div className='p-5' style={{minHeight:'100vh'}}>
            {selectedCart.length ?
                <>
                    <div className="">
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-9 border">
                                {selectedCart?.length && selectedCart.map((item, index) => {
                                    return (
                                        <div className="row p-2 bg-white border rounded m-2" key={item.id} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                                            <div className="col-md-3 mt-1">
                                                <img alt='image1' className="img-fluid img-responsive rounded product-image" src={item.image} />
                                                <div className="d-flex align-items-center justify-content-center my-2">
                                                    <button variant="outline-secondary" onClick={decrement} className="px-3">
                                                    <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input
                                                        type="number"
                                                        className="form-control text-center mx-2"
                                                        value={quantity}
                                                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                                        style={{ width: '60px' }}
                                                    />
                                                    <button variant="outline-secondary border" onClick={increment} className="px-3">
                                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
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
                                                    <h4 className="mr-1">${item.offerPrice}</h4><span className="strike-text text-decoration-line-through text-secondary" >${item.mrp}</span>
                                                </div>
                                                <h6 className="text-success">Free shipping</h6>
                                                <div className="d-flex flex-column mt-4">
                                                    <button className="btn btn-danger btn-sm" type="button" onClick={() => handleItemRemoveFromCart(item.id)}>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='col-md-3 border'>
                                <div className='card m-2 p-3' style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                                    <div className='border-bottom'>
                                        <h2>Price Details</h2>
                                    </div>
                                    <div className='d-flex justify-content-between py-2'> 
                                        <p>Price(2Item)</p><p>$30</p>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p>Delivery Charges</p><p>70</p>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p>Secured Packaging Fee</p><p>₹59</p>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                    <h5>Total Amout</h5><p>4000</p>

                                    </div>
                                    <p className='text-success'>You will save $ on this order</p>
                                </div>
                                <div className='m-1'> 
                                    <button className='btn btn-light border py-3 text-white w-100' style={{backgroundColor:'rgb(244, 51, 151)'}}>
                                        PLACE ORDER
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </> :
                <div style={{
                    minHeight: '67vh', display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                    <h1>Sorry, No Item in Cart</h1>
                </div>}
        </div>
    )
}

export default CartPage