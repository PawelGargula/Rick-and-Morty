/* tslint:disable */
/* eslint-disable */
/**
 * Rick and Morty API
 * Access information about characters from Rick and Morty.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface Character
 */
export interface Character {
    /**
     * The id of the character.
     * @type {number}
     * @memberof Character
     */
    'id'?: number;
    /**
     * The name of the character.
     * @type {string}
     * @memberof Character
     */
    'name'?: string;
    /**
     * The status of the character (Alive, Dead or unknown).
     * @type {string}
     * @memberof Character
     */
    'status'?: string;
    /**
     * The species of the character.
     * @type {string}
     * @memberof Character
     */
    'species'?: string;
    /**
     * The type or subspecies of the character.
     * @type {string}
     * @memberof Character
     */
    'type'?: string;
    /**
     * The gender of the character.
     * @type {string}
     * @memberof Character
     */
    'gender'?: string;
    /**
     * 
     * @type {CharacterOrigin}
     * @memberof Character
     */
    'origin'?: CharacterOrigin;
    /**
     * 
     * @type {CharacterLocation}
     * @memberof Character
     */
    'location'?: CharacterLocation;
    /**
     * Link to the character\'s image.
     * @type {string}
     * @memberof Character
     */
    'image'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Character
     */
    'episode'?: Array<string>;
    /**
     * Link to the character\'s own URL endpoint.
     * @type {string}
     * @memberof Character
     */
    'url'?: string;
    /**
     * Time at which the character was created in the database.
     * @type {string}
     * @memberof Character
     */
    'created'?: string;
}
/**
 * 
 * @export
 * @interface CharacterListResponse
 */
export interface CharacterListResponse {
    /**
     * 
     * @type {CharacterListResponseInfo}
     * @memberof CharacterListResponse
     */
    'info'?: CharacterListResponseInfo;
    /**
     * 
     * @type {Array<Character>}
     * @memberof CharacterListResponse
     */
    'results'?: Array<Character>;
}
/**
 * 
 * @export
 * @interface CharacterListResponseInfo
 */
export interface CharacterListResponseInfo {
    /**
     * The total number of characters.
     * @type {number}
     * @memberof CharacterListResponseInfo
     */
    'count'?: number;
    /**
     * The total number of pages.
     * @type {number}
     * @memberof CharacterListResponseInfo
     */
    'pages'?: number;
    /**
     * URL of the next page.
     * @type {string}
     * @memberof CharacterListResponseInfo
     */
    'next'?: string | null;
    /**
     * URL of the previous page.
     * @type {string}
     * @memberof CharacterListResponseInfo
     */
    'prev'?: string | null;
}
/**
 * 
 * @export
 * @interface CharacterLocation
 */
export interface CharacterLocation {
    /**
     * The name of the character\'s last known location.
     * @type {string}
     * @memberof CharacterLocation
     */
    'name'?: string;
    /**
     * Link to the character\'s last known location.
     * @type {string}
     * @memberof CharacterLocation
     */
    'url'?: string;
}
/**
 * 
 * @export
 * @interface CharacterOrigin
 */
export interface CharacterOrigin {
    /**
     * The name of the character\'s origin location.
     * @type {string}
     * @memberof CharacterOrigin
     */
    'name'?: string;
    /**
     * Link to the character\'s origin location.
     * @type {string}
     * @memberof CharacterOrigin
     */
    'url'?: string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get a list of characters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCharacters: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/character`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get a list of characters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCharacters(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CharacterListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCharacters(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.getCharacters']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary Get a list of characters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCharacters(options?: RawAxiosRequestConfig): AxiosPromise<CharacterListResponse> {
            return localVarFp.getCharacters(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Get a list of characters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getCharacters(options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getCharacters(options).then((request) => request(this.axios, this.basePath));
    }
}



