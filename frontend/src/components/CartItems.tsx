import { ChevronLeft, ChevronRight } from 'lucide-react';
import { formatPrice } from '../utils/formatters';


const CartItems = () => {
    return (
        <>
            <div className='flex items-center gap-3'>
                <img />
                <div className='flex-1'>
                    <p>HAMBURGUER</p>
                    <p>{formatPrice(28.90)}</p>
                    <div className='flex mt-1'>
                        <ChevronLeft 
                            className='bg-red-500 rounded mr-2 cursor-pointer text-white'
                        />
                        <p>1</p>
                        <ChevronRight 
                            className='bg-red-500 rounded ml-2 cursor-pointer text-white'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItems