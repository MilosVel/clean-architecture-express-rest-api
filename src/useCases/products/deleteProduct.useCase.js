module.exports = dependencies => {
    const {
        productsRepository
    } = dependencies;

    if (!productsRepository) {
        throw new Error('productsRepository should be in dependencies');
    }

    const execute = ({
        product = {}
    }) => {
        // product.name = 'Bilo koje ime' // kada se ovo otkomentarise test nece proci
        return productsRepository.delete(product);
    }

    return {
        execute
    }
}