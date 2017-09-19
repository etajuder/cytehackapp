import React from 'react';

const MenuOptions = () => (
<div className="search-area">
    <div className="container">
        <div className="search-area-inner">
            <div className="search-contents ">
                <form method="GET">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <div className="form-group">
                                <select className="selectpicker search-fields" name="area-from">
                                    <option>Area From</option>
                                    
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <div className="form-group">
                                <select className="selectpicker search-fields" name="property-status">
                                    <option>Property Status</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <div className="form-group">
                                <select className="selectpicker search-fields" name="location">
                                    <option>Location/PIN code</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <div className="form-group">
                                <select className="selectpicker search-fields" name="property-types">
                                    <option>Type of Product</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <div className="form-group">
                                <select className="selectpicker search-fields" name="bedrooms" >
                                    <option>Date of Arrival & Number of Days</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <div className="form-group">
                                <select className="selectpicker search-fields" name="bathrooms" >
                                    <option>Area Required</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 ">
                            <div className="form-group">
                                <button className="search-button">Search</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
);
export default MenuOptions;