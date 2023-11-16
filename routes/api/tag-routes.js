
// This file contains the `/api/tags` endpoint
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');


/*This GET route finds all the tags and includes their associated Product data.  I also included the ProductTag
data for good measure, since ProductTag was imported in the starter code and I wasn't sure where I should use it.*/
router.get('/', (req, res) => {

    Tag.findAll({ include: ProductTag, include: Product}).then((tagData) => {

    res.json(tagData);

    }).catch((error) =>{

        res.json(error);
    })
});


/* This GET route finds find a single tag by its `id` and includes its associated Product data. I also included the ProductTag
data for good measure, since ProductTag was imported in the starter code and I wasn't sure where I should use it.*/
router.get('/:id', (req, res) => {

  Tag.findByPk(req.params.id, {include: ProductTag, include: Product, }).then((tagData) => {

        res.json(tagData);

    }).catch((error) => {

        res.json(error);
    })
});

//This POST route creates a new tag.
router.post('/', (req, res) => {
 
  Tag.create({

        tag_name: req.body.tag_name,

    }).then((newProduct) => {

        res.json(newProduct);
    
    }).catch((error) =>{

        res.json(error);
    })
});

 //This PUT route updates a tag's name by its `id` value.
router.put('/:id', (req, res) => {
 

  Tag.update(

    {
        tag_name: req.body.tag_name,
    },
    {
        where: {

            id: req.params.id
        }
    
    }).then((updatedTag) => {

        res.json(updatedTag);

    }).catch((error) => {

        res.json(error);
    });
});

// This DELETE route deletes a tag by its `id` value.
router.delete('/:id', (req, res) => {
  

  Tag.destroy({

        where: {

            id: req.params.id,
        }

    }).then((deletedTag) => {

        console.log("deletion", deletedTag)

        res.json(deletedTag);

    }).catch((error) => {

        res.json(error)
    })
});

module.exports = router;
