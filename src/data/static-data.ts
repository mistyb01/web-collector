import { BookmarkType } from '../@types/app';
var uniqid = require('uniqid'); 

const mockData: BookmarkType[] = [
    {id: uniqid(), name: "goggle", url: "google.com", description:"", category: "category1", tag: "tag1"},
    {id: uniqid(), name: "utob", url: "google.com", description:"", category: "category2", tag: "tag2"},
  ];

  export default mockData;