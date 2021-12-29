const functions = require('firebase-functions');
const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const axios = require('axios');

const BASE_URL = 'https://emoji-recommendation.web.app/emoji';

module.exports = async (req, res) => {
  const { words } = req.query;
  const input = encodeURI(words);
  try {
    const { data } = await axios.get(`${BASE_URL}?words=${input}`);
    return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.GET_EMOJI_SUCCESS, data));
  } catch (error) {
    functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
    console.log(error);
    return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  }
};
