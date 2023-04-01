

 const KEY="AIzaSyACv7GSJFIjzBP1PrugIuZ-cFomK9Q45Jw";
 const YOUTUBE_VIDEOS_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key="+KEY;

  export const CATEGORY_API ="https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key="+KEY;

export default YOUTUBE_VIDEOS_API;

export const comment=[
   { name:"Mohit ",
     text:"first layer comment",
     replies:[{
      name:"Mohit kumar",
      text:"reply to 1st -second",
      replies:[{
        name:"Mohit kumar",
        text:"reply to 2nd -third",
        replies:[{
          name:"Mohit kumar",
          text:"reply to 3rd -fourth",
          replies:null
        }]
      }]
  }]
},
{ name:"Mohit ",
text:"first layer comment",
replies:[{
 name:"Mohit kumar",
 text:"reply to 1st -second",
 replies:[{
   name:"Mohit kumar",
   text:"reply to 2nd -third",
   replies:[{
     name:"Mohit kumar",
     text:"reply to 3rd -fourth",
     replies:null
   }]
 }]
}]
}
];