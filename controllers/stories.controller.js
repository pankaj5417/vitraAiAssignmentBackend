const fetch =require("node-fetch");
const axios=require("axios")

const MyTopStories = async (req, res) => {

    const rt = await axios.get(
      "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
    );
    const data = rt.data;

    const dataArr = await Promise.all(
      data.map(async (id) => {
        const r = await axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        );
        return r.data;
      })
    );

   
  return res.status(200).json({stories:dataArr});
};

const MyBestStories = async (req, res) => {
  
      const rt = await axios.get(
        "https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty"
      );
      const data = rt.data;
  
      const dataArr = await Promise.all(
        data.map(async (id) => {
          const r = await axios.get(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
          );
          return r.data;
        })
      );
  
    
    return res.status(200).json({stories:dataArr});
  };

  const MyNewStories = async (req, res) => {
  
      const rt = await axios.get(
        "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
      );
      const data = rt.data;
  
      const dataArr = await Promise.all(
        data.map(async (id) => {
          const r = await axios.get(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
          );
          return r.data;
        })
      );
  
   
    return res.status(200).json({stories:dataArr});
  };
  
module.exports = { MyTopStories,MyBestStories,MyNewStories };
