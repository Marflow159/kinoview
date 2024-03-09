import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

import './skeleton.scss'
const SkeletonCard = ({ cards }: any) => {


    let elem = Array(cards)
        .fill(0)
        .map((_, i) => (
            <div className='skeleton' key={i}>
                <div className='skeleton__1'>
                    <Skeleton width={200} height={300} baseColor='gray' borderRadius={'20px'}/>
                </div>
                <div className='skeleton__2'>
                    <Skeleton width={100} height={20} baseColor='gray'/>
                </div>
                <div className='skeleton__3'>
                    <Skeleton width={50} height={10} baseColor='gray'/>
                </div>
            </div>
        ))

    return (
        <>
            {elem}
        </>
    )

}

export default SkeletonCard;