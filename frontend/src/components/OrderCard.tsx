import type { Order } from "../@types/order";
import { getAllOrderStatus, OrderStatusLabels, type OrderStatusValue } from "../@types/order-status";

interface OrderCardProps {
    order: Order;
    onStatusChange: (id: number, newStatus: OrderStatusValue) => void;
}

const OrderCard = ({ order, onStatusChange }: OrderCardProps) => {
    return (
        <div className="bg-(--tertiary-color) rounded-md text-black p-1 text-sm">
            <div className="flex justify-between">
                <p>{order.id}</p>
                <select 
                    value={order.status}
                    onChange={(e) => onStatusChange(order.id, e.target.value as OrderStatusValue)}
                    className="font-bold"
                >
                    <option value={order.status} disabled>
                        {OrderStatusLabels[order.status]}
                    </option>
                    {getAllOrderStatus()
                        .filter((s) => s !== order.status)
                        .map((s) => (
                        <option key={s} value={s}>
                            {OrderStatusLabels[s]}
                        </option>
                    ))}
                </select>
            </div>
            <p>Nome: {order.name}</p>
            <p>Data: {order.date}</p>
            <hr className="mt-3"/>
            <p className="font-bold italic text-right p-1">
                {order.total.toLocaleString(
                    "pt-BR", { 
                        style: "currency", 
                        currency: "BRL" 
                    }
                )}
            </p>
        </div>
    )
}

export default OrderCard