// This file contains the `/api/categories` endpoint.

const router = require('express').Router();
const { Category, Product } = require('../../models');


/*This GET route finds all the categories and includes their associated products. */
router.get('/', (req, res) => {

    Category.findAll({include: Product}).then((categoryData) => {

        res.status(200).json(categoryData);
    
    }).catch((error) =>{

        res.status(400).json(error);
    })
  
});

/*This GET route finds one category by its ID and includes its associated products. */
router.get('/:id', (req, res) => {

    Category.findByPk(req.params.id, {include: Product}).then((categoryData) => {

        res.status(200).json(categoryData);
    
    }).catch((error) =>{

        res.status(400).json(error);
    })
});


// This POST route creates a new category.
router.post('/', (req, res) => {

    Category.create({

        category_name: req.body.category_name,

    }).then((newProduct) => {

        res.status(200).json(newProduct);
    
    }).catch((error) =>{

        res.status(400).json(error);
    })
});

//This PUT route updates a category by its `id` value.
router.put('/:id', (req, res) => {

    Category.update(

        {
            category_name: req.body.category_name,
        },
        {
            where: {

                id: req.params.id
            }
        }

    ).then((updatedCategory) => {

        res.status(200).json(updatedCategory);
    
    }).catch((error) => {

        res.status(400).json(error);
    });
});

//This DELETE route deletes a category by its `id` value.
router.delete('/:id', (req, res) => {

  
    Category.destroy({

        where: {

            id: req.params.id,
        }

    }).then((deletedCategory) => {

        res.status(200).json(deletedCategory);
    
    }).catch((error) => {

        res.status(400).json(error);
    })
});

module.exports = router;
