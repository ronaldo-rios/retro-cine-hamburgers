import { useState } from "react";
import {
    getAllOrderStatus,
    OrderStatus,
    OrderStatusLabels,
    type OrderStatusValue
} from "../@types/order-status";
import Button from "./../components/Button";

const Orders = () => {

    const [activeStatus, setActiveStatus] = useState<OrderStatusValue>(OrderStatus.PENDING)

    return (
        <>
            <div className="flex gap-2 justify-center md:justify-start">
                {getAllOrderStatus().map((status) => (
                    <div className="w-20 h-7 md:w-32 md:h-9 flex justify-center items-center text-xs md:text-sm">
                        <Button
                            label={OrderStatusLabels[status]} 
                            variant={activeStatus === status ? 'default' : 'categories'} 
                            onClick={() => setActiveStatus(status)}
                        />
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 py-10">
                <div className="bg-(--tertiary-color) rounded-md text-black p-1 text-sm">
                   <div className="flex justify-between">
                        <p>#1</p>
                        <select name="" id="" className="font-bold">
                            <option disabled >Pendente</option>
                            <option>Preparando</option>
                            <option>Cancelado</option>
                        </select>
                   </div>
                   <p>Nome: Ronaldo Rios</p>
                   <p>Data: 21/01/2025</p>
                   <hr className="mt-3"/>
                   <p className="font-bold italic text-right p-1">R$ 67,90</p>
                </div>
                <div className="bg-(--tertiary-color) rounded-md text-black p-1 text-sm">
                   <div className="flex justify-between">
                        <p>#1</p>
                        <select name="" id="" className="font-bold">
                            <option disabled >Pendente</option>
                            <option>Preparando</option>
                            <option>Cancelado</option>
                        </select>
                   </div>
                   <p>Nome: Ronaldo Rios</p>
                   <p>Data: 21/01/2025</p>
                   <hr className="mt-3"/>
                   <p className="font-bold italic text-right p-1">R$ 67,90</p>
                </div>
                <div className="bg-(--tertiary-color) rounded-md text-black p-1 text-sm">
                   <div className="flex justify-between">
                        <p>#1</p>
                        <select name="" id="" className="font-bold">
                            <option disabled >Pendente</option>
                            <option>Preparando</option>
                            <option>Cancelado</option>
                        </select>
                   </div>
                   <p>Nome: Ronaldo Rios</p>
                   <p>Data: 21/01/2025</p>
                   <hr className="mt-3"/>
                   <p className="font-bold italic text-right p-1">R$ 67,90</p>
                </div>
                <div className="bg-(--tertiary-color) rounded-md text-black p-1 text-sm">
                   <div className="flex justify-between">
                        <p>#1</p>
                        <select name="" id="" className="font-bold">
                            <option disabled >Pendente</option>
                            <option>Preparando</option>
                            <option>Cancelado</option>
                        </select>
                   </div>
                   <p>Nome: Ronaldo Rios</p>
                   <p>Data: 21/01/2025</p>
                   <hr className="mt-3"/>
                   <p className="font-bold italic text-right p-1">R$ 67,90</p>
                </div>
            </div>
        </>
    )
}

export default Orders