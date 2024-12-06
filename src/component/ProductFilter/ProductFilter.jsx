import React, { useState } from 'react'
import '../ProductFilter/productFilter.css'
import { useDispatch } from 'react-redux'
import { filterProducts } from '../../app/cartSlice'

const ProductFilter = () => {
    const [search, setSearch] = useState("")
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100);
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
        const { name, checked } = e.target
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
            dispatch(filterProducts({ filterType: 'searchProduct', searchProduct: value }))
        }, 500)
    }

    const handlePriceRangeFilterv = () => {
        dispatch(filterProducts({
            filterType: 'priceRangeFilter',
            priceRangeFilter: {
                minValue: minPrice,
                maxValue: maxPrice
            }
        }))
    }

    const handleSort = (order) => {
        dispatch(filterProducts({ filterType: 'sorting', sorting: order }))
    };

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
                                <input value={search} onChange={handleSearchProduct} type="text" className="form-control" placeholder="Search" />
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
                        <input
                            type="range"
                            className="custom-range"
                            min="0"
                            max="100"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                        />
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Min</label>
                                <input
                                    className="form-control"
                                    placeholder="$0"
                                    type="number"
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(Number(e.target.value))}
                                />
                            </div>
                            <div className="form-group text-right col-md-6">
                                <label>Max</label>
                                <input
                                    className="form-control"
                                    placeholder="$1,0000"
                                    type="number"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                                />
                            </div>
                        </div>
                        <button className="btn btn-block btn-primary" onClick={handlePriceRangeFilterv}>Apply</button>
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
                <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                >
                    Sort by Price
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li>
                        <button className="dropdown-item" onClick={() => handleSort("asc")}>
                            Low to High
                        </button>
                    </li>
                    <li>
                        <button className="dropdown-item" onClick={() => handleSort("desc")}>
                            High to Low
                        </button>
                    </li>
                </ul>

            </article>
        </div>
    )
}

export default ProductFilter