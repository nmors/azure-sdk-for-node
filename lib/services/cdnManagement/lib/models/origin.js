/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the Origin class.
 * @constructor
 * CDN origin is the source of the content being delivered via CDN. When the
 * edge nodes represented by an endpoint do not have the requested content
 * cached, they attempt to fetch it from one or more of the configured
 * origins.
 *
 * @member {string} hostName The address of the origin. Domain names, IPv4
 * addresses, and IPv6 addresses are supported.
 * 
 * @member {number} [httpPort] The value of the HTTP port. Must be between 1
 * and 65535.
 * 
 * @member {number} [httpsPort] The value of the https port. Must be between 1
 * and 65535.
 * 
 * @member {string} [resourceState] Resource status of the origin. Possible
 * values include: 'Creating', 'Active', 'Deleting'
 * 
 * @member {string} [provisioningState] Provisioning status of the origin.
 * 
 */
function Origin() {
  Origin['super_'].call(this);
}

util.inherits(Origin, models['Resource']);

/**
 * Defines the metadata of Origin
 *
 * @returns {object} metadata of Origin
 *
 */
Origin.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Origin',
    type: {
      name: 'Composite',
      className: 'Origin',
      modelProperties: {
        id: {
          required: false,
          readOnly: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          readOnly: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          readOnly: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        location: {
          required: true,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        hostName: {
          required: true,
          serializedName: 'properties.hostName',
          type: {
            name: 'String'
          }
        },
        httpPort: {
          required: false,
          serializedName: 'properties.httpPort',
          constraints: {
            InclusiveMaximum: 65535,
            InclusiveMinimum: 1
          },
          type: {
            name: 'Number'
          }
        },
        httpsPort: {
          required: false,
          serializedName: 'properties.httpsPort',
          constraints: {
            InclusiveMaximum: 65535,
            InclusiveMinimum: 1
          },
          type: {
            name: 'Number'
          }
        },
        resourceState: {
          required: false,
          readOnly: true,
          serializedName: 'properties.resourceState',
          type: {
            name: 'String'
          }
        },
        provisioningState: {
          required: false,
          readOnly: true,
          serializedName: 'properties.provisioningState',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = Origin;
