Articulo = require('./Articulo');

//Static Class Manejador Blog
module.exports = { 
  posts: [],
  getAll: function(){
    return this.posts;
  },
  getById: function(id){
    for(var i = 0; i<this.posts.length; i++){
      if(this.posts[i].id == id){
        return this.posts[i];
      }
    }
    return {};
  },
  getLastPost: function(){
    if(this.posts.length === 0) return [];
    return this.posts[this.posts.length-1];
  },
  getLastId: function(){
    if(this.posts.length === 0) return "";
    return this.posts[this.posts.length-1].id;
  },
  addNew: function(titulo, contenido, id){
    for(var i = 0; i<this.posts.length; i++){
      if(this.posts[i].id == id){
        return false;
      }
    }
    this.posts.push(new Articulo(titulo, contenido, id));
    return true;
  },
  deletePost: function(id){
    for(var i = 0; i<this.posts.length; i++){
      if(this.posts[i].id == id){
        this.posts.splice(i, 1);
        return true;
      }
    }
    return false;
  }
};