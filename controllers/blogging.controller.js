exports.MainPage = (req, res)=>{
    res.render('home', {startContent: homeStartingContent, items: post});
}

exports.aboutPage = (req, res)=>{
    res.render('about', {about: aboutContent});
};

exports.contactPage = (req, res)=>{
    res.render('contact', {Contact: contactContent});
};