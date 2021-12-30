const functions = require('firebase-functions');
const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { contentDB } = require('../../../db');
const ogs = require('open-graph-scraper');

module.exports = async (req, res) => {
  //url로부터 og테그 긁기
  const { url } = req.body;
  if (!url) return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));

  let client;
  const options = { url: url };
  try {
    client = await db.connect(req);
    const contents = await contentDB.getAllContent(client);
    contents?.map((item,idx)=>{
      if(item.url === url) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.SAME_POST));
      }
    })
    ogs(options, async (error, response) => {
      if (error) return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
      const { ogTitle, ogDescription, ogImage } = response;
      let postImg = ogImage?.url;
      if(!postImg) {
        postImg = "https://firebasestorage.googleapis.com/v0/b/socar-server-814e9.appspot.com/o/car%2Fhavitlogobig.png?alt=media&token=da294b1c-8bba-49fa-aaa1-5b944b573fc6"
      }
      let postTitle = ogTitle;
      if (!postTitle) {
        postTitle = '해빗 사랑해 !';
      }
      let postDescription = ogDescription;
      if(!postDescription){
        postDescription = '비록 og테그의 description이 없는 슬픈 상황이지만 해빗 사랑해!'
      }
      const postContent = await contentDB.postContent(client, postImg, postTitle, postDescription, url);
      if (!postContent) return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, responseMessage.NO_POST));
      res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.ADD_ONE_POST_SUCCESS, postContent));
    });
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);

    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  } finally {
    client.release();
  }
};
