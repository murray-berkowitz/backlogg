const router = require('express').Router();
const igdb = require('igdb-api-node').default;
const client = igdb('18159de1f5fb16c8383d5dea7ea66d34');

router.get('/:gameTitle', (req,res,next)=>{
    console.log(req.params.gameTitle)
    client.games({
        filters: {
            'slug-eq': req.params.gameTitle
        },
        fields:'*'
    })
    .then(result =>{ 
        console.log(result)
        res.send(result)
    })
})

module.exports = router;