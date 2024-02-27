import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { debug, warn } from "@utils/logger";

export class httpClient {
    instance: AxiosInstance;

    constructor(axiosInstanceConfig: AxiosRequestConfig) {
        this.instance = axios.create(axiosInstanceConfig);
    }

    debugRequest(axiosRequestconfig: AxiosRequestConfig) {
        debug(`REQUEST START`); // request start
        debug(`METHOD: ${axiosRequestconfig.method}`); // status method
        debug(`URL: ${axiosRequestconfig.url}`); // request url
        debug(`REQUEST HEADERS: ${JSON.stringify(axiosRequestconfig.headers)}`); // request headers
        debug(
            `REQUEST BODY: ${JSON.stringify(axiosRequestconfig.data) ||
            JSON.stringify(axiosRequestconfig.params)
            }`
        ); // request bod
    }

    debugResponse(response: AxiosResponse) {
        debug(`RESPONSE STATUS: ${response.status}`); // status code response.data); // response body
        let responseData = JSON.stringify(response.data) || "";

        debug(`RESPONSE DATA: ${responseData.substring(0, 300)}`); // response headers
        debug(`REQUEST END`); // request end
    }

    async request(
        axiosRequestconfig: AxiosRequestConfig
    ): Promise<AxiosResponse> {
        if (!axiosRequestconfig.url?.includes("/auth/login")) {
            this.debugRequest(axiosRequestconfig);
            const response = await this.instance(axiosRequestconfig);
            await response.data;
            this.debugResponse(response);
            return response;
        }
        const response = await this.instance(axiosRequestconfig);
        return response;
    }
}