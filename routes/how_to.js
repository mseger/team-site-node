exports.main = function (req, res){
	res.render('how-to', {title: "Lifegraph Labs", highlight: "how-tos"});
}

exports.wifiarduino = function (req, res){
	res.redirect("https://github.com/lifegraph/arduino-wifi-setup");
	//res.render('how-to-wifi-arduino', {title: "Lifegraph Labs", highlight: "how-tos"});
}

exports.graphbutton = function (req, res){
	res.redirect("https://github.com/lifegraph/graphbutton-wifly.git");
	//res.render('how-to-graphbutton', {title: "Lifegraph Labs", highlight: "how-tos"});
}

exports.musicparty = function (req, res){
	res.redirect("https://github.com/lifegraph/musicparty.git");
	//res.render('how-to-music-party', {title: "Lifegraph Labs", highlight: "how-tos"});
}

exports.photobooth = function (req, res){
	res.redirect("https://github.com/lifegraph/photobooth.git");
	//res.render('how-to-photobooth', {title: "Lifegraph Labs", highlight: "how-tos"});
}

exports.tagger = function (req, res){
	res.render('how-to-tagger', {title: "Lifegraph Labs", highlight: "how-tos"});
}

exports.notificationlight = function (req, res){
	res.redirect("https://github.com/lifegraph/notificationlight.git");
	//res.render('how-to-notification-light', {title: "Lifegraph Labs", highlight: "how-tos"});
}