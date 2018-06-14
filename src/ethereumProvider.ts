import { SupportedProviderTypes } from "./types/types";
import * as promisify from 'es6-promisify';
const ProviderEngine = require('web3-provider-engine');
const FetchSubprovider = require('web3-provider-engine/subproviders/fetch');
import { configs } from "./utils/configs";

export class EthereumProvider {
    public provider: any;
    public networkIdIfExists: string;
    public doesInjectedWeb3Exist: boolean;
    private providerType: SupportedProviderTypes;
    private injectedWeb3: any;

    /**
     * Define info needed to setup our provider
     * @param {SupportedProviderTypes} providerType
     * @returns {Promise<void>}
     */
    public async setChosenProviderAsync(providerType: SupportedProviderTypes): Promise<void> {
        this.injectedWeb3 = (window as any).web3;
        this.doesInjectedWeb3Exist = this.injectedWeb3 ? true : false;
        this.providerType = providerType;

        // set network id
        await this.setNetworkIdIfExistsAsync();
        // set chosen provider
        await this.initProviderAsync();
    }

    public async initProviderAsync() {
        switch (this.providerType) {
            case 'injected':
                await this.initInjectedProviderAsync();
                break;
            default:
            // do nothing;
        }
    }

    /**
     * Define our default etheruem provider based on the existence injected web3 and public hosted node for
     * supported networks
     * @returns {Promise<void>}
     */
    private async initInjectedProviderAsync(): Promise<void> {
        const publicNodeUrlIfExistsForNetworkId: string =
            configs.PUBLIC_NODE_AVAILABLE_BY_NETWORK_ID[this.networkIdIfExists];
        if (this.doesInjectedWeb3Exist && publicNodeUrlIfExistsForNetworkId) {
            this.provider = new ProviderEngine();
            this.provider.addProvider(
                new FetchSubprovider({rpcUrl: publicNodeUrlIfExistsForNetworkId})
            );
            // start polling for blocks
            this.provider.start();
            // stop polling after first block
            this.stopBlockPolling(this.provider);
        }
    }

    /**
     * Stop web3 provider engine block polling
     * @param provider
     */
    private stopBlockPolling(provider: any) {
        provider.on('block', () => {
            provider.stop();
        });
    }

    /**
     * set ethereum network id if connected
     * @returns {Promise<void>}
     */
    private async setNetworkIdIfExistsAsync(): Promise<void> {
        // TODO:: Employ safer way to detect the network Id when no injectedWeb3
        if (this.doesInjectedWeb3Exist) {
            this.networkIdIfExists = await promisify(this.injectedWeb3.version.getNetwork)();
        }
    }
}