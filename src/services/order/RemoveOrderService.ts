import prismaClient from "../../prisma";

interface OrderRequest {
    order_id: string
}

class RemoveOrderService {
    async execute({ order_id }:OrderRequest) {

        console.log("Attempting to delete order with ID:", order_id)

        const order = await prismaClient.order.delete({
            where: {
                id: order_id
            }
        })

        return order
    }
}

export { RemoveOrderService }