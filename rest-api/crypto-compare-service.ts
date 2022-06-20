import { CryptoPrice } from "../src/app/model/crypto-price";




export async function findAllCryptos() {
  

  // global.fetch = require('node-fetch')
  const cc = require('./cryptocomparelocal');
  var deasync = require('deasync');
  cc.setApiKey('23f7a1fd0cd55420621523fca0cae543fd5ea22921152eccda31be9e9aab8d25')


  var res =  cc.price('BTC', ['USD', 'EUR']);

  return <CryptoPrice>res;

}
