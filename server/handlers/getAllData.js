const Category = require ('../models/Category');


module.exports = function getAllData(req,res,next){
Category.findById(req.params.id, 'name imgUrl',(err, category)=>{
    category.name= category.name + '_changed';
    category.save((err,category)=>{
        res.send(category);
    });
});

};