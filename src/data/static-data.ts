import { BookmarkType } from '../@types/app';
var uniqid = require('uniqid'); 

const mockData: BookmarkType[] = [
     // code stuff
    {id: uniqid(), name: "MDN WEB DOCS", url: "https://developer.mozilla.org/en-US/", description:"Like a web dev bible", category: "web dev", tag: "general"},
    {id: uniqid(), name: "My github", url: "https://github.com/mistyb01", description:"my project repositories", category: "web dev", tag: "general"},
    
    {id: uniqid(), name: "Javascript.info", url: "https://www.javascript.info", description:"Handy javascript reference", category: "web dev", tag: "javascript"},
    {id: uniqid(), name: "Go make things", url: "https://gomakethings.com/", description:"Writings on how JS works and good development practices in general", category: "web dev", tag: "javascript"},
    {id: uniqid(), name: "Array explorer", url: "https://arrayexplorer.netlify.app/", description:"Find the array method you need without digging through the docs", category: "web dev", tag: "javascript"},

    {id: uniqid(), name: "Moderncss.dev", url: "https://moderncss.dev", description:"Tutorials for modern css", category: "web dev", tag: "css"},
    {id: uniqid(), name: "Specificity calculator", url: "https://specificity.keegan.st/", description:"Compare the specificity of css selectors", category: "web dev", tag: "css"},
    {id: uniqid(), name: "1 line layouts", url: "http://1linelayouts.glitch.me/", description:"Modern layouts with few lines of css", category: "web dev", tag: "css"},
    
    {id: uniqid(), name: "Hyperplexed", url: "https://www.youtube.com/@Hyperplexed", description:"Entertaining videos about frontend problem solving", category: "web dev", tag: "fun"},
    {id: uniqid(), name: "Dev doodles", url: "https://www.instagram.com/dev_doodles/", description:"An instagram that makes colorfully illustrates web dev concepts", category: "web dev", tag: "fun"},
    {id: uniqid(), name: "Neal.fun", url: "https://www.neal.fun", description:"Interesting and fun little web projects", category: "web dev", tag: "fun"},

    // recipes
    {id: uniqid(), name: "Mapo tofu", url: "https://www.madewithlau.com/recipes/mapo-tofu-chicken", description:"So yum", category: "recipes", tag: "main dish"},
    {id: uniqid(), name: "Cherry tomato fettuccine", url: "https://www.sipandfeast.com/fettuccine-cherry-tomato-butter-sauce/#recipe", description:"So yum", category: "recipes", tag: "main dish"},
    {id: uniqid(), name: "Eggplant donburi", url: "https://www.justonecookbook.com/soy-glazed-eggplant-donburi/", description:"So yum", category: "recipes", tag: "main dish"},

    {id: uniqid(), name: "Pretzel bites", url: "https://sallysbakingaddiction.com/easy-homemade-soft-pretzels/", description:"time-consuming, but they were heavenly", category: "recipes", tag: "baking"},
    {id: uniqid(), name: "Banana bread", url: "https://www.kingarthurbaking.com/recipes/whole-grain-banana-bread-recipe", description:"Whole grain, yum", category: "recipes", tag: "baking"},
    {id: uniqid(), name: "Cinnamon rolls", url: "https://preppykitchen.com/skillet-cinnamon-rolls/", description:"Gotta try", category: "recipes", tag: "baking"},



  
  ];

  export default mockData;