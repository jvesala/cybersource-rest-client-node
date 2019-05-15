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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsBuyerInformationPersonalIdentification = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsBuyerInformationPersonalIdentification model module.
   * @module model/Ptsv2paymentsBuyerInformationPersonalIdentification
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsBuyerInformationPersonalIdentification</code>.
   * @alias module:model/Ptsv2paymentsBuyerInformationPersonalIdentification
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Ptsv2paymentsBuyerInformationPersonalIdentification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsBuyerInformationPersonalIdentification} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsBuyerInformationPersonalIdentification} The populated <code>Ptsv2paymentsBuyerInformationPersonalIdentification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('issuedBy')) {
        obj['issuedBy'] = ApiClient.convertToType(data['issuedBy'], 'String');
      }
    }
    return obj;
  }

  /**
   * The type of the identification.  Possible values:   - `NATIONAL`   - `CPF`   - `CPNJ`   - `CURP`   - `SSN`   - `DRIVER_LICENSE`  This field is supported only on the following processors.  **ComercioLatino**\\ Set this field to the Cadastro de Pessoas Fisicas (CPF).  **CyberSource Latin American Processing**\\ Supported for Redecard in Brazil. Set this field to the Cadastro de Pessoas Fisicas (CPF), which is required for AVS for Redecard in Brazil. **Note** CyberSource Latin American Processing is the name of a specific processing connection that CyberSource supports. In the CyberSource API documentation, CyberSource Latin American Processing does not refer to the general topic of processing in Latin America. The information in this field description is for the specific processing connection called CyberSource Latin American Processing. It is not for any other Latin American processors that CyberSource supports.  ccAuthService (Required when the billing country is the U.S. or Canada; otherwise, optional.) This field is optional if your CyberSource account is configured for relaxed requirements for address data and expiration date. See \"Relaxed Requirements for Address Data and Expiration Date,\" page 75. Important It is your responsibility to determine whether a field is required for the transaction you are requesting. 
   * @member {module:model/Ptsv2paymentsBuyerInformationPersonalIdentification.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The value of the identification type. This field is supported only on the following processors.  **ComercioLatino** Set this field to the Cadastro de Pessoas Fisicas (CPF).  **CyberSource Latin American Processing** Supported for Redecard in Brazil. Set this field to the Cadastro de Pessoas Fisicas (CPF), which is required for AVS for Redecard in Brazil. **Note** CyberSource Latin American Processing is the name of a specific processing connection that CyberSource supports. In the CyberSource API documentation, CyberSource Latin American Processing does not refer to the general topic of processing in Latin America. The information in this field description is for the specific processing connection called CyberSource Latin American Processing. It is not for any other Latin American processors that CyberSource supports.  For processor-specific information, see the personal_id field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)    If type = PASSPORT, this is the cardholder's passport number. Recommended for Discover ProtectBuy. 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * If type = DRIVER_LICENSE, this is the State or province where the customer’s driver’s license was issued. Use the two-character State, Province, and Territory Codes for the United States and Canada.  ** TeleCheck ** Contact your TeleCheck representative to find out whether this field is required or optional.  ** All Other Processors ** Not used.  If type = PASSPORT, this is the Issuing country for the cardholder’s passport. Recommended for Discover ProtectBuy. 
   * @member {String} issuedBy
   */
  exports.prototype['issuedBy'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "NATIONAL"
     * @const
     */
    "NATIONAL": "NATIONAL",
    /**
     * value: "CPF"
     * @const
     */
    "CPF": "CPF",
    /**
     * value: "CPNJ"
     * @const
     */
    "CPNJ": "CPNJ",
    /**
     * value: "CURP"
     * @const
     */
    "CURP": "CURP",
    /**
     * value: "SSN"
     * @const
     */
    "SSN": "SSN",
    /**
     * value: "DRIVER_LICENSE"
     * @const
     */
    "DRIVER_LICENSE": "DRIVER_LICENSE"  };


  return exports;
}));


