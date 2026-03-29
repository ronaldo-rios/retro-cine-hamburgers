import { X } from 'lucide-react';
import Button from './Button';
import CartItems from './CartItems';

type CartProp = {
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Cart = ({ setShowCart }: CartProp) => {
    return (
        <div className="bg-(--tertiary-color) w-[375px] h-screen fixed right-0 z-50 p-5 flex flex-col">
            <div className='flex justify-between'>
                <X className='cursor-pointer' onClick={() => setShowCart(false)} />
                <p>MEU CARRINHO</p>
            </div>
            <div className='flex flex-col gap-3 flex-1 mt-10'>
                <CartItems />
            </div>
            <Button label='Finalizar Pedido' variant='default' />
        </div>
    )
}

export default Cart