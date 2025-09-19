import { AggLayer } from '@agglayer/sdk';

export class AggLayerService {
    private agglayer: AggLayer;

    constructor(apiKey: string) {
        this.agglayer = new AggLayer(apiKey);
    }

    async aggregateData(params: any): Promise<any> {
        try {
            const data = await this.agglayer.aggregate(params);
            return data;
        } catch (error) {
            throw new Error(`Error aggregating data: ${error.message}`);
        }
    }

    async queryData(query: string): Promise<any> {
        try {
            const result = await this.agglayer.query(query);
            return result;
        } catch (error) {
            throw new Error(`Error querying data: ${error.message}`);
        }
    }
}