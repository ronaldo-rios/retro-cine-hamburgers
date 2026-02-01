import type { OrderStatusValue } from "./order-status";

export interface Order {
    id: number;
    name: string;
    date: string;
    total: number;
    status: OrderStatusValue;
}