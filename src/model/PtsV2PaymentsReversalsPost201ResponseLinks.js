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
    define(['ApiClient', 'model/PtsV2PaymentsPost201ResponseLinksSelf'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2PaymentsPost201ResponseLinksSelf'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2PaymentsReversalsPost201ResponseLinks = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost201ResponseLinksSelf);
  }
}(this, function(ApiClient, PtsV2PaymentsPost201ResponseLinksSelf) {
  'use strict';




  /**
   * The PtsV2PaymentsReversalsPost201ResponseLinks model module.
   * @module model/PtsV2PaymentsReversalsPost201ResponseLinks
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsReversalsPost201ResponseLinks</code>.
   * @alias module:model/PtsV2PaymentsReversalsPost201ResponseLinks
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PtsV2PaymentsReversalsPost201ResponseLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsReversalsPost201ResponseLinks} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsReversalsPost201ResponseLinks} The populated <code>PtsV2PaymentsReversalsPost201ResponseLinks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('self')) {
        obj['self'] = PtsV2PaymentsPost201ResponseLinksSelf.constructFromObject(data['self']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseLinksSelf} self
   */
  exports.prototype['self'] = undefined;



  return exports;
}));


