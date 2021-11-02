import React from "react";
import PropTypes from "prop-types";
import styled from "style-components";

const SearchPresenter = ({movieResults, tvResults, searchTerm, loading, handleSubmit, error}) => null;

SearchPresenter.propTypes = {
    movieResults:PropTypes.array,
    tvResults:PropTypes.array,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.string,
    searchTerm:PropTypes.string,
    handleSubmit: PropTypes.func.isRequired
};

export default SearchPresenter;