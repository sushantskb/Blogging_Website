exports.MainPage = (req, res)=>{
    res.render('home', {startContent: homeStartingContent, items: posts});
}

exports.aboutPage = (req, res)=>{
    res.render('about', {about: aboutContent});
};

exports.contactPage = (req, res)=>{
    res.render('contact', {Contact: contactContent});
};

exports.composePage = (req, res)=>{
    res.render('compose');
};

exports.composeActionPage = (req, res)=>{
    let post = {
        tittle : req.body.postTittle,
        content : req.body.postBody
    }
    posts.push(post);
    res.redirect("/");
};

exports.dynamicRoutes = (req, res)=>{
    var tittle = _.lowerCase(req.params.postName);
    posts.forEach(post => {
        let storedTittle = _.lowerCase(post.tittle);
        if(storedTittle === tittle){
            res.render("post", {
                req_tittle: post.tittle,
                req_content: post.content
            });
        }
    });
   
}

