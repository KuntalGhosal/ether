// const Web3 = require('web3')
// const dotenv = require('dotenv').config();
// var request = require('request');

// var headers = {
// 	'Content-Type': 'application/json'
// };

// var dataString = '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["latest",true], "id":1}';
// const web3 = new Web3('HTTP://127.0.0.1:7545')

// // const account = web3.eth.getAccounts().then(console.log)
// const block = web3.eth.getBlockNumber().then(console.log)
// const mining = web3.eth.isMining().then(console.log)
// const nodeInfo = web3.eth.getNodeInfo().then(console.log)

// const balance = web3.eth.getBalance("0x149396210CBae108dc494Fb79a21B5f4C4b6718F").then(console.log)
const dotenv = require('dotenv').config();
var request = require('request');

var headers = {
	'Content-Type': 'application/json'
};

var dataString = '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["latest",true], "id":1}';

var options = {
	url: `https://rinkeby.infura.io/v3/87ac8ac7975e4b4d99c5840792f0884d`,
    // url:"https://rinkeby.infura.io/v3/87ac8ac7975e4b4d99c5840792f0884d#relay_sendTransaction",
	method: 'POST',
	headers: headers,
	body: dataString,
};

function callback(error, response, body) {
	if (!error && response.statusCode == 200) {
		json = response.body;
		var obj = JSON.parse(json);
		console.log(obj)
		
	}
}

request(options, callback);