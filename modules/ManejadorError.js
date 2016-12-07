module.exports = {
  sendError: function(desc){
     return JSON.stringify({status: false, description: desc});
  }
};