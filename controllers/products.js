const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/products')

// Index Route - GET all products
router.get('/', (req, res) => {
  Product.find({}, (err, allProducts)=>{
      res.json(allProducts);
  });
});

// Create Route - POST new product
router.post('/', (req,res) => {
    Product.create(req.body, (err, createdProduct) => {
        res.json(createdProduct);
    });
});

// Update Route - PUT
router.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedProduct) => {
        res.json(updatedProduct);
    });
});


// DELETE Route
router.delete('/:id', (req,res) => {
    Product.findByIdAndRemove(req.params.id, (err, deleteProduct) =>{
        res.json(deleteProduct)
    });
});



// Seed Route
router.get('/seed', (req,res)=> {
    console.log('...about to create');
  Product.create([
		{
			name: "Black Tea - Looseleaf",
			shortDescription: "4oz jar of our black looseleaf tea.",
            description: "Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.",
	        img: "/images/black-looseleaf-tea-jar_4460x4460.jpg",
			price: 12.99,
			qty: 99
		}, {
			name: "Fair Trade French Roast",
			shortDescription: "2 lb. bag our signature fair-trade French Roast whole beans",
            description: "Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
            img: "/images/Coffee - Product-3.jpg",
			price: 15.99,
			qty: 75
	  }, {
			name: "Blueberry Tea - Looseleaf",
			shortDescription: "4oz jar of our blueberry looseleaf tea.",
            description: "Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.",
            img: "/images/blueberry-tea-looseleaf-jar_4460x4460.jpg",
			price: 13.99,
			qty: 1
	  },
    {
			name: "Whole Bean Dark Roast",
			shortDescription: "2 lb bag of our finest whole bean dark roast.",
            description: "Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
            img: "/images/Coffee - Product-4.jpg",
			price: 14.99,
			qty: 10
	  },
    {
			name: "Green Tea - Looseleaf",
			shortDescription: "4oz jar of our green looseleaf tea.",
            description: "Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.",
            img: "/images/green-tea-jar_4460x4460.jpg",
			price: 11.99,
			qty: 30
	  },
    {
			name: "Yellow Tea - Looseleaf",
			shortDescription: "4oz jar of our yellow looseleaf tea.",
            description: "Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.",
            img: "/images/yellow-looseleaf-tea-jar_4460x4460.jpg",
			price: 14.99,
			qty: 12
	  },
    {
			name: "Yellow Tea - Looseleaf",
			shortDescription: "4oz jar of our yellow looseleaf tea.",
            description: "Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.",
            img: "/images/yellow-looseleaf-tea-jar_4460x4460.jpg",
			price: 14.99,
			qty: 12
	  }
	], (err, data)=> {
    res.json(data)
    console.log('created');
  })
});

// Show Route
router.get('/:id', (req,res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        res.json(foundProduct)
    });
});

module.exports = router;
