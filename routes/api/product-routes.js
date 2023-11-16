// This file contains the `/api/products` endpoint.

const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// This GET route finds all the products and includes their associated category and tag data.  
router.get('/', (req, res) => {


    Product.findAll({ include: Category, include: Tag}).then((productData) => {

        res.json(productData);

    }).catch((error) =>{

        res.json(error);
    })
});

// This GET route find one product by its `id` value and includes its associated category and tag data.
router.get('/:id', (req, res) => {

    Product.findByPk(req.params.id, {include: Category, include: Tag}).then((productData) => {

        res.json(productData);

    }).catch((error) =>{

        res.json(error);
    })
});

//This POST route creates a new product.
router.post('/', (req, res) => {

    /* In spite of the comment below from the starter code, I went ahead and 
    added the ability to set the category_id.  Otherwise, the category_id will
    just end up as 'null' when creating a product. */

  /* Here is an example of what the request body should look like:
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create({

    product_name: req.body.product_name,
    price: req.body.price,
    stock: req.body.stock,
    category_id: req.body.category_id

  }).then((product) => {

      // if there are product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if there are no product tags, we just respond with the product.
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

//This PUT route updates a product by its `id` value.
router.put('/:id', (req, res) => {
  
    // Here, we update product data
    Product.update(
        
        {
            product_name: req.body.product_name,
            price: req.body.price,
            stock: req.body.stock
        }, 
        {
            where: {

                id: req.params.id,
            },
    })
    .then((product) => {
        if (req.body.tagIds && req.body.tagIds.length) {

            ProductTag.findAll({
            where: { product_id: req.params.id }
            }).then((productTags) => {

            // Here, we create a filtered list of new tag_ids
            const productTagIds = productTags.map(({ tag_id }) => tag_id);

            const newProductTags = req.body.tagIds
                .filter((tag_id) => !productTagIds.includes(tag_id))
                .map((tag_id) => {
                return {
                    product_id: req.params.id,
                    tag_id,
                };
                });

            // Here, we figure out which ones to remove
            const productTagsToRemove = productTags
                .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
                .map(({ id }) => id);
            // Here, we run both actions
            return Promise.all([
                ProductTag.destroy({ where: { id: productTagsToRemove } }),
                ProductTag.bulkCreate(newProductTags),
            ]);
            });
        }

        return res.json(product);

    }).catch((err) => {

        res.status(400).json(err);
    });
});

//This DELETE route deletes one product by its `id` value
router.delete('/:id', (req, res) => {

 

    Product.destroy({

        where: {

            id: req.params.id,
        }

    }).then((deletedProduct) => {

        res.json(deletedProduct);

    }).catch((error) => {

        res.json(error);
    })
});

module.exports = router;
