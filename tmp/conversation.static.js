// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const yh_conversation = $root.yh_conversation = (() => {

    /**
     * Namespace yh_conversation.
     * @exports yh_conversation
     * @namespace
     */
    const yh_conversation = {};

    yh_conversation.Status = (function() {

        /**
         * Properties of a Status.
         * @typedef {Object} yh_conversation.Status.$Properties
         * @property {number|Long|null} [number] Status number
         * @property {number|null} [code] Status code
         * @property {string|null} [msg] Status msg
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a Status.
         * @memberof yh_conversation
         * @interface IStatus
         * @augments yh_conversation.Status.$Properties
         * @deprecated Use yh_conversation.Status.$Properties instead.
         */

        /**
         * Shape of a Status.
         * @typedef {yh_conversation.Status.$Properties} yh_conversation.Status.$Shape
         */

        /**
         * Constructs a new Status.
         * @memberof yh_conversation
         * @classdesc Represents a Status.
         * @constructor
         * @param {yh_conversation.Status.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function Status(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Status number.
         * @member {number|Long} number
         * @memberof yh_conversation.Status
         * @instance
         */
        Status.prototype.number = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Status code.
         * @member {number} code
         * @memberof yh_conversation.Status
         * @instance
         */
        Status.prototype.code = 0;

        /**
         * Status msg.
         * @member {string} msg
         * @memberof yh_conversation.Status
         * @instance
         */
        Status.prototype.msg = "";

        /**
         * Creates a new Status instance using the specified properties.
         * @function create
         * @memberof yh_conversation.Status
         * @static
         * @param {yh_conversation.Status.$Properties=} [properties] Properties to set
         * @returns {yh_conversation.Status} Status instance
         * @type {{
         *   (properties: yh_conversation.Status.$Shape): yh_conversation.Status & yh_conversation.Status.$Shape;
         *   (properties?: yh_conversation.Status.$Properties): yh_conversation.Status;
         * }}
         */
        Status.create = function create(properties) {
            return new Status(properties);
        };

        /**
         * Encodes the specified Status message. Does not implicitly {@link yh_conversation.Status.verify|verify} messages.
         * @function encode
         * @memberof yh_conversation.Status
         * @static
         * @param {yh_conversation.Status.$Properties} message Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Status.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.number);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.msg);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Status message, length delimited. Does not implicitly {@link yh_conversation.Status.verify|verify} messages.
         * @function encodeDelimited
         * @memberof yh_conversation.Status
         * @static
         * @param {yh_conversation.Status.$Properties} message Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Status.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a Status message from the specified reader or buffer.
         * @function decode
         * @memberof yh_conversation.Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {yh_conversation.Status & yh_conversation.Status.$Shape} Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Status.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_conversation.Status(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.number = value;
                        else
                            delete message.number;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.code = value;
                        else
                            delete message.code;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.msg = value;
                        else
                            delete message.msg;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
            if (_end !== undefined)
                throw Error("missing end group");
            return message;
        };

        /**
         * Decodes a Status message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof yh_conversation.Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {yh_conversation.Status & yh_conversation.Status.$Shape} Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Status.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Status message.
         * @function verify
         * @memberof yh_conversation.Status
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Status.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.number != null && message.hasOwnProperty("number"))
                if (!$util.isInteger(message.number) && !(message.number && $util.isInteger(message.number.low) && $util.isInteger(message.number.high)))
                    return "number: integer|Long expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a Status message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof yh_conversation.Status
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {yh_conversation.Status} Status
         */
        Status.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.yh_conversation.Status)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.yh_conversation.Status();
            if (object.number != null)
                if (typeof object.number === "object" ? object.number.low || object.number.high : Number(object.number) !== 0)
                    if ($util.Long)
                        message.number = $util.Long.fromValue(object.number, false);
                    else if (typeof object.number === "string")
                        message.number = parseInt(object.number, 10);
                    else if (typeof object.number === "number")
                        message.number = object.number;
                    else if (typeof object.number === "object")
                        message.number = new $util.LongBits(object.number.low >>> 0, object.number.high >>> 0).toNumber();
            if (object.code != null)
                if (Number(object.code) !== 0)
                    message.code = object.code | 0;
            if (object.msg != null)
                if (typeof object.msg !== "string" || object.msg.length)
                    message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a Status message. Also converts values to other types if specified.
         * @function toObject
         * @memberof yh_conversation.Status
         * @static
         * @param {yh_conversation.Status} message Status
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Status.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.number = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.number = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                object.code = 0;
                object.msg = "";
            }
            if (message.number != null && message.hasOwnProperty("number"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.number = typeof message.number === "number" ? BigInt(message.number) : $util.Long.fromBits(message.number.low >>> 0, message.number.high >>> 0, false).toBigInt();
                else if (typeof message.number === "number")
                    object.number = options.longs === String ? String(message.number) : message.number;
                else
                    object.number = options.longs === String ? $util.Long.prototype.toString.call(message.number) : options.longs === Number ? new $util.LongBits(message.number.low >>> 0, message.number.high >>> 0).toNumber() : message.number;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this Status to JSON.
         * @function toJSON
         * @memberof yh_conversation.Status
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Status.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Status
         * @function getTypeUrl
         * @memberof yh_conversation.Status
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Status.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/yh_conversation.Status";
        };

        return Status;
    })();

    yh_conversation.ConversationList = (function() {

        /**
         * Properties of a ConversationList.
         * @typedef {Object} yh_conversation.ConversationList.$Properties
         * @property {yh_conversation.Status.$Properties|null} [status] ConversationList status
         * @property {Array.<yh_conversation.ConversationList.ConversationData.$Properties>|null} [data] ConversationList data
         * @property {number|null} [total] ConversationList total
         * @property {string|null} [requestId] ConversationList requestId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a ConversationList.
         * @memberof yh_conversation
         * @interface IConversationList
         * @augments yh_conversation.ConversationList.$Properties
         * @deprecated Use yh_conversation.ConversationList.$Properties instead.
         */

        /**
         * Shape of a ConversationList.
         * @typedef {yh_conversation.ConversationList.$Properties} yh_conversation.ConversationList.$Shape
         */

        /**
         * Constructs a new ConversationList.
         * @memberof yh_conversation
         * @classdesc Represents a ConversationList.
         * @constructor
         * @param {yh_conversation.ConversationList.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function ConversationList(properties) {
            this.data = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConversationList status.
         * @member {yh_conversation.Status.$Properties|null|undefined} status
         * @memberof yh_conversation.ConversationList
         * @instance
         */
        ConversationList.prototype.status = null;

        /**
         * ConversationList data.
         * @member {Array.<yh_conversation.ConversationList.ConversationData.$Properties>} data
         * @memberof yh_conversation.ConversationList
         * @instance
         */
        ConversationList.prototype.data = $util.emptyArray;

        /**
         * ConversationList total.
         * @member {number} total
         * @memberof yh_conversation.ConversationList
         * @instance
         */
        ConversationList.prototype.total = 0;

        /**
         * ConversationList requestId.
         * @member {string} requestId
         * @memberof yh_conversation.ConversationList
         * @instance
         */
        ConversationList.prototype.requestId = "";

        /**
         * Creates a new ConversationList instance using the specified properties.
         * @function create
         * @memberof yh_conversation.ConversationList
         * @static
         * @param {yh_conversation.ConversationList.$Properties=} [properties] Properties to set
         * @returns {yh_conversation.ConversationList} ConversationList instance
         * @type {{
         *   (properties: yh_conversation.ConversationList.$Shape): yh_conversation.ConversationList & yh_conversation.ConversationList.$Shape;
         *   (properties?: yh_conversation.ConversationList.$Properties): yh_conversation.ConversationList;
         * }}
         */
        ConversationList.create = function create(properties) {
            return new ConversationList(properties);
        };

        /**
         * Encodes the specified ConversationList message. Does not implicitly {@link yh_conversation.ConversationList.verify|verify} messages.
         * @function encode
         * @memberof yh_conversation.ConversationList
         * @static
         * @param {yh_conversation.ConversationList.$Properties} message ConversationList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConversationList.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.yh_conversation.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.data != null && message.data.length)
                for (let i = 0; i < message.data.length; ++i)
                    $root.yh_conversation.ConversationList.ConversationData.encode(message.data[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.total);
            if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.requestId);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ConversationList message, length delimited. Does not implicitly {@link yh_conversation.ConversationList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof yh_conversation.ConversationList
         * @static
         * @param {yh_conversation.ConversationList.$Properties} message ConversationList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConversationList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a ConversationList message from the specified reader or buffer.
         * @function decode
         * @memberof yh_conversation.ConversationList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {yh_conversation.ConversationList & yh_conversation.ConversationList.$Shape} ConversationList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConversationList.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_conversation.ConversationList(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.status = $root.yh_conversation.Status.decode(reader, reader.uint32(), undefined, _depth + 1, message.status);
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if (!(message.data && message.data.length))
                            message.data = [];
                        message.data.push($root.yh_conversation.ConversationList.ConversationData.decode(reader, reader.uint32(), undefined, _depth + 1));
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.total = value;
                        else
                            delete message.total;
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.requestId = value;
                        else
                            delete message.requestId;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
            if (_end !== undefined)
                throw Error("missing end group");
            return message;
        };

        /**
         * Decodes a ConversationList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof yh_conversation.ConversationList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {yh_conversation.ConversationList & yh_conversation.ConversationList.$Shape} ConversationList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConversationList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConversationList message.
         * @function verify
         * @memberof yh_conversation.ConversationList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConversationList.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.yh_conversation.Status.verify(message.status, _depth + 1);
                if (error)
                    return "status." + error;
            }
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (let i = 0; i < message.data.length; ++i) {
                    let error = $root.yh_conversation.ConversationList.ConversationData.verify(message.data[i], _depth + 1);
                    if (error)
                        return "data." + error;
                }
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total))
                    return "total: integer expected";
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                if (!$util.isString(message.requestId))
                    return "requestId: string expected";
            return null;
        };

        /**
         * Creates a ConversationList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof yh_conversation.ConversationList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {yh_conversation.ConversationList} ConversationList
         */
        ConversationList.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.yh_conversation.ConversationList)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.yh_conversation.ConversationList();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".yh_conversation.ConversationList.status: object expected");
                message.status = $root.yh_conversation.Status.fromObject(object.status, _depth + 1);
            }
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".yh_conversation.ConversationList.data: array expected");
                message.data = Array(object.data.length);
                for (let i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".yh_conversation.ConversationList.data: object expected");
                    message.data[i] = $root.yh_conversation.ConversationList.ConversationData.fromObject(object.data[i], _depth + 1);
                }
            }
            if (object.total != null)
                if (Number(object.total) !== 0)
                    message.total = object.total | 0;
            if (object.requestId != null)
                if (typeof object.requestId !== "string" || object.requestId.length)
                    message.requestId = String(object.requestId);
            return message;
        };

        /**
         * Creates a plain object from a ConversationList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof yh_conversation.ConversationList
         * @static
         * @param {yh_conversation.ConversationList} message ConversationList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConversationList.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (options.defaults) {
                object.status = null;
                object.total = 0;
                object.requestId = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.yh_conversation.Status.toObject(message.status, options, _depth + 1);
            if (message.data && message.data.length) {
                object.data = Array(message.data.length);
                for (let j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.yh_conversation.ConversationList.ConversationData.toObject(message.data[j], options, _depth + 1);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = message.total;
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                object.requestId = message.requestId;
            return object;
        };

        /**
         * Converts this ConversationList to JSON.
         * @function toJSON
         * @memberof yh_conversation.ConversationList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConversationList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ConversationList
         * @function getTypeUrl
         * @memberof yh_conversation.ConversationList
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ConversationList.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/yh_conversation.ConversationList";
        };

        ConversationList.ConversationData = (function() {

            /**
             * Properties of a ConversationData.
             * @typedef {Object} yh_conversation.ConversationList.ConversationData.$Properties
             * @property {string|null} [chatId] ConversationData chatId
             * @property {number|null} [chatType] ConversationData chatType
             * @property {string|null} [name] ConversationData name
             * @property {string|null} [chatContent] ConversationData chatContent
             * @property {number|Long|null} [timestampMs] ConversationData timestampMs
             * @property {number|null} [unreadMessage] ConversationData unreadMessage
             * @property {number|null} [at] ConversationData at
             * @property {number|Long|null} [avatarId] ConversationData avatarId
             * @property {string|null} [avatarUrl] ConversationData avatarUrl
             * @property {number|null} [doNotDisturb] ConversationData doNotDisturb
             * @property {number|Long|null} [timestamp] ConversationData timestamp
             * @property {yh_conversation.ConversationList.ConversationData.AtData.$Properties|null} [atData] ConversationData atData
             * @property {number|null} [certificationLevel] ConversationData certificationLevel
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a ConversationData.
             * @memberof yh_conversation.ConversationList
             * @interface IConversationData
             * @augments yh_conversation.ConversationList.ConversationData.$Properties
             * @deprecated Use yh_conversation.ConversationList.ConversationData.$Properties instead.
             */

            /**
             * Shape of a ConversationData.
             * @typedef {yh_conversation.ConversationList.ConversationData.$Properties} yh_conversation.ConversationList.ConversationData.$Shape
             */

            /**
             * Constructs a new ConversationData.
             * @memberof yh_conversation.ConversationList
             * @classdesc Represents a ConversationData.
             * @constructor
             * @param {yh_conversation.ConversationList.ConversationData.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function ConversationData(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ConversationData chatId.
             * @member {string} chatId
             * @memberof yh_conversation.ConversationList.ConversationData
             * @instance
             */
            ConversationData.prototype.chatId = "";

            /**
             * ConversationData chatType.
             * @member {number} chatType
             * @memberof yh_conversation.ConversationList.ConversationData
             * @instance
             */
            ConversationData.prototype.chatType = 0;

            /**
             * ConversationData name.
             * @member {string} name
             * @memberof yh_conversation.ConversationList.ConversationData
             * @instance
             */
            ConversationData.prototype.name = "";

            /**
             * ConversationData chatContent.
             * @member {string} chatContent
             * @memberof yh_conversation.ConversationList.ConversationData
             * @instance
             */
            ConversationData.prototype.chatContent = "";

            /**
             * ConversationData timestampMs.
             * @member {number|Long} timestampMs
             * @memberof yh_conversation.ConversationList.ConversationData
             * @instance
             */
            ConversationData.prototype.timestampMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ConversationData unreadMessage.
             * @member {number} unreadMessage
             * @memberof yh_conversation.ConversationList.ConversationData
             * @instance
             */
            ConversationData.prototype.unreadMessage = 0;

            /**
             * ConversationData at.
             * @member {number} at
             * @memberof yh_conversation.ConversationList.ConversationData
             * @instance
             */
            ConversationData.prototype.at = 0;

            /**
             * ConversationData avatarId.
             * @member {number|Long} avatarId
             * @memberof yh_conversation.ConversationList.ConversationData
             * @instance
             */
            ConversationData.prototype.avatarId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ConversationData avatarUrl.
             * @member {string} avatarUrl
             * @memberof yh_conversation.ConversationList.ConversationData
             * @instance
             */
            ConversationData.prototype.avatarUrl = "";

            /**
             * ConversationData doNotDisturb.
             * @member {number} doNotDisturb
             * @memberof yh_conversation.ConversationList.ConversationData
             * @instance
             */
            ConversationData.prototype.doNotDisturb = 0;

            /**
             * ConversationData timestamp.
             * @member {number|Long} timestamp
             * @memberof yh_conversation.ConversationList.ConversationData
             * @instance
             */
            ConversationData.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ConversationData atData.
             * @member {yh_conversation.ConversationList.ConversationData.AtData.$Properties|null|undefined} atData
             * @memberof yh_conversation.ConversationList.ConversationData
             * @instance
             */
            ConversationData.prototype.atData = null;

            /**
             * ConversationData certificationLevel.
             * @member {number} certificationLevel
             * @memberof yh_conversation.ConversationList.ConversationData
             * @instance
             */
            ConversationData.prototype.certificationLevel = 0;

            /**
             * Creates a new ConversationData instance using the specified properties.
             * @function create
             * @memberof yh_conversation.ConversationList.ConversationData
             * @static
             * @param {yh_conversation.ConversationList.ConversationData.$Properties=} [properties] Properties to set
             * @returns {yh_conversation.ConversationList.ConversationData} ConversationData instance
             * @type {{
             *   (properties: yh_conversation.ConversationList.ConversationData.$Shape): yh_conversation.ConversationList.ConversationData & yh_conversation.ConversationList.ConversationData.$Shape;
             *   (properties?: yh_conversation.ConversationList.ConversationData.$Properties): yh_conversation.ConversationList.ConversationData;
             * }}
             */
            ConversationData.create = function create(properties) {
                return new ConversationData(properties);
            };

            /**
             * Encodes the specified ConversationData message. Does not implicitly {@link yh_conversation.ConversationList.ConversationData.verify|verify} messages.
             * @function encode
             * @memberof yh_conversation.ConversationList.ConversationData
             * @static
             * @param {yh_conversation.ConversationList.ConversationData.$Properties} message ConversationData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConversationData.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.chatId != null && Object.hasOwnProperty.call(message, "chatId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.chatId);
                if (message.chatType != null && Object.hasOwnProperty.call(message, "chatType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.chatType);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                if (message.chatContent != null && Object.hasOwnProperty.call(message, "chatContent"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.chatContent);
                if (message.timestampMs != null && Object.hasOwnProperty.call(message, "timestampMs"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timestampMs);
                if (message.unreadMessage != null && Object.hasOwnProperty.call(message, "unreadMessage"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.unreadMessage);
                if (message.at != null && Object.hasOwnProperty.call(message, "at"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.at);
                if (message.avatarId != null && Object.hasOwnProperty.call(message, "avatarId"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int64(message.avatarId);
                if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.avatarUrl);
                if (message.doNotDisturb != null && Object.hasOwnProperty.call(message, "doNotDisturb"))
                    writer.uint32(/* id 11, wireType 0 =*/88).int32(message.doNotDisturb);
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 12, wireType 0 =*/96).int64(message.timestamp);
                if (message.atData != null && Object.hasOwnProperty.call(message, "atData"))
                    $root.yh_conversation.ConversationList.ConversationData.AtData.encode(message.atData, writer.uint32(/* id 14, wireType 2 =*/114).fork(), _depth + 1).ldelim();
                if (message.certificationLevel != null && Object.hasOwnProperty.call(message, "certificationLevel"))
                    writer.uint32(/* id 16, wireType 0 =*/128).int32(message.certificationLevel);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified ConversationData message, length delimited. Does not implicitly {@link yh_conversation.ConversationList.ConversationData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof yh_conversation.ConversationList.ConversationData
             * @static
             * @param {yh_conversation.ConversationList.ConversationData.$Properties} message ConversationData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConversationData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a ConversationData message from the specified reader or buffer.
             * @function decode
             * @memberof yh_conversation.ConversationList.ConversationData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {yh_conversation.ConversationList.ConversationData & yh_conversation.ConversationList.ConversationData.$Shape} ConversationData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConversationData.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_conversation.ConversationList.ConversationData(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.chatId = value;
                            else
                                delete message.chatId;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.chatType = value;
                            else
                                delete message.chatType;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.name = value;
                            else
                                delete message.name;
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.chatContent = value;
                            else
                                delete message.chatContent;
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.timestampMs = value;
                            else
                                delete message.timestampMs;
                            continue;
                        }
                    case 6: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.unreadMessage = value;
                            else
                                delete message.unreadMessage;
                            continue;
                        }
                    case 7: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.at = value;
                            else
                                delete message.at;
                            continue;
                        }
                    case 8: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.avatarId = value;
                            else
                                delete message.avatarId;
                            continue;
                        }
                    case 9: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.avatarUrl = value;
                            else
                                delete message.avatarUrl;
                            continue;
                        }
                    case 11: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.doNotDisturb = value;
                            else
                                delete message.doNotDisturb;
                            continue;
                        }
                    case 12: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.timestamp = value;
                            else
                                delete message.timestamp;
                            continue;
                        }
                    case 14: {
                            if (wireType !== 2)
                                break;
                            message.atData = $root.yh_conversation.ConversationList.ConversationData.AtData.decode(reader, reader.uint32(), undefined, _depth + 1, message.atData);
                            continue;
                        }
                    case 16: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.certificationLevel = value;
                            else
                                delete message.certificationLevel;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a ConversationData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof yh_conversation.ConversationList.ConversationData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {yh_conversation.ConversationList.ConversationData & yh_conversation.ConversationList.ConversationData.$Shape} ConversationData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConversationData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ConversationData message.
             * @function verify
             * @memberof yh_conversation.ConversationList.ConversationData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConversationData.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.chatId != null && message.hasOwnProperty("chatId"))
                    if (!$util.isString(message.chatId))
                        return "chatId: string expected";
                if (message.chatType != null && message.hasOwnProperty("chatType"))
                    if (!$util.isInteger(message.chatType))
                        return "chatType: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.chatContent != null && message.hasOwnProperty("chatContent"))
                    if (!$util.isString(message.chatContent))
                        return "chatContent: string expected";
                if (message.timestampMs != null && message.hasOwnProperty("timestampMs"))
                    if (!$util.isInteger(message.timestampMs) && !(message.timestampMs && $util.isInteger(message.timestampMs.low) && $util.isInteger(message.timestampMs.high)))
                        return "timestampMs: integer|Long expected";
                if (message.unreadMessage != null && message.hasOwnProperty("unreadMessage"))
                    if (!$util.isInteger(message.unreadMessage))
                        return "unreadMessage: integer expected";
                if (message.at != null && message.hasOwnProperty("at"))
                    if (!$util.isInteger(message.at))
                        return "at: integer expected";
                if (message.avatarId != null && message.hasOwnProperty("avatarId"))
                    if (!$util.isInteger(message.avatarId) && !(message.avatarId && $util.isInteger(message.avatarId.low) && $util.isInteger(message.avatarId.high)))
                        return "avatarId: integer|Long expected";
                if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                    if (!$util.isString(message.avatarUrl))
                        return "avatarUrl: string expected";
                if (message.doNotDisturb != null && message.hasOwnProperty("doNotDisturb"))
                    if (!$util.isInteger(message.doNotDisturb))
                        return "doNotDisturb: integer expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                if (message.atData != null && message.hasOwnProperty("atData")) {
                    let error = $root.yh_conversation.ConversationList.ConversationData.AtData.verify(message.atData, _depth + 1);
                    if (error)
                        return "atData." + error;
                }
                if (message.certificationLevel != null && message.hasOwnProperty("certificationLevel"))
                    if (!$util.isInteger(message.certificationLevel))
                        return "certificationLevel: integer expected";
                return null;
            };

            /**
             * Creates a ConversationData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof yh_conversation.ConversationList.ConversationData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {yh_conversation.ConversationList.ConversationData} ConversationData
             */
            ConversationData.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.yh_conversation.ConversationList.ConversationData)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.yh_conversation.ConversationList.ConversationData();
                if (object.chatId != null)
                    if (typeof object.chatId !== "string" || object.chatId.length)
                        message.chatId = String(object.chatId);
                if (object.chatType != null)
                    if (Number(object.chatType) !== 0)
                        message.chatType = object.chatType | 0;
                if (object.name != null)
                    if (typeof object.name !== "string" || object.name.length)
                        message.name = String(object.name);
                if (object.chatContent != null)
                    if (typeof object.chatContent !== "string" || object.chatContent.length)
                        message.chatContent = String(object.chatContent);
                if (object.timestampMs != null)
                    if (typeof object.timestampMs === "object" ? object.timestampMs.low || object.timestampMs.high : Number(object.timestampMs) !== 0)
                        if ($util.Long)
                            message.timestampMs = $util.Long.fromValue(object.timestampMs, false);
                        else if (typeof object.timestampMs === "string")
                            message.timestampMs = parseInt(object.timestampMs, 10);
                        else if (typeof object.timestampMs === "number")
                            message.timestampMs = object.timestampMs;
                        else if (typeof object.timestampMs === "object")
                            message.timestampMs = new $util.LongBits(object.timestampMs.low >>> 0, object.timestampMs.high >>> 0).toNumber();
                if (object.unreadMessage != null)
                    if (Number(object.unreadMessage) !== 0)
                        message.unreadMessage = object.unreadMessage | 0;
                if (object.at != null)
                    if (Number(object.at) !== 0)
                        message.at = object.at | 0;
                if (object.avatarId != null)
                    if (typeof object.avatarId === "object" ? object.avatarId.low || object.avatarId.high : Number(object.avatarId) !== 0)
                        if ($util.Long)
                            message.avatarId = $util.Long.fromValue(object.avatarId, false);
                        else if (typeof object.avatarId === "string")
                            message.avatarId = parseInt(object.avatarId, 10);
                        else if (typeof object.avatarId === "number")
                            message.avatarId = object.avatarId;
                        else if (typeof object.avatarId === "object")
                            message.avatarId = new $util.LongBits(object.avatarId.low >>> 0, object.avatarId.high >>> 0).toNumber();
                if (object.avatarUrl != null)
                    if (typeof object.avatarUrl !== "string" || object.avatarUrl.length)
                        message.avatarUrl = String(object.avatarUrl);
                if (object.doNotDisturb != null)
                    if (Number(object.doNotDisturb) !== 0)
                        message.doNotDisturb = object.doNotDisturb | 0;
                if (object.timestamp != null)
                    if (typeof object.timestamp === "object" ? object.timestamp.low || object.timestamp.high : Number(object.timestamp) !== 0)
                        if ($util.Long)
                            message.timestamp = $util.Long.fromValue(object.timestamp, false);
                        else if (typeof object.timestamp === "string")
                            message.timestamp = parseInt(object.timestamp, 10);
                        else if (typeof object.timestamp === "number")
                            message.timestamp = object.timestamp;
                        else if (typeof object.timestamp === "object")
                            message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                if (object.atData != null) {
                    if (typeof object.atData !== "object")
                        throw TypeError(".yh_conversation.ConversationList.ConversationData.atData: object expected");
                    message.atData = $root.yh_conversation.ConversationList.ConversationData.AtData.fromObject(object.atData, _depth + 1);
                }
                if (object.certificationLevel != null)
                    if (Number(object.certificationLevel) !== 0)
                        message.certificationLevel = object.certificationLevel | 0;
                return message;
            };

            /**
             * Creates a plain object from a ConversationData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof yh_conversation.ConversationList.ConversationData
             * @static
             * @param {yh_conversation.ConversationList.ConversationData} message ConversationData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConversationData.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.chatId = "";
                    object.chatType = 0;
                    object.name = "";
                    object.chatContent = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.timestampMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.timestampMs = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.unreadMessage = 0;
                    object.at = 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.avatarId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.avatarId = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.avatarUrl = "";
                    object.doNotDisturb = 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.timestamp = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.atData = null;
                    object.certificationLevel = 0;
                }
                if (message.chatId != null && message.hasOwnProperty("chatId"))
                    object.chatId = message.chatId;
                if (message.chatType != null && message.hasOwnProperty("chatType"))
                    object.chatType = message.chatType;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.chatContent != null && message.hasOwnProperty("chatContent"))
                    object.chatContent = message.chatContent;
                if (message.timestampMs != null && message.hasOwnProperty("timestampMs"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.timestampMs = typeof message.timestampMs === "number" ? BigInt(message.timestampMs) : $util.Long.fromBits(message.timestampMs.low >>> 0, message.timestampMs.high >>> 0, false).toBigInt();
                    else if (typeof message.timestampMs === "number")
                        object.timestampMs = options.longs === String ? String(message.timestampMs) : message.timestampMs;
                    else
                        object.timestampMs = options.longs === String ? $util.Long.prototype.toString.call(message.timestampMs) : options.longs === Number ? new $util.LongBits(message.timestampMs.low >>> 0, message.timestampMs.high >>> 0).toNumber() : message.timestampMs;
                if (message.unreadMessage != null && message.hasOwnProperty("unreadMessage"))
                    object.unreadMessage = message.unreadMessage;
                if (message.at != null && message.hasOwnProperty("at"))
                    object.at = message.at;
                if (message.avatarId != null && message.hasOwnProperty("avatarId"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.avatarId = typeof message.avatarId === "number" ? BigInt(message.avatarId) : $util.Long.fromBits(message.avatarId.low >>> 0, message.avatarId.high >>> 0, false).toBigInt();
                    else if (typeof message.avatarId === "number")
                        object.avatarId = options.longs === String ? String(message.avatarId) : message.avatarId;
                    else
                        object.avatarId = options.longs === String ? $util.Long.prototype.toString.call(message.avatarId) : options.longs === Number ? new $util.LongBits(message.avatarId.low >>> 0, message.avatarId.high >>> 0).toNumber() : message.avatarId;
                if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                    object.avatarUrl = message.avatarUrl;
                if (message.doNotDisturb != null && message.hasOwnProperty("doNotDisturb"))
                    object.doNotDisturb = message.doNotDisturb;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.timestamp = typeof message.timestamp === "number" ? BigInt(message.timestamp) : $util.Long.fromBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0, false).toBigInt();
                    else if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                if (message.atData != null && message.hasOwnProperty("atData"))
                    object.atData = $root.yh_conversation.ConversationList.ConversationData.AtData.toObject(message.atData, options, _depth + 1);
                if (message.certificationLevel != null && message.hasOwnProperty("certificationLevel"))
                    object.certificationLevel = message.certificationLevel;
                return object;
            };

            /**
             * Converts this ConversationData to JSON.
             * @function toJSON
             * @memberof yh_conversation.ConversationList.ConversationData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ConversationData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for ConversationData
             * @function getTypeUrl
             * @memberof yh_conversation.ConversationList.ConversationData
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            ConversationData.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/yh_conversation.ConversationList.ConversationData";
            };

            ConversationData.AtData = (function() {

                /**
                 * Properties of an AtData.
                 * @typedef {Object} yh_conversation.ConversationList.ConversationData.AtData.$Properties
                 * @property {number|Long|null} [unknown] AtData unknown
                 * @property {string|null} [mentionedId] AtData mentionedId
                 * @property {string|null} [mentionedName] AtData mentionedName
                 * @property {string|null} [mentionedIn] AtData mentionedIn
                 * @property {string|null} [mentionerId] AtData mentionerId
                 * @property {string|null} [mentionerName] AtData mentionerName
                 * @property {number|Long|null} [msgSeq] AtData msgSeq
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                 */

                /**
                 * Properties of an AtData.
                 * @memberof yh_conversation.ConversationList.ConversationData
                 * @interface IAtData
                 * @augments yh_conversation.ConversationList.ConversationData.AtData.$Properties
                 * @deprecated Use yh_conversation.ConversationList.ConversationData.AtData.$Properties instead.
                 */

                /**
                 * Shape of an AtData.
                 * @typedef {yh_conversation.ConversationList.ConversationData.AtData.$Properties} yh_conversation.ConversationList.ConversationData.AtData.$Shape
                 */

                /**
                 * Constructs a new AtData.
                 * @memberof yh_conversation.ConversationList.ConversationData
                 * @classdesc Represents an AtData.
                 * @constructor
                 * @param {yh_conversation.ConversationList.ConversationData.AtData.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                 */
                function AtData(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AtData unknown.
                 * @member {number|Long} unknown
                 * @memberof yh_conversation.ConversationList.ConversationData.AtData
                 * @instance
                 */
                AtData.prototype.unknown = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * AtData mentionedId.
                 * @member {string} mentionedId
                 * @memberof yh_conversation.ConversationList.ConversationData.AtData
                 * @instance
                 */
                AtData.prototype.mentionedId = "";

                /**
                 * AtData mentionedName.
                 * @member {string} mentionedName
                 * @memberof yh_conversation.ConversationList.ConversationData.AtData
                 * @instance
                 */
                AtData.prototype.mentionedName = "";

                /**
                 * AtData mentionedIn.
                 * @member {string} mentionedIn
                 * @memberof yh_conversation.ConversationList.ConversationData.AtData
                 * @instance
                 */
                AtData.prototype.mentionedIn = "";

                /**
                 * AtData mentionerId.
                 * @member {string} mentionerId
                 * @memberof yh_conversation.ConversationList.ConversationData.AtData
                 * @instance
                 */
                AtData.prototype.mentionerId = "";

                /**
                 * AtData mentionerName.
                 * @member {string} mentionerName
                 * @memberof yh_conversation.ConversationList.ConversationData.AtData
                 * @instance
                 */
                AtData.prototype.mentionerName = "";

                /**
                 * AtData msgSeq.
                 * @member {number|Long} msgSeq
                 * @memberof yh_conversation.ConversationList.ConversationData.AtData
                 * @instance
                 */
                AtData.prototype.msgSeq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Creates a new AtData instance using the specified properties.
                 * @function create
                 * @memberof yh_conversation.ConversationList.ConversationData.AtData
                 * @static
                 * @param {yh_conversation.ConversationList.ConversationData.AtData.$Properties=} [properties] Properties to set
                 * @returns {yh_conversation.ConversationList.ConversationData.AtData} AtData instance
                 * @type {{
                 *   (properties: yh_conversation.ConversationList.ConversationData.AtData.$Shape): yh_conversation.ConversationList.ConversationData.AtData & yh_conversation.ConversationList.ConversationData.AtData.$Shape;
                 *   (properties?: yh_conversation.ConversationList.ConversationData.AtData.$Properties): yh_conversation.ConversationList.ConversationData.AtData;
                 * }}
                 */
                AtData.create = function create(properties) {
                    return new AtData(properties);
                };

                /**
                 * Encodes the specified AtData message. Does not implicitly {@link yh_conversation.ConversationList.ConversationData.AtData.verify|verify} messages.
                 * @function encode
                 * @memberof yh_conversation.ConversationList.ConversationData.AtData
                 * @static
                 * @param {yh_conversation.ConversationList.ConversationData.AtData.$Properties} message AtData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AtData.encode = function encode(message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    if (message.unknown != null && Object.hasOwnProperty.call(message, "unknown"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.unknown);
                    if (message.mentionedId != null && Object.hasOwnProperty.call(message, "mentionedId"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.mentionedId);
                    if (message.mentionedName != null && Object.hasOwnProperty.call(message, "mentionedName"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.mentionedName);
                    if (message.mentionedIn != null && Object.hasOwnProperty.call(message, "mentionedIn"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.mentionedIn);
                    if (message.mentionerId != null && Object.hasOwnProperty.call(message, "mentionerId"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.mentionerId);
                    if (message.mentionerName != null && Object.hasOwnProperty.call(message, "mentionerName"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.mentionerName);
                    if (message.msgSeq != null && Object.hasOwnProperty.call(message, "msgSeq"))
                        writer.uint32(/* id 8, wireType 0 =*/64).int64(message.msgSeq);
                    if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                        for (let i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified AtData message, length delimited. Does not implicitly {@link yh_conversation.ConversationList.ConversationData.AtData.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof yh_conversation.ConversationList.ConversationData.AtData
                 * @static
                 * @param {yh_conversation.ConversationList.ConversationData.AtData.$Properties} message AtData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AtData.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes an AtData message from the specified reader or buffer.
                 * @function decode
                 * @memberof yh_conversation.ConversationList.ConversationData.AtData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {yh_conversation.ConversationList.ConversationData.AtData & yh_conversation.ConversationList.ConversationData.AtData.$Shape} AtData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AtData.decode = function decode(reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw Error("max depth exceeded");
                    let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_conversation.ConversationList.ConversationData.AtData(), value;
                    while (reader.pos < end) {
                        let start = reader.pos;
                        let tag = reader.tag();
                        if (tag === _end) {
                            _end = undefined;
                            break;
                        }
                        let wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 0)
                                    break;
                                if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                    message.unknown = value;
                                else
                                    delete message.unknown;
                                continue;
                            }
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.string()).length)
                                    message.mentionedId = value;
                                else
                                    delete message.mentionedId;
                                continue;
                            }
                        case 3: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.string()).length)
                                    message.mentionedName = value;
                                else
                                    delete message.mentionedName;
                                continue;
                            }
                        case 4: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.string()).length)
                                    message.mentionedIn = value;
                                else
                                    delete message.mentionedIn;
                                continue;
                            }
                        case 6: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.string()).length)
                                    message.mentionerId = value;
                                else
                                    delete message.mentionerId;
                                continue;
                            }
                        case 7: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.string()).length)
                                    message.mentionerName = value;
                                else
                                    delete message.mentionerName;
                                continue;
                            }
                        case 8: {
                                if (wireType !== 0)
                                    break;
                                if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                    message.msgSeq = value;
                                else
                                    delete message.msgSeq;
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                    if (_end !== undefined)
                        throw Error("missing end group");
                    return message;
                };

                /**
                 * Decodes an AtData message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof yh_conversation.ConversationList.ConversationData.AtData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {yh_conversation.ConversationList.ConversationData.AtData & yh_conversation.ConversationList.ConversationData.AtData.$Shape} AtData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AtData.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AtData message.
                 * @function verify
                 * @memberof yh_conversation.ConversationList.ConversationData.AtData
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AtData.verify = function verify(message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.unknown != null && message.hasOwnProperty("unknown"))
                        if (!$util.isInteger(message.unknown) && !(message.unknown && $util.isInteger(message.unknown.low) && $util.isInteger(message.unknown.high)))
                            return "unknown: integer|Long expected";
                    if (message.mentionedId != null && message.hasOwnProperty("mentionedId"))
                        if (!$util.isString(message.mentionedId))
                            return "mentionedId: string expected";
                    if (message.mentionedName != null && message.hasOwnProperty("mentionedName"))
                        if (!$util.isString(message.mentionedName))
                            return "mentionedName: string expected";
                    if (message.mentionedIn != null && message.hasOwnProperty("mentionedIn"))
                        if (!$util.isString(message.mentionedIn))
                            return "mentionedIn: string expected";
                    if (message.mentionerId != null && message.hasOwnProperty("mentionerId"))
                        if (!$util.isString(message.mentionerId))
                            return "mentionerId: string expected";
                    if (message.mentionerName != null && message.hasOwnProperty("mentionerName"))
                        if (!$util.isString(message.mentionerName))
                            return "mentionerName: string expected";
                    if (message.msgSeq != null && message.hasOwnProperty("msgSeq"))
                        if (!$util.isInteger(message.msgSeq) && !(message.msgSeq && $util.isInteger(message.msgSeq.low) && $util.isInteger(message.msgSeq.high)))
                            return "msgSeq: integer|Long expected";
                    return null;
                };

                /**
                 * Creates an AtData message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof yh_conversation.ConversationList.ConversationData.AtData
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {yh_conversation.ConversationList.ConversationData.AtData} AtData
                 */
                AtData.fromObject = function fromObject(object, _depth) {
                    if (object instanceof $root.yh_conversation.ConversationList.ConversationData.AtData)
                        return object;
                    if (_depth === undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    let message = new $root.yh_conversation.ConversationList.ConversationData.AtData();
                    if (object.unknown != null)
                        if (typeof object.unknown === "object" ? object.unknown.low || object.unknown.high : Number(object.unknown) !== 0)
                            if ($util.Long)
                                message.unknown = $util.Long.fromValue(object.unknown, false);
                            else if (typeof object.unknown === "string")
                                message.unknown = parseInt(object.unknown, 10);
                            else if (typeof object.unknown === "number")
                                message.unknown = object.unknown;
                            else if (typeof object.unknown === "object")
                                message.unknown = new $util.LongBits(object.unknown.low >>> 0, object.unknown.high >>> 0).toNumber();
                    if (object.mentionedId != null)
                        if (typeof object.mentionedId !== "string" || object.mentionedId.length)
                            message.mentionedId = String(object.mentionedId);
                    if (object.mentionedName != null)
                        if (typeof object.mentionedName !== "string" || object.mentionedName.length)
                            message.mentionedName = String(object.mentionedName);
                    if (object.mentionedIn != null)
                        if (typeof object.mentionedIn !== "string" || object.mentionedIn.length)
                            message.mentionedIn = String(object.mentionedIn);
                    if (object.mentionerId != null)
                        if (typeof object.mentionerId !== "string" || object.mentionerId.length)
                            message.mentionerId = String(object.mentionerId);
                    if (object.mentionerName != null)
                        if (typeof object.mentionerName !== "string" || object.mentionerName.length)
                            message.mentionerName = String(object.mentionerName);
                    if (object.msgSeq != null)
                        if (typeof object.msgSeq === "object" ? object.msgSeq.low || object.msgSeq.high : Number(object.msgSeq) !== 0)
                            if ($util.Long)
                                message.msgSeq = $util.Long.fromValue(object.msgSeq, false);
                            else if (typeof object.msgSeq === "string")
                                message.msgSeq = parseInt(object.msgSeq, 10);
                            else if (typeof object.msgSeq === "number")
                                message.msgSeq = object.msgSeq;
                            else if (typeof object.msgSeq === "object")
                                message.msgSeq = new $util.LongBits(object.msgSeq.low >>> 0, object.msgSeq.high >>> 0).toNumber();
                    return message;
                };

                /**
                 * Creates a plain object from an AtData message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof yh_conversation.ConversationList.ConversationData.AtData
                 * @static
                 * @param {yh_conversation.ConversationList.ConversationData.AtData} message AtData
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AtData.toObject = function toObject(message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw Error("max depth exceeded");
                    let object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, false);
                            object.unknown = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                        } else
                            object.unknown = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                        object.mentionedId = "";
                        object.mentionedName = "";
                        object.mentionedIn = "";
                        object.mentionerId = "";
                        object.mentionerName = "";
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, false);
                            object.msgSeq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                        } else
                            object.msgSeq = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    }
                    if (message.unknown != null && message.hasOwnProperty("unknown"))
                        if (typeof BigInt !== "undefined" && options.longs === BigInt)
                            object.unknown = typeof message.unknown === "number" ? BigInt(message.unknown) : $util.Long.fromBits(message.unknown.low >>> 0, message.unknown.high >>> 0, false).toBigInt();
                        else if (typeof message.unknown === "number")
                            object.unknown = options.longs === String ? String(message.unknown) : message.unknown;
                        else
                            object.unknown = options.longs === String ? $util.Long.prototype.toString.call(message.unknown) : options.longs === Number ? new $util.LongBits(message.unknown.low >>> 0, message.unknown.high >>> 0).toNumber() : message.unknown;
                    if (message.mentionedId != null && message.hasOwnProperty("mentionedId"))
                        object.mentionedId = message.mentionedId;
                    if (message.mentionedName != null && message.hasOwnProperty("mentionedName"))
                        object.mentionedName = message.mentionedName;
                    if (message.mentionedIn != null && message.hasOwnProperty("mentionedIn"))
                        object.mentionedIn = message.mentionedIn;
                    if (message.mentionerId != null && message.hasOwnProperty("mentionerId"))
                        object.mentionerId = message.mentionerId;
                    if (message.mentionerName != null && message.hasOwnProperty("mentionerName"))
                        object.mentionerName = message.mentionerName;
                    if (message.msgSeq != null && message.hasOwnProperty("msgSeq"))
                        if (typeof BigInt !== "undefined" && options.longs === BigInt)
                            object.msgSeq = typeof message.msgSeq === "number" ? BigInt(message.msgSeq) : $util.Long.fromBits(message.msgSeq.low >>> 0, message.msgSeq.high >>> 0, false).toBigInt();
                        else if (typeof message.msgSeq === "number")
                            object.msgSeq = options.longs === String ? String(message.msgSeq) : message.msgSeq;
                        else
                            object.msgSeq = options.longs === String ? $util.Long.prototype.toString.call(message.msgSeq) : options.longs === Number ? new $util.LongBits(message.msgSeq.low >>> 0, message.msgSeq.high >>> 0).toNumber() : message.msgSeq;
                    return object;
                };

                /**
                 * Converts this AtData to JSON.
                 * @function toJSON
                 * @memberof yh_conversation.ConversationList.ConversationData.AtData
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AtData.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for AtData
                 * @function getTypeUrl
                 * @memberof yh_conversation.ConversationList.ConversationData.AtData
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                AtData.getTypeUrl = function getTypeUrl(prefix) {
                    if (prefix === undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/yh_conversation.ConversationList.ConversationData.AtData";
                };

                return AtData;
            })();

            return ConversationData;
        })();

        return ConversationList;
    })();

    return yh_conversation;
})();