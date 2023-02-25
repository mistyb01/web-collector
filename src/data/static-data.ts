import { BookmarkType } from '../@types/app';
var uniqid = require('uniqid'); 

const mockData: BookmarkType[] = [
    {id: uniqid(), name: "mdn", url: "https://developer.mozilla.org/en-US/", description:"", category: "code", tag: "official docs"},
    {id: uniqid(), name: "react", url: "https://reactjs.org/docs/hello-world.html", description:"",  category: "code", tag: "official docs"},
    {id: uniqid(), name: "typescript", url: "https://www.typescriptlang.org/docs/", description:"", category: "code", tag: "official docs"},
    {id: uniqid(), name: "css demystified", url: "https://courses.kevinpowell.co/view/courses/css-demystified", description:"", category: "code", tag: "online course"},
    {id: uniqid(), name: "javascript dsa", url: "https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/", description:"", category: "code", tag: "online course"},
    {id: uniqid(), name: "teach yourself cs", url: "https://teachyourselfcs.com/", description:"", category: "code", tag: "general guides"},
    {id: uniqid(), name: "frontend roadmap", url: "https://roadmap.sh/frontend", description:"", category: "code", tag: "general guides"},

    {id: uniqid(), name: "loveariddle", url: "https://loveariddle.tumblr.com/", description:"", category: "art", tag: "web artists"},
    {id: uniqid(), name: "emmmeralddd", url: "https://emmmeralddd.tumblr.com/", description:"", category: "art", tag: "web artists"},
    {id: uniqid(), name: "mivvu", url: "https://mivvu-archive.tumblr.com/", description:"", category: "art", tag: "web artists"},
    {id: uniqid(), name: "ovopack", url: "https://ovopack.tumblr.com/", description:"", category: "art", tag: "web artists"},
    {id: uniqid(), name: "jiro sasumo", url: "https://www.pixiv.net/en/users/326389", description:"", category: "art", tag: "web artists"},
    {id: uniqid(), name: "ohprcr", url: "https://ohprcr.tumblr.com", description:"", category: "art", tag: "web artists"},
    {id: uniqid(), name: "worvies", url: "https://twitter.com/Worvies", description:"", category: "art", tag: "web artists"},
    {id: uniqid(), name: "creamyghost", url: "https://twitter.com/CreamyGhost", description:"", category: "art", tag: "web artists"},
    {id: uniqid(), name: "1041uuu", url: "https://1041uuu.tumblr.com", description:"", category: "art", tag: "web artists"},
    {id: uniqid(), name: "みなはむ", url: "https://www.pixiv.net/en/users/228408", description:"", category: "art", tag: "web artists"},
    {id: uniqid(), name: "pon-marsh", url: "https://www.pixiv.net/en/users/5093857", description:"", category: "art", tag: "web artists"},
    {id: uniqid(), name: "holly warburton", url: "https://holly-warbs.tumblr.com/", description:"", category: "art", tag: "web artists"},
    {id: uniqid(), name: "海島千本", url: "https://www.pixiv.net/en/users/18362/", description:"", category: "art", tag: "web artists"},
    {id: uniqid(), name: "illumi999", url: "https://www.instagram.com/illumi999/", description:"", category: "art", tag: "web artists"},
    
    {id: uniqid(), name: "gumroad", url: "https://app.gumroad.com/library", description:"", category: "art", tag: "general learning"},
    {id: uniqid(), name: "adorkastock", url: "https://www.adorkastock.com/pose/", description:"", category: "art", tag: "anatomy"},


    {id: uniqid(), name: "yesterweb", url: "https://yesterweb.org/", description:"", category: "fun", tag: "indie web"},
    {id: uniqid(), name: "sadgrl.online", url: "https://sadgrl.online/cyberspace/surf-the-web", description:"", category: "fun", tag: "indie web"},
    {id: uniqid(), name: "rgb teahouse", url: "https://rgbteahouse.neocities.org/", description:"", category: "fun", tag: "indie web"},
    {id: uniqid(), name: "vg museum", url: "http://www.vgmuseum.com/", description:"", category: "fun", tag: "video games"},
    {id: uniqid(), name: "starmen.net", url: "http://www.starmen.net/", description:"", category: "fun", tag: "video games"},
    {id: uniqid(), name: "sakugabooru", url: "http://www.sakugabooru.com/", description:"", category: "fun", tag: "anime"},
    {id: uniqid(), name: "anilinks", url: "http://www.anilinks.neocities.org", description:"", category: "fun", tag: "anime"},
  ];

  export default mockData;