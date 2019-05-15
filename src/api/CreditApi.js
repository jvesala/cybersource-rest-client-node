/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreateCreditRequest', 'model/PtsV2CreditsPost201Response', 'model/PtsV2PaymentsPost502Response', 'model/PtsV2PaymentsRefundPost400Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateCreditRequest'), require('../model/PtsV2CreditsPost201Response'), require('../model/PtsV2PaymentsPost502Response'), require('../model/PtsV2PaymentsRefundPost400Response'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.CreditApi = factory(root.CyberSource.ApiClient, root.CyberSource.CreateCreditRequest, root.CyberSource.PtsV2CreditsPost201Response, root.CyberSource.PtsV2PaymentsPost502Response, root.CyberSource.PtsV2PaymentsRefundPost400Response);
  }
}(this, function(ApiClient, CreateCreditRequest, PtsV2CreditsPost201Response, PtsV2PaymentsPost502Response, PtsV2PaymentsRefundPost400Response) {
  'use strict';

  /**
   * Credit service.
   * @module api/CreditApi
   * @version 0.0.1
   */

  /**
   * Constructs a new CreditApi. 
   * @alias module:api/CreditApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the createCredit operation.
     * @callback module:api/CreditApi~createCreditCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PtsV2CreditsPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Process a Credit
     * POST to the credit resource to credit funds to a specified credit card.
     * @param {module:model/CreateCreditRequest} createCreditRequest 
     * @param {module:api/CreditApi~createCreditCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PtsV2CreditsPost201Response}
     */
    this.createCredit = function(createCreditRequest, callback) {
      var postBody = createCreditRequest;

      // verify the required parameter 'createCreditRequest' is set
      if (createCreditRequest === undefined || createCreditRequest === null) {
        throw new Error("Missing the required parameter 'createCreditRequest' when calling createCredit");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = PtsV2CreditsPost201Response;

      return this.apiClient.callApi(
        '/pts/v2/credits/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
