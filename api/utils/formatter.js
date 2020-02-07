let formatCategories = function (categories) {
    return categories ? categories.values[0].path_from_root.map(val => val.name) : null;
};

let formatItem = function (item, soldQuantityRequired) {
    return item ? {
        id: item.id,
        title: item.title,
        price: {
            currency: item.currency_id,
            amount: Math.floor(item.price),
            decimals: item.price % 1,
        },
        picture: item.pictures? item.pictures[0].secure_url : item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        sold_quantity: soldQuantityRequired ? item.sold_quantity : null,
        description: item.description ? item.description : null,
    } : {}
};

module.exports.formatter = function (obj) {
    // If obj.results exists, it means this func is being called with a list of items, then we asign them to the variable called "items", if not, we get the entire object, i.e the only item.
    let items = obj.results ? obj.results : obj;
    let categories = obj.filters ? obj.filters.find(
        object => object.id === 'category'
    ) : null;
    return {
        authors: [
            {
                name: "Luciano",
                lastname: "Lupo"
            },
            {
                name: "Luciano",
                lastname: "Zinik",
            },
        ],
        categories: items.length > 1 ? formatCategories(categories) : [],
        items: items.length > 1 ? [
            items.map(item =>
                formatItem(item, false)
            )
        ] : formatItem(items, true)
    }
};
