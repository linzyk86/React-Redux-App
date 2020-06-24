import React from 'react';
import {connect} from 'react-redux';
import {getQuote} from '../actions/actions';
import { useEffect } from 'react';

const Quote = ({getQuote, quote, isFetching, error}) =>{
    useEffect(()=>{
        getQuote();
    }, []);

    if (isFetching){
        return <h2> Loading...</h2>;
    }

    return(
        <div>
        <h2> Kanye Says: {quote}</h2>
        <button onClick={getQuote}
        >New quote</button>
    </div>
    );
};

const mapStateToProps = state =>{
    return{
        quote: state.quote,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {getQuote}) (Quote);