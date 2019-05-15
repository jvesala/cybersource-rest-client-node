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
    define(['ApiClient', 'model/Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts', 'model/Ptsv2paymentsOrderInformationAmountDetailsTaxDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts'), require('./Ptsv2paymentsOrderInformationAmountDetailsTaxDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsidcapturesOrderInformationAmountDetails = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts, root.CyberSource.Ptsv2paymentsOrderInformationAmountDetailsTaxDetails);
  }
}(this, function(ApiClient, Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts, Ptsv2paymentsOrderInformationAmountDetailsTaxDetails) {
  'use strict';




  /**
   * The Ptsv2paymentsidcapturesOrderInformationAmountDetails model module.
   * @module model/Ptsv2paymentsidcapturesOrderInformationAmountDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsidcapturesOrderInformationAmountDetails</code>.
   * @alias module:model/Ptsv2paymentsidcapturesOrderInformationAmountDetails
   * @class
   */
  var exports = function() {
    var _this = this;



















  };

  /**
   * Constructs a <code>Ptsv2paymentsidcapturesOrderInformationAmountDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsidcapturesOrderInformationAmountDetails} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsidcapturesOrderInformationAmountDetails} The populated <code>Ptsv2paymentsidcapturesOrderInformationAmountDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('totalAmount')) {
        obj['totalAmount'] = ApiClient.convertToType(data['totalAmount'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('discountAmount')) {
        obj['discountAmount'] = ApiClient.convertToType(data['discountAmount'], 'String');
      }
      if (data.hasOwnProperty('dutyAmount')) {
        obj['dutyAmount'] = ApiClient.convertToType(data['dutyAmount'], 'String');
      }
      if (data.hasOwnProperty('taxAmount')) {
        obj['taxAmount'] = ApiClient.convertToType(data['taxAmount'], 'String');
      }
      if (data.hasOwnProperty('nationalTaxIncluded')) {
        obj['nationalTaxIncluded'] = ApiClient.convertToType(data['nationalTaxIncluded'], 'String');
      }
      if (data.hasOwnProperty('taxAppliedAfterDiscount')) {
        obj['taxAppliedAfterDiscount'] = ApiClient.convertToType(data['taxAppliedAfterDiscount'], 'String');
      }
      if (data.hasOwnProperty('taxAppliedLevel')) {
        obj['taxAppliedLevel'] = ApiClient.convertToType(data['taxAppliedLevel'], 'String');
      }
      if (data.hasOwnProperty('taxTypeCode')) {
        obj['taxTypeCode'] = ApiClient.convertToType(data['taxTypeCode'], 'String');
      }
      if (data.hasOwnProperty('freightAmount')) {
        obj['freightAmount'] = ApiClient.convertToType(data['freightAmount'], 'String');
      }
      if (data.hasOwnProperty('foreignAmount')) {
        obj['foreignAmount'] = ApiClient.convertToType(data['foreignAmount'], 'String');
      }
      if (data.hasOwnProperty('foreignCurrency')) {
        obj['foreignCurrency'] = ApiClient.convertToType(data['foreignCurrency'], 'String');
      }
      if (data.hasOwnProperty('exchangeRate')) {
        obj['exchangeRate'] = ApiClient.convertToType(data['exchangeRate'], 'String');
      }
      if (data.hasOwnProperty('exchangeRateTimeStamp')) {
        obj['exchangeRateTimeStamp'] = ApiClient.convertToType(data['exchangeRateTimeStamp'], 'String');
      }
      if (data.hasOwnProperty('amexAdditionalAmounts')) {
        obj['amexAdditionalAmounts'] = ApiClient.convertToType(data['amexAdditionalAmounts'], [Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts]);
      }
      if (data.hasOwnProperty('taxDetails')) {
        obj['taxDetails'] = ApiClient.convertToType(data['taxDetails'], [Ptsv2paymentsOrderInformationAmountDetailsTaxDetails]);
      }
      if (data.hasOwnProperty('serviceFeeAmount')) {
        obj['serviceFeeAmount'] = ApiClient.convertToType(data['serviceFeeAmount'], 'String');
      }
      if (data.hasOwnProperty('originalCurrency')) {
        obj['originalCurrency'] = ApiClient.convertToType(data['originalCurrency'], 'String');
      }
    }
    return obj;
  }

  /**
   * Grand total for the order. This value cannot be negative. You can include a decimal point (.), but no other special characters. CyberSource truncates the amount to the correct number of decimal places.  **Note** For CTV, FDCCompass, Paymentech processors, the maximum length for this field is 12.  **Important** Some processors have specific requirements and limitations, such as maximum amounts and maximum field lengths. This information is covered in:  Table 15, \"Authorization Information for Specific Processors,\" on page 43  Table 19, \"Capture Information for Specific Processors,\" on page 58  Table 23, \"Credit Information for Specific Processors,\" on page 75 If your processor supports zero amount authorizations, you can set this field to 0 for the authorization to check if the card is lost or stolen. See \"Zero Amount Authorizations,\" page 247.  **DCC with a Third-Party Provider**\\ Set this field to the converted amount that was returned by the DCC provider. You must include either this field or offer0 and the offerlevel field amount in your request. For details, see \"Dynamic Currency Conversion with a Third Party Provider,\" page 125.  **FDMS South**\\ If you accept IDR or CLP currencies, see the entry for FDMS South in Table 15, \"Authorization Information for Specific Processors,\" on page 43.  **DCC for First Data**\\ Not used. 
   * @member {String} totalAmount
   */
  exports.prototype['totalAmount'] = undefined;
  /**
   * Currency used for the order. Use the three-character ISO Standard Currency Codes.  For an authorization reversal (`reversalInformation`) or a capture (`processingOptions.capture` is set to `true`), you must use the same currency that you used in your request for Payment API.  **DCC for First Data**\\ Your local currency. For details, see \"Dynamic Currency Conversion for First Data,\" page 113. 
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * Total discount amount applied to the order.  For processor-specific information, see the order_discount_amount field in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html) 
   * @member {String} discountAmount
   */
  exports.prototype['discountAmount'] = undefined;
  /**
   * Total charges for any import or export duties included in the order.  For processor-specific information, see the duty_amount field in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html) 
   * @member {String} dutyAmount
   */
  exports.prototype['dutyAmount'] = undefined;
  /**
   * Total tax amount for all the items in the order.  For processor-specific information, see the total_tax_amount field in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html) 
   * @member {String} taxAmount
   */
  exports.prototype['taxAmount'] = undefined;
  /**
   * Flag that indicates whether a national tax is included in the order total.  Possible values:   - **0**: national tax not included  - **1**: national tax included  For processor-specific information, see the national_tax_indicator field in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html) 
   * @member {String} nationalTaxIncluded
   */
  exports.prototype['nationalTaxIncluded'] = undefined;
  /**
   * Flag that indicates how the merchant manages discounts.  Possible values:   - **0**: no invoice level discount included  - **1**: tax calculated on the postdiscount invoice total  - **2**: tax calculated on the prediscount invoice total  For processor-specific information, see the order_discount_management_indicator field in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html) 
   * @member {String} taxAppliedAfterDiscount
   */
  exports.prototype['taxAppliedAfterDiscount'] = undefined;
  /**
   * Flag that indicates how you calculate tax.  Possible values:   - **0**: net prices with tax calculated at line item level  - **1**: net prices with tax calculated at invoice level  - **2**: gross prices with tax provided at line item level  - **3**: gross prices with tax provided at invoice level  - **4**: no tax applies on the invoice for the transaction  For processor-specific information, see the tax_management_indicator field in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html) 
   * @member {String} taxAppliedLevel
   */
  exports.prototype['taxAppliedLevel'] = undefined;
  /**
   * For tax amounts that can be categorized as one tax type.  This field contains the tax type code that corresponds to the entry in the _lineItems.taxAmount_ field.  Possible values:   - **056**: sales tax (U.S only)  - **TX~**: all taxes (Canada only)   Note ~ = space.  For processor-specific information, see the total_tax_type_code field in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html) 
   * @member {String} taxTypeCode
   */
  exports.prototype['taxTypeCode'] = undefined;
  /**
   * Total freight or shipping and handling charges for the order. When you include this field in your request, you must also include the **totalAmount** field.  For processor-specific information, see the freight_amount field in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html) 
   * @member {String} freightAmount
   */
  exports.prototype['freightAmount'] = undefined;
  /**
   * Set this field to the converted amount that was returned by the DCC provider. See \"Dynamic Currency Conversion with a Third Party Provider,\" page 125.  For processor-specific information, see the foreign_amount field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} foreignAmount
   */
  exports.prototype['foreignAmount'] = undefined;
  /**
   * Your customer’s billing currency. See \"Dynamic Currency Conversion with a Third Party Provider,\" page 125.  For processor-specific information, see the foreign_currency field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} foreignCurrency
   */
  exports.prototype['foreignCurrency'] = undefined;
  /**
   * Exchange rate returned by the DCC service. Includes a decimal point and a maximum of 4 decimal places.  For details, see \"Dynamic Currency Conversion for First Data,\" page 113.  For processor-specific information, see the exchange_rate field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} exchangeRate
   */
  exports.prototype['exchangeRate'] = undefined;
  /**
   * Time stamp for the exchange rate. This value is returned by the DCC service.  Format: `YYYYMMDD~HH:MM`  where ~ denotes a space.  For processor-specific information, see the exchange_rate_timestamp field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} exchangeRateTimeStamp
   */
  exports.prototype['exchangeRateTimeStamp'] = undefined;
  /**
   * @member {Array.<module:model/Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts>} amexAdditionalAmounts
   */
  exports.prototype['amexAdditionalAmounts'] = undefined;
  /**
   * @member {Array.<module:model/Ptsv2paymentsOrderInformationAmountDetailsTaxDetails>} taxDetails
   */
  exports.prototype['taxDetails'] = undefined;
  /**
   * Service fee. Required for service fee transactions. 
   * @member {String} serviceFeeAmount
   */
  exports.prototype['serviceFeeAmount'] = undefined;
  /**
   * Your local pricing currency code.  For the possible values, see the ISO Standard Currency Codes.  For details, see Dynamic Currency Conversion with a Third Party Provider. 
   * @member {String} originalCurrency
   */
  exports.prototype['originalCurrency'] = undefined;



  return exports;
}));


