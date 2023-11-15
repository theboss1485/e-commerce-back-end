const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {

  // find all categories
  // be sure to include its associated Products

  //{ include: Product}

    Category.findAll({include: Product}).then((categoryData) => {

        res.json(categoryData);
    
    }).catch((error) =>{

        res.json(error);
    })
  
});

router.get('/:id', (req, res) => {

    // find one category by its `id` value
  // be sure to include its associated Products
    Category.findByPk(req.params.id, {include: Product}).then((categoryData) => {

        res.json(categoryData);
    
    }).catch((error) =>{

        res.json(error);
    })
});

router.post('/', (req, res) => {

  // create a new category

    Category.create({

        category_name: req.body.category_name,

    }).then((newProduct) => {

        res.json(newProduct);
    
    }).catch((error) =>{

        res.json(error);
    })
});

router.put('/:id', (req, res) => {

    console.log("request body", req.body);

  // update a category by its `id` value
    Category.update(

        {
            category_name: req.body.category_name,
        },
        {
            returning: true,
            where: {

                id: req.params.id
            }
        }

        //return(category_name);

    ).then((updatedCategory) => {

        console.log("updatedCategory", updatedCategory);

        res.json(updatedCategory);
    
    }).catch((error) => {

        res.json(error);
    });
});

router.delete('/:id', (req, res) => {

  // delete a category by its `id` value
    Category.destroy({

        where: {

            id: req.params.id,
        }

    }).then((deletedCategory) => {

        res.json(deletedCategory);
        console.log("DeletedCategory", deletedCategory)
    
    }).catch((error) => {

        res.json(error)
    })
});

module.exports = router;
