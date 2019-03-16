const express=require('express');
const hbs=require('hbs');

const path=require('path');

app=express();
const partialpath=path.join(__dirname,'./template/partial')
const publicpath=path.join(__dirname,'./public')
hbs.registerPartials(partialpath);
app.use(express.static(publicpath));
app.set('view engine','hbs');
const fullpath=path.join(__dirname,'./template/template1');

app.set('views',fullpath);


var ob=[{title:""}];
app.get('/',(req,res)=>{
    res.render("index",{
        title:'Weather'
    });
   
})

// app.post('/',(req,res)=>{
//     var t=ob.title;
//     res.render("index",[{
//         title:""
//     }]);
//     ob.push(t);
//    res.send(ob)
// })








app.get('/contact',(req,res)=>{
    res.render("contact",{
        title:'Contact Us'
    });
})

app.get('/about',(req,res)=>{
    res.render("about",{
        title:'About Us'
    });
})

app.get('/help',(req,res)=>{
    res.render("help",{
        title:'Need Help'
    });
})



app.get('*',(req,res)=>{
    res.render("error",{
        title:'Need Help'
    });
})
app.listen('3000',(req,res)=>{
    console.log("server in on");
})