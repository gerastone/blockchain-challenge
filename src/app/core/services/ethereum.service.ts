import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Web3 from 'web3';
import { Account } from 'web3-core';
import { Contract } from 'web3-eth-contract';
import { Md5 } from 'ts-md5/dist/md5';
import { time } from 'highcharts';

@Injectable()
export class EthereumService {

    sponsorAddress = '0x23EaD49eD2C2E731E1f3b036d7aA5996192E4012'

    cercleAbi = '[{"inputs":[{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]'
    trackAbi = '[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"hash","type":"bytes32"}],"name":"NewTrack","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"_data","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"hash","type":"bytes32"}],"name":"saveTrack","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"hash","type":"bytes32"}],"name":"validateHash","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]'

    INFURA_API_KEY = "36ea3c28d785451c9d56f8de2d4c8a39"

    web3: Web3;
    cercleTokenContract: Contract;
    trackContract: Contract;
    
    constructor(protected http: HttpClient) {
        this.web3 = new Web3(new Web3.providers.HttpProvider(`https://rinkeby.infura.io/v3/${this.INFURA_API_KEY}`));

        this.cercleTokenContract = new this.web3.eth.Contract(JSON.parse(this.cercleAbi), '0xa5bD6c026B9c2F529dFD981aacfAe40fee9B0038');
        this.trackContract = new this.web3.eth.Contract(JSON.parse(this.trackAbi), '0xace1Fa0bBeaC5493d2DF7f042Aaf490F6d976C6A');
    }

    public saveAccount(account: Account) {
        localStorage.setItem('privateKey', account.privateKey)
        localStorage.setItem('address', account.address)
    }

    public getAccount() {
        let key = localStorage.getItem('privateKey');

        return this.web3.eth.accounts.privateKeyToAccount(key);
    }

    public createAccount() {
        let account = this.web3.eth.accounts.create();

        if (account) {
            this.saveAccount(account)
            return account.address;
        }
        
        return null;
    }

    public sendPoints(amount) {
        return this.cercleTokenContract.methods.transfer(this.sponsorAddress, amount).call()
    }

    public validateTrack(trackId, state, timestamp) {
        console.log(`${trackId}_${state}_${timestamp}`)
        let hash = '0x' + Md5.hashStr(`${trackId}_${state}_${timestamp}`);
        console.log('HASH', hash)
        return this.trackContract.methods.validateHash(hash).call()
    }

    public balanceOf() {
        return this.cercleTokenContract.methods.balanceOf(localStorage.getItem('address')).call()
    }
}
