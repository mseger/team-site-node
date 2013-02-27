
// homepage display & functionality

exports.display_welcome = function(req, res){
  res.render('homepage', {title: "Lifegraph Labs", highlight: "homepage"});
};