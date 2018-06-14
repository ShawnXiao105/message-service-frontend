import { Web3APIService } from './services/webThreeAPIService';
import { EthereumProvider } from './ethereumProvider';

export const web3Api = new Web3APIService();
export const ethereumProvider = new EthereumProvider();