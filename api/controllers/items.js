const items = require('express');
const fetch = require('node-fetch');
const formatItems = require('../utils/formatter');

items.searchResult = async function (req, res) {
    const uri = 'https://api.mercadolibre.com/sites/MLA/search?q=' + req.query.q + '&limit=4';
    let response = await fetch(uri)
        .then(res => res.json())
        .then(json => formatItems.formatter(json))
        .catch(err => console.log(err));
        res.status(200).json(response);
};

items.itemDescription = async function (req, res) {
    const uri = 'https://api.mercadolibre.com/items/' + req.params.id;
    let data;
    let item = await fetch(uri)
        .catch(err => console.log(err));
    let itemDescription = await fetch(uri + '/description').catch(err => console.log(err));
    let description = await itemDescription.json();

    data = await item.json();
    data.description = description.plain_text;

    let response = await formatItems.formatter(data);

    res.status(200).json(response);


};

module.exports = items;