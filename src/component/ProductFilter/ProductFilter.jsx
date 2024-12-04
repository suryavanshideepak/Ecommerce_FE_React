import React, { useState } from 'react'
import '../ProductFilter/productFilter.css'
import { useDispatch } from 'react-redux'
import { filterProducts } from '../../app/cartSlice'

const ProductFilter = () => {
    const [search, setSearch] = useState("")
    const [filters, setFilters] = useState({
        Samsung: true,
        Reebok: true,
        Nike: true,
        Addidas: true,
    });

    const dispatch = useDispatch()
    const handleProductType = (productType) => {
        dispatch(filterProducts({ filterType: 'productType', productType: productType }))
    }
    const handleCheckboxChange = (e) => {
        const {name, checked} = e.target
        const updatedFilters = {
            ...filters,
            [name]: checked,
        };
        setFilters(updatedFilters)
        dispatch(filterProducts({ filterType: 'productBrand', productBrand: updatedFilters }))
    }

    const handleSearchProduct = (e) => {
        const value = e.target.value
        setSearch(e.target.value)
        setTimeout(() => {
            dispatch(filterProducts({filterType: 'searchProduct', searchProduct: value }))
        },500)
    }
    return (

        <div className="card">
            <article className="filter-group">
                <header className="card-header">
                    <a href="/" data-toggle="collapse" data-target="#collapse_1" aria-expanded="false" className="">
                        <i className="icon-control fa fa-chevron-down"></i>
                        <h6 className="title">Product type</h6>
                    </a>
                </header>
                <div className="filter-content collapse show" id="collapse_1">
                    <div className="card-body">
                        <form className="pb-3">
                            <div className="input-group">
                                <input  value={search} onChange={handleSearchProduct} type="text" className="form-control" placeholder="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-light" type="button"><i className="fa fa-search"></i></button>
                                </div>
                            </div>
                        </form>

                        <ul className="list-menu">
                            <li style={{ cursor: 'pointer' }} onClick={() => handleProductType('cloth')}>Cloth  </li>
                            <li style={{ cursor: 'pointer' }} onClick={() => handleProductType('shoes')}>Shoes </li>
                            <li style={{ cursor: 'pointer' }} onClick={() => handleProductType('watch')}>Watch </li>
                            <li style={{ cursor: 'pointer' }} onClick={() => handleProductType('electronics')}>Electronics </li>
                        </ul>

                    </div>
                </div>
            </article>
            <article className="filter-group">
                <header className="card-header">
                    <a href="/" data-toggle="collapse" data-target="#collapse_2" aria-expanded="false" className="">
                        <i className="icon-control fa fa-chevron-down"></i>
                        <h6 className="title">Brands </h6>
                    </a>
                </header>
                <div className="filter-content collapse show" id="collapse_2" >

                {
                    Object.entries(filters).map(([brand, isChecked]) => (
                            <div className="card-body" key={brand}>
                                <label className="custom-control custom-checkbox">
                                    <input type="checkbox" onChange={handleCheckboxChange} name={brand} checked={isChecked} className="custom-control-input" />
                                    <div className="custom-control-label">{brand}</div>
                                </label>
                            </div>
                    ))
                }
                </div>

            </article>
            <article className="filter-group">
                <header className="card-header">
                    <a href="/" data-toggle="collapse" data-target="#collapse_3" aria-expanded="false" className="">
                        <i className="icon-control fa fa-chevron-down"></i>
                        <h6 className="title">Price range </h6>
                    </a>
                </header>
                <div className="filter-content collapse show" id="collapse_3">
                    <div className="card-body">
                        <input type="range" className="custom-range" min="0" max="100" name="" />
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Min</label>
                                <input className="form-control" placeholder="$0" type="number" />
                            </div>
                            <div className="form-group text-right col-md-6">
                                <label>Max</label>
                                <input className="form-control" placeholder="$1,0000" type="number" />
                            </div>
                        </div>
                        <button className="btn btn-block btn-primary">Apply</button>
                    </div>
                </div>
            </article>
            <article className="filter-group">
                <header className="card-header">
                    <a href="/" data-toggle="collapse" data-target="#collapse_4" aria-expanded="false" className="">
                        <i className="icon-control fa fa-chevron-down"></i>
                        <h6 className="title">Sizes </h6>
                    </a>
                </header>
                <div className="filter-content collapse in" id="collapse_4" >
                    <div className="card-body">
                        <label className="checkbox-btn">
                            <input type="checkbox" />
                            <span className="btn btn-light"> XS </span>
                        </label>

                        <label className="checkbox-btn">
                            <input type="checkbox" />
                            <span className="btn btn-light"> SM </span>
                        </label>

                        <label className="checkbox-btn">
                            <input type="checkbox" />
                            <span className="btn btn-light"> LG </span>
                        </label>

                        <label className="checkbox-btn">
                            <input type="checkbox" />
                            <span className="btn btn-light"> XXL </span>
                        </label>
                    </div>
                </div>
            </article>
            <article className="filter-group">
                <header className="card-header">
                    <a href="/" data-toggle="collapse" data-target="#collapse_5" aria-expanded="false" className="">
                        <i className="icon-control fa fa-chevron-down"></i>
                        <h6 className="title">More filter </h6>
                    </a>
                </header>
                <div className="filter-content collapse in" id="collapse_5" >
                    <div className="card-body">
                        <label className="custom-control custom-radio">
                            <input type="radio" name="myfilter_radio" checked="" className="custom-control-input" />
                            <div className="custom-control-label">Any condition</div>
                        </label>

                        <label className="custom-control custom-radio">
                            <input type="radio" name="myfilter_radio" className="custom-control-input" />
                            <div className="custom-control-label">Brand new </div>
                        </label>

                        <label className="custom-control custom-radio">
                            <input type="radio" name="myfilter_radio" className="custom-control-input" />
                            <div className="custom-control-label">Used items</div>
                        </label>

                        <label className="custom-control custom-radio">
                            <input type="radio" name="myfilter_radio" className="custom-control-input" />
                            <div className="custom-control-label">Very old</div>
                        </label>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default ProductFilter