/* eslint-disable react/prop-types */

const ResultBox = ({ title, value }) => {

    return (<div className='result-box'>
        <span className='box-title'>{title}</span>
        <span className='box-value'>{value}</span>
    </div>)
}

export { ResultBox }
