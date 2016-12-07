var assert = require('assert');
var manejadorBlog = require('../modules/ManejadorBlog');

describe('ManejadorBlog', function() {
  describe('#addNew()', function() {
    it('should add without error', function(done) {
      if(manejadorBlog.addNew('Titulo','Contenido', 1)){
        done();
      }else{
        done(-1);
      }
    });
    it('should not add because duplicate id', function(done) {
      if(!manejadorBlog.addNew('Titulo','Contenido', 1)){
        done();
      }else{
        done(-1);
      }
    });
  });
  
  describe('#getLastId()', function() {
    it('should return last id', function(done) {
      if(manejadorBlog.getLastId() == 1){
          done();
      }else{
         done('Last Id is not 1');
      }
    });  
  }); 
});