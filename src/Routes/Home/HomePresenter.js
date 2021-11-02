import React from "react";
import PropTypes from "prop-types";
import styled from "style-components";

const HomePresenter = ({nowPlaying, popular, upcoming, loading, error}) => null;

HomePresenter.propTypes = {
    nowPlaying:PropTypes.array,
    popular:PropTypes.array,
    upcoming:PropTypes.array,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.string
};

export default HomePresenter;