import * as promisify from 'es6-promisify';
import * as Web3 from 'web3';
import * as Web3Utils from 'web3-utils';
import { ethereumProvider } from '../appServices';
import { configs } from '../utils/configs';
import { SupportedProviderTypes } from "../types/types";

export class Web3APIService {
    private injectedWeb3: Web3;
    private web3: Web3;

    /**
     * This method is invoked when the App component mounts to the DOM.
     */
    public async initWeb3(chosenProvider: SupportedProviderTypes): Promise<void> {
        const { doesInjectedWeb3Exist } = ethereumProvider;

        if (doesInjectedWeb3Exist && chosenProvider === 'injected') {
            this.injectedWeb3 = (window as any).web3;
            this.web3 = new Web3();
            this.web3.setProvider(this.injectedWeb3.currentProvider);
        }
    }

    /**
     * User account addresses
     */
    public async getAccountsAsync(): Promise<string[]> {
        // const addresses = await promisify<string[]>(this.web3.eth.getAccounts)();
        const addresses = await promisify(this.web3.eth.getAccounts)();
        return addresses;
    }

    /**
     * Check node connection status
     * @returns {Boolean}
     */
    public async getConnectionStatus() {
        // return await promisify<boolean>(this.injectedWeb3.net.getListening)();
        return await promisify(this.injectedWeb3.net.getListening)();
    }

    /**
     * sign custom message
     *
     * @param string:address|string:challenge
     * @returns {Promise}
     */
    public async signMessageAsync(
        address: string,
        challenge: string
    ): Promise<string> {
        // NOTE:: currently web3.eth.sign is supported by Metamask but does not allow inclusion of a
        // custom message in the signing window.
        let signedMessage: string;
        signedMessage = await promisify(this.web3.personal.sign)(
            Web3Utils.utf8ToHex(challenge),
            address
        );

        return signedMessage;
    }

    /**
     * get ETH balance for given address
     *
     * @param string:owner address
     * @returns Promise return string
     */
    public async getEthBalanceAsync(address: string): Promise<any> {
        // NOTE: The MetaMask Web3 object does not support synchronous methods like eth.getBalance
        // without a callback parameter.
        // github.com/MetaMask/faq/blob/master/DEVELOPERS.md#dizzy-all-async---think-of-metamask-as-a-light-client
        // for details.
        if (this.web3) {
            return new Promise((resolve, reject) => {
                return this.web3.eth.getBalance(address, (error, result) => {
                    if (!error) {
                        resolve(result);
                    } else {
                        reject(error);
                    }
                });
            });
        }
    }

    /**
     * Provide current node network name
     *
     *
     *
     */
    public async getNodeNetworkName(): Promise<string> {
        const netId = await promisify(this.web3.version.getNetwork)();
        if (netId) {
            return configs.ETH_NETWORK_NAMES[netId];
        } else {
            return configs.ETH_NETWORK_NAMES[42];
        }
    }
}
