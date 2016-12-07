var express = require('express');
var manejadorBlog = require('../modules/ManejadorBlog');
var manejadorError = require('../modules/ManejadorError');
var router = express.Router();

router.get("/posts", function(req, res) {
  return res.end(JSON.stringify(manejadorBlog.getAll()));
});

router.get("/posts/new", function(req, res) {
  return res.end(JSON.stringify(manejadorBlog.getLastPost()));
});

router.get("/posts/:id", function(req, res) {
  var id = req.params.id || "";
  if(id === ""){
    res.end(manejadorError.sendError("Se debe ingresar un id."));
    return;
  }
  return res.end(JSON.stringify(manejadorBlog.getById(id)));
});

router.post("/posts/:id", function(req, res) {
  var id = req.params.id || "";
  if(id === ""){
    res.end(manejadorError.sendError("Se debe ingresar un id."));
    return;
  } 
  var titulo = req.body.titulo || "";
  var descripcion = req.body.descripcion || "";

  if(titulo === "" || descripcion === ""){
    res.end(manejadorError.sendError("Se debe ingresar un titulo, descripcion."));
    return;
  }
  
  if(manejadorBlog.addNew(titulo,descripcion, id)){
    res.end(manejadorError.sendError("Articulo ingresado."));
    return;  
  }
  res.end(manejadorError.sendError("Problema al ingresar el articulo."));
  return; 
});

router.delete("/posts/:id", function(req, res) {
  var id = req.params.id || "";
  if(id === ""){
    res.end(manejadorError.sendError("Se debe ingresar un id."));
    return;
  }  
  
  if(manejadorBlog.deletePost(id)){
    res.end(manejadorError.sendError("Articulo borrado."));
    return;      
  }
  res.end(manejadorError.sendError("Articulo no enontrado."));
  return;  
});


module.exports = router;