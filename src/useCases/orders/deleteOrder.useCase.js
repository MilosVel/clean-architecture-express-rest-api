module.exports = dependencies => {
    const {
        ordersRepository
    } = dependencies;

    if (!ordersRepository) {
        throw new Error('ordersRepository should be exist in dependencies')
    }

    const execute = ({
        order
    }) => {
        return ordersRepository.delete(order);
    }
    // Ako bi imali vise execute faunkcija onda bismo ih ovde definisali i takodje ih moramo i returnovati
    return {
        execute
    }
}