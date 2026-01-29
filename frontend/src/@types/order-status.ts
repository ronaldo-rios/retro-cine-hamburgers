export const OrderStatus = {
    PENDING: 'PENDING',
    IN_PRODUCTION: 'IN_PRODUCTION',
    READY: 'READY',
    CANCELED: 'CANCELED',
} as const;

export type OrderStatusValue = typeof OrderStatus[keyof typeof OrderStatus];

export const OrderStatusLabels: Record<OrderStatusValue, string> = {
    PENDING: 'Pendente',
    IN_PRODUCTION: 'Preparando',
    READY: 'Pronto',
    CANCELED: 'Cancelado',
};

export const getAllOrderStatus = (): OrderStatusValue[] => Object.values(OrderStatus);