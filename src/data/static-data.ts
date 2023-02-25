import { BookmarkType } from '../@types/app';
var uniqid = require('uniqid'); 

const mockData: BookmarkType[] = [
    {id: uniqid(), name: "", url: "", description:"", category: "", tag: ""},
  ];

  export default mockData;