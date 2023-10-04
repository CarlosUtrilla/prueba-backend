const express = require('express');
const { fakerES_MX: faker } = require('@faker-js/faker');
const app = express();
const PORT = 3000;

const products = generateProducts(1000000); // Generar 1 millón de productos simulados

function generateProducts(count) {
    const products = [];
    for (let i = 0; i < count; i++) {
        const product = {
            id: faker.string.uuid(),
            nombre: faker.commerce.productName(),
            precio: faker.commerce.price(),
            categoria: faker.commerce.department(),
            descripcion: faker.lorem.sentence(),
        };
        products.push(product);
    }
    return products;
}

app.get('/api/search', (req, res) => {
    const query = req.query.q.toLowerCase();
    const results = products.filter(product => 
        product.nombre.toLowerCase().includes(query) || product.categoria.toLowerCase().includes(query)
    );
    res.json(results);
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});