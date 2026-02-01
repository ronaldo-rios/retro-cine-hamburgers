import { useState } from "react";
import type { Order } from "../@types/order";
import {
    getAllOrderStatus,
    OrderStatus,
    OrderStatusLabels,
    type OrderStatusValue
} from "../@types/order-status";
import OrderCard from "../components/OrderCard";
import Button from "./../components/Button";

const Orders = () => {

    const initialOrders: Order[] = [
        { id: 1, name: "Ronaldo Rios", date: "21/01/2025", total: 67.9, status: OrderStatus.PENDING },
        { id: 2, name: "Maria Silva", date: "22/01/2025", total: 120.5, status: OrderStatus.PENDING },
        { id: 3, name: "João Santos", date: "23/01/2025", total: 45.0, status: OrderStatus.READY },
    ]

    const [activeStatus, setActiveStatus] = useState<OrderStatusValue>(OrderStatus.PENDING)
    const [orders, setOrders] = useState<Order[]>(initialOrders)
    const filteredOrders = orders.filter((order) => order.status === activeStatus)

    const handleStatusChange = (id: number, newStatus: OrderStatusValue) => {
        setOrders((prev) =>
            prev.map((order) => (order.id === id 
                ? { ...order, status: newStatus } : order))
        )
    }

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
                {filteredOrders.map((order) => (
                    <OrderCard
                        order={order}
                        onStatusChange={handleStatusChange}
                    />
                ))}
            </div>
        </>
    )
}

export default Orders