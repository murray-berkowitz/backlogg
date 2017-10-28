const router = require('express').Router();
const igdb = require('igdb-api-node').default;
const client = igdb('18159de1f5fb16c8383d5dea7ea66d34');

router.get('/', (req,res,next)=>{
    client.games({
        limit:15,
        search:'',
        order:'popularity:desc'
    }, ['name', 'cover', 'screenshots', 'release_dates.platform','popularity','slug'])
    .then(result =>{ 
        res.send(result)
    })
})

module.exports = router;