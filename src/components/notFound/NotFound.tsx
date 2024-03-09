import './notFound.scss'

const NotFound = () => {

    return (
        <div className='notFound'>
            <div className='notFound__left'>
                <h1>Error</h1>
                <h2>film not found</h2>
                <a href="/">back to home page</a>
            </div>
            <div className='notFound__right'>
                <div className='notFound__right__circle'></div>
                <div className='notFound__right__gif'></div>
            </div>
        </div>
    )
}

export default NotFound