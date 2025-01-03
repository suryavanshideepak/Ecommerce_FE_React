import React from 'react'
import '../ProductFilter/productFilter.css'
import { useDispatch } from 'react-redux'
import { filterProducts } from '../../app/cartSlice'

const ProductFilter = ({
    search,
    setSearch,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    activeFilter,
    setActiveFilter,
    filters,
    setFilters,
    sort, 
    setSort
}) => {
    const dispatch = useDispatch()
    const handleProductType = (productType) => {
        console.log(productType)
        setActiveFilter(productType);
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
        const newSortOrder = sort === 'asc' ? 'desc' : 'asc';
        setSort(newSortOrder)
        dispatch(filterProducts({ filterType: 'sorting', sorting: newSortOrder }))
    };

    return (

        <div className="card" style={{boxShadow:' rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}}>
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
                            {[
                                { type: 'cloth', label: 'Cloth' },
                                {  type: 'shoes', label: 'Shoes'},
                                {type: 'watch', label: 'Watch'},
                                {type: 'electronics', label: 'Electronics'}
                            ].map((item) => (
                                <li
                                    key={item.type}
                                    className={`py-2 ${activeFilter === item.type ? 'active-tab' : ''}`}
                                    style={{cursor:'pointer'}}
                                    onClick={() => handleProductType(item.type)}
                                >
                                {item.label}
                                </li>
                            )) }
                          
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
                        <button className="btn btn-block btn-light" style={{backgroundColor:'rgb(244, 51, 151)',color:'white'}} onClick={handlePriceRangeFilterv}>Apply</button>
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
                <div class=" text-center py-4">
                <button
                    onClick={handleSort}
                    className="btn btn-secondary"
                    type="button"
                    >
                    {sort === 'asc' ? 'Sort by Price: Ascending' : 'Sort by Price: Descending'}
                </button>
                </div>

            </article>
        </div>
    )
}

export default ProductFilter