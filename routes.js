
const fun = require('./controllers');

const shortIds = [];
const createid = (req, res) => {
    const longUrl = req.params.url;
    if (!longUrl) {
      return res.status(400).json({ error: "URL is required" });
    }
    const shortId = fun.generateShortId(longUrl);
    shortIds.push(longUrl,shortId,Date.now() + 1800);

    res.json({shortlink : `http://localhost:4000/${shortId}`,
            creation_date:`${Date.now()}`,
            expiry:`${Date.now() + 1800}`});
}; 

const status = (req,res) => {
    const longUrl = req.params.url;
    if (!longUrl) {
      return res.status(400).json({ error: "URL is required" });
    }
    const url = users.filter((user) => user.longUrl === longUrl);
    const use = [];
    if(url) {
        url.clicked = Number(url.clicked) + 1;
        url.recentVisit = Date.now();
        users.push(...url);
        console.log(users);
    }else{
        use = {
            clicked : 1,
            recentVisit : Date.now(),
            creation : Date.now(),
            expiry : Date.now() + 1800
        }
    }

    if(url) {
        fs.writeFile('./statics.json',JSON.stringify(url),(req,res) => {
            console.log(url);
            return res.json({statics:url});
        });
    }else{
        fs.writeFile('./statics.json',JSON.stringify(use),(req,res) => {
            console.log("success");
            return res.json({statics:use});
        });
    }
  }

module.exports = {createid,status};