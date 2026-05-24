/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const yh_msg = $root.yh_msg = (() => {

    /**
     * Namespace yh_msg.
     * @exports yh_msg
     * @namespace
     */
    const yh_msg = {};

    yh_msg.Status = (function() {

        /**
         * Properties of a Status.
         * @typedef {Object} yh_msg.Status.$Properties
         * @property {number|Long|null} [number] Status number
         * @property {number|null} [code] Status code
         * @property {string|null} [msg] Status msg
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a Status.
         * @memberof yh_msg
         * @interface IStatus
         * @augments yh_msg.Status.$Properties
         * @deprecated Use yh_msg.Status.$Properties instead.
         */

        /**
         * Shape of a Status.
         * @typedef {yh_msg.Status.$Properties} yh_msg.Status.$Shape
         */

        /**
         * Constructs a new Status.
         * @memberof yh_msg
         * @classdesc Represents a Status.
         * @constructor
         * @param {yh_msg.Status.$Properties=} [properties] Properties to set
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
         * @memberof yh_msg.Status
         * @instance
         */
        Status.prototype.number = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Status code.
         * @member {number} code
         * @memberof yh_msg.Status
         * @instance
         */
        Status.prototype.code = 0;

        /**
         * Status msg.
         * @member {string} msg
         * @memberof yh_msg.Status
         * @instance
         */
        Status.prototype.msg = "";

        /**
         * Creates a new Status instance using the specified properties.
         * @function create
         * @memberof yh_msg.Status
         * @static
         * @param {yh_msg.Status.$Properties=} [properties] Properties to set
         * @returns {yh_msg.Status} Status instance
         * @type {{
         *   (properties: yh_msg.Status.$Shape): yh_msg.Status & yh_msg.Status.$Shape;
         *   (properties?: yh_msg.Status.$Properties): yh_msg.Status;
         * }}
         */
        Status.create = function create(properties) {
            return new Status(properties);
        };

        /**
         * Encodes the specified Status message. Does not implicitly {@link yh_msg.Status.verify|verify} messages.
         * @function encode
         * @memberof yh_msg.Status
         * @static
         * @param {yh_msg.Status.$Properties} message Status message or plain object to encode
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
         * Encodes the specified Status message, length delimited. Does not implicitly {@link yh_msg.Status.verify|verify} messages.
         * @function encodeDelimited
         * @memberof yh_msg.Status
         * @static
         * @param {yh_msg.Status.$Properties} message Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Status.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a Status message from the specified reader or buffer.
         * @function decode
         * @memberof yh_msg.Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {yh_msg.Status & yh_msg.Status.$Shape} Status
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
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_msg.Status(), value;
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
         * @memberof yh_msg.Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {yh_msg.Status & yh_msg.Status.$Shape} Status
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
         * @memberof yh_msg.Status
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
         * @memberof yh_msg.Status
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {yh_msg.Status} Status
         */
        Status.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.yh_msg.Status)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.yh_msg.Status();
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
         * @memberof yh_msg.Status
         * @static
         * @param {yh_msg.Status} message Status
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
         * @memberof yh_msg.Status
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Status.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Status
         * @function getTypeUrl
         * @memberof yh_msg.Status
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Status.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/yh_msg.Status";
        };

        return Status;
    })();

    yh_msg.Tag = (function() {

        /**
         * Properties of a Tag.
         * @typedef {Object} yh_msg.Tag.$Properties
         * @property {number|Long|null} [id] Tag id
         * @property {string|null} [text] Tag text
         * @property {string|null} [color] Tag color
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a Tag.
         * @memberof yh_msg
         * @interface ITag
         * @augments yh_msg.Tag.$Properties
         * @deprecated Use yh_msg.Tag.$Properties instead.
         */

        /**
         * Shape of a Tag.
         * @typedef {yh_msg.Tag.$Properties} yh_msg.Tag.$Shape
         */

        /**
         * Constructs a new Tag.
         * @memberof yh_msg
         * @classdesc Represents a Tag.
         * @constructor
         * @param {yh_msg.Tag.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function Tag(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Tag id.
         * @member {number|Long} id
         * @memberof yh_msg.Tag
         * @instance
         */
        Tag.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Tag text.
         * @member {string} text
         * @memberof yh_msg.Tag
         * @instance
         */
        Tag.prototype.text = "";

        /**
         * Tag color.
         * @member {string} color
         * @memberof yh_msg.Tag
         * @instance
         */
        Tag.prototype.color = "";

        /**
         * Creates a new Tag instance using the specified properties.
         * @function create
         * @memberof yh_msg.Tag
         * @static
         * @param {yh_msg.Tag.$Properties=} [properties] Properties to set
         * @returns {yh_msg.Tag} Tag instance
         * @type {{
         *   (properties: yh_msg.Tag.$Shape): yh_msg.Tag & yh_msg.Tag.$Shape;
         *   (properties?: yh_msg.Tag.$Properties): yh_msg.Tag;
         * }}
         */
        Tag.create = function create(properties) {
            return new Tag(properties);
        };

        /**
         * Encodes the specified Tag message. Does not implicitly {@link yh_msg.Tag.verify|verify} messages.
         * @function encode
         * @memberof yh_msg.Tag
         * @static
         * @param {yh_msg.Tag.$Properties} message Tag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Tag.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.text);
            if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.color);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Tag message, length delimited. Does not implicitly {@link yh_msg.Tag.verify|verify} messages.
         * @function encodeDelimited
         * @memberof yh_msg.Tag
         * @static
         * @param {yh_msg.Tag.$Properties} message Tag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Tag.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a Tag message from the specified reader or buffer.
         * @function decode
         * @memberof yh_msg.Tag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {yh_msg.Tag & yh_msg.Tag.$Shape} Tag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Tag.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_msg.Tag(), value;
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
                            message.id = value;
                        else
                            delete message.id;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.text = value;
                        else
                            delete message.text;
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.color = value;
                        else
                            delete message.color;
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
         * Decodes a Tag message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof yh_msg.Tag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {yh_msg.Tag & yh_msg.Tag.$Shape} Tag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Tag.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Tag message.
         * @function verify
         * @memberof yh_msg.Tag
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Tag.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            if (message.color != null && message.hasOwnProperty("color"))
                if (!$util.isString(message.color))
                    return "color: string expected";
            return null;
        };

        /**
         * Creates a Tag message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof yh_msg.Tag
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {yh_msg.Tag} Tag
         */
        Tag.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.yh_msg.Tag)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.yh_msg.Tag();
            if (object.id != null)
                if (typeof object.id === "object" ? object.id.low || object.id.high : Number(object.id) !== 0)
                    if ($util.Long)
                        message.id = $util.Long.fromValue(object.id, false);
                    else if (typeof object.id === "string")
                        message.id = parseInt(object.id, 10);
                    else if (typeof object.id === "number")
                        message.id = object.id;
                    else if (typeof object.id === "object")
                        message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.text != null)
                if (typeof object.text !== "string" || object.text.length)
                    message.text = String(object.text);
            if (object.color != null)
                if (typeof object.color !== "string" || object.color.length)
                    message.color = String(object.color);
            return message;
        };

        /**
         * Creates a plain object from a Tag message. Also converts values to other types if specified.
         * @function toObject
         * @memberof yh_msg.Tag
         * @static
         * @param {yh_msg.Tag} message Tag
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Tag.toObject = function toObject(message, options, _depth) {
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
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.id = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                object.text = "";
                object.color = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.id = typeof message.id === "number" ? BigInt(message.id) : $util.Long.fromBits(message.id.low >>> 0, message.id.high >>> 0, false).toBigInt();
                else if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            if (message.color != null && message.hasOwnProperty("color"))
                object.color = message.color;
            return object;
        };

        /**
         * Converts this Tag to JSON.
         * @function toJSON
         * @memberof yh_msg.Tag
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Tag.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Tag
         * @function getTypeUrl
         * @memberof yh_msg.Tag
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Tag.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/yh_msg.Tag";
        };

        return Tag;
    })();

    yh_msg.Msg = (function() {

        /**
         * Properties of a Msg.
         * @typedef {Object} yh_msg.Msg.$Properties
         * @property {string|null} [msgId] Msg msgId
         * @property {yh_msg.Msg.Sender.$Properties|null} [sender] Msg sender
         * @property {string|null} [direction] Msg direction
         * @property {number|null} [contentType] Msg contentType
         * @property {yh_msg.Msg.Content.$Properties|null} [content] Msg content
         * @property {number|Long|null} [sendTime] Msg sendTime
         * @property {yh_msg.Msg.Cmd.$Properties|null} [cmd] Msg cmd
         * @property {number|Long|null} [msgDeleteTime] Msg msgDeleteTime
         * @property {string|null} [quoteMsgId] Msg quoteMsgId
         * @property {number|Long|null} [msgSeq] Msg msgSeq
         * @property {number|Long|null} [editTime] Msg editTime
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a Msg.
         * @memberof yh_msg
         * @interface IMsg
         * @augments yh_msg.Msg.$Properties
         * @deprecated Use yh_msg.Msg.$Properties instead.
         */

        /**
         * Shape of a Msg.
         * @typedef {yh_msg.Msg.$Properties} yh_msg.Msg.$Shape
         */

        /**
         * Constructs a new Msg.
         * @memberof yh_msg
         * @classdesc Represents a Msg.
         * @constructor
         * @param {yh_msg.Msg.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function Msg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Msg msgId.
         * @member {string} msgId
         * @memberof yh_msg.Msg
         * @instance
         */
        Msg.prototype.msgId = "";

        /**
         * Msg sender.
         * @member {yh_msg.Msg.Sender.$Properties|null|undefined} sender
         * @memberof yh_msg.Msg
         * @instance
         */
        Msg.prototype.sender = null;

        /**
         * Msg direction.
         * @member {string} direction
         * @memberof yh_msg.Msg
         * @instance
         */
        Msg.prototype.direction = "";

        /**
         * Msg contentType.
         * @member {number} contentType
         * @memberof yh_msg.Msg
         * @instance
         */
        Msg.prototype.contentType = 0;

        /**
         * Msg content.
         * @member {yh_msg.Msg.Content.$Properties|null|undefined} content
         * @memberof yh_msg.Msg
         * @instance
         */
        Msg.prototype.content = null;

        /**
         * Msg sendTime.
         * @member {number|Long} sendTime
         * @memberof yh_msg.Msg
         * @instance
         */
        Msg.prototype.sendTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Msg cmd.
         * @member {yh_msg.Msg.Cmd.$Properties|null|undefined} cmd
         * @memberof yh_msg.Msg
         * @instance
         */
        Msg.prototype.cmd = null;

        /**
         * Msg msgDeleteTime.
         * @member {number|Long} msgDeleteTime
         * @memberof yh_msg.Msg
         * @instance
         */
        Msg.prototype.msgDeleteTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Msg quoteMsgId.
         * @member {string} quoteMsgId
         * @memberof yh_msg.Msg
         * @instance
         */
        Msg.prototype.quoteMsgId = "";

        /**
         * Msg msgSeq.
         * @member {number|Long} msgSeq
         * @memberof yh_msg.Msg
         * @instance
         */
        Msg.prototype.msgSeq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Msg editTime.
         * @member {number|Long} editTime
         * @memberof yh_msg.Msg
         * @instance
         */
        Msg.prototype.editTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Msg instance using the specified properties.
         * @function create
         * @memberof yh_msg.Msg
         * @static
         * @param {yh_msg.Msg.$Properties=} [properties] Properties to set
         * @returns {yh_msg.Msg} Msg instance
         * @type {{
         *   (properties: yh_msg.Msg.$Shape): yh_msg.Msg & yh_msg.Msg.$Shape;
         *   (properties?: yh_msg.Msg.$Properties): yh_msg.Msg;
         * }}
         */
        Msg.create = function create(properties) {
            return new Msg(properties);
        };

        /**
         * Encodes the specified Msg message. Does not implicitly {@link yh_msg.Msg.verify|verify} messages.
         * @function encode
         * @memberof yh_msg.Msg
         * @static
         * @param {yh_msg.Msg.$Properties} message Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Msg.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.msgId);
            if (message.sender != null && Object.hasOwnProperty.call(message, "sender"))
                $root.yh_msg.Msg.Sender.encode(message.sender, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.direction != null && Object.hasOwnProperty.call(message, "direction"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.direction);
            if (message.contentType != null && Object.hasOwnProperty.call(message, "contentType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.contentType);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                $root.yh_msg.Msg.Content.encode(message.content, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
            if (message.sendTime != null && Object.hasOwnProperty.call(message, "sendTime"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.sendTime);
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                $root.yh_msg.Msg.Cmd.encode(message.cmd, writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
            if (message.msgDeleteTime != null && Object.hasOwnProperty.call(message, "msgDeleteTime"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.msgDeleteTime);
            if (message.quoteMsgId != null && Object.hasOwnProperty.call(message, "quoteMsgId"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.quoteMsgId);
            if (message.msgSeq != null && Object.hasOwnProperty.call(message, "msgSeq"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.msgSeq);
            if (message.editTime != null && Object.hasOwnProperty.call(message, "editTime"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.editTime);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Msg message, length delimited. Does not implicitly {@link yh_msg.Msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof yh_msg.Msg
         * @static
         * @param {yh_msg.Msg.$Properties} message Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a Msg message from the specified reader or buffer.
         * @function decode
         * @memberof yh_msg.Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {yh_msg.Msg & yh_msg.Msg.$Shape} Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Msg.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_msg.Msg(), value;
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
                            message.msgId = value;
                        else
                            delete message.msgId;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.sender = $root.yh_msg.Msg.Sender.decode(reader, reader.uint32(), undefined, _depth + 1, message.sender);
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.direction = value;
                        else
                            delete message.direction;
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.contentType = value;
                        else
                            delete message.contentType;
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        message.content = $root.yh_msg.Msg.Content.decode(reader, reader.uint32(), undefined, _depth + 1, message.content);
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.sendTime = value;
                        else
                            delete message.sendTime;
                        continue;
                    }
                case 7: {
                        if (wireType !== 2)
                            break;
                        message.cmd = $root.yh_msg.Msg.Cmd.decode(reader, reader.uint32(), undefined, _depth + 1, message.cmd);
                        continue;
                    }
                case 8: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.msgDeleteTime = value;
                        else
                            delete message.msgDeleteTime;
                        continue;
                    }
                case 9: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.quoteMsgId = value;
                        else
                            delete message.quoteMsgId;
                        continue;
                    }
                case 10: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.msgSeq = value;
                        else
                            delete message.msgSeq;
                        continue;
                    }
                case 12: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.editTime = value;
                        else
                            delete message.editTime;
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
         * Decodes a Msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof yh_msg.Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {yh_msg.Msg & yh_msg.Msg.$Shape} Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Msg message.
         * @function verify
         * @memberof yh_msg.Msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Msg.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                if (!$util.isString(message.msgId))
                    return "msgId: string expected";
            if (message.sender != null && message.hasOwnProperty("sender")) {
                let error = $root.yh_msg.Msg.Sender.verify(message.sender, _depth + 1);
                if (error)
                    return "sender." + error;
            }
            if (message.direction != null && message.hasOwnProperty("direction"))
                if (!$util.isString(message.direction))
                    return "direction: string expected";
            if (message.contentType != null && message.hasOwnProperty("contentType"))
                if (!$util.isInteger(message.contentType))
                    return "contentType: integer expected";
            if (message.content != null && message.hasOwnProperty("content")) {
                let error = $root.yh_msg.Msg.Content.verify(message.content, _depth + 1);
                if (error)
                    return "content." + error;
            }
            if (message.sendTime != null && message.hasOwnProperty("sendTime"))
                if (!$util.isInteger(message.sendTime) && !(message.sendTime && $util.isInteger(message.sendTime.low) && $util.isInteger(message.sendTime.high)))
                    return "sendTime: integer|Long expected";
            if (message.cmd != null && message.hasOwnProperty("cmd")) {
                let error = $root.yh_msg.Msg.Cmd.verify(message.cmd, _depth + 1);
                if (error)
                    return "cmd." + error;
            }
            if (message.msgDeleteTime != null && message.hasOwnProperty("msgDeleteTime"))
                if (!$util.isInteger(message.msgDeleteTime) && !(message.msgDeleteTime && $util.isInteger(message.msgDeleteTime.low) && $util.isInteger(message.msgDeleteTime.high)))
                    return "msgDeleteTime: integer|Long expected";
            if (message.quoteMsgId != null && message.hasOwnProperty("quoteMsgId"))
                if (!$util.isString(message.quoteMsgId))
                    return "quoteMsgId: string expected";
            if (message.msgSeq != null && message.hasOwnProperty("msgSeq"))
                if (!$util.isInteger(message.msgSeq) && !(message.msgSeq && $util.isInteger(message.msgSeq.low) && $util.isInteger(message.msgSeq.high)))
                    return "msgSeq: integer|Long expected";
            if (message.editTime != null && message.hasOwnProperty("editTime"))
                if (!$util.isInteger(message.editTime) && !(message.editTime && $util.isInteger(message.editTime.low) && $util.isInteger(message.editTime.high)))
                    return "editTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a Msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof yh_msg.Msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {yh_msg.Msg} Msg
         */
        Msg.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.yh_msg.Msg)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.yh_msg.Msg();
            if (object.msgId != null)
                if (typeof object.msgId !== "string" || object.msgId.length)
                    message.msgId = String(object.msgId);
            if (object.sender != null) {
                if (typeof object.sender !== "object")
                    throw TypeError(".yh_msg.Msg.sender: object expected");
                message.sender = $root.yh_msg.Msg.Sender.fromObject(object.sender, _depth + 1);
            }
            if (object.direction != null)
                if (typeof object.direction !== "string" || object.direction.length)
                    message.direction = String(object.direction);
            if (object.contentType != null)
                if (Number(object.contentType) !== 0)
                    message.contentType = object.contentType | 0;
            if (object.content != null) {
                if (typeof object.content !== "object")
                    throw TypeError(".yh_msg.Msg.content: object expected");
                message.content = $root.yh_msg.Msg.Content.fromObject(object.content, _depth + 1);
            }
            if (object.sendTime != null)
                if (typeof object.sendTime === "object" ? object.sendTime.low || object.sendTime.high : Number(object.sendTime) !== 0)
                    if ($util.Long)
                        message.sendTime = $util.Long.fromValue(object.sendTime, false);
                    else if (typeof object.sendTime === "string")
                        message.sendTime = parseInt(object.sendTime, 10);
                    else if (typeof object.sendTime === "number")
                        message.sendTime = object.sendTime;
                    else if (typeof object.sendTime === "object")
                        message.sendTime = new $util.LongBits(object.sendTime.low >>> 0, object.sendTime.high >>> 0).toNumber();
            if (object.cmd != null) {
                if (typeof object.cmd !== "object")
                    throw TypeError(".yh_msg.Msg.cmd: object expected");
                message.cmd = $root.yh_msg.Msg.Cmd.fromObject(object.cmd, _depth + 1);
            }
            if (object.msgDeleteTime != null)
                if (typeof object.msgDeleteTime === "object" ? object.msgDeleteTime.low || object.msgDeleteTime.high : Number(object.msgDeleteTime) !== 0)
                    if ($util.Long)
                        message.msgDeleteTime = $util.Long.fromValue(object.msgDeleteTime, false);
                    else if (typeof object.msgDeleteTime === "string")
                        message.msgDeleteTime = parseInt(object.msgDeleteTime, 10);
                    else if (typeof object.msgDeleteTime === "number")
                        message.msgDeleteTime = object.msgDeleteTime;
                    else if (typeof object.msgDeleteTime === "object")
                        message.msgDeleteTime = new $util.LongBits(object.msgDeleteTime.low >>> 0, object.msgDeleteTime.high >>> 0).toNumber();
            if (object.quoteMsgId != null)
                if (typeof object.quoteMsgId !== "string" || object.quoteMsgId.length)
                    message.quoteMsgId = String(object.quoteMsgId);
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
            if (object.editTime != null)
                if (typeof object.editTime === "object" ? object.editTime.low || object.editTime.high : Number(object.editTime) !== 0)
                    if ($util.Long)
                        message.editTime = $util.Long.fromValue(object.editTime, false);
                    else if (typeof object.editTime === "string")
                        message.editTime = parseInt(object.editTime, 10);
                    else if (typeof object.editTime === "number")
                        message.editTime = object.editTime;
                    else if (typeof object.editTime === "object")
                        message.editTime = new $util.LongBits(object.editTime.low >>> 0, object.editTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof yh_msg.Msg
         * @static
         * @param {yh_msg.Msg} message Msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Msg.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.msgId = "";
                object.sender = null;
                object.direction = "";
                object.contentType = 0;
                object.content = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.sendTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.sendTime = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                object.cmd = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.msgDeleteTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.msgDeleteTime = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                object.quoteMsgId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.msgSeq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.msgSeq = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.editTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.editTime = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
            }
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                object.msgId = message.msgId;
            if (message.sender != null && message.hasOwnProperty("sender"))
                object.sender = $root.yh_msg.Msg.Sender.toObject(message.sender, options, _depth + 1);
            if (message.direction != null && message.hasOwnProperty("direction"))
                object.direction = message.direction;
            if (message.contentType != null && message.hasOwnProperty("contentType"))
                object.contentType = message.contentType;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = $root.yh_msg.Msg.Content.toObject(message.content, options, _depth + 1);
            if (message.sendTime != null && message.hasOwnProperty("sendTime"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.sendTime = typeof message.sendTime === "number" ? BigInt(message.sendTime) : $util.Long.fromBits(message.sendTime.low >>> 0, message.sendTime.high >>> 0, false).toBigInt();
                else if (typeof message.sendTime === "number")
                    object.sendTime = options.longs === String ? String(message.sendTime) : message.sendTime;
                else
                    object.sendTime = options.longs === String ? $util.Long.prototype.toString.call(message.sendTime) : options.longs === Number ? new $util.LongBits(message.sendTime.low >>> 0, message.sendTime.high >>> 0).toNumber() : message.sendTime;
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = $root.yh_msg.Msg.Cmd.toObject(message.cmd, options, _depth + 1);
            if (message.msgDeleteTime != null && message.hasOwnProperty("msgDeleteTime"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.msgDeleteTime = typeof message.msgDeleteTime === "number" ? BigInt(message.msgDeleteTime) : $util.Long.fromBits(message.msgDeleteTime.low >>> 0, message.msgDeleteTime.high >>> 0, false).toBigInt();
                else if (typeof message.msgDeleteTime === "number")
                    object.msgDeleteTime = options.longs === String ? String(message.msgDeleteTime) : message.msgDeleteTime;
                else
                    object.msgDeleteTime = options.longs === String ? $util.Long.prototype.toString.call(message.msgDeleteTime) : options.longs === Number ? new $util.LongBits(message.msgDeleteTime.low >>> 0, message.msgDeleteTime.high >>> 0).toNumber() : message.msgDeleteTime;
            if (message.quoteMsgId != null && message.hasOwnProperty("quoteMsgId"))
                object.quoteMsgId = message.quoteMsgId;
            if (message.msgSeq != null && message.hasOwnProperty("msgSeq"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.msgSeq = typeof message.msgSeq === "number" ? BigInt(message.msgSeq) : $util.Long.fromBits(message.msgSeq.low >>> 0, message.msgSeq.high >>> 0, false).toBigInt();
                else if (typeof message.msgSeq === "number")
                    object.msgSeq = options.longs === String ? String(message.msgSeq) : message.msgSeq;
                else
                    object.msgSeq = options.longs === String ? $util.Long.prototype.toString.call(message.msgSeq) : options.longs === Number ? new $util.LongBits(message.msgSeq.low >>> 0, message.msgSeq.high >>> 0).toNumber() : message.msgSeq;
            if (message.editTime != null && message.hasOwnProperty("editTime"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.editTime = typeof message.editTime === "number" ? BigInt(message.editTime) : $util.Long.fromBits(message.editTime.low >>> 0, message.editTime.high >>> 0, false).toBigInt();
                else if (typeof message.editTime === "number")
                    object.editTime = options.longs === String ? String(message.editTime) : message.editTime;
                else
                    object.editTime = options.longs === String ? $util.Long.prototype.toString.call(message.editTime) : options.longs === Number ? new $util.LongBits(message.editTime.low >>> 0, message.editTime.high >>> 0).toNumber() : message.editTime;
            return object;
        };

        /**
         * Converts this Msg to JSON.
         * @function toJSON
         * @memberof yh_msg.Msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Msg
         * @function getTypeUrl
         * @memberof yh_msg.Msg
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Msg.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/yh_msg.Msg";
        };

        Msg.Cmd = (function() {

            /**
             * Properties of a Cmd.
             * @typedef {Object} yh_msg.Msg.Cmd.$Properties
             * @property {string|null} [name] Cmd name
             * @property {number|null} [type] Cmd type
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Cmd.
             * @memberof yh_msg.Msg
             * @interface ICmd
             * @augments yh_msg.Msg.Cmd.$Properties
             * @deprecated Use yh_msg.Msg.Cmd.$Properties instead.
             */

            /**
             * Shape of a Cmd.
             * @typedef {yh_msg.Msg.Cmd.$Properties} yh_msg.Msg.Cmd.$Shape
             */

            /**
             * Constructs a new Cmd.
             * @memberof yh_msg.Msg
             * @classdesc Represents a Cmd.
             * @constructor
             * @param {yh_msg.Msg.Cmd.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Cmd(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Cmd name.
             * @member {string} name
             * @memberof yh_msg.Msg.Cmd
             * @instance
             */
            Cmd.prototype.name = "";

            /**
             * Cmd type.
             * @member {number} type
             * @memberof yh_msg.Msg.Cmd
             * @instance
             */
            Cmd.prototype.type = 0;

            /**
             * Creates a new Cmd instance using the specified properties.
             * @function create
             * @memberof yh_msg.Msg.Cmd
             * @static
             * @param {yh_msg.Msg.Cmd.$Properties=} [properties] Properties to set
             * @returns {yh_msg.Msg.Cmd} Cmd instance
             * @type {{
             *   (properties: yh_msg.Msg.Cmd.$Shape): yh_msg.Msg.Cmd & yh_msg.Msg.Cmd.$Shape;
             *   (properties?: yh_msg.Msg.Cmd.$Properties): yh_msg.Msg.Cmd;
             * }}
             */
            Cmd.create = function create(properties) {
                return new Cmd(properties);
            };

            /**
             * Encodes the specified Cmd message. Does not implicitly {@link yh_msg.Msg.Cmd.verify|verify} messages.
             * @function encode
             * @memberof yh_msg.Msg.Cmd
             * @static
             * @param {yh_msg.Msg.Cmd.$Properties} message Cmd message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Cmd.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Cmd message, length delimited. Does not implicitly {@link yh_msg.Msg.Cmd.verify|verify} messages.
             * @function encodeDelimited
             * @memberof yh_msg.Msg.Cmd
             * @static
             * @param {yh_msg.Msg.Cmd.$Properties} message Cmd message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Cmd.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Cmd message from the specified reader or buffer.
             * @function decode
             * @memberof yh_msg.Msg.Cmd
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {yh_msg.Msg.Cmd & yh_msg.Msg.Cmd.$Shape} Cmd
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Cmd.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_msg.Msg.Cmd(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.name = value;
                            else
                                delete message.name;
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.type = value;
                            else
                                delete message.type;
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
             * Decodes a Cmd message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof yh_msg.Msg.Cmd
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {yh_msg.Msg.Cmd & yh_msg.Msg.Cmd.$Shape} Cmd
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Cmd.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Cmd message.
             * @function verify
             * @memberof yh_msg.Msg.Cmd
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Cmd.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    if (!$util.isInteger(message.type))
                        return "type: integer expected";
                return null;
            };

            /**
             * Creates a Cmd message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof yh_msg.Msg.Cmd
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {yh_msg.Msg.Cmd} Cmd
             */
            Cmd.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.yh_msg.Msg.Cmd)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.yh_msg.Msg.Cmd();
                if (object.name != null)
                    if (typeof object.name !== "string" || object.name.length)
                        message.name = String(object.name);
                if (object.type != null)
                    if (Number(object.type) !== 0)
                        message.type = object.type | 0;
                return message;
            };

            /**
             * Creates a plain object from a Cmd message. Also converts values to other types if specified.
             * @function toObject
             * @memberof yh_msg.Msg.Cmd
             * @static
             * @param {yh_msg.Msg.Cmd} message Cmd
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Cmd.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.type = 0;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                return object;
            };

            /**
             * Converts this Cmd to JSON.
             * @function toJSON
             * @memberof yh_msg.Msg.Cmd
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Cmd.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Cmd
             * @function getTypeUrl
             * @memberof yh_msg.Msg.Cmd
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Cmd.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/yh_msg.Msg.Cmd";
            };

            return Cmd;
        })();

        Msg.Content = (function() {

            /**
             * Properties of a Content.
             * @typedef {Object} yh_msg.Msg.Content.$Properties
             * @property {string|null} [text] Content text
             * @property {string|null} [buttons] Content buttons
             * @property {string|null} [imageUrl] Content imageUrl
             * @property {string|null} [fileName] Content fileName
             * @property {string|null} [fileUrl] Content fileUrl
             * @property {string|null} [form] Content form
             * @property {string|null} [quoteMsgText] Content quoteMsgText
             * @property {string|null} [stickerUrl] Content stickerUrl
             * @property {string|null} [postId] Content postId
             * @property {string|null} [postTitle] Content postTitle
             * @property {string|null} [postContent] Content postContent
             * @property {string|null} [postContentType] Content postContentType
             * @property {string|null} [expressionId] Content expressionId
             * @property {string|null} [quoteImageUrl] Content quoteImageUrl
             * @property {string|null} [quoteImageName] Content quoteImageName
             * @property {number|Long|null} [fileSize] Content fileSize
             * @property {string|null} [videoUrl] Content videoUrl
             * @property {string|null} [audioUrl] Content audioUrl
             * @property {number|Long|null} [audioTime] Content audioTime
             * @property {string|null} [quoteVideoUrl] Content quoteVideoUrl
             * @property {number|Long|null} [quoteVideoTime] Content quoteVideoTime
             * @property {number|Long|null} [stickerItemId] Content stickerItemId
             * @property {number|Long|null} [stickerPackId] Content stickerPackId
             * @property {string|null} [callText] Content callText
             * @property {string|null} [callStatusText] Content callStatusText
             * @property {number|Long|null} [width] Content width
             * @property {number|Long|null} [height] Content height
             * @property {string|null} [tip] Content tip
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Content.
             * @memberof yh_msg.Msg
             * @interface IContent
             * @augments yh_msg.Msg.Content.$Properties
             * @deprecated Use yh_msg.Msg.Content.$Properties instead.
             */

            /**
             * Shape of a Content.
             * @typedef {yh_msg.Msg.Content.$Properties} yh_msg.Msg.Content.$Shape
             */

            /**
             * Constructs a new Content.
             * @memberof yh_msg.Msg
             * @classdesc Represents a Content.
             * @constructor
             * @param {yh_msg.Msg.Content.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Content(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Content text.
             * @member {string} text
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.text = "";

            /**
             * Content buttons.
             * @member {string} buttons
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.buttons = "";

            /**
             * Content imageUrl.
             * @member {string} imageUrl
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.imageUrl = "";

            /**
             * Content fileName.
             * @member {string} fileName
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.fileName = "";

            /**
             * Content fileUrl.
             * @member {string} fileUrl
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.fileUrl = "";

            /**
             * Content form.
             * @member {string} form
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.form = "";

            /**
             * Content quoteMsgText.
             * @member {string} quoteMsgText
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.quoteMsgText = "";

            /**
             * Content stickerUrl.
             * @member {string} stickerUrl
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.stickerUrl = "";

            /**
             * Content postId.
             * @member {string} postId
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.postId = "";

            /**
             * Content postTitle.
             * @member {string} postTitle
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.postTitle = "";

            /**
             * Content postContent.
             * @member {string} postContent
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.postContent = "";

            /**
             * Content postContentType.
             * @member {string} postContentType
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.postContentType = "";

            /**
             * Content expressionId.
             * @member {string} expressionId
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.expressionId = "";

            /**
             * Content quoteImageUrl.
             * @member {string} quoteImageUrl
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.quoteImageUrl = "";

            /**
             * Content quoteImageName.
             * @member {string} quoteImageName
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.quoteImageName = "";

            /**
             * Content fileSize.
             * @member {number|Long} fileSize
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.fileSize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Content videoUrl.
             * @member {string} videoUrl
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.videoUrl = "";

            /**
             * Content audioUrl.
             * @member {string} audioUrl
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.audioUrl = "";

            /**
             * Content audioTime.
             * @member {number|Long} audioTime
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.audioTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Content quoteVideoUrl.
             * @member {string} quoteVideoUrl
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.quoteVideoUrl = "";

            /**
             * Content quoteVideoTime.
             * @member {number|Long} quoteVideoTime
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.quoteVideoTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Content stickerItemId.
             * @member {number|Long} stickerItemId
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.stickerItemId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Content stickerPackId.
             * @member {number|Long} stickerPackId
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.stickerPackId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Content callText.
             * @member {string} callText
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.callText = "";

            /**
             * Content callStatusText.
             * @member {string} callStatusText
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.callStatusText = "";

            /**
             * Content width.
             * @member {number|Long} width
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.width = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Content height.
             * @member {number|Long} height
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.height = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Content tip.
             * @member {string} tip
             * @memberof yh_msg.Msg.Content
             * @instance
             */
            Content.prototype.tip = "";

            /**
             * Creates a new Content instance using the specified properties.
             * @function create
             * @memberof yh_msg.Msg.Content
             * @static
             * @param {yh_msg.Msg.Content.$Properties=} [properties] Properties to set
             * @returns {yh_msg.Msg.Content} Content instance
             * @type {{
             *   (properties: yh_msg.Msg.Content.$Shape): yh_msg.Msg.Content & yh_msg.Msg.Content.$Shape;
             *   (properties?: yh_msg.Msg.Content.$Properties): yh_msg.Msg.Content;
             * }}
             */
            Content.create = function create(properties) {
                return new Content(properties);
            };

            /**
             * Encodes the specified Content message. Does not implicitly {@link yh_msg.Msg.Content.verify|verify} messages.
             * @function encode
             * @memberof yh_msg.Msg.Content
             * @static
             * @param {yh_msg.Msg.Content.$Properties} message Content message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Content.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
                if (message.buttons != null && Object.hasOwnProperty.call(message, "buttons"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.buttons);
                if (message.imageUrl != null && Object.hasOwnProperty.call(message, "imageUrl"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.imageUrl);
                if (message.fileName != null && Object.hasOwnProperty.call(message, "fileName"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.fileName);
                if (message.fileUrl != null && Object.hasOwnProperty.call(message, "fileUrl"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.fileUrl);
                if (message.form != null && Object.hasOwnProperty.call(message, "form"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.form);
                if (message.quoteMsgText != null && Object.hasOwnProperty.call(message, "quoteMsgText"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.quoteMsgText);
                if (message.stickerUrl != null && Object.hasOwnProperty.call(message, "stickerUrl"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.stickerUrl);
                if (message.postId != null && Object.hasOwnProperty.call(message, "postId"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.postId);
                if (message.postTitle != null && Object.hasOwnProperty.call(message, "postTitle"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.postTitle);
                if (message.postContent != null && Object.hasOwnProperty.call(message, "postContent"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.postContent);
                if (message.postContentType != null && Object.hasOwnProperty.call(message, "postContentType"))
                    writer.uint32(/* id 13, wireType 2 =*/106).string(message.postContentType);
                if (message.expressionId != null && Object.hasOwnProperty.call(message, "expressionId"))
                    writer.uint32(/* id 15, wireType 2 =*/122).string(message.expressionId);
                if (message.quoteImageUrl != null && Object.hasOwnProperty.call(message, "quoteImageUrl"))
                    writer.uint32(/* id 16, wireType 2 =*/130).string(message.quoteImageUrl);
                if (message.quoteImageName != null && Object.hasOwnProperty.call(message, "quoteImageName"))
                    writer.uint32(/* id 17, wireType 2 =*/138).string(message.quoteImageName);
                if (message.fileSize != null && Object.hasOwnProperty.call(message, "fileSize"))
                    writer.uint32(/* id 18, wireType 0 =*/144).int64(message.fileSize);
                if (message.videoUrl != null && Object.hasOwnProperty.call(message, "videoUrl"))
                    writer.uint32(/* id 19, wireType 2 =*/154).string(message.videoUrl);
                if (message.audioUrl != null && Object.hasOwnProperty.call(message, "audioUrl"))
                    writer.uint32(/* id 21, wireType 2 =*/170).string(message.audioUrl);
                if (message.audioTime != null && Object.hasOwnProperty.call(message, "audioTime"))
                    writer.uint32(/* id 22, wireType 0 =*/176).int64(message.audioTime);
                if (message.quoteVideoUrl != null && Object.hasOwnProperty.call(message, "quoteVideoUrl"))
                    writer.uint32(/* id 23, wireType 2 =*/186).string(message.quoteVideoUrl);
                if (message.quoteVideoTime != null && Object.hasOwnProperty.call(message, "quoteVideoTime"))
                    writer.uint32(/* id 24, wireType 0 =*/192).int64(message.quoteVideoTime);
                if (message.stickerItemId != null && Object.hasOwnProperty.call(message, "stickerItemId"))
                    writer.uint32(/* id 25, wireType 0 =*/200).int64(message.stickerItemId);
                if (message.stickerPackId != null && Object.hasOwnProperty.call(message, "stickerPackId"))
                    writer.uint32(/* id 26, wireType 0 =*/208).int64(message.stickerPackId);
                if (message.callText != null && Object.hasOwnProperty.call(message, "callText"))
                    writer.uint32(/* id 29, wireType 2 =*/234).string(message.callText);
                if (message.callStatusText != null && Object.hasOwnProperty.call(message, "callStatusText"))
                    writer.uint32(/* id 32, wireType 2 =*/258).string(message.callStatusText);
                if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                    writer.uint32(/* id 33, wireType 0 =*/264).int64(message.width);
                if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                    writer.uint32(/* id 34, wireType 0 =*/272).int64(message.height);
                if (message.tip != null && Object.hasOwnProperty.call(message, "tip"))
                    writer.uint32(/* id 37, wireType 2 =*/298).string(message.tip);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Content message, length delimited. Does not implicitly {@link yh_msg.Msg.Content.verify|verify} messages.
             * @function encodeDelimited
             * @memberof yh_msg.Msg.Content
             * @static
             * @param {yh_msg.Msg.Content.$Properties} message Content message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Content.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Content message from the specified reader or buffer.
             * @function decode
             * @memberof yh_msg.Msg.Content
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {yh_msg.Msg.Content & yh_msg.Msg.Content.$Shape} Content
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Content.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_msg.Msg.Content(), value;
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
                                message.text = value;
                            else
                                delete message.text;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.buttons = value;
                            else
                                delete message.buttons;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.imageUrl = value;
                            else
                                delete message.imageUrl;
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.fileName = value;
                            else
                                delete message.fileName;
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.fileUrl = value;
                            else
                                delete message.fileUrl;
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.form = value;
                            else
                                delete message.form;
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.quoteMsgText = value;
                            else
                                delete message.quoteMsgText;
                            continue;
                        }
                    case 9: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.stickerUrl = value;
                            else
                                delete message.stickerUrl;
                            continue;
                        }
                    case 10: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.postId = value;
                            else
                                delete message.postId;
                            continue;
                        }
                    case 11: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.postTitle = value;
                            else
                                delete message.postTitle;
                            continue;
                        }
                    case 12: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.postContent = value;
                            else
                                delete message.postContent;
                            continue;
                        }
                    case 13: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.postContentType = value;
                            else
                                delete message.postContentType;
                            continue;
                        }
                    case 15: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.expressionId = value;
                            else
                                delete message.expressionId;
                            continue;
                        }
                    case 16: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.quoteImageUrl = value;
                            else
                                delete message.quoteImageUrl;
                            continue;
                        }
                    case 17: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.quoteImageName = value;
                            else
                                delete message.quoteImageName;
                            continue;
                        }
                    case 18: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.fileSize = value;
                            else
                                delete message.fileSize;
                            continue;
                        }
                    case 19: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.videoUrl = value;
                            else
                                delete message.videoUrl;
                            continue;
                        }
                    case 21: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.audioUrl = value;
                            else
                                delete message.audioUrl;
                            continue;
                        }
                    case 22: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.audioTime = value;
                            else
                                delete message.audioTime;
                            continue;
                        }
                    case 23: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.quoteVideoUrl = value;
                            else
                                delete message.quoteVideoUrl;
                            continue;
                        }
                    case 24: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.quoteVideoTime = value;
                            else
                                delete message.quoteVideoTime;
                            continue;
                        }
                    case 25: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.stickerItemId = value;
                            else
                                delete message.stickerItemId;
                            continue;
                        }
                    case 26: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.stickerPackId = value;
                            else
                                delete message.stickerPackId;
                            continue;
                        }
                    case 29: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.callText = value;
                            else
                                delete message.callText;
                            continue;
                        }
                    case 32: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.callStatusText = value;
                            else
                                delete message.callStatusText;
                            continue;
                        }
                    case 33: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.width = value;
                            else
                                delete message.width;
                            continue;
                        }
                    case 34: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.height = value;
                            else
                                delete message.height;
                            continue;
                        }
                    case 37: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.tip = value;
                            else
                                delete message.tip;
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
             * Decodes a Content message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof yh_msg.Msg.Content
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {yh_msg.Msg.Content & yh_msg.Msg.Content.$Shape} Content
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Content.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Content message.
             * @function verify
             * @memberof yh_msg.Msg.Content
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Content.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.text != null && message.hasOwnProperty("text"))
                    if (!$util.isString(message.text))
                        return "text: string expected";
                if (message.buttons != null && message.hasOwnProperty("buttons"))
                    if (!$util.isString(message.buttons))
                        return "buttons: string expected";
                if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                    if (!$util.isString(message.imageUrl))
                        return "imageUrl: string expected";
                if (message.fileName != null && message.hasOwnProperty("fileName"))
                    if (!$util.isString(message.fileName))
                        return "fileName: string expected";
                if (message.fileUrl != null && message.hasOwnProperty("fileUrl"))
                    if (!$util.isString(message.fileUrl))
                        return "fileUrl: string expected";
                if (message.form != null && message.hasOwnProperty("form"))
                    if (!$util.isString(message.form))
                        return "form: string expected";
                if (message.quoteMsgText != null && message.hasOwnProperty("quoteMsgText"))
                    if (!$util.isString(message.quoteMsgText))
                        return "quoteMsgText: string expected";
                if (message.stickerUrl != null && message.hasOwnProperty("stickerUrl"))
                    if (!$util.isString(message.stickerUrl))
                        return "stickerUrl: string expected";
                if (message.postId != null && message.hasOwnProperty("postId"))
                    if (!$util.isString(message.postId))
                        return "postId: string expected";
                if (message.postTitle != null && message.hasOwnProperty("postTitle"))
                    if (!$util.isString(message.postTitle))
                        return "postTitle: string expected";
                if (message.postContent != null && message.hasOwnProperty("postContent"))
                    if (!$util.isString(message.postContent))
                        return "postContent: string expected";
                if (message.postContentType != null && message.hasOwnProperty("postContentType"))
                    if (!$util.isString(message.postContentType))
                        return "postContentType: string expected";
                if (message.expressionId != null && message.hasOwnProperty("expressionId"))
                    if (!$util.isString(message.expressionId))
                        return "expressionId: string expected";
                if (message.quoteImageUrl != null && message.hasOwnProperty("quoteImageUrl"))
                    if (!$util.isString(message.quoteImageUrl))
                        return "quoteImageUrl: string expected";
                if (message.quoteImageName != null && message.hasOwnProperty("quoteImageName"))
                    if (!$util.isString(message.quoteImageName))
                        return "quoteImageName: string expected";
                if (message.fileSize != null && message.hasOwnProperty("fileSize"))
                    if (!$util.isInteger(message.fileSize) && !(message.fileSize && $util.isInteger(message.fileSize.low) && $util.isInteger(message.fileSize.high)))
                        return "fileSize: integer|Long expected";
                if (message.videoUrl != null && message.hasOwnProperty("videoUrl"))
                    if (!$util.isString(message.videoUrl))
                        return "videoUrl: string expected";
                if (message.audioUrl != null && message.hasOwnProperty("audioUrl"))
                    if (!$util.isString(message.audioUrl))
                        return "audioUrl: string expected";
                if (message.audioTime != null && message.hasOwnProperty("audioTime"))
                    if (!$util.isInteger(message.audioTime) && !(message.audioTime && $util.isInteger(message.audioTime.low) && $util.isInteger(message.audioTime.high)))
                        return "audioTime: integer|Long expected";
                if (message.quoteVideoUrl != null && message.hasOwnProperty("quoteVideoUrl"))
                    if (!$util.isString(message.quoteVideoUrl))
                        return "quoteVideoUrl: string expected";
                if (message.quoteVideoTime != null && message.hasOwnProperty("quoteVideoTime"))
                    if (!$util.isInteger(message.quoteVideoTime) && !(message.quoteVideoTime && $util.isInteger(message.quoteVideoTime.low) && $util.isInteger(message.quoteVideoTime.high)))
                        return "quoteVideoTime: integer|Long expected";
                if (message.stickerItemId != null && message.hasOwnProperty("stickerItemId"))
                    if (!$util.isInteger(message.stickerItemId) && !(message.stickerItemId && $util.isInteger(message.stickerItemId.low) && $util.isInteger(message.stickerItemId.high)))
                        return "stickerItemId: integer|Long expected";
                if (message.stickerPackId != null && message.hasOwnProperty("stickerPackId"))
                    if (!$util.isInteger(message.stickerPackId) && !(message.stickerPackId && $util.isInteger(message.stickerPackId.low) && $util.isInteger(message.stickerPackId.high)))
                        return "stickerPackId: integer|Long expected";
                if (message.callText != null && message.hasOwnProperty("callText"))
                    if (!$util.isString(message.callText))
                        return "callText: string expected";
                if (message.callStatusText != null && message.hasOwnProperty("callStatusText"))
                    if (!$util.isString(message.callStatusText))
                        return "callStatusText: string expected";
                if (message.width != null && message.hasOwnProperty("width"))
                    if (!$util.isInteger(message.width) && !(message.width && $util.isInteger(message.width.low) && $util.isInteger(message.width.high)))
                        return "width: integer|Long expected";
                if (message.height != null && message.hasOwnProperty("height"))
                    if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                        return "height: integer|Long expected";
                if (message.tip != null && message.hasOwnProperty("tip"))
                    if (!$util.isString(message.tip))
                        return "tip: string expected";
                return null;
            };

            /**
             * Creates a Content message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof yh_msg.Msg.Content
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {yh_msg.Msg.Content} Content
             */
            Content.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.yh_msg.Msg.Content)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.yh_msg.Msg.Content();
                if (object.text != null)
                    if (typeof object.text !== "string" || object.text.length)
                        message.text = String(object.text);
                if (object.buttons != null)
                    if (typeof object.buttons !== "string" || object.buttons.length)
                        message.buttons = String(object.buttons);
                if (object.imageUrl != null)
                    if (typeof object.imageUrl !== "string" || object.imageUrl.length)
                        message.imageUrl = String(object.imageUrl);
                if (object.fileName != null)
                    if (typeof object.fileName !== "string" || object.fileName.length)
                        message.fileName = String(object.fileName);
                if (object.fileUrl != null)
                    if (typeof object.fileUrl !== "string" || object.fileUrl.length)
                        message.fileUrl = String(object.fileUrl);
                if (object.form != null)
                    if (typeof object.form !== "string" || object.form.length)
                        message.form = String(object.form);
                if (object.quoteMsgText != null)
                    if (typeof object.quoteMsgText !== "string" || object.quoteMsgText.length)
                        message.quoteMsgText = String(object.quoteMsgText);
                if (object.stickerUrl != null)
                    if (typeof object.stickerUrl !== "string" || object.stickerUrl.length)
                        message.stickerUrl = String(object.stickerUrl);
                if (object.postId != null)
                    if (typeof object.postId !== "string" || object.postId.length)
                        message.postId = String(object.postId);
                if (object.postTitle != null)
                    if (typeof object.postTitle !== "string" || object.postTitle.length)
                        message.postTitle = String(object.postTitle);
                if (object.postContent != null)
                    if (typeof object.postContent !== "string" || object.postContent.length)
                        message.postContent = String(object.postContent);
                if (object.postContentType != null)
                    if (typeof object.postContentType !== "string" || object.postContentType.length)
                        message.postContentType = String(object.postContentType);
                if (object.expressionId != null)
                    if (typeof object.expressionId !== "string" || object.expressionId.length)
                        message.expressionId = String(object.expressionId);
                if (object.quoteImageUrl != null)
                    if (typeof object.quoteImageUrl !== "string" || object.quoteImageUrl.length)
                        message.quoteImageUrl = String(object.quoteImageUrl);
                if (object.quoteImageName != null)
                    if (typeof object.quoteImageName !== "string" || object.quoteImageName.length)
                        message.quoteImageName = String(object.quoteImageName);
                if (object.fileSize != null)
                    if (typeof object.fileSize === "object" ? object.fileSize.low || object.fileSize.high : Number(object.fileSize) !== 0)
                        if ($util.Long)
                            message.fileSize = $util.Long.fromValue(object.fileSize, false);
                        else if (typeof object.fileSize === "string")
                            message.fileSize = parseInt(object.fileSize, 10);
                        else if (typeof object.fileSize === "number")
                            message.fileSize = object.fileSize;
                        else if (typeof object.fileSize === "object")
                            message.fileSize = new $util.LongBits(object.fileSize.low >>> 0, object.fileSize.high >>> 0).toNumber();
                if (object.videoUrl != null)
                    if (typeof object.videoUrl !== "string" || object.videoUrl.length)
                        message.videoUrl = String(object.videoUrl);
                if (object.audioUrl != null)
                    if (typeof object.audioUrl !== "string" || object.audioUrl.length)
                        message.audioUrl = String(object.audioUrl);
                if (object.audioTime != null)
                    if (typeof object.audioTime === "object" ? object.audioTime.low || object.audioTime.high : Number(object.audioTime) !== 0)
                        if ($util.Long)
                            message.audioTime = $util.Long.fromValue(object.audioTime, false);
                        else if (typeof object.audioTime === "string")
                            message.audioTime = parseInt(object.audioTime, 10);
                        else if (typeof object.audioTime === "number")
                            message.audioTime = object.audioTime;
                        else if (typeof object.audioTime === "object")
                            message.audioTime = new $util.LongBits(object.audioTime.low >>> 0, object.audioTime.high >>> 0).toNumber();
                if (object.quoteVideoUrl != null)
                    if (typeof object.quoteVideoUrl !== "string" || object.quoteVideoUrl.length)
                        message.quoteVideoUrl = String(object.quoteVideoUrl);
                if (object.quoteVideoTime != null)
                    if (typeof object.quoteVideoTime === "object" ? object.quoteVideoTime.low || object.quoteVideoTime.high : Number(object.quoteVideoTime) !== 0)
                        if ($util.Long)
                            message.quoteVideoTime = $util.Long.fromValue(object.quoteVideoTime, false);
                        else if (typeof object.quoteVideoTime === "string")
                            message.quoteVideoTime = parseInt(object.quoteVideoTime, 10);
                        else if (typeof object.quoteVideoTime === "number")
                            message.quoteVideoTime = object.quoteVideoTime;
                        else if (typeof object.quoteVideoTime === "object")
                            message.quoteVideoTime = new $util.LongBits(object.quoteVideoTime.low >>> 0, object.quoteVideoTime.high >>> 0).toNumber();
                if (object.stickerItemId != null)
                    if (typeof object.stickerItemId === "object" ? object.stickerItemId.low || object.stickerItemId.high : Number(object.stickerItemId) !== 0)
                        if ($util.Long)
                            message.stickerItemId = $util.Long.fromValue(object.stickerItemId, false);
                        else if (typeof object.stickerItemId === "string")
                            message.stickerItemId = parseInt(object.stickerItemId, 10);
                        else if (typeof object.stickerItemId === "number")
                            message.stickerItemId = object.stickerItemId;
                        else if (typeof object.stickerItemId === "object")
                            message.stickerItemId = new $util.LongBits(object.stickerItemId.low >>> 0, object.stickerItemId.high >>> 0).toNumber();
                if (object.stickerPackId != null)
                    if (typeof object.stickerPackId === "object" ? object.stickerPackId.low || object.stickerPackId.high : Number(object.stickerPackId) !== 0)
                        if ($util.Long)
                            message.stickerPackId = $util.Long.fromValue(object.stickerPackId, false);
                        else if (typeof object.stickerPackId === "string")
                            message.stickerPackId = parseInt(object.stickerPackId, 10);
                        else if (typeof object.stickerPackId === "number")
                            message.stickerPackId = object.stickerPackId;
                        else if (typeof object.stickerPackId === "object")
                            message.stickerPackId = new $util.LongBits(object.stickerPackId.low >>> 0, object.stickerPackId.high >>> 0).toNumber();
                if (object.callText != null)
                    if (typeof object.callText !== "string" || object.callText.length)
                        message.callText = String(object.callText);
                if (object.callStatusText != null)
                    if (typeof object.callStatusText !== "string" || object.callStatusText.length)
                        message.callStatusText = String(object.callStatusText);
                if (object.width != null)
                    if (typeof object.width === "object" ? object.width.low || object.width.high : Number(object.width) !== 0)
                        if ($util.Long)
                            message.width = $util.Long.fromValue(object.width, false);
                        else if (typeof object.width === "string")
                            message.width = parseInt(object.width, 10);
                        else if (typeof object.width === "number")
                            message.width = object.width;
                        else if (typeof object.width === "object")
                            message.width = new $util.LongBits(object.width.low >>> 0, object.width.high >>> 0).toNumber();
                if (object.height != null)
                    if (typeof object.height === "object" ? object.height.low || object.height.high : Number(object.height) !== 0)
                        if ($util.Long)
                            message.height = $util.Long.fromValue(object.height, false);
                        else if (typeof object.height === "string")
                            message.height = parseInt(object.height, 10);
                        else if (typeof object.height === "number")
                            message.height = object.height;
                        else if (typeof object.height === "object")
                            message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber();
                if (object.tip != null)
                    if (typeof object.tip !== "string" || object.tip.length)
                        message.tip = String(object.tip);
                return message;
            };

            /**
             * Creates a plain object from a Content message. Also converts values to other types if specified.
             * @function toObject
             * @memberof yh_msg.Msg.Content
             * @static
             * @param {yh_msg.Msg.Content} message Content
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Content.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.text = "";
                    object.buttons = "";
                    object.imageUrl = "";
                    object.fileName = "";
                    object.fileUrl = "";
                    object.form = "";
                    object.quoteMsgText = "";
                    object.stickerUrl = "";
                    object.postId = "";
                    object.postTitle = "";
                    object.postContent = "";
                    object.postContentType = "";
                    object.expressionId = "";
                    object.quoteImageUrl = "";
                    object.quoteImageName = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.fileSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.fileSize = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.videoUrl = "";
                    object.audioUrl = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.audioTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.audioTime = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.quoteVideoUrl = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.quoteVideoTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.quoteVideoTime = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.stickerItemId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.stickerItemId = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.stickerPackId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.stickerPackId = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.callText = "";
                    object.callStatusText = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.width = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.width = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.height = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.tip = "";
                }
                if (message.text != null && message.hasOwnProperty("text"))
                    object.text = message.text;
                if (message.buttons != null && message.hasOwnProperty("buttons"))
                    object.buttons = message.buttons;
                if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                    object.imageUrl = message.imageUrl;
                if (message.fileName != null && message.hasOwnProperty("fileName"))
                    object.fileName = message.fileName;
                if (message.fileUrl != null && message.hasOwnProperty("fileUrl"))
                    object.fileUrl = message.fileUrl;
                if (message.form != null && message.hasOwnProperty("form"))
                    object.form = message.form;
                if (message.quoteMsgText != null && message.hasOwnProperty("quoteMsgText"))
                    object.quoteMsgText = message.quoteMsgText;
                if (message.stickerUrl != null && message.hasOwnProperty("stickerUrl"))
                    object.stickerUrl = message.stickerUrl;
                if (message.postId != null && message.hasOwnProperty("postId"))
                    object.postId = message.postId;
                if (message.postTitle != null && message.hasOwnProperty("postTitle"))
                    object.postTitle = message.postTitle;
                if (message.postContent != null && message.hasOwnProperty("postContent"))
                    object.postContent = message.postContent;
                if (message.postContentType != null && message.hasOwnProperty("postContentType"))
                    object.postContentType = message.postContentType;
                if (message.expressionId != null && message.hasOwnProperty("expressionId"))
                    object.expressionId = message.expressionId;
                if (message.quoteImageUrl != null && message.hasOwnProperty("quoteImageUrl"))
                    object.quoteImageUrl = message.quoteImageUrl;
                if (message.quoteImageName != null && message.hasOwnProperty("quoteImageName"))
                    object.quoteImageName = message.quoteImageName;
                if (message.fileSize != null && message.hasOwnProperty("fileSize"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.fileSize = typeof message.fileSize === "number" ? BigInt(message.fileSize) : $util.Long.fromBits(message.fileSize.low >>> 0, message.fileSize.high >>> 0, false).toBigInt();
                    else if (typeof message.fileSize === "number")
                        object.fileSize = options.longs === String ? String(message.fileSize) : message.fileSize;
                    else
                        object.fileSize = options.longs === String ? $util.Long.prototype.toString.call(message.fileSize) : options.longs === Number ? new $util.LongBits(message.fileSize.low >>> 0, message.fileSize.high >>> 0).toNumber() : message.fileSize;
                if (message.videoUrl != null && message.hasOwnProperty("videoUrl"))
                    object.videoUrl = message.videoUrl;
                if (message.audioUrl != null && message.hasOwnProperty("audioUrl"))
                    object.audioUrl = message.audioUrl;
                if (message.audioTime != null && message.hasOwnProperty("audioTime"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.audioTime = typeof message.audioTime === "number" ? BigInt(message.audioTime) : $util.Long.fromBits(message.audioTime.low >>> 0, message.audioTime.high >>> 0, false).toBigInt();
                    else if (typeof message.audioTime === "number")
                        object.audioTime = options.longs === String ? String(message.audioTime) : message.audioTime;
                    else
                        object.audioTime = options.longs === String ? $util.Long.prototype.toString.call(message.audioTime) : options.longs === Number ? new $util.LongBits(message.audioTime.low >>> 0, message.audioTime.high >>> 0).toNumber() : message.audioTime;
                if (message.quoteVideoUrl != null && message.hasOwnProperty("quoteVideoUrl"))
                    object.quoteVideoUrl = message.quoteVideoUrl;
                if (message.quoteVideoTime != null && message.hasOwnProperty("quoteVideoTime"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.quoteVideoTime = typeof message.quoteVideoTime === "number" ? BigInt(message.quoteVideoTime) : $util.Long.fromBits(message.quoteVideoTime.low >>> 0, message.quoteVideoTime.high >>> 0, false).toBigInt();
                    else if (typeof message.quoteVideoTime === "number")
                        object.quoteVideoTime = options.longs === String ? String(message.quoteVideoTime) : message.quoteVideoTime;
                    else
                        object.quoteVideoTime = options.longs === String ? $util.Long.prototype.toString.call(message.quoteVideoTime) : options.longs === Number ? new $util.LongBits(message.quoteVideoTime.low >>> 0, message.quoteVideoTime.high >>> 0).toNumber() : message.quoteVideoTime;
                if (message.stickerItemId != null && message.hasOwnProperty("stickerItemId"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.stickerItemId = typeof message.stickerItemId === "number" ? BigInt(message.stickerItemId) : $util.Long.fromBits(message.stickerItemId.low >>> 0, message.stickerItemId.high >>> 0, false).toBigInt();
                    else if (typeof message.stickerItemId === "number")
                        object.stickerItemId = options.longs === String ? String(message.stickerItemId) : message.stickerItemId;
                    else
                        object.stickerItemId = options.longs === String ? $util.Long.prototype.toString.call(message.stickerItemId) : options.longs === Number ? new $util.LongBits(message.stickerItemId.low >>> 0, message.stickerItemId.high >>> 0).toNumber() : message.stickerItemId;
                if (message.stickerPackId != null && message.hasOwnProperty("stickerPackId"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.stickerPackId = typeof message.stickerPackId === "number" ? BigInt(message.stickerPackId) : $util.Long.fromBits(message.stickerPackId.low >>> 0, message.stickerPackId.high >>> 0, false).toBigInt();
                    else if (typeof message.stickerPackId === "number")
                        object.stickerPackId = options.longs === String ? String(message.stickerPackId) : message.stickerPackId;
                    else
                        object.stickerPackId = options.longs === String ? $util.Long.prototype.toString.call(message.stickerPackId) : options.longs === Number ? new $util.LongBits(message.stickerPackId.low >>> 0, message.stickerPackId.high >>> 0).toNumber() : message.stickerPackId;
                if (message.callText != null && message.hasOwnProperty("callText"))
                    object.callText = message.callText;
                if (message.callStatusText != null && message.hasOwnProperty("callStatusText"))
                    object.callStatusText = message.callStatusText;
                if (message.width != null && message.hasOwnProperty("width"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.width = typeof message.width === "number" ? BigInt(message.width) : $util.Long.fromBits(message.width.low >>> 0, message.width.high >>> 0, false).toBigInt();
                    else if (typeof message.width === "number")
                        object.width = options.longs === String ? String(message.width) : message.width;
                    else
                        object.width = options.longs === String ? $util.Long.prototype.toString.call(message.width) : options.longs === Number ? new $util.LongBits(message.width.low >>> 0, message.width.high >>> 0).toNumber() : message.width;
                if (message.height != null && message.hasOwnProperty("height"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.height = typeof message.height === "number" ? BigInt(message.height) : $util.Long.fromBits(message.height.low >>> 0, message.height.high >>> 0, false).toBigInt();
                    else if (typeof message.height === "number")
                        object.height = options.longs === String ? String(message.height) : message.height;
                    else
                        object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber() : message.height;
                if (message.tip != null && message.hasOwnProperty("tip"))
                    object.tip = message.tip;
                return object;
            };

            /**
             * Converts this Content to JSON.
             * @function toJSON
             * @memberof yh_msg.Msg.Content
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Content.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Content
             * @function getTypeUrl
             * @memberof yh_msg.Msg.Content
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Content.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/yh_msg.Msg.Content";
            };

            return Content;
        })();

        Msg.Sender = (function() {

            /**
             * Properties of a Sender.
             * @typedef {Object} yh_msg.Msg.Sender.$Properties
             * @property {string|null} [chatId] Sender chatId
             * @property {number|null} [chatType] Sender chatType
             * @property {string|null} [name] Sender name
             * @property {string|null} [avatarUrl] Sender avatarUrl
             * @property {Array.<string>|null} [tagOld] Sender tagOld
             * @property {Array.<yh_msg.Tag.$Properties>|null} [tag] Sender tag
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Sender.
             * @memberof yh_msg.Msg
             * @interface ISender
             * @augments yh_msg.Msg.Sender.$Properties
             * @deprecated Use yh_msg.Msg.Sender.$Properties instead.
             */

            /**
             * Shape of a Sender.
             * @typedef {yh_msg.Msg.Sender.$Properties} yh_msg.Msg.Sender.$Shape
             */

            /**
             * Constructs a new Sender.
             * @memberof yh_msg.Msg
             * @classdesc Represents a Sender.
             * @constructor
             * @param {yh_msg.Msg.Sender.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Sender(properties) {
                this.tagOld = [];
                this.tag = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Sender chatId.
             * @member {string} chatId
             * @memberof yh_msg.Msg.Sender
             * @instance
             */
            Sender.prototype.chatId = "";

            /**
             * Sender chatType.
             * @member {number} chatType
             * @memberof yh_msg.Msg.Sender
             * @instance
             */
            Sender.prototype.chatType = 0;

            /**
             * Sender name.
             * @member {string} name
             * @memberof yh_msg.Msg.Sender
             * @instance
             */
            Sender.prototype.name = "";

            /**
             * Sender avatarUrl.
             * @member {string} avatarUrl
             * @memberof yh_msg.Msg.Sender
             * @instance
             */
            Sender.prototype.avatarUrl = "";

            /**
             * Sender tagOld.
             * @member {Array.<string>} tagOld
             * @memberof yh_msg.Msg.Sender
             * @instance
             */
            Sender.prototype.tagOld = $util.emptyArray;

            /**
             * Sender tag.
             * @member {Array.<yh_msg.Tag.$Properties>} tag
             * @memberof yh_msg.Msg.Sender
             * @instance
             */
            Sender.prototype.tag = $util.emptyArray;

            /**
             * Creates a new Sender instance using the specified properties.
             * @function create
             * @memberof yh_msg.Msg.Sender
             * @static
             * @param {yh_msg.Msg.Sender.$Properties=} [properties] Properties to set
             * @returns {yh_msg.Msg.Sender} Sender instance
             * @type {{
             *   (properties: yh_msg.Msg.Sender.$Shape): yh_msg.Msg.Sender & yh_msg.Msg.Sender.$Shape;
             *   (properties?: yh_msg.Msg.Sender.$Properties): yh_msg.Msg.Sender;
             * }}
             */
            Sender.create = function create(properties) {
                return new Sender(properties);
            };

            /**
             * Encodes the specified Sender message. Does not implicitly {@link yh_msg.Msg.Sender.verify|verify} messages.
             * @function encode
             * @memberof yh_msg.Msg.Sender
             * @static
             * @param {yh_msg.Msg.Sender.$Properties} message Sender message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Sender.encode = function encode(message, writer, _depth) {
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
                if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.avatarUrl);
                if (message.tagOld != null && message.tagOld.length)
                    for (let i = 0; i < message.tagOld.length; ++i)
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.tagOld[i]);
                if (message.tag != null && message.tag.length)
                    for (let i = 0; i < message.tag.length; ++i)
                        $root.yh_msg.Tag.encode(message.tag[i], writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Sender message, length delimited. Does not implicitly {@link yh_msg.Msg.Sender.verify|verify} messages.
             * @function encodeDelimited
             * @memberof yh_msg.Msg.Sender
             * @static
             * @param {yh_msg.Msg.Sender.$Properties} message Sender message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Sender.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Sender message from the specified reader or buffer.
             * @function decode
             * @memberof yh_msg.Msg.Sender
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {yh_msg.Msg.Sender & yh_msg.Msg.Sender.$Shape} Sender
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Sender.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_msg.Msg.Sender(), value;
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
                                message.avatarUrl = value;
                            else
                                delete message.avatarUrl;
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            if (!(message.tagOld && message.tagOld.length))
                                message.tagOld = [];
                            message.tagOld.push(reader.string());
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            if (!(message.tag && message.tag.length))
                                message.tag = [];
                            message.tag.push($root.yh_msg.Tag.decode(reader, reader.uint32(), undefined, _depth + 1));
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
             * Decodes a Sender message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof yh_msg.Msg.Sender
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {yh_msg.Msg.Sender & yh_msg.Msg.Sender.$Shape} Sender
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Sender.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Sender message.
             * @function verify
             * @memberof yh_msg.Msg.Sender
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Sender.verify = function verify(message, _depth) {
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
                if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                    if (!$util.isString(message.avatarUrl))
                        return "avatarUrl: string expected";
                if (message.tagOld != null && message.hasOwnProperty("tagOld")) {
                    if (!Array.isArray(message.tagOld))
                        return "tagOld: array expected";
                    for (let i = 0; i < message.tagOld.length; ++i)
                        if (!$util.isString(message.tagOld[i]))
                            return "tagOld: string[] expected";
                }
                if (message.tag != null && message.hasOwnProperty("tag")) {
                    if (!Array.isArray(message.tag))
                        return "tag: array expected";
                    for (let i = 0; i < message.tag.length; ++i) {
                        let error = $root.yh_msg.Tag.verify(message.tag[i], _depth + 1);
                        if (error)
                            return "tag." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Sender message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof yh_msg.Msg.Sender
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {yh_msg.Msg.Sender} Sender
             */
            Sender.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.yh_msg.Msg.Sender)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.yh_msg.Msg.Sender();
                if (object.chatId != null)
                    if (typeof object.chatId !== "string" || object.chatId.length)
                        message.chatId = String(object.chatId);
                if (object.chatType != null)
                    if (Number(object.chatType) !== 0)
                        message.chatType = object.chatType | 0;
                if (object.name != null)
                    if (typeof object.name !== "string" || object.name.length)
                        message.name = String(object.name);
                if (object.avatarUrl != null)
                    if (typeof object.avatarUrl !== "string" || object.avatarUrl.length)
                        message.avatarUrl = String(object.avatarUrl);
                if (object.tagOld) {
                    if (!Array.isArray(object.tagOld))
                        throw TypeError(".yh_msg.Msg.Sender.tagOld: array expected");
                    message.tagOld = Array(object.tagOld.length);
                    for (let i = 0; i < object.tagOld.length; ++i)
                        message.tagOld[i] = String(object.tagOld[i]);
                }
                if (object.tag) {
                    if (!Array.isArray(object.tag))
                        throw TypeError(".yh_msg.Msg.Sender.tag: array expected");
                    message.tag = Array(object.tag.length);
                    for (let i = 0; i < object.tag.length; ++i) {
                        if (typeof object.tag[i] !== "object")
                            throw TypeError(".yh_msg.Msg.Sender.tag: object expected");
                        message.tag[i] = $root.yh_msg.Tag.fromObject(object.tag[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Sender message. Also converts values to other types if specified.
             * @function toObject
             * @memberof yh_msg.Msg.Sender
             * @static
             * @param {yh_msg.Msg.Sender} message Sender
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Sender.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults) {
                    object.tagOld = [];
                    object.tag = [];
                }
                if (options.defaults) {
                    object.chatId = "";
                    object.chatType = 0;
                    object.name = "";
                    object.avatarUrl = "";
                }
                if (message.chatId != null && message.hasOwnProperty("chatId"))
                    object.chatId = message.chatId;
                if (message.chatType != null && message.hasOwnProperty("chatType"))
                    object.chatType = message.chatType;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                    object.avatarUrl = message.avatarUrl;
                if (message.tagOld && message.tagOld.length) {
                    object.tagOld = Array(message.tagOld.length);
                    for (let j = 0; j < message.tagOld.length; ++j)
                        object.tagOld[j] = message.tagOld[j];
                }
                if (message.tag && message.tag.length) {
                    object.tag = Array(message.tag.length);
                    for (let j = 0; j < message.tag.length; ++j)
                        object.tag[j] = $root.yh_msg.Tag.toObject(message.tag[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this Sender to JSON.
             * @function toJSON
             * @memberof yh_msg.Msg.Sender
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Sender.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Sender
             * @function getTypeUrl
             * @memberof yh_msg.Msg.Sender
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Sender.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/yh_msg.Msg.Sender";
            };

            return Sender;
        })();

        return Msg;
    })();

    yh_msg.list_message_by_seq_send = (function() {

        /**
         * Properties of a list_message_by_seq_send.
         * @typedef {Object} yh_msg.list_message_by_seq_send.$Properties
         * @property {number|Long|null} [msgSeq] list_message_by_seq_send msgSeq
         * @property {number|Long|null} [chatType] list_message_by_seq_send chatType
         * @property {string|null} [chatId] list_message_by_seq_send chatId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a list_message_by_seq_send.
         * @memberof yh_msg
         * @interface Ilist_message_by_seq_send
         * @augments yh_msg.list_message_by_seq_send.$Properties
         * @deprecated Use yh_msg.list_message_by_seq_send.$Properties instead.
         */

        /**
         * Shape of a list_message_by_seq_send.
         * @typedef {yh_msg.list_message_by_seq_send.$Properties} yh_msg.list_message_by_seq_send.$Shape
         */

        /**
         * Constructs a new list_message_by_seq_send.
         * @memberof yh_msg
         * @classdesc Represents a list_message_by_seq_send.
         * @constructor
         * @param {yh_msg.list_message_by_seq_send.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function list_message_by_seq_send(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * list_message_by_seq_send msgSeq.
         * @member {number|Long} msgSeq
         * @memberof yh_msg.list_message_by_seq_send
         * @instance
         */
        list_message_by_seq_send.prototype.msgSeq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * list_message_by_seq_send chatType.
         * @member {number|Long} chatType
         * @memberof yh_msg.list_message_by_seq_send
         * @instance
         */
        list_message_by_seq_send.prototype.chatType = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * list_message_by_seq_send chatId.
         * @member {string} chatId
         * @memberof yh_msg.list_message_by_seq_send
         * @instance
         */
        list_message_by_seq_send.prototype.chatId = "";

        /**
         * Creates a new list_message_by_seq_send instance using the specified properties.
         * @function create
         * @memberof yh_msg.list_message_by_seq_send
         * @static
         * @param {yh_msg.list_message_by_seq_send.$Properties=} [properties] Properties to set
         * @returns {yh_msg.list_message_by_seq_send} list_message_by_seq_send instance
         * @type {{
         *   (properties: yh_msg.list_message_by_seq_send.$Shape): yh_msg.list_message_by_seq_send & yh_msg.list_message_by_seq_send.$Shape;
         *   (properties?: yh_msg.list_message_by_seq_send.$Properties): yh_msg.list_message_by_seq_send;
         * }}
         */
        list_message_by_seq_send.create = function create(properties) {
            return new list_message_by_seq_send(properties);
        };

        /**
         * Encodes the specified list_message_by_seq_send message. Does not implicitly {@link yh_msg.list_message_by_seq_send.verify|verify} messages.
         * @function encode
         * @memberof yh_msg.list_message_by_seq_send
         * @static
         * @param {yh_msg.list_message_by_seq_send.$Properties} message list_message_by_seq_send message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        list_message_by_seq_send.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.msgSeq != null && Object.hasOwnProperty.call(message, "msgSeq"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.msgSeq);
            if (message.chatType != null && Object.hasOwnProperty.call(message, "chatType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.chatType);
            if (message.chatId != null && Object.hasOwnProperty.call(message, "chatId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.chatId);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified list_message_by_seq_send message, length delimited. Does not implicitly {@link yh_msg.list_message_by_seq_send.verify|verify} messages.
         * @function encodeDelimited
         * @memberof yh_msg.list_message_by_seq_send
         * @static
         * @param {yh_msg.list_message_by_seq_send.$Properties} message list_message_by_seq_send message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        list_message_by_seq_send.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a list_message_by_seq_send message from the specified reader or buffer.
         * @function decode
         * @memberof yh_msg.list_message_by_seq_send
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {yh_msg.list_message_by_seq_send & yh_msg.list_message_by_seq_send.$Shape} list_message_by_seq_send
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        list_message_by_seq_send.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_msg.list_message_by_seq_send(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 3: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.msgSeq = value;
                        else
                            delete message.msgSeq;
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.chatType = value;
                        else
                            delete message.chatType;
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.chatId = value;
                        else
                            delete message.chatId;
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
         * Decodes a list_message_by_seq_send message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof yh_msg.list_message_by_seq_send
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {yh_msg.list_message_by_seq_send & yh_msg.list_message_by_seq_send.$Shape} list_message_by_seq_send
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        list_message_by_seq_send.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a list_message_by_seq_send message.
         * @function verify
         * @memberof yh_msg.list_message_by_seq_send
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        list_message_by_seq_send.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.msgSeq != null && message.hasOwnProperty("msgSeq"))
                if (!$util.isInteger(message.msgSeq) && !(message.msgSeq && $util.isInteger(message.msgSeq.low) && $util.isInteger(message.msgSeq.high)))
                    return "msgSeq: integer|Long expected";
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                if (!$util.isInteger(message.chatType) && !(message.chatType && $util.isInteger(message.chatType.low) && $util.isInteger(message.chatType.high)))
                    return "chatType: integer|Long expected";
            if (message.chatId != null && message.hasOwnProperty("chatId"))
                if (!$util.isString(message.chatId))
                    return "chatId: string expected";
            return null;
        };

        /**
         * Creates a list_message_by_seq_send message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof yh_msg.list_message_by_seq_send
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {yh_msg.list_message_by_seq_send} list_message_by_seq_send
         */
        list_message_by_seq_send.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.yh_msg.list_message_by_seq_send)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.yh_msg.list_message_by_seq_send();
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
            if (object.chatType != null)
                if (typeof object.chatType === "object" ? object.chatType.low || object.chatType.high : Number(object.chatType) !== 0)
                    if ($util.Long)
                        message.chatType = $util.Long.fromValue(object.chatType, false);
                    else if (typeof object.chatType === "string")
                        message.chatType = parseInt(object.chatType, 10);
                    else if (typeof object.chatType === "number")
                        message.chatType = object.chatType;
                    else if (typeof object.chatType === "object")
                        message.chatType = new $util.LongBits(object.chatType.low >>> 0, object.chatType.high >>> 0).toNumber();
            if (object.chatId != null)
                if (typeof object.chatId !== "string" || object.chatId.length)
                    message.chatId = String(object.chatId);
            return message;
        };

        /**
         * Creates a plain object from a list_message_by_seq_send message. Also converts values to other types if specified.
         * @function toObject
         * @memberof yh_msg.list_message_by_seq_send
         * @static
         * @param {yh_msg.list_message_by_seq_send} message list_message_by_seq_send
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        list_message_by_seq_send.toObject = function toObject(message, options, _depth) {
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
                    object.msgSeq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.msgSeq = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.chatType = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.chatType = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                object.chatId = "";
            }
            if (message.msgSeq != null && message.hasOwnProperty("msgSeq"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.msgSeq = typeof message.msgSeq === "number" ? BigInt(message.msgSeq) : $util.Long.fromBits(message.msgSeq.low >>> 0, message.msgSeq.high >>> 0, false).toBigInt();
                else if (typeof message.msgSeq === "number")
                    object.msgSeq = options.longs === String ? String(message.msgSeq) : message.msgSeq;
                else
                    object.msgSeq = options.longs === String ? $util.Long.prototype.toString.call(message.msgSeq) : options.longs === Number ? new $util.LongBits(message.msgSeq.low >>> 0, message.msgSeq.high >>> 0).toNumber() : message.msgSeq;
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.chatType = typeof message.chatType === "number" ? BigInt(message.chatType) : $util.Long.fromBits(message.chatType.low >>> 0, message.chatType.high >>> 0, false).toBigInt();
                else if (typeof message.chatType === "number")
                    object.chatType = options.longs === String ? String(message.chatType) : message.chatType;
                else
                    object.chatType = options.longs === String ? $util.Long.prototype.toString.call(message.chatType) : options.longs === Number ? new $util.LongBits(message.chatType.low >>> 0, message.chatType.high >>> 0).toNumber() : message.chatType;
            if (message.chatId != null && message.hasOwnProperty("chatId"))
                object.chatId = message.chatId;
            return object;
        };

        /**
         * Converts this list_message_by_seq_send to JSON.
         * @function toJSON
         * @memberof yh_msg.list_message_by_seq_send
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        list_message_by_seq_send.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for list_message_by_seq_send
         * @function getTypeUrl
         * @memberof yh_msg.list_message_by_seq_send
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        list_message_by_seq_send.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/yh_msg.list_message_by_seq_send";
        };

        return list_message_by_seq_send;
    })();

    yh_msg.list_message_by_seq = (function() {

        /**
         * Properties of a list_message_by_seq.
         * @typedef {Object} yh_msg.list_message_by_seq.$Properties
         * @property {yh_msg.Status.$Properties|null} [status] list_message_by_seq status
         * @property {Array.<yh_msg.Msg.$Properties>|null} [msg] list_message_by_seq msg
         * @property {number|null} [total] list_message_by_seq total
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a list_message_by_seq.
         * @memberof yh_msg
         * @interface Ilist_message_by_seq
         * @augments yh_msg.list_message_by_seq.$Properties
         * @deprecated Use yh_msg.list_message_by_seq.$Properties instead.
         */

        /**
         * Shape of a list_message_by_seq.
         * @typedef {yh_msg.list_message_by_seq.$Properties} yh_msg.list_message_by_seq.$Shape
         */

        /**
         * Constructs a new list_message_by_seq.
         * @memberof yh_msg
         * @classdesc Represents a list_message_by_seq.
         * @constructor
         * @param {yh_msg.list_message_by_seq.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function list_message_by_seq(properties) {
            this.msg = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * list_message_by_seq status.
         * @member {yh_msg.Status.$Properties|null|undefined} status
         * @memberof yh_msg.list_message_by_seq
         * @instance
         */
        list_message_by_seq.prototype.status = null;

        /**
         * list_message_by_seq msg.
         * @member {Array.<yh_msg.Msg.$Properties>} msg
         * @memberof yh_msg.list_message_by_seq
         * @instance
         */
        list_message_by_seq.prototype.msg = $util.emptyArray;

        /**
         * list_message_by_seq total.
         * @member {number} total
         * @memberof yh_msg.list_message_by_seq
         * @instance
         */
        list_message_by_seq.prototype.total = 0;

        /**
         * Creates a new list_message_by_seq instance using the specified properties.
         * @function create
         * @memberof yh_msg.list_message_by_seq
         * @static
         * @param {yh_msg.list_message_by_seq.$Properties=} [properties] Properties to set
         * @returns {yh_msg.list_message_by_seq} list_message_by_seq instance
         * @type {{
         *   (properties: yh_msg.list_message_by_seq.$Shape): yh_msg.list_message_by_seq & yh_msg.list_message_by_seq.$Shape;
         *   (properties?: yh_msg.list_message_by_seq.$Properties): yh_msg.list_message_by_seq;
         * }}
         */
        list_message_by_seq.create = function create(properties) {
            return new list_message_by_seq(properties);
        };

        /**
         * Encodes the specified list_message_by_seq message. Does not implicitly {@link yh_msg.list_message_by_seq.verify|verify} messages.
         * @function encode
         * @memberof yh_msg.list_message_by_seq
         * @static
         * @param {yh_msg.list_message_by_seq.$Properties} message list_message_by_seq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        list_message_by_seq.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.yh_msg.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.msg != null && message.msg.length)
                for (let i = 0; i < message.msg.length; ++i)
                    $root.yh_msg.Msg.encode(message.msg[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.total);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified list_message_by_seq message, length delimited. Does not implicitly {@link yh_msg.list_message_by_seq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof yh_msg.list_message_by_seq
         * @static
         * @param {yh_msg.list_message_by_seq.$Properties} message list_message_by_seq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        list_message_by_seq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a list_message_by_seq message from the specified reader or buffer.
         * @function decode
         * @memberof yh_msg.list_message_by_seq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {yh_msg.list_message_by_seq & yh_msg.list_message_by_seq.$Shape} list_message_by_seq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        list_message_by_seq.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_msg.list_message_by_seq(), value;
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
                        message.status = $root.yh_msg.Status.decode(reader, reader.uint32(), undefined, _depth + 1, message.status);
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if (!(message.msg && message.msg.length))
                            message.msg = [];
                        message.msg.push($root.yh_msg.Msg.decode(reader, reader.uint32(), undefined, _depth + 1));
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
         * Decodes a list_message_by_seq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof yh_msg.list_message_by_seq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {yh_msg.list_message_by_seq & yh_msg.list_message_by_seq.$Shape} list_message_by_seq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        list_message_by_seq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a list_message_by_seq message.
         * @function verify
         * @memberof yh_msg.list_message_by_seq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        list_message_by_seq.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.yh_msg.Status.verify(message.status, _depth + 1);
                if (error)
                    return "status." + error;
            }
            if (message.msg != null && message.hasOwnProperty("msg")) {
                if (!Array.isArray(message.msg))
                    return "msg: array expected";
                for (let i = 0; i < message.msg.length; ++i) {
                    let error = $root.yh_msg.Msg.verify(message.msg[i], _depth + 1);
                    if (error)
                        return "msg." + error;
                }
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total))
                    return "total: integer expected";
            return null;
        };

        /**
         * Creates a list_message_by_seq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof yh_msg.list_message_by_seq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {yh_msg.list_message_by_seq} list_message_by_seq
         */
        list_message_by_seq.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.yh_msg.list_message_by_seq)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.yh_msg.list_message_by_seq();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".yh_msg.list_message_by_seq.status: object expected");
                message.status = $root.yh_msg.Status.fromObject(object.status, _depth + 1);
            }
            if (object.msg) {
                if (!Array.isArray(object.msg))
                    throw TypeError(".yh_msg.list_message_by_seq.msg: array expected");
                message.msg = Array(object.msg.length);
                for (let i = 0; i < object.msg.length; ++i) {
                    if (typeof object.msg[i] !== "object")
                        throw TypeError(".yh_msg.list_message_by_seq.msg: object expected");
                    message.msg[i] = $root.yh_msg.Msg.fromObject(object.msg[i], _depth + 1);
                }
            }
            if (object.total != null)
                if (Number(object.total) !== 0)
                    message.total = object.total | 0;
            return message;
        };

        /**
         * Creates a plain object from a list_message_by_seq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof yh_msg.list_message_by_seq
         * @static
         * @param {yh_msg.list_message_by_seq} message list_message_by_seq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        list_message_by_seq.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.msg = [];
            if (options.defaults) {
                object.status = null;
                object.total = 0;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.yh_msg.Status.toObject(message.status, options, _depth + 1);
            if (message.msg && message.msg.length) {
                object.msg = Array(message.msg.length);
                for (let j = 0; j < message.msg.length; ++j)
                    object.msg[j] = $root.yh_msg.Msg.toObject(message.msg[j], options, _depth + 1);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = message.total;
            return object;
        };

        /**
         * Converts this list_message_by_seq to JSON.
         * @function toJSON
         * @memberof yh_msg.list_message_by_seq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        list_message_by_seq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for list_message_by_seq
         * @function getTypeUrl
         * @memberof yh_msg.list_message_by_seq
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        list_message_by_seq.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/yh_msg.list_message_by_seq";
        };

        return list_message_by_seq;
    })();

    yh_msg.list_message_send = (function() {

        /**
         * Properties of a list_message_send.
         * @typedef {Object} yh_msg.list_message_send.$Properties
         * @property {number|Long|null} [msgCount] list_message_send msgCount
         * @property {string|null} [msgId] list_message_send msgId
         * @property {number|Long|null} [chatType] list_message_send chatType
         * @property {string|null} [chatId] list_message_send chatId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a list_message_send.
         * @memberof yh_msg
         * @interface Ilist_message_send
         * @augments yh_msg.list_message_send.$Properties
         * @deprecated Use yh_msg.list_message_send.$Properties instead.
         */

        /**
         * Shape of a list_message_send.
         * @typedef {yh_msg.list_message_send.$Properties} yh_msg.list_message_send.$Shape
         */

        /**
         * Constructs a new list_message_send.
         * @memberof yh_msg
         * @classdesc Represents a list_message_send.
         * @constructor
         * @param {yh_msg.list_message_send.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function list_message_send(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * list_message_send msgCount.
         * @member {number|Long} msgCount
         * @memberof yh_msg.list_message_send
         * @instance
         */
        list_message_send.prototype.msgCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * list_message_send msgId.
         * @member {string} msgId
         * @memberof yh_msg.list_message_send
         * @instance
         */
        list_message_send.prototype.msgId = "";

        /**
         * list_message_send chatType.
         * @member {number|Long} chatType
         * @memberof yh_msg.list_message_send
         * @instance
         */
        list_message_send.prototype.chatType = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * list_message_send chatId.
         * @member {string} chatId
         * @memberof yh_msg.list_message_send
         * @instance
         */
        list_message_send.prototype.chatId = "";

        /**
         * Creates a new list_message_send instance using the specified properties.
         * @function create
         * @memberof yh_msg.list_message_send
         * @static
         * @param {yh_msg.list_message_send.$Properties=} [properties] Properties to set
         * @returns {yh_msg.list_message_send} list_message_send instance
         * @type {{
         *   (properties: yh_msg.list_message_send.$Shape): yh_msg.list_message_send & yh_msg.list_message_send.$Shape;
         *   (properties?: yh_msg.list_message_send.$Properties): yh_msg.list_message_send;
         * }}
         */
        list_message_send.create = function create(properties) {
            return new list_message_send(properties);
        };

        /**
         * Encodes the specified list_message_send message. Does not implicitly {@link yh_msg.list_message_send.verify|verify} messages.
         * @function encode
         * @memberof yh_msg.list_message_send
         * @static
         * @param {yh_msg.list_message_send.$Properties} message list_message_send message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        list_message_send.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.msgCount != null && Object.hasOwnProperty.call(message, "msgCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.msgCount);
            if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.msgId);
            if (message.chatType != null && Object.hasOwnProperty.call(message, "chatType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.chatType);
            if (message.chatId != null && Object.hasOwnProperty.call(message, "chatId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.chatId);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified list_message_send message, length delimited. Does not implicitly {@link yh_msg.list_message_send.verify|verify} messages.
         * @function encodeDelimited
         * @memberof yh_msg.list_message_send
         * @static
         * @param {yh_msg.list_message_send.$Properties} message list_message_send message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        list_message_send.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a list_message_send message from the specified reader or buffer.
         * @function decode
         * @memberof yh_msg.list_message_send
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {yh_msg.list_message_send & yh_msg.list_message_send.$Shape} list_message_send
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        list_message_send.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_msg.list_message_send(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.msgCount = value;
                        else
                            delete message.msgCount;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.msgId = value;
                        else
                            delete message.msgId;
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.chatType = value;
                        else
                            delete message.chatType;
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.chatId = value;
                        else
                            delete message.chatId;
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
         * Decodes a list_message_send message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof yh_msg.list_message_send
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {yh_msg.list_message_send & yh_msg.list_message_send.$Shape} list_message_send
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        list_message_send.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a list_message_send message.
         * @function verify
         * @memberof yh_msg.list_message_send
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        list_message_send.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.msgCount != null && message.hasOwnProperty("msgCount"))
                if (!$util.isInteger(message.msgCount) && !(message.msgCount && $util.isInteger(message.msgCount.low) && $util.isInteger(message.msgCount.high)))
                    return "msgCount: integer|Long expected";
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                if (!$util.isString(message.msgId))
                    return "msgId: string expected";
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                if (!$util.isInteger(message.chatType) && !(message.chatType && $util.isInteger(message.chatType.low) && $util.isInteger(message.chatType.high)))
                    return "chatType: integer|Long expected";
            if (message.chatId != null && message.hasOwnProperty("chatId"))
                if (!$util.isString(message.chatId))
                    return "chatId: string expected";
            return null;
        };

        /**
         * Creates a list_message_send message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof yh_msg.list_message_send
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {yh_msg.list_message_send} list_message_send
         */
        list_message_send.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.yh_msg.list_message_send)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.yh_msg.list_message_send();
            if (object.msgCount != null)
                if (typeof object.msgCount === "object" ? object.msgCount.low || object.msgCount.high : Number(object.msgCount) !== 0)
                    if ($util.Long)
                        message.msgCount = $util.Long.fromValue(object.msgCount, false);
                    else if (typeof object.msgCount === "string")
                        message.msgCount = parseInt(object.msgCount, 10);
                    else if (typeof object.msgCount === "number")
                        message.msgCount = object.msgCount;
                    else if (typeof object.msgCount === "object")
                        message.msgCount = new $util.LongBits(object.msgCount.low >>> 0, object.msgCount.high >>> 0).toNumber();
            if (object.msgId != null)
                if (typeof object.msgId !== "string" || object.msgId.length)
                    message.msgId = String(object.msgId);
            if (object.chatType != null)
                if (typeof object.chatType === "object" ? object.chatType.low || object.chatType.high : Number(object.chatType) !== 0)
                    if ($util.Long)
                        message.chatType = $util.Long.fromValue(object.chatType, false);
                    else if (typeof object.chatType === "string")
                        message.chatType = parseInt(object.chatType, 10);
                    else if (typeof object.chatType === "number")
                        message.chatType = object.chatType;
                    else if (typeof object.chatType === "object")
                        message.chatType = new $util.LongBits(object.chatType.low >>> 0, object.chatType.high >>> 0).toNumber();
            if (object.chatId != null)
                if (typeof object.chatId !== "string" || object.chatId.length)
                    message.chatId = String(object.chatId);
            return message;
        };

        /**
         * Creates a plain object from a list_message_send message. Also converts values to other types if specified.
         * @function toObject
         * @memberof yh_msg.list_message_send
         * @static
         * @param {yh_msg.list_message_send} message list_message_send
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        list_message_send.toObject = function toObject(message, options, _depth) {
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
                    object.msgCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.msgCount = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                object.msgId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.chatType = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.chatType = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                object.chatId = "";
            }
            if (message.msgCount != null && message.hasOwnProperty("msgCount"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.msgCount = typeof message.msgCount === "number" ? BigInt(message.msgCount) : $util.Long.fromBits(message.msgCount.low >>> 0, message.msgCount.high >>> 0, false).toBigInt();
                else if (typeof message.msgCount === "number")
                    object.msgCount = options.longs === String ? String(message.msgCount) : message.msgCount;
                else
                    object.msgCount = options.longs === String ? $util.Long.prototype.toString.call(message.msgCount) : options.longs === Number ? new $util.LongBits(message.msgCount.low >>> 0, message.msgCount.high >>> 0).toNumber() : message.msgCount;
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                object.msgId = message.msgId;
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.chatType = typeof message.chatType === "number" ? BigInt(message.chatType) : $util.Long.fromBits(message.chatType.low >>> 0, message.chatType.high >>> 0, false).toBigInt();
                else if (typeof message.chatType === "number")
                    object.chatType = options.longs === String ? String(message.chatType) : message.chatType;
                else
                    object.chatType = options.longs === String ? $util.Long.prototype.toString.call(message.chatType) : options.longs === Number ? new $util.LongBits(message.chatType.low >>> 0, message.chatType.high >>> 0).toNumber() : message.chatType;
            if (message.chatId != null && message.hasOwnProperty("chatId"))
                object.chatId = message.chatId;
            return object;
        };

        /**
         * Converts this list_message_send to JSON.
         * @function toJSON
         * @memberof yh_msg.list_message_send
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        list_message_send.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for list_message_send
         * @function getTypeUrl
         * @memberof yh_msg.list_message_send
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        list_message_send.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/yh_msg.list_message_send";
        };

        return list_message_send;
    })();

    yh_msg.list_message = (function() {

        /**
         * Properties of a list_message.
         * @typedef {Object} yh_msg.list_message.$Properties
         * @property {yh_msg.Status.$Properties|null} [status] list_message status
         * @property {Array.<yh_msg.Msg.$Properties>|null} [msg] list_message msg
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a list_message.
         * @memberof yh_msg
         * @interface Ilist_message
         * @augments yh_msg.list_message.$Properties
         * @deprecated Use yh_msg.list_message.$Properties instead.
         */

        /**
         * Shape of a list_message.
         * @typedef {yh_msg.list_message.$Properties} yh_msg.list_message.$Shape
         */

        /**
         * Constructs a new list_message.
         * @memberof yh_msg
         * @classdesc Represents a list_message.
         * @constructor
         * @param {yh_msg.list_message.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function list_message(properties) {
            this.msg = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * list_message status.
         * @member {yh_msg.Status.$Properties|null|undefined} status
         * @memberof yh_msg.list_message
         * @instance
         */
        list_message.prototype.status = null;

        /**
         * list_message msg.
         * @member {Array.<yh_msg.Msg.$Properties>} msg
         * @memberof yh_msg.list_message
         * @instance
         */
        list_message.prototype.msg = $util.emptyArray;

        /**
         * Creates a new list_message instance using the specified properties.
         * @function create
         * @memberof yh_msg.list_message
         * @static
         * @param {yh_msg.list_message.$Properties=} [properties] Properties to set
         * @returns {yh_msg.list_message} list_message instance
         * @type {{
         *   (properties: yh_msg.list_message.$Shape): yh_msg.list_message & yh_msg.list_message.$Shape;
         *   (properties?: yh_msg.list_message.$Properties): yh_msg.list_message;
         * }}
         */
        list_message.create = function create(properties) {
            return new list_message(properties);
        };

        /**
         * Encodes the specified list_message message. Does not implicitly {@link yh_msg.list_message.verify|verify} messages.
         * @function encode
         * @memberof yh_msg.list_message
         * @static
         * @param {yh_msg.list_message.$Properties} message list_message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        list_message.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.yh_msg.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.msg != null && message.msg.length)
                for (let i = 0; i < message.msg.length; ++i)
                    $root.yh_msg.Msg.encode(message.msg[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified list_message message, length delimited. Does not implicitly {@link yh_msg.list_message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof yh_msg.list_message
         * @static
         * @param {yh_msg.list_message.$Properties} message list_message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        list_message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a list_message message from the specified reader or buffer.
         * @function decode
         * @memberof yh_msg.list_message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {yh_msg.list_message & yh_msg.list_message.$Shape} list_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        list_message.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_msg.list_message(), value;
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
                        message.status = $root.yh_msg.Status.decode(reader, reader.uint32(), undefined, _depth + 1, message.status);
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if (!(message.msg && message.msg.length))
                            message.msg = [];
                        message.msg.push($root.yh_msg.Msg.decode(reader, reader.uint32(), undefined, _depth + 1));
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
         * Decodes a list_message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof yh_msg.list_message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {yh_msg.list_message & yh_msg.list_message.$Shape} list_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        list_message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a list_message message.
         * @function verify
         * @memberof yh_msg.list_message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        list_message.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.yh_msg.Status.verify(message.status, _depth + 1);
                if (error)
                    return "status." + error;
            }
            if (message.msg != null && message.hasOwnProperty("msg")) {
                if (!Array.isArray(message.msg))
                    return "msg: array expected";
                for (let i = 0; i < message.msg.length; ++i) {
                    let error = $root.yh_msg.Msg.verify(message.msg[i], _depth + 1);
                    if (error)
                        return "msg." + error;
                }
            }
            return null;
        };

        /**
         * Creates a list_message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof yh_msg.list_message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {yh_msg.list_message} list_message
         */
        list_message.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.yh_msg.list_message)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.yh_msg.list_message();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".yh_msg.list_message.status: object expected");
                message.status = $root.yh_msg.Status.fromObject(object.status, _depth + 1);
            }
            if (object.msg) {
                if (!Array.isArray(object.msg))
                    throw TypeError(".yh_msg.list_message.msg: array expected");
                message.msg = Array(object.msg.length);
                for (let i = 0; i < object.msg.length; ++i) {
                    if (typeof object.msg[i] !== "object")
                        throw TypeError(".yh_msg.list_message.msg: object expected");
                    message.msg[i] = $root.yh_msg.Msg.fromObject(object.msg[i], _depth + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a list_message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof yh_msg.list_message
         * @static
         * @param {yh_msg.list_message} message list_message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        list_message.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.msg = [];
            if (options.defaults)
                object.status = null;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.yh_msg.Status.toObject(message.status, options, _depth + 1);
            if (message.msg && message.msg.length) {
                object.msg = Array(message.msg.length);
                for (let j = 0; j < message.msg.length; ++j)
                    object.msg[j] = $root.yh_msg.Msg.toObject(message.msg[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this list_message to JSON.
         * @function toJSON
         * @memberof yh_msg.list_message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        list_message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for list_message
         * @function getTypeUrl
         * @memberof yh_msg.list_message
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        list_message.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/yh_msg.list_message";
        };

        return list_message;
    })();

    yh_msg.list_message_by_mid_seq_send = (function() {

        /**
         * Properties of a list_message_by_mid_seq_send.
         * @typedef {Object} yh_msg.list_message_by_mid_seq_send.$Properties
         * @property {number|Long|null} [msgSeq] list_message_by_mid_seq_send msgSeq
         * @property {number|Long|null} [chatType] list_message_by_mid_seq_send chatType
         * @property {string|null} [chatId] list_message_by_mid_seq_send chatId
         * @property {number|Long|null} [unknown] list_message_by_mid_seq_send unknown
         * @property {number|Long|null} [msgCount] list_message_by_mid_seq_send msgCount
         * @property {string|null} [msgId] list_message_by_mid_seq_send msgId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a list_message_by_mid_seq_send.
         * @memberof yh_msg
         * @interface Ilist_message_by_mid_seq_send
         * @augments yh_msg.list_message_by_mid_seq_send.$Properties
         * @deprecated Use yh_msg.list_message_by_mid_seq_send.$Properties instead.
         */

        /**
         * Shape of a list_message_by_mid_seq_send.
         * @typedef {yh_msg.list_message_by_mid_seq_send.$Properties} yh_msg.list_message_by_mid_seq_send.$Shape
         */

        /**
         * Constructs a new list_message_by_mid_seq_send.
         * @memberof yh_msg
         * @classdesc Represents a list_message_by_mid_seq_send.
         * @constructor
         * @param {yh_msg.list_message_by_mid_seq_send.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function list_message_by_mid_seq_send(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * list_message_by_mid_seq_send msgSeq.
         * @member {number|Long} msgSeq
         * @memberof yh_msg.list_message_by_mid_seq_send
         * @instance
         */
        list_message_by_mid_seq_send.prototype.msgSeq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * list_message_by_mid_seq_send chatType.
         * @member {number|Long} chatType
         * @memberof yh_msg.list_message_by_mid_seq_send
         * @instance
         */
        list_message_by_mid_seq_send.prototype.chatType = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * list_message_by_mid_seq_send chatId.
         * @member {string} chatId
         * @memberof yh_msg.list_message_by_mid_seq_send
         * @instance
         */
        list_message_by_mid_seq_send.prototype.chatId = "";

        /**
         * list_message_by_mid_seq_send unknown.
         * @member {number|Long} unknown
         * @memberof yh_msg.list_message_by_mid_seq_send
         * @instance
         */
        list_message_by_mid_seq_send.prototype.unknown = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * list_message_by_mid_seq_send msgCount.
         * @member {number|Long} msgCount
         * @memberof yh_msg.list_message_by_mid_seq_send
         * @instance
         */
        list_message_by_mid_seq_send.prototype.msgCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * list_message_by_mid_seq_send msgId.
         * @member {string} msgId
         * @memberof yh_msg.list_message_by_mid_seq_send
         * @instance
         */
        list_message_by_mid_seq_send.prototype.msgId = "";

        /**
         * Creates a new list_message_by_mid_seq_send instance using the specified properties.
         * @function create
         * @memberof yh_msg.list_message_by_mid_seq_send
         * @static
         * @param {yh_msg.list_message_by_mid_seq_send.$Properties=} [properties] Properties to set
         * @returns {yh_msg.list_message_by_mid_seq_send} list_message_by_mid_seq_send instance
         * @type {{
         *   (properties: yh_msg.list_message_by_mid_seq_send.$Shape): yh_msg.list_message_by_mid_seq_send & yh_msg.list_message_by_mid_seq_send.$Shape;
         *   (properties?: yh_msg.list_message_by_mid_seq_send.$Properties): yh_msg.list_message_by_mid_seq_send;
         * }}
         */
        list_message_by_mid_seq_send.create = function create(properties) {
            return new list_message_by_mid_seq_send(properties);
        };

        /**
         * Encodes the specified list_message_by_mid_seq_send message. Does not implicitly {@link yh_msg.list_message_by_mid_seq_send.verify|verify} messages.
         * @function encode
         * @memberof yh_msg.list_message_by_mid_seq_send
         * @static
         * @param {yh_msg.list_message_by_mid_seq_send.$Properties} message list_message_by_mid_seq_send message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        list_message_by_mid_seq_send.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.msgSeq != null && Object.hasOwnProperty.call(message, "msgSeq"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.msgSeq);
            if (message.chatType != null && Object.hasOwnProperty.call(message, "chatType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.chatType);
            if (message.chatId != null && Object.hasOwnProperty.call(message, "chatId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.chatId);
            if (message.unknown != null && Object.hasOwnProperty.call(message, "unknown"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.unknown);
            if (message.msgCount != null && Object.hasOwnProperty.call(message, "msgCount"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.msgCount);
            if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.msgId);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified list_message_by_mid_seq_send message, length delimited. Does not implicitly {@link yh_msg.list_message_by_mid_seq_send.verify|verify} messages.
         * @function encodeDelimited
         * @memberof yh_msg.list_message_by_mid_seq_send
         * @static
         * @param {yh_msg.list_message_by_mid_seq_send.$Properties} message list_message_by_mid_seq_send message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        list_message_by_mid_seq_send.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a list_message_by_mid_seq_send message from the specified reader or buffer.
         * @function decode
         * @memberof yh_msg.list_message_by_mid_seq_send
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {yh_msg.list_message_by_mid_seq_send & yh_msg.list_message_by_mid_seq_send.$Shape} list_message_by_mid_seq_send
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        list_message_by_mid_seq_send.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_msg.list_message_by_mid_seq_send(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 3: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.msgSeq = value;
                        else
                            delete message.msgSeq;
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.chatType = value;
                        else
                            delete message.chatType;
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.chatId = value;
                        else
                            delete message.chatId;
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.unknown = value;
                        else
                            delete message.unknown;
                        continue;
                    }
                case 7: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.msgCount = value;
                        else
                            delete message.msgCount;
                        continue;
                    }
                case 8: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.msgId = value;
                        else
                            delete message.msgId;
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
         * Decodes a list_message_by_mid_seq_send message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof yh_msg.list_message_by_mid_seq_send
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {yh_msg.list_message_by_mid_seq_send & yh_msg.list_message_by_mid_seq_send.$Shape} list_message_by_mid_seq_send
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        list_message_by_mid_seq_send.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a list_message_by_mid_seq_send message.
         * @function verify
         * @memberof yh_msg.list_message_by_mid_seq_send
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        list_message_by_mid_seq_send.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.msgSeq != null && message.hasOwnProperty("msgSeq"))
                if (!$util.isInteger(message.msgSeq) && !(message.msgSeq && $util.isInteger(message.msgSeq.low) && $util.isInteger(message.msgSeq.high)))
                    return "msgSeq: integer|Long expected";
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                if (!$util.isInteger(message.chatType) && !(message.chatType && $util.isInteger(message.chatType.low) && $util.isInteger(message.chatType.high)))
                    return "chatType: integer|Long expected";
            if (message.chatId != null && message.hasOwnProperty("chatId"))
                if (!$util.isString(message.chatId))
                    return "chatId: string expected";
            if (message.unknown != null && message.hasOwnProperty("unknown"))
                if (!$util.isInteger(message.unknown) && !(message.unknown && $util.isInteger(message.unknown.low) && $util.isInteger(message.unknown.high)))
                    return "unknown: integer|Long expected";
            if (message.msgCount != null && message.hasOwnProperty("msgCount"))
                if (!$util.isInteger(message.msgCount) && !(message.msgCount && $util.isInteger(message.msgCount.low) && $util.isInteger(message.msgCount.high)))
                    return "msgCount: integer|Long expected";
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                if (!$util.isString(message.msgId))
                    return "msgId: string expected";
            return null;
        };

        /**
         * Creates a list_message_by_mid_seq_send message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof yh_msg.list_message_by_mid_seq_send
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {yh_msg.list_message_by_mid_seq_send} list_message_by_mid_seq_send
         */
        list_message_by_mid_seq_send.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.yh_msg.list_message_by_mid_seq_send)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.yh_msg.list_message_by_mid_seq_send();
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
            if (object.chatType != null)
                if (typeof object.chatType === "object" ? object.chatType.low || object.chatType.high : Number(object.chatType) !== 0)
                    if ($util.Long)
                        message.chatType = $util.Long.fromValue(object.chatType, false);
                    else if (typeof object.chatType === "string")
                        message.chatType = parseInt(object.chatType, 10);
                    else if (typeof object.chatType === "number")
                        message.chatType = object.chatType;
                    else if (typeof object.chatType === "object")
                        message.chatType = new $util.LongBits(object.chatType.low >>> 0, object.chatType.high >>> 0).toNumber();
            if (object.chatId != null)
                if (typeof object.chatId !== "string" || object.chatId.length)
                    message.chatId = String(object.chatId);
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
            if (object.msgCount != null)
                if (typeof object.msgCount === "object" ? object.msgCount.low || object.msgCount.high : Number(object.msgCount) !== 0)
                    if ($util.Long)
                        message.msgCount = $util.Long.fromValue(object.msgCount, false);
                    else if (typeof object.msgCount === "string")
                        message.msgCount = parseInt(object.msgCount, 10);
                    else if (typeof object.msgCount === "number")
                        message.msgCount = object.msgCount;
                    else if (typeof object.msgCount === "object")
                        message.msgCount = new $util.LongBits(object.msgCount.low >>> 0, object.msgCount.high >>> 0).toNumber();
            if (object.msgId != null)
                if (typeof object.msgId !== "string" || object.msgId.length)
                    message.msgId = String(object.msgId);
            return message;
        };

        /**
         * Creates a plain object from a list_message_by_mid_seq_send message. Also converts values to other types if specified.
         * @function toObject
         * @memberof yh_msg.list_message_by_mid_seq_send
         * @static
         * @param {yh_msg.list_message_by_mid_seq_send} message list_message_by_mid_seq_send
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        list_message_by_mid_seq_send.toObject = function toObject(message, options, _depth) {
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
                    object.msgSeq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.msgSeq = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.chatType = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.chatType = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                object.chatId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.unknown = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.unknown = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.msgCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.msgCount = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                object.msgId = "";
            }
            if (message.msgSeq != null && message.hasOwnProperty("msgSeq"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.msgSeq = typeof message.msgSeq === "number" ? BigInt(message.msgSeq) : $util.Long.fromBits(message.msgSeq.low >>> 0, message.msgSeq.high >>> 0, false).toBigInt();
                else if (typeof message.msgSeq === "number")
                    object.msgSeq = options.longs === String ? String(message.msgSeq) : message.msgSeq;
                else
                    object.msgSeq = options.longs === String ? $util.Long.prototype.toString.call(message.msgSeq) : options.longs === Number ? new $util.LongBits(message.msgSeq.low >>> 0, message.msgSeq.high >>> 0).toNumber() : message.msgSeq;
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.chatType = typeof message.chatType === "number" ? BigInt(message.chatType) : $util.Long.fromBits(message.chatType.low >>> 0, message.chatType.high >>> 0, false).toBigInt();
                else if (typeof message.chatType === "number")
                    object.chatType = options.longs === String ? String(message.chatType) : message.chatType;
                else
                    object.chatType = options.longs === String ? $util.Long.prototype.toString.call(message.chatType) : options.longs === Number ? new $util.LongBits(message.chatType.low >>> 0, message.chatType.high >>> 0).toNumber() : message.chatType;
            if (message.chatId != null && message.hasOwnProperty("chatId"))
                object.chatId = message.chatId;
            if (message.unknown != null && message.hasOwnProperty("unknown"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.unknown = typeof message.unknown === "number" ? BigInt(message.unknown) : $util.Long.fromBits(message.unknown.low >>> 0, message.unknown.high >>> 0, false).toBigInt();
                else if (typeof message.unknown === "number")
                    object.unknown = options.longs === String ? String(message.unknown) : message.unknown;
                else
                    object.unknown = options.longs === String ? $util.Long.prototype.toString.call(message.unknown) : options.longs === Number ? new $util.LongBits(message.unknown.low >>> 0, message.unknown.high >>> 0).toNumber() : message.unknown;
            if (message.msgCount != null && message.hasOwnProperty("msgCount"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.msgCount = typeof message.msgCount === "number" ? BigInt(message.msgCount) : $util.Long.fromBits(message.msgCount.low >>> 0, message.msgCount.high >>> 0, false).toBigInt();
                else if (typeof message.msgCount === "number")
                    object.msgCount = options.longs === String ? String(message.msgCount) : message.msgCount;
                else
                    object.msgCount = options.longs === String ? $util.Long.prototype.toString.call(message.msgCount) : options.longs === Number ? new $util.LongBits(message.msgCount.low >>> 0, message.msgCount.high >>> 0).toNumber() : message.msgCount;
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                object.msgId = message.msgId;
            return object;
        };

        /**
         * Converts this list_message_by_mid_seq_send to JSON.
         * @function toJSON
         * @memberof yh_msg.list_message_by_mid_seq_send
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        list_message_by_mid_seq_send.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for list_message_by_mid_seq_send
         * @function getTypeUrl
         * @memberof yh_msg.list_message_by_mid_seq_send
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        list_message_by_mid_seq_send.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/yh_msg.list_message_by_mid_seq_send";
        };

        return list_message_by_mid_seq_send;
    })();

    yh_msg.list_message_by_mid_seq = (function() {

        /**
         * Properties of a list_message_by_mid_seq.
         * @typedef {Object} yh_msg.list_message_by_mid_seq.$Properties
         * @property {yh_msg.Status.$Properties|null} [status] list_message_by_mid_seq status
         * @property {Array.<yh_msg.Msg.$Properties>|null} [msg] list_message_by_mid_seq msg
         * @property {number|null} [total] list_message_by_mid_seq total
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a list_message_by_mid_seq.
         * @memberof yh_msg
         * @interface Ilist_message_by_mid_seq
         * @augments yh_msg.list_message_by_mid_seq.$Properties
         * @deprecated Use yh_msg.list_message_by_mid_seq.$Properties instead.
         */

        /**
         * Shape of a list_message_by_mid_seq.
         * @typedef {yh_msg.list_message_by_mid_seq.$Properties} yh_msg.list_message_by_mid_seq.$Shape
         */

        /**
         * Constructs a new list_message_by_mid_seq.
         * @memberof yh_msg
         * @classdesc Represents a list_message_by_mid_seq.
         * @constructor
         * @param {yh_msg.list_message_by_mid_seq.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function list_message_by_mid_seq(properties) {
            this.msg = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * list_message_by_mid_seq status.
         * @member {yh_msg.Status.$Properties|null|undefined} status
         * @memberof yh_msg.list_message_by_mid_seq
         * @instance
         */
        list_message_by_mid_seq.prototype.status = null;

        /**
         * list_message_by_mid_seq msg.
         * @member {Array.<yh_msg.Msg.$Properties>} msg
         * @memberof yh_msg.list_message_by_mid_seq
         * @instance
         */
        list_message_by_mid_seq.prototype.msg = $util.emptyArray;

        /**
         * list_message_by_mid_seq total.
         * @member {number} total
         * @memberof yh_msg.list_message_by_mid_seq
         * @instance
         */
        list_message_by_mid_seq.prototype.total = 0;

        /**
         * Creates a new list_message_by_mid_seq instance using the specified properties.
         * @function create
         * @memberof yh_msg.list_message_by_mid_seq
         * @static
         * @param {yh_msg.list_message_by_mid_seq.$Properties=} [properties] Properties to set
         * @returns {yh_msg.list_message_by_mid_seq} list_message_by_mid_seq instance
         * @type {{
         *   (properties: yh_msg.list_message_by_mid_seq.$Shape): yh_msg.list_message_by_mid_seq & yh_msg.list_message_by_mid_seq.$Shape;
         *   (properties?: yh_msg.list_message_by_mid_seq.$Properties): yh_msg.list_message_by_mid_seq;
         * }}
         */
        list_message_by_mid_seq.create = function create(properties) {
            return new list_message_by_mid_seq(properties);
        };

        /**
         * Encodes the specified list_message_by_mid_seq message. Does not implicitly {@link yh_msg.list_message_by_mid_seq.verify|verify} messages.
         * @function encode
         * @memberof yh_msg.list_message_by_mid_seq
         * @static
         * @param {yh_msg.list_message_by_mid_seq.$Properties} message list_message_by_mid_seq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        list_message_by_mid_seq.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.yh_msg.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.msg != null && message.msg.length)
                for (let i = 0; i < message.msg.length; ++i)
                    $root.yh_msg.Msg.encode(message.msg[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.total);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified list_message_by_mid_seq message, length delimited. Does not implicitly {@link yh_msg.list_message_by_mid_seq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof yh_msg.list_message_by_mid_seq
         * @static
         * @param {yh_msg.list_message_by_mid_seq.$Properties} message list_message_by_mid_seq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        list_message_by_mid_seq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a list_message_by_mid_seq message from the specified reader or buffer.
         * @function decode
         * @memberof yh_msg.list_message_by_mid_seq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {yh_msg.list_message_by_mid_seq & yh_msg.list_message_by_mid_seq.$Shape} list_message_by_mid_seq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        list_message_by_mid_seq.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_msg.list_message_by_mid_seq(), value;
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
                        message.status = $root.yh_msg.Status.decode(reader, reader.uint32(), undefined, _depth + 1, message.status);
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if (!(message.msg && message.msg.length))
                            message.msg = [];
                        message.msg.push($root.yh_msg.Msg.decode(reader, reader.uint32(), undefined, _depth + 1));
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
         * Decodes a list_message_by_mid_seq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof yh_msg.list_message_by_mid_seq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {yh_msg.list_message_by_mid_seq & yh_msg.list_message_by_mid_seq.$Shape} list_message_by_mid_seq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        list_message_by_mid_seq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a list_message_by_mid_seq message.
         * @function verify
         * @memberof yh_msg.list_message_by_mid_seq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        list_message_by_mid_seq.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.yh_msg.Status.verify(message.status, _depth + 1);
                if (error)
                    return "status." + error;
            }
            if (message.msg != null && message.hasOwnProperty("msg")) {
                if (!Array.isArray(message.msg))
                    return "msg: array expected";
                for (let i = 0; i < message.msg.length; ++i) {
                    let error = $root.yh_msg.Msg.verify(message.msg[i], _depth + 1);
                    if (error)
                        return "msg." + error;
                }
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total))
                    return "total: integer expected";
            return null;
        };

        /**
         * Creates a list_message_by_mid_seq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof yh_msg.list_message_by_mid_seq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {yh_msg.list_message_by_mid_seq} list_message_by_mid_seq
         */
        list_message_by_mid_seq.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.yh_msg.list_message_by_mid_seq)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.yh_msg.list_message_by_mid_seq();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".yh_msg.list_message_by_mid_seq.status: object expected");
                message.status = $root.yh_msg.Status.fromObject(object.status, _depth + 1);
            }
            if (object.msg) {
                if (!Array.isArray(object.msg))
                    throw TypeError(".yh_msg.list_message_by_mid_seq.msg: array expected");
                message.msg = Array(object.msg.length);
                for (let i = 0; i < object.msg.length; ++i) {
                    if (typeof object.msg[i] !== "object")
                        throw TypeError(".yh_msg.list_message_by_mid_seq.msg: object expected");
                    message.msg[i] = $root.yh_msg.Msg.fromObject(object.msg[i], _depth + 1);
                }
            }
            if (object.total != null)
                if (Number(object.total) !== 0)
                    message.total = object.total | 0;
            return message;
        };

        /**
         * Creates a plain object from a list_message_by_mid_seq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof yh_msg.list_message_by_mid_seq
         * @static
         * @param {yh_msg.list_message_by_mid_seq} message list_message_by_mid_seq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        list_message_by_mid_seq.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.msg = [];
            if (options.defaults) {
                object.status = null;
                object.total = 0;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.yh_msg.Status.toObject(message.status, options, _depth + 1);
            if (message.msg && message.msg.length) {
                object.msg = Array(message.msg.length);
                for (let j = 0; j < message.msg.length; ++j)
                    object.msg[j] = $root.yh_msg.Msg.toObject(message.msg[j], options, _depth + 1);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = message.total;
            return object;
        };

        /**
         * Converts this list_message_by_mid_seq to JSON.
         * @function toJSON
         * @memberof yh_msg.list_message_by_mid_seq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        list_message_by_mid_seq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for list_message_by_mid_seq
         * @function getTypeUrl
         * @memberof yh_msg.list_message_by_mid_seq
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        list_message_by_mid_seq.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/yh_msg.list_message_by_mid_seq";
        };

        return list_message_by_mid_seq;
    })();

    yh_msg.send_message_send = (function() {

        /**
         * Properties of a send_message_send.
         * @typedef {Object} yh_msg.send_message_send.$Properties
         * @property {string|null} [msgId] send_message_send msgId
         * @property {string|null} [chatId] send_message_send chatId
         * @property {number|Long|null} [chatType] send_message_send chatType
         * @property {yh_msg.send_message_send.Content.$Properties|null} [content] send_message_send content
         * @property {number|Long|null} [contentType] send_message_send contentType
         * @property {number|Long|null} [commandId] send_message_send commandId
         * @property {string|null} [quoteMsgId] send_message_send quoteMsgId
         * @property {yh_msg.send_message_send.Media.$Properties|null} [media] send_message_send media
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a send_message_send.
         * @memberof yh_msg
         * @interface Isend_message_send
         * @augments yh_msg.send_message_send.$Properties
         * @deprecated Use yh_msg.send_message_send.$Properties instead.
         */

        /**
         * Shape of a send_message_send.
         * @typedef {yh_msg.send_message_send.$Properties} yh_msg.send_message_send.$Shape
         */

        /**
         * Constructs a new send_message_send.
         * @memberof yh_msg
         * @classdesc Represents a send_message_send.
         * @constructor
         * @param {yh_msg.send_message_send.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function send_message_send(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * send_message_send msgId.
         * @member {string} msgId
         * @memberof yh_msg.send_message_send
         * @instance
         */
        send_message_send.prototype.msgId = "";

        /**
         * send_message_send chatId.
         * @member {string} chatId
         * @memberof yh_msg.send_message_send
         * @instance
         */
        send_message_send.prototype.chatId = "";

        /**
         * send_message_send chatType.
         * @member {number|Long} chatType
         * @memberof yh_msg.send_message_send
         * @instance
         */
        send_message_send.prototype.chatType = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * send_message_send content.
         * @member {yh_msg.send_message_send.Content.$Properties|null|undefined} content
         * @memberof yh_msg.send_message_send
         * @instance
         */
        send_message_send.prototype.content = null;

        /**
         * send_message_send contentType.
         * @member {number|Long} contentType
         * @memberof yh_msg.send_message_send
         * @instance
         */
        send_message_send.prototype.contentType = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * send_message_send commandId.
         * @member {number|Long} commandId
         * @memberof yh_msg.send_message_send
         * @instance
         */
        send_message_send.prototype.commandId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * send_message_send quoteMsgId.
         * @member {string} quoteMsgId
         * @memberof yh_msg.send_message_send
         * @instance
         */
        send_message_send.prototype.quoteMsgId = "";

        /**
         * send_message_send media.
         * @member {yh_msg.send_message_send.Media.$Properties|null|undefined} media
         * @memberof yh_msg.send_message_send
         * @instance
         */
        send_message_send.prototype.media = null;

        /**
         * Creates a new send_message_send instance using the specified properties.
         * @function create
         * @memberof yh_msg.send_message_send
         * @static
         * @param {yh_msg.send_message_send.$Properties=} [properties] Properties to set
         * @returns {yh_msg.send_message_send} send_message_send instance
         * @type {{
         *   (properties: yh_msg.send_message_send.$Shape): yh_msg.send_message_send & yh_msg.send_message_send.$Shape;
         *   (properties?: yh_msg.send_message_send.$Properties): yh_msg.send_message_send;
         * }}
         */
        send_message_send.create = function create(properties) {
            return new send_message_send(properties);
        };

        /**
         * Encodes the specified send_message_send message. Does not implicitly {@link yh_msg.send_message_send.verify|verify} messages.
         * @function encode
         * @memberof yh_msg.send_message_send
         * @static
         * @param {yh_msg.send_message_send.$Properties} message send_message_send message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        send_message_send.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msgId);
            if (message.chatId != null && Object.hasOwnProperty.call(message, "chatId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.chatId);
            if (message.chatType != null && Object.hasOwnProperty.call(message, "chatType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.chatType);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                $root.yh_msg.send_message_send.Content.encode(message.content, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
            if (message.contentType != null && Object.hasOwnProperty.call(message, "contentType"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.contentType);
            if (message.commandId != null && Object.hasOwnProperty.call(message, "commandId"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.commandId);
            if (message.quoteMsgId != null && Object.hasOwnProperty.call(message, "quoteMsgId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.quoteMsgId);
            if (message.media != null && Object.hasOwnProperty.call(message, "media"))
                $root.yh_msg.send_message_send.Media.encode(message.media, writer.uint32(/* id 9, wireType 2 =*/74).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified send_message_send message, length delimited. Does not implicitly {@link yh_msg.send_message_send.verify|verify} messages.
         * @function encodeDelimited
         * @memberof yh_msg.send_message_send
         * @static
         * @param {yh_msg.send_message_send.$Properties} message send_message_send message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        send_message_send.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a send_message_send message from the specified reader or buffer.
         * @function decode
         * @memberof yh_msg.send_message_send
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {yh_msg.send_message_send & yh_msg.send_message_send.$Shape} send_message_send
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        send_message_send.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_msg.send_message_send(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.msgId = value;
                        else
                            delete message.msgId;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.chatId = value;
                        else
                            delete message.chatId;
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.chatType = value;
                        else
                            delete message.chatType;
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        message.content = $root.yh_msg.send_message_send.Content.decode(reader, reader.uint32(), undefined, _depth + 1, message.content);
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.contentType = value;
                        else
                            delete message.contentType;
                        continue;
                    }
                case 7: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.commandId = value;
                        else
                            delete message.commandId;
                        continue;
                    }
                case 8: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.quoteMsgId = value;
                        else
                            delete message.quoteMsgId;
                        continue;
                    }
                case 9: {
                        if (wireType !== 2)
                            break;
                        message.media = $root.yh_msg.send_message_send.Media.decode(reader, reader.uint32(), undefined, _depth + 1, message.media);
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
         * Decodes a send_message_send message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof yh_msg.send_message_send
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {yh_msg.send_message_send & yh_msg.send_message_send.$Shape} send_message_send
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        send_message_send.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a send_message_send message.
         * @function verify
         * @memberof yh_msg.send_message_send
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        send_message_send.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                if (!$util.isString(message.msgId))
                    return "msgId: string expected";
            if (message.chatId != null && message.hasOwnProperty("chatId"))
                if (!$util.isString(message.chatId))
                    return "chatId: string expected";
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                if (!$util.isInteger(message.chatType) && !(message.chatType && $util.isInteger(message.chatType.low) && $util.isInteger(message.chatType.high)))
                    return "chatType: integer|Long expected";
            if (message.content != null && message.hasOwnProperty("content")) {
                let error = $root.yh_msg.send_message_send.Content.verify(message.content, _depth + 1);
                if (error)
                    return "content." + error;
            }
            if (message.contentType != null && message.hasOwnProperty("contentType"))
                if (!$util.isInteger(message.contentType) && !(message.contentType && $util.isInteger(message.contentType.low) && $util.isInteger(message.contentType.high)))
                    return "contentType: integer|Long expected";
            if (message.commandId != null && message.hasOwnProperty("commandId"))
                if (!$util.isInteger(message.commandId) && !(message.commandId && $util.isInteger(message.commandId.low) && $util.isInteger(message.commandId.high)))
                    return "commandId: integer|Long expected";
            if (message.quoteMsgId != null && message.hasOwnProperty("quoteMsgId"))
                if (!$util.isString(message.quoteMsgId))
                    return "quoteMsgId: string expected";
            if (message.media != null && message.hasOwnProperty("media")) {
                let error = $root.yh_msg.send_message_send.Media.verify(message.media, _depth + 1);
                if (error)
                    return "media." + error;
            }
            return null;
        };

        /**
         * Creates a send_message_send message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof yh_msg.send_message_send
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {yh_msg.send_message_send} send_message_send
         */
        send_message_send.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.yh_msg.send_message_send)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.yh_msg.send_message_send();
            if (object.msgId != null)
                if (typeof object.msgId !== "string" || object.msgId.length)
                    message.msgId = String(object.msgId);
            if (object.chatId != null)
                if (typeof object.chatId !== "string" || object.chatId.length)
                    message.chatId = String(object.chatId);
            if (object.chatType != null)
                if (typeof object.chatType === "object" ? object.chatType.low || object.chatType.high : Number(object.chatType) !== 0)
                    if ($util.Long)
                        message.chatType = $util.Long.fromValue(object.chatType, false);
                    else if (typeof object.chatType === "string")
                        message.chatType = parseInt(object.chatType, 10);
                    else if (typeof object.chatType === "number")
                        message.chatType = object.chatType;
                    else if (typeof object.chatType === "object")
                        message.chatType = new $util.LongBits(object.chatType.low >>> 0, object.chatType.high >>> 0).toNumber();
            if (object.content != null) {
                if (typeof object.content !== "object")
                    throw TypeError(".yh_msg.send_message_send.content: object expected");
                message.content = $root.yh_msg.send_message_send.Content.fromObject(object.content, _depth + 1);
            }
            if (object.contentType != null)
                if (typeof object.contentType === "object" ? object.contentType.low || object.contentType.high : Number(object.contentType) !== 0)
                    if ($util.Long)
                        message.contentType = $util.Long.fromValue(object.contentType, false);
                    else if (typeof object.contentType === "string")
                        message.contentType = parseInt(object.contentType, 10);
                    else if (typeof object.contentType === "number")
                        message.contentType = object.contentType;
                    else if (typeof object.contentType === "object")
                        message.contentType = new $util.LongBits(object.contentType.low >>> 0, object.contentType.high >>> 0).toNumber();
            if (object.commandId != null)
                if (typeof object.commandId === "object" ? object.commandId.low || object.commandId.high : Number(object.commandId) !== 0)
                    if ($util.Long)
                        message.commandId = $util.Long.fromValue(object.commandId, false);
                    else if (typeof object.commandId === "string")
                        message.commandId = parseInt(object.commandId, 10);
                    else if (typeof object.commandId === "number")
                        message.commandId = object.commandId;
                    else if (typeof object.commandId === "object")
                        message.commandId = new $util.LongBits(object.commandId.low >>> 0, object.commandId.high >>> 0).toNumber();
            if (object.quoteMsgId != null)
                if (typeof object.quoteMsgId !== "string" || object.quoteMsgId.length)
                    message.quoteMsgId = String(object.quoteMsgId);
            if (object.media != null) {
                if (typeof object.media !== "object")
                    throw TypeError(".yh_msg.send_message_send.media: object expected");
                message.media = $root.yh_msg.send_message_send.Media.fromObject(object.media, _depth + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a send_message_send message. Also converts values to other types if specified.
         * @function toObject
         * @memberof yh_msg.send_message_send
         * @static
         * @param {yh_msg.send_message_send} message send_message_send
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        send_message_send.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.msgId = "";
                object.chatId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.chatType = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.chatType = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                object.content = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.contentType = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.contentType = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.commandId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.commandId = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                object.quoteMsgId = "";
                object.media = null;
            }
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                object.msgId = message.msgId;
            if (message.chatId != null && message.hasOwnProperty("chatId"))
                object.chatId = message.chatId;
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.chatType = typeof message.chatType === "number" ? BigInt(message.chatType) : $util.Long.fromBits(message.chatType.low >>> 0, message.chatType.high >>> 0, false).toBigInt();
                else if (typeof message.chatType === "number")
                    object.chatType = options.longs === String ? String(message.chatType) : message.chatType;
                else
                    object.chatType = options.longs === String ? $util.Long.prototype.toString.call(message.chatType) : options.longs === Number ? new $util.LongBits(message.chatType.low >>> 0, message.chatType.high >>> 0).toNumber() : message.chatType;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = $root.yh_msg.send_message_send.Content.toObject(message.content, options, _depth + 1);
            if (message.contentType != null && message.hasOwnProperty("contentType"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.contentType = typeof message.contentType === "number" ? BigInt(message.contentType) : $util.Long.fromBits(message.contentType.low >>> 0, message.contentType.high >>> 0, false).toBigInt();
                else if (typeof message.contentType === "number")
                    object.contentType = options.longs === String ? String(message.contentType) : message.contentType;
                else
                    object.contentType = options.longs === String ? $util.Long.prototype.toString.call(message.contentType) : options.longs === Number ? new $util.LongBits(message.contentType.low >>> 0, message.contentType.high >>> 0).toNumber() : message.contentType;
            if (message.commandId != null && message.hasOwnProperty("commandId"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.commandId = typeof message.commandId === "number" ? BigInt(message.commandId) : $util.Long.fromBits(message.commandId.low >>> 0, message.commandId.high >>> 0, false).toBigInt();
                else if (typeof message.commandId === "number")
                    object.commandId = options.longs === String ? String(message.commandId) : message.commandId;
                else
                    object.commandId = options.longs === String ? $util.Long.prototype.toString.call(message.commandId) : options.longs === Number ? new $util.LongBits(message.commandId.low >>> 0, message.commandId.high >>> 0).toNumber() : message.commandId;
            if (message.quoteMsgId != null && message.hasOwnProperty("quoteMsgId"))
                object.quoteMsgId = message.quoteMsgId;
            if (message.media != null && message.hasOwnProperty("media"))
                object.media = $root.yh_msg.send_message_send.Media.toObject(message.media, options, _depth + 1);
            return object;
        };

        /**
         * Converts this send_message_send to JSON.
         * @function toJSON
         * @memberof yh_msg.send_message_send
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        send_message_send.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for send_message_send
         * @function getTypeUrl
         * @memberof yh_msg.send_message_send
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        send_message_send.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/yh_msg.send_message_send";
        };

        send_message_send.Content = (function() {

            /**
             * Properties of a Content.
             * @typedef {Object} yh_msg.send_message_send.Content.$Properties
             * @property {string|null} [text] Content text
             * @property {string|null} [buttons] Content buttons
             * @property {string|null} [fileName] Content fileName
             * @property {string|null} [file] Content file
             * @property {Array.<string>|null} [mentionedId] Content mentionedId
             * @property {string|null} [form] Content form
             * @property {string|null} [quoteMsgText] Content quoteMsgText
             * @property {string|null} [image] Content image
             * @property {string|null} [postId] Content postId
             * @property {string|null} [postTitle] Content postTitle
             * @property {string|null} [postContent] Content postContent
             * @property {string|null} [postType] Content postType
             * @property {string|null} [expressionId] Content expressionId
             * @property {string|null} [quoteImageUrl] Content quoteImageUrl
             * @property {string|null} [quoteImageName] Content quoteImageName
             * @property {number|Long|null} [fileSize] Content fileSize
             * @property {string|null} [video] Content video
             * @property {string|null} [audio] Content audio
             * @property {number|Long|null} [audioTime] Content audioTime
             * @property {string|null} [quoteVideoUrl] Content quoteVideoUrl
             * @property {number|Long|null} [quoteVideoTime] Content quoteVideoTime
             * @property {number|Long|null} [stickerItemId] Content stickerItemId
             * @property {number|Long|null} [stickerPackId] Content stickerPackId
             * @property {string|null} [roomName] Content roomName
             * @property {string|null} [botLlmParams] Content botLlmParams
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Content.
             * @memberof yh_msg.send_message_send
             * @interface IContent
             * @augments yh_msg.send_message_send.Content.$Properties
             * @deprecated Use yh_msg.send_message_send.Content.$Properties instead.
             */

            /**
             * Shape of a Content.
             * @typedef {yh_msg.send_message_send.Content.$Properties} yh_msg.send_message_send.Content.$Shape
             */

            /**
             * Constructs a new Content.
             * @memberof yh_msg.send_message_send
             * @classdesc Represents a Content.
             * @constructor
             * @param {yh_msg.send_message_send.Content.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Content(properties) {
                this.mentionedId = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Content text.
             * @member {string} text
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.text = "";

            /**
             * Content buttons.
             * @member {string} buttons
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.buttons = "";

            /**
             * Content fileName.
             * @member {string} fileName
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.fileName = "";

            /**
             * Content file.
             * @member {string} file
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.file = "";

            /**
             * Content mentionedId.
             * @member {Array.<string>} mentionedId
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.mentionedId = $util.emptyArray;

            /**
             * Content form.
             * @member {string} form
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.form = "";

            /**
             * Content quoteMsgText.
             * @member {string} quoteMsgText
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.quoteMsgText = "";

            /**
             * Content image.
             * @member {string} image
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.image = "";

            /**
             * Content postId.
             * @member {string} postId
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.postId = "";

            /**
             * Content postTitle.
             * @member {string} postTitle
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.postTitle = "";

            /**
             * Content postContent.
             * @member {string} postContent
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.postContent = "";

            /**
             * Content postType.
             * @member {string} postType
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.postType = "";

            /**
             * Content expressionId.
             * @member {string} expressionId
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.expressionId = "";

            /**
             * Content quoteImageUrl.
             * @member {string} quoteImageUrl
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.quoteImageUrl = "";

            /**
             * Content quoteImageName.
             * @member {string} quoteImageName
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.quoteImageName = "";

            /**
             * Content fileSize.
             * @member {number|Long} fileSize
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.fileSize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Content video.
             * @member {string} video
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.video = "";

            /**
             * Content audio.
             * @member {string} audio
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.audio = "";

            /**
             * Content audioTime.
             * @member {number|Long} audioTime
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.audioTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Content quoteVideoUrl.
             * @member {string} quoteVideoUrl
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.quoteVideoUrl = "";

            /**
             * Content quoteVideoTime.
             * @member {number|Long} quoteVideoTime
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.quoteVideoTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Content stickerItemId.
             * @member {number|Long} stickerItemId
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.stickerItemId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Content stickerPackId.
             * @member {number|Long} stickerPackId
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.stickerPackId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Content roomName.
             * @member {string} roomName
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.roomName = "";

            /**
             * Content botLlmParams.
             * @member {string} botLlmParams
             * @memberof yh_msg.send_message_send.Content
             * @instance
             */
            Content.prototype.botLlmParams = "";

            /**
             * Creates a new Content instance using the specified properties.
             * @function create
             * @memberof yh_msg.send_message_send.Content
             * @static
             * @param {yh_msg.send_message_send.Content.$Properties=} [properties] Properties to set
             * @returns {yh_msg.send_message_send.Content} Content instance
             * @type {{
             *   (properties: yh_msg.send_message_send.Content.$Shape): yh_msg.send_message_send.Content & yh_msg.send_message_send.Content.$Shape;
             *   (properties?: yh_msg.send_message_send.Content.$Properties): yh_msg.send_message_send.Content;
             * }}
             */
            Content.create = function create(properties) {
                return new Content(properties);
            };

            /**
             * Encodes the specified Content message. Does not implicitly {@link yh_msg.send_message_send.Content.verify|verify} messages.
             * @function encode
             * @memberof yh_msg.send_message_send.Content
             * @static
             * @param {yh_msg.send_message_send.Content.$Properties} message Content message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Content.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
                if (message.buttons != null && Object.hasOwnProperty.call(message, "buttons"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.buttons);
                if (message.fileName != null && Object.hasOwnProperty.call(message, "fileName"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.fileName);
                if (message.file != null && Object.hasOwnProperty.call(message, "file"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.file);
                if (message.mentionedId != null && message.mentionedId.length)
                    for (let i = 0; i < message.mentionedId.length; ++i)
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.mentionedId[i]);
                if (message.form != null && Object.hasOwnProperty.call(message, "form"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.form);
                if (message.quoteMsgText != null && Object.hasOwnProperty.call(message, "quoteMsgText"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.quoteMsgText);
                if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.image);
                if (message.postId != null && Object.hasOwnProperty.call(message, "postId"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.postId);
                if (message.postTitle != null && Object.hasOwnProperty.call(message, "postTitle"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.postTitle);
                if (message.postContent != null && Object.hasOwnProperty.call(message, "postContent"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.postContent);
                if (message.postType != null && Object.hasOwnProperty.call(message, "postType"))
                    writer.uint32(/* id 13, wireType 2 =*/106).string(message.postType);
                if (message.expressionId != null && Object.hasOwnProperty.call(message, "expressionId"))
                    writer.uint32(/* id 15, wireType 2 =*/122).string(message.expressionId);
                if (message.quoteImageUrl != null && Object.hasOwnProperty.call(message, "quoteImageUrl"))
                    writer.uint32(/* id 16, wireType 2 =*/130).string(message.quoteImageUrl);
                if (message.quoteImageName != null && Object.hasOwnProperty.call(message, "quoteImageName"))
                    writer.uint32(/* id 17, wireType 2 =*/138).string(message.quoteImageName);
                if (message.fileSize != null && Object.hasOwnProperty.call(message, "fileSize"))
                    writer.uint32(/* id 18, wireType 0 =*/144).int64(message.fileSize);
                if (message.video != null && Object.hasOwnProperty.call(message, "video"))
                    writer.uint32(/* id 19, wireType 2 =*/154).string(message.video);
                if (message.audio != null && Object.hasOwnProperty.call(message, "audio"))
                    writer.uint32(/* id 21, wireType 2 =*/170).string(message.audio);
                if (message.audioTime != null && Object.hasOwnProperty.call(message, "audioTime"))
                    writer.uint32(/* id 22, wireType 0 =*/176).int64(message.audioTime);
                if (message.quoteVideoUrl != null && Object.hasOwnProperty.call(message, "quoteVideoUrl"))
                    writer.uint32(/* id 23, wireType 2 =*/186).string(message.quoteVideoUrl);
                if (message.quoteVideoTime != null && Object.hasOwnProperty.call(message, "quoteVideoTime"))
                    writer.uint32(/* id 24, wireType 0 =*/192).uint64(message.quoteVideoTime);
                if (message.stickerItemId != null && Object.hasOwnProperty.call(message, "stickerItemId"))
                    writer.uint32(/* id 25, wireType 0 =*/200).int64(message.stickerItemId);
                if (message.stickerPackId != null && Object.hasOwnProperty.call(message, "stickerPackId"))
                    writer.uint32(/* id 26, wireType 0 =*/208).int64(message.stickerPackId);
                if (message.roomName != null && Object.hasOwnProperty.call(message, "roomName"))
                    writer.uint32(/* id 29, wireType 2 =*/234).string(message.roomName);
                if (message.botLlmParams != null && Object.hasOwnProperty.call(message, "botLlmParams"))
                    writer.uint32(/* id 36, wireType 2 =*/290).string(message.botLlmParams);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Content message, length delimited. Does not implicitly {@link yh_msg.send_message_send.Content.verify|verify} messages.
             * @function encodeDelimited
             * @memberof yh_msg.send_message_send.Content
             * @static
             * @param {yh_msg.send_message_send.Content.$Properties} message Content message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Content.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Content message from the specified reader or buffer.
             * @function decode
             * @memberof yh_msg.send_message_send.Content
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {yh_msg.send_message_send.Content & yh_msg.send_message_send.Content.$Shape} Content
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Content.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_msg.send_message_send.Content(), value;
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
                                message.text = value;
                            else
                                delete message.text;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.buttons = value;
                            else
                                delete message.buttons;
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.fileName = value;
                            else
                                delete message.fileName;
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.file = value;
                            else
                                delete message.file;
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            if (!(message.mentionedId && message.mentionedId.length))
                                message.mentionedId = [];
                            message.mentionedId.push(reader.string());
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.form = value;
                            else
                                delete message.form;
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.quoteMsgText = value;
                            else
                                delete message.quoteMsgText;
                            continue;
                        }
                    case 9: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.image = value;
                            else
                                delete message.image;
                            continue;
                        }
                    case 10: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.postId = value;
                            else
                                delete message.postId;
                            continue;
                        }
                    case 11: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.postTitle = value;
                            else
                                delete message.postTitle;
                            continue;
                        }
                    case 12: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.postContent = value;
                            else
                                delete message.postContent;
                            continue;
                        }
                    case 13: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.postType = value;
                            else
                                delete message.postType;
                            continue;
                        }
                    case 15: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.expressionId = value;
                            else
                                delete message.expressionId;
                            continue;
                        }
                    case 16: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.quoteImageUrl = value;
                            else
                                delete message.quoteImageUrl;
                            continue;
                        }
                    case 17: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.quoteImageName = value;
                            else
                                delete message.quoteImageName;
                            continue;
                        }
                    case 18: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.fileSize = value;
                            else
                                delete message.fileSize;
                            continue;
                        }
                    case 19: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.video = value;
                            else
                                delete message.video;
                            continue;
                        }
                    case 21: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.audio = value;
                            else
                                delete message.audio;
                            continue;
                        }
                    case 22: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.audioTime = value;
                            else
                                delete message.audioTime;
                            continue;
                        }
                    case 23: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.quoteVideoUrl = value;
                            else
                                delete message.quoteVideoUrl;
                            continue;
                        }
                    case 24: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.uint64()) === "object" ? value.low || value.high : value !== 0)
                                message.quoteVideoTime = value;
                            else
                                delete message.quoteVideoTime;
                            continue;
                        }
                    case 25: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.stickerItemId = value;
                            else
                                delete message.stickerItemId;
                            continue;
                        }
                    case 26: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.stickerPackId = value;
                            else
                                delete message.stickerPackId;
                            continue;
                        }
                    case 29: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.roomName = value;
                            else
                                delete message.roomName;
                            continue;
                        }
                    case 36: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.botLlmParams = value;
                            else
                                delete message.botLlmParams;
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
             * Decodes a Content message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof yh_msg.send_message_send.Content
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {yh_msg.send_message_send.Content & yh_msg.send_message_send.Content.$Shape} Content
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Content.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Content message.
             * @function verify
             * @memberof yh_msg.send_message_send.Content
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Content.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.text != null && message.hasOwnProperty("text"))
                    if (!$util.isString(message.text))
                        return "text: string expected";
                if (message.buttons != null && message.hasOwnProperty("buttons"))
                    if (!$util.isString(message.buttons))
                        return "buttons: string expected";
                if (message.fileName != null && message.hasOwnProperty("fileName"))
                    if (!$util.isString(message.fileName))
                        return "fileName: string expected";
                if (message.file != null && message.hasOwnProperty("file"))
                    if (!$util.isString(message.file))
                        return "file: string expected";
                if (message.mentionedId != null && message.hasOwnProperty("mentionedId")) {
                    if (!Array.isArray(message.mentionedId))
                        return "mentionedId: array expected";
                    for (let i = 0; i < message.mentionedId.length; ++i)
                        if (!$util.isString(message.mentionedId[i]))
                            return "mentionedId: string[] expected";
                }
                if (message.form != null && message.hasOwnProperty("form"))
                    if (!$util.isString(message.form))
                        return "form: string expected";
                if (message.quoteMsgText != null && message.hasOwnProperty("quoteMsgText"))
                    if (!$util.isString(message.quoteMsgText))
                        return "quoteMsgText: string expected";
                if (message.image != null && message.hasOwnProperty("image"))
                    if (!$util.isString(message.image))
                        return "image: string expected";
                if (message.postId != null && message.hasOwnProperty("postId"))
                    if (!$util.isString(message.postId))
                        return "postId: string expected";
                if (message.postTitle != null && message.hasOwnProperty("postTitle"))
                    if (!$util.isString(message.postTitle))
                        return "postTitle: string expected";
                if (message.postContent != null && message.hasOwnProperty("postContent"))
                    if (!$util.isString(message.postContent))
                        return "postContent: string expected";
                if (message.postType != null && message.hasOwnProperty("postType"))
                    if (!$util.isString(message.postType))
                        return "postType: string expected";
                if (message.expressionId != null && message.hasOwnProperty("expressionId"))
                    if (!$util.isString(message.expressionId))
                        return "expressionId: string expected";
                if (message.quoteImageUrl != null && message.hasOwnProperty("quoteImageUrl"))
                    if (!$util.isString(message.quoteImageUrl))
                        return "quoteImageUrl: string expected";
                if (message.quoteImageName != null && message.hasOwnProperty("quoteImageName"))
                    if (!$util.isString(message.quoteImageName))
                        return "quoteImageName: string expected";
                if (message.fileSize != null && message.hasOwnProperty("fileSize"))
                    if (!$util.isInteger(message.fileSize) && !(message.fileSize && $util.isInteger(message.fileSize.low) && $util.isInteger(message.fileSize.high)))
                        return "fileSize: integer|Long expected";
                if (message.video != null && message.hasOwnProperty("video"))
                    if (!$util.isString(message.video))
                        return "video: string expected";
                if (message.audio != null && message.hasOwnProperty("audio"))
                    if (!$util.isString(message.audio))
                        return "audio: string expected";
                if (message.audioTime != null && message.hasOwnProperty("audioTime"))
                    if (!$util.isInteger(message.audioTime) && !(message.audioTime && $util.isInteger(message.audioTime.low) && $util.isInteger(message.audioTime.high)))
                        return "audioTime: integer|Long expected";
                if (message.quoteVideoUrl != null && message.hasOwnProperty("quoteVideoUrl"))
                    if (!$util.isString(message.quoteVideoUrl))
                        return "quoteVideoUrl: string expected";
                if (message.quoteVideoTime != null && message.hasOwnProperty("quoteVideoTime"))
                    if (!$util.isInteger(message.quoteVideoTime) && !(message.quoteVideoTime && $util.isInteger(message.quoteVideoTime.low) && $util.isInteger(message.quoteVideoTime.high)))
                        return "quoteVideoTime: integer|Long expected";
                if (message.stickerItemId != null && message.hasOwnProperty("stickerItemId"))
                    if (!$util.isInteger(message.stickerItemId) && !(message.stickerItemId && $util.isInteger(message.stickerItemId.low) && $util.isInteger(message.stickerItemId.high)))
                        return "stickerItemId: integer|Long expected";
                if (message.stickerPackId != null && message.hasOwnProperty("stickerPackId"))
                    if (!$util.isInteger(message.stickerPackId) && !(message.stickerPackId && $util.isInteger(message.stickerPackId.low) && $util.isInteger(message.stickerPackId.high)))
                        return "stickerPackId: integer|Long expected";
                if (message.roomName != null && message.hasOwnProperty("roomName"))
                    if (!$util.isString(message.roomName))
                        return "roomName: string expected";
                if (message.botLlmParams != null && message.hasOwnProperty("botLlmParams"))
                    if (!$util.isString(message.botLlmParams))
                        return "botLlmParams: string expected";
                return null;
            };

            /**
             * Creates a Content message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof yh_msg.send_message_send.Content
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {yh_msg.send_message_send.Content} Content
             */
            Content.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.yh_msg.send_message_send.Content)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.yh_msg.send_message_send.Content();
                if (object.text != null)
                    if (typeof object.text !== "string" || object.text.length)
                        message.text = String(object.text);
                if (object.buttons != null)
                    if (typeof object.buttons !== "string" || object.buttons.length)
                        message.buttons = String(object.buttons);
                if (object.fileName != null)
                    if (typeof object.fileName !== "string" || object.fileName.length)
                        message.fileName = String(object.fileName);
                if (object.file != null)
                    if (typeof object.file !== "string" || object.file.length)
                        message.file = String(object.file);
                if (object.mentionedId) {
                    if (!Array.isArray(object.mentionedId))
                        throw TypeError(".yh_msg.send_message_send.Content.mentionedId: array expected");
                    message.mentionedId = Array(object.mentionedId.length);
                    for (let i = 0; i < object.mentionedId.length; ++i)
                        message.mentionedId[i] = String(object.mentionedId[i]);
                }
                if (object.form != null)
                    if (typeof object.form !== "string" || object.form.length)
                        message.form = String(object.form);
                if (object.quoteMsgText != null)
                    if (typeof object.quoteMsgText !== "string" || object.quoteMsgText.length)
                        message.quoteMsgText = String(object.quoteMsgText);
                if (object.image != null)
                    if (typeof object.image !== "string" || object.image.length)
                        message.image = String(object.image);
                if (object.postId != null)
                    if (typeof object.postId !== "string" || object.postId.length)
                        message.postId = String(object.postId);
                if (object.postTitle != null)
                    if (typeof object.postTitle !== "string" || object.postTitle.length)
                        message.postTitle = String(object.postTitle);
                if (object.postContent != null)
                    if (typeof object.postContent !== "string" || object.postContent.length)
                        message.postContent = String(object.postContent);
                if (object.postType != null)
                    if (typeof object.postType !== "string" || object.postType.length)
                        message.postType = String(object.postType);
                if (object.expressionId != null)
                    if (typeof object.expressionId !== "string" || object.expressionId.length)
                        message.expressionId = String(object.expressionId);
                if (object.quoteImageUrl != null)
                    if (typeof object.quoteImageUrl !== "string" || object.quoteImageUrl.length)
                        message.quoteImageUrl = String(object.quoteImageUrl);
                if (object.quoteImageName != null)
                    if (typeof object.quoteImageName !== "string" || object.quoteImageName.length)
                        message.quoteImageName = String(object.quoteImageName);
                if (object.fileSize != null)
                    if (typeof object.fileSize === "object" ? object.fileSize.low || object.fileSize.high : Number(object.fileSize) !== 0)
                        if ($util.Long)
                            message.fileSize = $util.Long.fromValue(object.fileSize, false);
                        else if (typeof object.fileSize === "string")
                            message.fileSize = parseInt(object.fileSize, 10);
                        else if (typeof object.fileSize === "number")
                            message.fileSize = object.fileSize;
                        else if (typeof object.fileSize === "object")
                            message.fileSize = new $util.LongBits(object.fileSize.low >>> 0, object.fileSize.high >>> 0).toNumber();
                if (object.video != null)
                    if (typeof object.video !== "string" || object.video.length)
                        message.video = String(object.video);
                if (object.audio != null)
                    if (typeof object.audio !== "string" || object.audio.length)
                        message.audio = String(object.audio);
                if (object.audioTime != null)
                    if (typeof object.audioTime === "object" ? object.audioTime.low || object.audioTime.high : Number(object.audioTime) !== 0)
                        if ($util.Long)
                            message.audioTime = $util.Long.fromValue(object.audioTime, false);
                        else if (typeof object.audioTime === "string")
                            message.audioTime = parseInt(object.audioTime, 10);
                        else if (typeof object.audioTime === "number")
                            message.audioTime = object.audioTime;
                        else if (typeof object.audioTime === "object")
                            message.audioTime = new $util.LongBits(object.audioTime.low >>> 0, object.audioTime.high >>> 0).toNumber();
                if (object.quoteVideoUrl != null)
                    if (typeof object.quoteVideoUrl !== "string" || object.quoteVideoUrl.length)
                        message.quoteVideoUrl = String(object.quoteVideoUrl);
                if (object.quoteVideoTime != null)
                    if (typeof object.quoteVideoTime === "object" ? object.quoteVideoTime.low || object.quoteVideoTime.high : Number(object.quoteVideoTime) !== 0)
                        if ($util.Long)
                            message.quoteVideoTime = $util.Long.fromValue(object.quoteVideoTime, true);
                        else if (typeof object.quoteVideoTime === "string")
                            message.quoteVideoTime = parseInt(object.quoteVideoTime, 10);
                        else if (typeof object.quoteVideoTime === "number")
                            message.quoteVideoTime = object.quoteVideoTime;
                        else if (typeof object.quoteVideoTime === "object")
                            message.quoteVideoTime = new $util.LongBits(object.quoteVideoTime.low >>> 0, object.quoteVideoTime.high >>> 0).toNumber(true);
                if (object.stickerItemId != null)
                    if (typeof object.stickerItemId === "object" ? object.stickerItemId.low || object.stickerItemId.high : Number(object.stickerItemId) !== 0)
                        if ($util.Long)
                            message.stickerItemId = $util.Long.fromValue(object.stickerItemId, false);
                        else if (typeof object.stickerItemId === "string")
                            message.stickerItemId = parseInt(object.stickerItemId, 10);
                        else if (typeof object.stickerItemId === "number")
                            message.stickerItemId = object.stickerItemId;
                        else if (typeof object.stickerItemId === "object")
                            message.stickerItemId = new $util.LongBits(object.stickerItemId.low >>> 0, object.stickerItemId.high >>> 0).toNumber();
                if (object.stickerPackId != null)
                    if (typeof object.stickerPackId === "object" ? object.stickerPackId.low || object.stickerPackId.high : Number(object.stickerPackId) !== 0)
                        if ($util.Long)
                            message.stickerPackId = $util.Long.fromValue(object.stickerPackId, false);
                        else if (typeof object.stickerPackId === "string")
                            message.stickerPackId = parseInt(object.stickerPackId, 10);
                        else if (typeof object.stickerPackId === "number")
                            message.stickerPackId = object.stickerPackId;
                        else if (typeof object.stickerPackId === "object")
                            message.stickerPackId = new $util.LongBits(object.stickerPackId.low >>> 0, object.stickerPackId.high >>> 0).toNumber();
                if (object.roomName != null)
                    if (typeof object.roomName !== "string" || object.roomName.length)
                        message.roomName = String(object.roomName);
                if (object.botLlmParams != null)
                    if (typeof object.botLlmParams !== "string" || object.botLlmParams.length)
                        message.botLlmParams = String(object.botLlmParams);
                return message;
            };

            /**
             * Creates a plain object from a Content message. Also converts values to other types if specified.
             * @function toObject
             * @memberof yh_msg.send_message_send.Content
             * @static
             * @param {yh_msg.send_message_send.Content} message Content
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Content.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.mentionedId = [];
                if (options.defaults) {
                    object.text = "";
                    object.buttons = "";
                    object.fileName = "";
                    object.file = "";
                    object.form = "";
                    object.quoteMsgText = "";
                    object.image = "";
                    object.postId = "";
                    object.postTitle = "";
                    object.postContent = "";
                    object.postType = "";
                    object.expressionId = "";
                    object.quoteImageUrl = "";
                    object.quoteImageName = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.fileSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.fileSize = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.video = "";
                    object.audio = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.audioTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.audioTime = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.quoteVideoUrl = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.quoteVideoTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.quoteVideoTime = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.stickerItemId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.stickerItemId = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.stickerPackId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.stickerPackId = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.roomName = "";
                    object.botLlmParams = "";
                }
                if (message.text != null && message.hasOwnProperty("text"))
                    object.text = message.text;
                if (message.buttons != null && message.hasOwnProperty("buttons"))
                    object.buttons = message.buttons;
                if (message.fileName != null && message.hasOwnProperty("fileName"))
                    object.fileName = message.fileName;
                if (message.file != null && message.hasOwnProperty("file"))
                    object.file = message.file;
                if (message.mentionedId && message.mentionedId.length) {
                    object.mentionedId = Array(message.mentionedId.length);
                    for (let j = 0; j < message.mentionedId.length; ++j)
                        object.mentionedId[j] = message.mentionedId[j];
                }
                if (message.form != null && message.hasOwnProperty("form"))
                    object.form = message.form;
                if (message.quoteMsgText != null && message.hasOwnProperty("quoteMsgText"))
                    object.quoteMsgText = message.quoteMsgText;
                if (message.image != null && message.hasOwnProperty("image"))
                    object.image = message.image;
                if (message.postId != null && message.hasOwnProperty("postId"))
                    object.postId = message.postId;
                if (message.postTitle != null && message.hasOwnProperty("postTitle"))
                    object.postTitle = message.postTitle;
                if (message.postContent != null && message.hasOwnProperty("postContent"))
                    object.postContent = message.postContent;
                if (message.postType != null && message.hasOwnProperty("postType"))
                    object.postType = message.postType;
                if (message.expressionId != null && message.hasOwnProperty("expressionId"))
                    object.expressionId = message.expressionId;
                if (message.quoteImageUrl != null && message.hasOwnProperty("quoteImageUrl"))
                    object.quoteImageUrl = message.quoteImageUrl;
                if (message.quoteImageName != null && message.hasOwnProperty("quoteImageName"))
                    object.quoteImageName = message.quoteImageName;
                if (message.fileSize != null && message.hasOwnProperty("fileSize"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.fileSize = typeof message.fileSize === "number" ? BigInt(message.fileSize) : $util.Long.fromBits(message.fileSize.low >>> 0, message.fileSize.high >>> 0, false).toBigInt();
                    else if (typeof message.fileSize === "number")
                        object.fileSize = options.longs === String ? String(message.fileSize) : message.fileSize;
                    else
                        object.fileSize = options.longs === String ? $util.Long.prototype.toString.call(message.fileSize) : options.longs === Number ? new $util.LongBits(message.fileSize.low >>> 0, message.fileSize.high >>> 0).toNumber() : message.fileSize;
                if (message.video != null && message.hasOwnProperty("video"))
                    object.video = message.video;
                if (message.audio != null && message.hasOwnProperty("audio"))
                    object.audio = message.audio;
                if (message.audioTime != null && message.hasOwnProperty("audioTime"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.audioTime = typeof message.audioTime === "number" ? BigInt(message.audioTime) : $util.Long.fromBits(message.audioTime.low >>> 0, message.audioTime.high >>> 0, false).toBigInt();
                    else if (typeof message.audioTime === "number")
                        object.audioTime = options.longs === String ? String(message.audioTime) : message.audioTime;
                    else
                        object.audioTime = options.longs === String ? $util.Long.prototype.toString.call(message.audioTime) : options.longs === Number ? new $util.LongBits(message.audioTime.low >>> 0, message.audioTime.high >>> 0).toNumber() : message.audioTime;
                if (message.quoteVideoUrl != null && message.hasOwnProperty("quoteVideoUrl"))
                    object.quoteVideoUrl = message.quoteVideoUrl;
                if (message.quoteVideoTime != null && message.hasOwnProperty("quoteVideoTime"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.quoteVideoTime = typeof message.quoteVideoTime === "number" ? BigInt(message.quoteVideoTime) : $util.Long.fromBits(message.quoteVideoTime.low >>> 0, message.quoteVideoTime.high >>> 0, true).toBigInt();
                    else if (typeof message.quoteVideoTime === "number")
                        object.quoteVideoTime = options.longs === String ? String(message.quoteVideoTime) : message.quoteVideoTime;
                    else
                        object.quoteVideoTime = options.longs === String ? $util.Long.prototype.toString.call(message.quoteVideoTime) : options.longs === Number ? new $util.LongBits(message.quoteVideoTime.low >>> 0, message.quoteVideoTime.high >>> 0).toNumber(true) : message.quoteVideoTime;
                if (message.stickerItemId != null && message.hasOwnProperty("stickerItemId"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.stickerItemId = typeof message.stickerItemId === "number" ? BigInt(message.stickerItemId) : $util.Long.fromBits(message.stickerItemId.low >>> 0, message.stickerItemId.high >>> 0, false).toBigInt();
                    else if (typeof message.stickerItemId === "number")
                        object.stickerItemId = options.longs === String ? String(message.stickerItemId) : message.stickerItemId;
                    else
                        object.stickerItemId = options.longs === String ? $util.Long.prototype.toString.call(message.stickerItemId) : options.longs === Number ? new $util.LongBits(message.stickerItemId.low >>> 0, message.stickerItemId.high >>> 0).toNumber() : message.stickerItemId;
                if (message.stickerPackId != null && message.hasOwnProperty("stickerPackId"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.stickerPackId = typeof message.stickerPackId === "number" ? BigInt(message.stickerPackId) : $util.Long.fromBits(message.stickerPackId.low >>> 0, message.stickerPackId.high >>> 0, false).toBigInt();
                    else if (typeof message.stickerPackId === "number")
                        object.stickerPackId = options.longs === String ? String(message.stickerPackId) : message.stickerPackId;
                    else
                        object.stickerPackId = options.longs === String ? $util.Long.prototype.toString.call(message.stickerPackId) : options.longs === Number ? new $util.LongBits(message.stickerPackId.low >>> 0, message.stickerPackId.high >>> 0).toNumber() : message.stickerPackId;
                if (message.roomName != null && message.hasOwnProperty("roomName"))
                    object.roomName = message.roomName;
                if (message.botLlmParams != null && message.hasOwnProperty("botLlmParams"))
                    object.botLlmParams = message.botLlmParams;
                return object;
            };

            /**
             * Converts this Content to JSON.
             * @function toJSON
             * @memberof yh_msg.send_message_send.Content
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Content.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Content
             * @function getTypeUrl
             * @memberof yh_msg.send_message_send.Content
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Content.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/yh_msg.send_message_send.Content";
            };

            return Content;
        })();

        send_message_send.Media = (function() {

            /**
             * Properties of a Media.
             * @typedef {Object} yh_msg.send_message_send.Media.$Properties
             * @property {string|null} [fileKey] Media fileKey
             * @property {string|null} [fileHash] Media fileHash
             * @property {string|null} [fileType] Media fileType
             * @property {number|Long|null} [imageHeight] Media imageHeight
             * @property {number|Long|null} [imageWidth] Media imageWidth
             * @property {number|Long|null} [fileSize] Media fileSize
             * @property {string|null} [fileKey2] Media fileKey2
             * @property {string|null} [fileSuffix] Media fileSuffix
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Media.
             * @memberof yh_msg.send_message_send
             * @interface IMedia
             * @augments yh_msg.send_message_send.Media.$Properties
             * @deprecated Use yh_msg.send_message_send.Media.$Properties instead.
             */

            /**
             * Shape of a Media.
             * @typedef {yh_msg.send_message_send.Media.$Properties} yh_msg.send_message_send.Media.$Shape
             */

            /**
             * Constructs a new Media.
             * @memberof yh_msg.send_message_send
             * @classdesc Represents a Media.
             * @constructor
             * @param {yh_msg.send_message_send.Media.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Media(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Media fileKey.
             * @member {string} fileKey
             * @memberof yh_msg.send_message_send.Media
             * @instance
             */
            Media.prototype.fileKey = "";

            /**
             * Media fileHash.
             * @member {string} fileHash
             * @memberof yh_msg.send_message_send.Media
             * @instance
             */
            Media.prototype.fileHash = "";

            /**
             * Media fileType.
             * @member {string} fileType
             * @memberof yh_msg.send_message_send.Media
             * @instance
             */
            Media.prototype.fileType = "";

            /**
             * Media imageHeight.
             * @member {number|Long} imageHeight
             * @memberof yh_msg.send_message_send.Media
             * @instance
             */
            Media.prototype.imageHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Media imageWidth.
             * @member {number|Long} imageWidth
             * @memberof yh_msg.send_message_send.Media
             * @instance
             */
            Media.prototype.imageWidth = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Media fileSize.
             * @member {number|Long} fileSize
             * @memberof yh_msg.send_message_send.Media
             * @instance
             */
            Media.prototype.fileSize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Media fileKey2.
             * @member {string} fileKey2
             * @memberof yh_msg.send_message_send.Media
             * @instance
             */
            Media.prototype.fileKey2 = "";

            /**
             * Media fileSuffix.
             * @member {string} fileSuffix
             * @memberof yh_msg.send_message_send.Media
             * @instance
             */
            Media.prototype.fileSuffix = "";

            /**
             * Creates a new Media instance using the specified properties.
             * @function create
             * @memberof yh_msg.send_message_send.Media
             * @static
             * @param {yh_msg.send_message_send.Media.$Properties=} [properties] Properties to set
             * @returns {yh_msg.send_message_send.Media} Media instance
             * @type {{
             *   (properties: yh_msg.send_message_send.Media.$Shape): yh_msg.send_message_send.Media & yh_msg.send_message_send.Media.$Shape;
             *   (properties?: yh_msg.send_message_send.Media.$Properties): yh_msg.send_message_send.Media;
             * }}
             */
            Media.create = function create(properties) {
                return new Media(properties);
            };

            /**
             * Encodes the specified Media message. Does not implicitly {@link yh_msg.send_message_send.Media.verify|verify} messages.
             * @function encode
             * @memberof yh_msg.send_message_send.Media
             * @static
             * @param {yh_msg.send_message_send.Media.$Properties} message Media message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Media.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.fileKey != null && Object.hasOwnProperty.call(message, "fileKey"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.fileKey);
                if (message.fileHash != null && Object.hasOwnProperty.call(message, "fileHash"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.fileHash);
                if (message.fileType != null && Object.hasOwnProperty.call(message, "fileType"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.fileType);
                if (message.imageHeight != null && Object.hasOwnProperty.call(message, "imageHeight"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.imageHeight);
                if (message.imageWidth != null && Object.hasOwnProperty.call(message, "imageWidth"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.imageWidth);
                if (message.fileSize != null && Object.hasOwnProperty.call(message, "fileSize"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int64(message.fileSize);
                if (message.fileKey2 != null && Object.hasOwnProperty.call(message, "fileKey2"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.fileKey2);
                if (message.fileSuffix != null && Object.hasOwnProperty.call(message, "fileSuffix"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.fileSuffix);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Media message, length delimited. Does not implicitly {@link yh_msg.send_message_send.Media.verify|verify} messages.
             * @function encodeDelimited
             * @memberof yh_msg.send_message_send.Media
             * @static
             * @param {yh_msg.send_message_send.Media.$Properties} message Media message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Media.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Media message from the specified reader or buffer.
             * @function decode
             * @memberof yh_msg.send_message_send.Media
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {yh_msg.send_message_send.Media & yh_msg.send_message_send.Media.$Shape} Media
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Media.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_msg.send_message_send.Media(), value;
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
                                message.fileKey = value;
                            else
                                delete message.fileKey;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.fileHash = value;
                            else
                                delete message.fileHash;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.fileType = value;
                            else
                                delete message.fileType;
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.imageHeight = value;
                            else
                                delete message.imageHeight;
                            continue;
                        }
                    case 6: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.imageWidth = value;
                            else
                                delete message.imageWidth;
                            continue;
                        }
                    case 7: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.fileSize = value;
                            else
                                delete message.fileSize;
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.fileKey2 = value;
                            else
                                delete message.fileKey2;
                            continue;
                        }
                    case 9: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.fileSuffix = value;
                            else
                                delete message.fileSuffix;
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
             * Decodes a Media message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof yh_msg.send_message_send.Media
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {yh_msg.send_message_send.Media & yh_msg.send_message_send.Media.$Shape} Media
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Media.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Media message.
             * @function verify
             * @memberof yh_msg.send_message_send.Media
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Media.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.fileKey != null && message.hasOwnProperty("fileKey"))
                    if (!$util.isString(message.fileKey))
                        return "fileKey: string expected";
                if (message.fileHash != null && message.hasOwnProperty("fileHash"))
                    if (!$util.isString(message.fileHash))
                        return "fileHash: string expected";
                if (message.fileType != null && message.hasOwnProperty("fileType"))
                    if (!$util.isString(message.fileType))
                        return "fileType: string expected";
                if (message.imageHeight != null && message.hasOwnProperty("imageHeight"))
                    if (!$util.isInteger(message.imageHeight) && !(message.imageHeight && $util.isInteger(message.imageHeight.low) && $util.isInteger(message.imageHeight.high)))
                        return "imageHeight: integer|Long expected";
                if (message.imageWidth != null && message.hasOwnProperty("imageWidth"))
                    if (!$util.isInteger(message.imageWidth) && !(message.imageWidth && $util.isInteger(message.imageWidth.low) && $util.isInteger(message.imageWidth.high)))
                        return "imageWidth: integer|Long expected";
                if (message.fileSize != null && message.hasOwnProperty("fileSize"))
                    if (!$util.isInteger(message.fileSize) && !(message.fileSize && $util.isInteger(message.fileSize.low) && $util.isInteger(message.fileSize.high)))
                        return "fileSize: integer|Long expected";
                if (message.fileKey2 != null && message.hasOwnProperty("fileKey2"))
                    if (!$util.isString(message.fileKey2))
                        return "fileKey2: string expected";
                if (message.fileSuffix != null && message.hasOwnProperty("fileSuffix"))
                    if (!$util.isString(message.fileSuffix))
                        return "fileSuffix: string expected";
                return null;
            };

            /**
             * Creates a Media message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof yh_msg.send_message_send.Media
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {yh_msg.send_message_send.Media} Media
             */
            Media.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.yh_msg.send_message_send.Media)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.yh_msg.send_message_send.Media();
                if (object.fileKey != null)
                    if (typeof object.fileKey !== "string" || object.fileKey.length)
                        message.fileKey = String(object.fileKey);
                if (object.fileHash != null)
                    if (typeof object.fileHash !== "string" || object.fileHash.length)
                        message.fileHash = String(object.fileHash);
                if (object.fileType != null)
                    if (typeof object.fileType !== "string" || object.fileType.length)
                        message.fileType = String(object.fileType);
                if (object.imageHeight != null)
                    if (typeof object.imageHeight === "object" ? object.imageHeight.low || object.imageHeight.high : Number(object.imageHeight) !== 0)
                        if ($util.Long)
                            message.imageHeight = $util.Long.fromValue(object.imageHeight, false);
                        else if (typeof object.imageHeight === "string")
                            message.imageHeight = parseInt(object.imageHeight, 10);
                        else if (typeof object.imageHeight === "number")
                            message.imageHeight = object.imageHeight;
                        else if (typeof object.imageHeight === "object")
                            message.imageHeight = new $util.LongBits(object.imageHeight.low >>> 0, object.imageHeight.high >>> 0).toNumber();
                if (object.imageWidth != null)
                    if (typeof object.imageWidth === "object" ? object.imageWidth.low || object.imageWidth.high : Number(object.imageWidth) !== 0)
                        if ($util.Long)
                            message.imageWidth = $util.Long.fromValue(object.imageWidth, false);
                        else if (typeof object.imageWidth === "string")
                            message.imageWidth = parseInt(object.imageWidth, 10);
                        else if (typeof object.imageWidth === "number")
                            message.imageWidth = object.imageWidth;
                        else if (typeof object.imageWidth === "object")
                            message.imageWidth = new $util.LongBits(object.imageWidth.low >>> 0, object.imageWidth.high >>> 0).toNumber();
                if (object.fileSize != null)
                    if (typeof object.fileSize === "object" ? object.fileSize.low || object.fileSize.high : Number(object.fileSize) !== 0)
                        if ($util.Long)
                            message.fileSize = $util.Long.fromValue(object.fileSize, false);
                        else if (typeof object.fileSize === "string")
                            message.fileSize = parseInt(object.fileSize, 10);
                        else if (typeof object.fileSize === "number")
                            message.fileSize = object.fileSize;
                        else if (typeof object.fileSize === "object")
                            message.fileSize = new $util.LongBits(object.fileSize.low >>> 0, object.fileSize.high >>> 0).toNumber();
                if (object.fileKey2 != null)
                    if (typeof object.fileKey2 !== "string" || object.fileKey2.length)
                        message.fileKey2 = String(object.fileKey2);
                if (object.fileSuffix != null)
                    if (typeof object.fileSuffix !== "string" || object.fileSuffix.length)
                        message.fileSuffix = String(object.fileSuffix);
                return message;
            };

            /**
             * Creates a plain object from a Media message. Also converts values to other types if specified.
             * @function toObject
             * @memberof yh_msg.send_message_send.Media
             * @static
             * @param {yh_msg.send_message_send.Media} message Media
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Media.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.fileKey = "";
                    object.fileHash = "";
                    object.fileType = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.imageHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.imageHeight = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.imageWidth = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.imageWidth = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.fileSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.fileSize = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.fileKey2 = "";
                    object.fileSuffix = "";
                }
                if (message.fileKey != null && message.hasOwnProperty("fileKey"))
                    object.fileKey = message.fileKey;
                if (message.fileHash != null && message.hasOwnProperty("fileHash"))
                    object.fileHash = message.fileHash;
                if (message.fileType != null && message.hasOwnProperty("fileType"))
                    object.fileType = message.fileType;
                if (message.imageHeight != null && message.hasOwnProperty("imageHeight"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.imageHeight = typeof message.imageHeight === "number" ? BigInt(message.imageHeight) : $util.Long.fromBits(message.imageHeight.low >>> 0, message.imageHeight.high >>> 0, false).toBigInt();
                    else if (typeof message.imageHeight === "number")
                        object.imageHeight = options.longs === String ? String(message.imageHeight) : message.imageHeight;
                    else
                        object.imageHeight = options.longs === String ? $util.Long.prototype.toString.call(message.imageHeight) : options.longs === Number ? new $util.LongBits(message.imageHeight.low >>> 0, message.imageHeight.high >>> 0).toNumber() : message.imageHeight;
                if (message.imageWidth != null && message.hasOwnProperty("imageWidth"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.imageWidth = typeof message.imageWidth === "number" ? BigInt(message.imageWidth) : $util.Long.fromBits(message.imageWidth.low >>> 0, message.imageWidth.high >>> 0, false).toBigInt();
                    else if (typeof message.imageWidth === "number")
                        object.imageWidth = options.longs === String ? String(message.imageWidth) : message.imageWidth;
                    else
                        object.imageWidth = options.longs === String ? $util.Long.prototype.toString.call(message.imageWidth) : options.longs === Number ? new $util.LongBits(message.imageWidth.low >>> 0, message.imageWidth.high >>> 0).toNumber() : message.imageWidth;
                if (message.fileSize != null && message.hasOwnProperty("fileSize"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.fileSize = typeof message.fileSize === "number" ? BigInt(message.fileSize) : $util.Long.fromBits(message.fileSize.low >>> 0, message.fileSize.high >>> 0, false).toBigInt();
                    else if (typeof message.fileSize === "number")
                        object.fileSize = options.longs === String ? String(message.fileSize) : message.fileSize;
                    else
                        object.fileSize = options.longs === String ? $util.Long.prototype.toString.call(message.fileSize) : options.longs === Number ? new $util.LongBits(message.fileSize.low >>> 0, message.fileSize.high >>> 0).toNumber() : message.fileSize;
                if (message.fileKey2 != null && message.hasOwnProperty("fileKey2"))
                    object.fileKey2 = message.fileKey2;
                if (message.fileSuffix != null && message.hasOwnProperty("fileSuffix"))
                    object.fileSuffix = message.fileSuffix;
                return object;
            };

            /**
             * Converts this Media to JSON.
             * @function toJSON
             * @memberof yh_msg.send_message_send.Media
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Media.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Media
             * @function getTypeUrl
             * @memberof yh_msg.send_message_send.Media
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Media.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/yh_msg.send_message_send.Media";
            };

            return Media;
        })();

        return send_message_send;
    })();

    yh_msg.send_message = (function() {

        /**
         * Properties of a send_message.
         * @typedef {Object} yh_msg.send_message.$Properties
         * @property {yh_msg.Status.$Properties|null} [status] send_message status
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a send_message.
         * @memberof yh_msg
         * @interface Isend_message
         * @augments yh_msg.send_message.$Properties
         * @deprecated Use yh_msg.send_message.$Properties instead.
         */

        /**
         * Shape of a send_message.
         * @typedef {yh_msg.send_message.$Properties} yh_msg.send_message.$Shape
         */

        /**
         * Constructs a new send_message.
         * @memberof yh_msg
         * @classdesc Represents a send_message.
         * @constructor
         * @param {yh_msg.send_message.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function send_message(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * send_message status.
         * @member {yh_msg.Status.$Properties|null|undefined} status
         * @memberof yh_msg.send_message
         * @instance
         */
        send_message.prototype.status = null;

        /**
         * Creates a new send_message instance using the specified properties.
         * @function create
         * @memberof yh_msg.send_message
         * @static
         * @param {yh_msg.send_message.$Properties=} [properties] Properties to set
         * @returns {yh_msg.send_message} send_message instance
         * @type {{
         *   (properties: yh_msg.send_message.$Shape): yh_msg.send_message & yh_msg.send_message.$Shape;
         *   (properties?: yh_msg.send_message.$Properties): yh_msg.send_message;
         * }}
         */
        send_message.create = function create(properties) {
            return new send_message(properties);
        };

        /**
         * Encodes the specified send_message message. Does not implicitly {@link yh_msg.send_message.verify|verify} messages.
         * @function encode
         * @memberof yh_msg.send_message
         * @static
         * @param {yh_msg.send_message.$Properties} message send_message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        send_message.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.yh_msg.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified send_message message, length delimited. Does not implicitly {@link yh_msg.send_message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof yh_msg.send_message
         * @static
         * @param {yh_msg.send_message.$Properties} message send_message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        send_message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a send_message message from the specified reader or buffer.
         * @function decode
         * @memberof yh_msg.send_message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {yh_msg.send_message & yh_msg.send_message.$Shape} send_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        send_message.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_msg.send_message(), value;
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
                        message.status = $root.yh_msg.Status.decode(reader, reader.uint32(), undefined, _depth + 1, message.status);
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
         * Decodes a send_message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof yh_msg.send_message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {yh_msg.send_message & yh_msg.send_message.$Shape} send_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        send_message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a send_message message.
         * @function verify
         * @memberof yh_msg.send_message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        send_message.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.yh_msg.Status.verify(message.status, _depth + 1);
                if (error)
                    return "status." + error;
            }
            return null;
        };

        /**
         * Creates a send_message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof yh_msg.send_message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {yh_msg.send_message} send_message
         */
        send_message.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.yh_msg.send_message)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.yh_msg.send_message();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".yh_msg.send_message.status: object expected");
                message.status = $root.yh_msg.Status.fromObject(object.status, _depth + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a send_message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof yh_msg.send_message
         * @static
         * @param {yh_msg.send_message} message send_message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        send_message.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                object.status = null;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.yh_msg.Status.toObject(message.status, options, _depth + 1);
            return object;
        };

        /**
         * Converts this send_message to JSON.
         * @function toJSON
         * @memberof yh_msg.send_message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        send_message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for send_message
         * @function getTypeUrl
         * @memberof yh_msg.send_message
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        send_message.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/yh_msg.send_message";
        };

        return send_message;
    })();

    yh_msg.button_report_send = (function() {

        /**
         * Properties of a button_report_send.
         * @typedef {Object} yh_msg.button_report_send.$Properties
         * @property {string|null} [msgId] button_report_send msgId
         * @property {number|Long|null} [chatType] button_report_send chatType
         * @property {string|null} [chatId] button_report_send chatId
         * @property {string|null} [userId] button_report_send userId
         * @property {string|null} [buttonValue] button_report_send buttonValue
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a button_report_send.
         * @memberof yh_msg
         * @interface Ibutton_report_send
         * @augments yh_msg.button_report_send.$Properties
         * @deprecated Use yh_msg.button_report_send.$Properties instead.
         */

        /**
         * Shape of a button_report_send.
         * @typedef {yh_msg.button_report_send.$Properties} yh_msg.button_report_send.$Shape
         */

        /**
         * Constructs a new button_report_send.
         * @memberof yh_msg
         * @classdesc Represents a button_report_send.
         * @constructor
         * @param {yh_msg.button_report_send.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function button_report_send(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * button_report_send msgId.
         * @member {string} msgId
         * @memberof yh_msg.button_report_send
         * @instance
         */
        button_report_send.prototype.msgId = "";

        /**
         * button_report_send chatType.
         * @member {number|Long} chatType
         * @memberof yh_msg.button_report_send
         * @instance
         */
        button_report_send.prototype.chatType = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * button_report_send chatId.
         * @member {string} chatId
         * @memberof yh_msg.button_report_send
         * @instance
         */
        button_report_send.prototype.chatId = "";

        /**
         * button_report_send userId.
         * @member {string} userId
         * @memberof yh_msg.button_report_send
         * @instance
         */
        button_report_send.prototype.userId = "";

        /**
         * button_report_send buttonValue.
         * @member {string} buttonValue
         * @memberof yh_msg.button_report_send
         * @instance
         */
        button_report_send.prototype.buttonValue = "";

        /**
         * Creates a new button_report_send instance using the specified properties.
         * @function create
         * @memberof yh_msg.button_report_send
         * @static
         * @param {yh_msg.button_report_send.$Properties=} [properties] Properties to set
         * @returns {yh_msg.button_report_send} button_report_send instance
         * @type {{
         *   (properties: yh_msg.button_report_send.$Shape): yh_msg.button_report_send & yh_msg.button_report_send.$Shape;
         *   (properties?: yh_msg.button_report_send.$Properties): yh_msg.button_report_send;
         * }}
         */
        button_report_send.create = function create(properties) {
            return new button_report_send(properties);
        };

        /**
         * Encodes the specified button_report_send message. Does not implicitly {@link yh_msg.button_report_send.verify|verify} messages.
         * @function encode
         * @memberof yh_msg.button_report_send
         * @static
         * @param {yh_msg.button_report_send.$Properties} message button_report_send message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        button_report_send.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msgId);
            if (message.chatType != null && Object.hasOwnProperty.call(message, "chatType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.chatType);
            if (message.chatId != null && Object.hasOwnProperty.call(message, "chatId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.chatId);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.userId);
            if (message.buttonValue != null && Object.hasOwnProperty.call(message, "buttonValue"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.buttonValue);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified button_report_send message, length delimited. Does not implicitly {@link yh_msg.button_report_send.verify|verify} messages.
         * @function encodeDelimited
         * @memberof yh_msg.button_report_send
         * @static
         * @param {yh_msg.button_report_send.$Properties} message button_report_send message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        button_report_send.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a button_report_send message from the specified reader or buffer.
         * @function decode
         * @memberof yh_msg.button_report_send
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {yh_msg.button_report_send & yh_msg.button_report_send.$Shape} button_report_send
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        button_report_send.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_msg.button_report_send(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.msgId = value;
                        else
                            delete message.msgId;
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.chatType = value;
                        else
                            delete message.chatType;
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.chatId = value;
                        else
                            delete message.chatId;
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.userId = value;
                        else
                            delete message.userId;
                        continue;
                    }
                case 6: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.buttonValue = value;
                        else
                            delete message.buttonValue;
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
         * Decodes a button_report_send message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof yh_msg.button_report_send
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {yh_msg.button_report_send & yh_msg.button_report_send.$Shape} button_report_send
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        button_report_send.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a button_report_send message.
         * @function verify
         * @memberof yh_msg.button_report_send
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        button_report_send.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                if (!$util.isString(message.msgId))
                    return "msgId: string expected";
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                if (!$util.isInteger(message.chatType) && !(message.chatType && $util.isInteger(message.chatType.low) && $util.isInteger(message.chatType.high)))
                    return "chatType: integer|Long expected";
            if (message.chatId != null && message.hasOwnProperty("chatId"))
                if (!$util.isString(message.chatId))
                    return "chatId: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.buttonValue != null && message.hasOwnProperty("buttonValue"))
                if (!$util.isString(message.buttonValue))
                    return "buttonValue: string expected";
            return null;
        };

        /**
         * Creates a button_report_send message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof yh_msg.button_report_send
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {yh_msg.button_report_send} button_report_send
         */
        button_report_send.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.yh_msg.button_report_send)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.yh_msg.button_report_send();
            if (object.msgId != null)
                if (typeof object.msgId !== "string" || object.msgId.length)
                    message.msgId = String(object.msgId);
            if (object.chatType != null)
                if (typeof object.chatType === "object" ? object.chatType.low || object.chatType.high : Number(object.chatType) !== 0)
                    if ($util.Long)
                        message.chatType = $util.Long.fromValue(object.chatType, false);
                    else if (typeof object.chatType === "string")
                        message.chatType = parseInt(object.chatType, 10);
                    else if (typeof object.chatType === "number")
                        message.chatType = object.chatType;
                    else if (typeof object.chatType === "object")
                        message.chatType = new $util.LongBits(object.chatType.low >>> 0, object.chatType.high >>> 0).toNumber();
            if (object.chatId != null)
                if (typeof object.chatId !== "string" || object.chatId.length)
                    message.chatId = String(object.chatId);
            if (object.userId != null)
                if (typeof object.userId !== "string" || object.userId.length)
                    message.userId = String(object.userId);
            if (object.buttonValue != null)
                if (typeof object.buttonValue !== "string" || object.buttonValue.length)
                    message.buttonValue = String(object.buttonValue);
            return message;
        };

        /**
         * Creates a plain object from a button_report_send message. Also converts values to other types if specified.
         * @function toObject
         * @memberof yh_msg.button_report_send
         * @static
         * @param {yh_msg.button_report_send} message button_report_send
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        button_report_send.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.msgId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.chatType = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.chatType = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                object.chatId = "";
                object.userId = "";
                object.buttonValue = "";
            }
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                object.msgId = message.msgId;
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.chatType = typeof message.chatType === "number" ? BigInt(message.chatType) : $util.Long.fromBits(message.chatType.low >>> 0, message.chatType.high >>> 0, false).toBigInt();
                else if (typeof message.chatType === "number")
                    object.chatType = options.longs === String ? String(message.chatType) : message.chatType;
                else
                    object.chatType = options.longs === String ? $util.Long.prototype.toString.call(message.chatType) : options.longs === Number ? new $util.LongBits(message.chatType.low >>> 0, message.chatType.high >>> 0).toNumber() : message.chatType;
            if (message.chatId != null && message.hasOwnProperty("chatId"))
                object.chatId = message.chatId;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.buttonValue != null && message.hasOwnProperty("buttonValue"))
                object.buttonValue = message.buttonValue;
            return object;
        };

        /**
         * Converts this button_report_send to JSON.
         * @function toJSON
         * @memberof yh_msg.button_report_send
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        button_report_send.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for button_report_send
         * @function getTypeUrl
         * @memberof yh_msg.button_report_send
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        button_report_send.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/yh_msg.button_report_send";
        };

        return button_report_send;
    })();

    yh_msg.recall_msg_send = (function() {

        /**
         * Properties of a recall_msg_send.
         * @typedef {Object} yh_msg.recall_msg_send.$Properties
         * @property {string|null} [msgId] recall_msg_send msgId
         * @property {string|null} [chatId] recall_msg_send chatId
         * @property {number|Long|null} [chatType] recall_msg_send chatType
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a recall_msg_send.
         * @memberof yh_msg
         * @interface Irecall_msg_send
         * @augments yh_msg.recall_msg_send.$Properties
         * @deprecated Use yh_msg.recall_msg_send.$Properties instead.
         */

        /**
         * Shape of a recall_msg_send.
         * @typedef {yh_msg.recall_msg_send.$Properties} yh_msg.recall_msg_send.$Shape
         */

        /**
         * Constructs a new recall_msg_send.
         * @memberof yh_msg
         * @classdesc Represents a recall_msg_send.
         * @constructor
         * @param {yh_msg.recall_msg_send.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function recall_msg_send(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * recall_msg_send msgId.
         * @member {string} msgId
         * @memberof yh_msg.recall_msg_send
         * @instance
         */
        recall_msg_send.prototype.msgId = "";

        /**
         * recall_msg_send chatId.
         * @member {string} chatId
         * @memberof yh_msg.recall_msg_send
         * @instance
         */
        recall_msg_send.prototype.chatId = "";

        /**
         * recall_msg_send chatType.
         * @member {number|Long} chatType
         * @memberof yh_msg.recall_msg_send
         * @instance
         */
        recall_msg_send.prototype.chatType = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new recall_msg_send instance using the specified properties.
         * @function create
         * @memberof yh_msg.recall_msg_send
         * @static
         * @param {yh_msg.recall_msg_send.$Properties=} [properties] Properties to set
         * @returns {yh_msg.recall_msg_send} recall_msg_send instance
         * @type {{
         *   (properties: yh_msg.recall_msg_send.$Shape): yh_msg.recall_msg_send & yh_msg.recall_msg_send.$Shape;
         *   (properties?: yh_msg.recall_msg_send.$Properties): yh_msg.recall_msg_send;
         * }}
         */
        recall_msg_send.create = function create(properties) {
            return new recall_msg_send(properties);
        };

        /**
         * Encodes the specified recall_msg_send message. Does not implicitly {@link yh_msg.recall_msg_send.verify|verify} messages.
         * @function encode
         * @memberof yh_msg.recall_msg_send
         * @static
         * @param {yh_msg.recall_msg_send.$Properties} message recall_msg_send message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        recall_msg_send.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msgId);
            if (message.chatId != null && Object.hasOwnProperty.call(message, "chatId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.chatId);
            if (message.chatType != null && Object.hasOwnProperty.call(message, "chatType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.chatType);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified recall_msg_send message, length delimited. Does not implicitly {@link yh_msg.recall_msg_send.verify|verify} messages.
         * @function encodeDelimited
         * @memberof yh_msg.recall_msg_send
         * @static
         * @param {yh_msg.recall_msg_send.$Properties} message recall_msg_send message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        recall_msg_send.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a recall_msg_send message from the specified reader or buffer.
         * @function decode
         * @memberof yh_msg.recall_msg_send
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {yh_msg.recall_msg_send & yh_msg.recall_msg_send.$Shape} recall_msg_send
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        recall_msg_send.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_msg.recall_msg_send(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.msgId = value;
                        else
                            delete message.msgId;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.chatId = value;
                        else
                            delete message.chatId;
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.chatType = value;
                        else
                            delete message.chatType;
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
         * Decodes a recall_msg_send message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof yh_msg.recall_msg_send
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {yh_msg.recall_msg_send & yh_msg.recall_msg_send.$Shape} recall_msg_send
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        recall_msg_send.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a recall_msg_send message.
         * @function verify
         * @memberof yh_msg.recall_msg_send
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        recall_msg_send.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                if (!$util.isString(message.msgId))
                    return "msgId: string expected";
            if (message.chatId != null && message.hasOwnProperty("chatId"))
                if (!$util.isString(message.chatId))
                    return "chatId: string expected";
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                if (!$util.isInteger(message.chatType) && !(message.chatType && $util.isInteger(message.chatType.low) && $util.isInteger(message.chatType.high)))
                    return "chatType: integer|Long expected";
            return null;
        };

        /**
         * Creates a recall_msg_send message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof yh_msg.recall_msg_send
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {yh_msg.recall_msg_send} recall_msg_send
         */
        recall_msg_send.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.yh_msg.recall_msg_send)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.yh_msg.recall_msg_send();
            if (object.msgId != null)
                if (typeof object.msgId !== "string" || object.msgId.length)
                    message.msgId = String(object.msgId);
            if (object.chatId != null)
                if (typeof object.chatId !== "string" || object.chatId.length)
                    message.chatId = String(object.chatId);
            if (object.chatType != null)
                if (typeof object.chatType === "object" ? object.chatType.low || object.chatType.high : Number(object.chatType) !== 0)
                    if ($util.Long)
                        message.chatType = $util.Long.fromValue(object.chatType, false);
                    else if (typeof object.chatType === "string")
                        message.chatType = parseInt(object.chatType, 10);
                    else if (typeof object.chatType === "number")
                        message.chatType = object.chatType;
                    else if (typeof object.chatType === "object")
                        message.chatType = new $util.LongBits(object.chatType.low >>> 0, object.chatType.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a recall_msg_send message. Also converts values to other types if specified.
         * @function toObject
         * @memberof yh_msg.recall_msg_send
         * @static
         * @param {yh_msg.recall_msg_send} message recall_msg_send
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        recall_msg_send.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.msgId = "";
                object.chatId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.chatType = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.chatType = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
            }
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                object.msgId = message.msgId;
            if (message.chatId != null && message.hasOwnProperty("chatId"))
                object.chatId = message.chatId;
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.chatType = typeof message.chatType === "number" ? BigInt(message.chatType) : $util.Long.fromBits(message.chatType.low >>> 0, message.chatType.high >>> 0, false).toBigInt();
                else if (typeof message.chatType === "number")
                    object.chatType = options.longs === String ? String(message.chatType) : message.chatType;
                else
                    object.chatType = options.longs === String ? $util.Long.prototype.toString.call(message.chatType) : options.longs === Number ? new $util.LongBits(message.chatType.low >>> 0, message.chatType.high >>> 0).toNumber() : message.chatType;
            return object;
        };

        /**
         * Converts this recall_msg_send to JSON.
         * @function toJSON
         * @memberof yh_msg.recall_msg_send
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        recall_msg_send.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for recall_msg_send
         * @function getTypeUrl
         * @memberof yh_msg.recall_msg_send
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        recall_msg_send.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/yh_msg.recall_msg_send";
        };

        return recall_msg_send;
    })();

    yh_msg.recall_msg = (function() {

        /**
         * Properties of a recall_msg.
         * @typedef {Object} yh_msg.recall_msg.$Properties
         * @property {yh_msg.Status.$Properties|null} [status] recall_msg status
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a recall_msg.
         * @memberof yh_msg
         * @interface Irecall_msg
         * @augments yh_msg.recall_msg.$Properties
         * @deprecated Use yh_msg.recall_msg.$Properties instead.
         */

        /**
         * Shape of a recall_msg.
         * @typedef {yh_msg.recall_msg.$Properties} yh_msg.recall_msg.$Shape
         */

        /**
         * Constructs a new recall_msg.
         * @memberof yh_msg
         * @classdesc Represents a recall_msg.
         * @constructor
         * @param {yh_msg.recall_msg.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function recall_msg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * recall_msg status.
         * @member {yh_msg.Status.$Properties|null|undefined} status
         * @memberof yh_msg.recall_msg
         * @instance
         */
        recall_msg.prototype.status = null;

        /**
         * Creates a new recall_msg instance using the specified properties.
         * @function create
         * @memberof yh_msg.recall_msg
         * @static
         * @param {yh_msg.recall_msg.$Properties=} [properties] Properties to set
         * @returns {yh_msg.recall_msg} recall_msg instance
         * @type {{
         *   (properties: yh_msg.recall_msg.$Shape): yh_msg.recall_msg & yh_msg.recall_msg.$Shape;
         *   (properties?: yh_msg.recall_msg.$Properties): yh_msg.recall_msg;
         * }}
         */
        recall_msg.create = function create(properties) {
            return new recall_msg(properties);
        };

        /**
         * Encodes the specified recall_msg message. Does not implicitly {@link yh_msg.recall_msg.verify|verify} messages.
         * @function encode
         * @memberof yh_msg.recall_msg
         * @static
         * @param {yh_msg.recall_msg.$Properties} message recall_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        recall_msg.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.yh_msg.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified recall_msg message, length delimited. Does not implicitly {@link yh_msg.recall_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof yh_msg.recall_msg
         * @static
         * @param {yh_msg.recall_msg.$Properties} message recall_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        recall_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a recall_msg message from the specified reader or buffer.
         * @function decode
         * @memberof yh_msg.recall_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {yh_msg.recall_msg & yh_msg.recall_msg.$Shape} recall_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        recall_msg.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_msg.recall_msg(), value;
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
                        message.status = $root.yh_msg.Status.decode(reader, reader.uint32(), undefined, _depth + 1, message.status);
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
         * Decodes a recall_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof yh_msg.recall_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {yh_msg.recall_msg & yh_msg.recall_msg.$Shape} recall_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        recall_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a recall_msg message.
         * @function verify
         * @memberof yh_msg.recall_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        recall_msg.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.yh_msg.Status.verify(message.status, _depth + 1);
                if (error)
                    return "status." + error;
            }
            return null;
        };

        /**
         * Creates a recall_msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof yh_msg.recall_msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {yh_msg.recall_msg} recall_msg
         */
        recall_msg.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.yh_msg.recall_msg)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.yh_msg.recall_msg();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".yh_msg.recall_msg.status: object expected");
                message.status = $root.yh_msg.Status.fromObject(object.status, _depth + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a recall_msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof yh_msg.recall_msg
         * @static
         * @param {yh_msg.recall_msg} message recall_msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        recall_msg.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                object.status = null;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.yh_msg.Status.toObject(message.status, options, _depth + 1);
            return object;
        };

        /**
         * Converts this recall_msg to JSON.
         * @function toJSON
         * @memberof yh_msg.recall_msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        recall_msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for recall_msg
         * @function getTypeUrl
         * @memberof yh_msg.recall_msg
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        recall_msg.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/yh_msg.recall_msg";
        };

        return recall_msg;
    })();

    yh_msg.recall_msg_batch_send = (function() {

        /**
         * Properties of a recall_msg_batch_send.
         * @typedef {Object} yh_msg.recall_msg_batch_send.$Properties
         * @property {Array.<string>|null} [msgId] recall_msg_batch_send msgId
         * @property {string|null} [chatId] recall_msg_batch_send chatId
         * @property {number|Long|null} [chatType] recall_msg_batch_send chatType
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a recall_msg_batch_send.
         * @memberof yh_msg
         * @interface Irecall_msg_batch_send
         * @augments yh_msg.recall_msg_batch_send.$Properties
         * @deprecated Use yh_msg.recall_msg_batch_send.$Properties instead.
         */

        /**
         * Shape of a recall_msg_batch_send.
         * @typedef {yh_msg.recall_msg_batch_send.$Properties} yh_msg.recall_msg_batch_send.$Shape
         */

        /**
         * Constructs a new recall_msg_batch_send.
         * @memberof yh_msg
         * @classdesc Represents a recall_msg_batch_send.
         * @constructor
         * @param {yh_msg.recall_msg_batch_send.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function recall_msg_batch_send(properties) {
            this.msgId = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * recall_msg_batch_send msgId.
         * @member {Array.<string>} msgId
         * @memberof yh_msg.recall_msg_batch_send
         * @instance
         */
        recall_msg_batch_send.prototype.msgId = $util.emptyArray;

        /**
         * recall_msg_batch_send chatId.
         * @member {string} chatId
         * @memberof yh_msg.recall_msg_batch_send
         * @instance
         */
        recall_msg_batch_send.prototype.chatId = "";

        /**
         * recall_msg_batch_send chatType.
         * @member {number|Long} chatType
         * @memberof yh_msg.recall_msg_batch_send
         * @instance
         */
        recall_msg_batch_send.prototype.chatType = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new recall_msg_batch_send instance using the specified properties.
         * @function create
         * @memberof yh_msg.recall_msg_batch_send
         * @static
         * @param {yh_msg.recall_msg_batch_send.$Properties=} [properties] Properties to set
         * @returns {yh_msg.recall_msg_batch_send} recall_msg_batch_send instance
         * @type {{
         *   (properties: yh_msg.recall_msg_batch_send.$Shape): yh_msg.recall_msg_batch_send & yh_msg.recall_msg_batch_send.$Shape;
         *   (properties?: yh_msg.recall_msg_batch_send.$Properties): yh_msg.recall_msg_batch_send;
         * }}
         */
        recall_msg_batch_send.create = function create(properties) {
            return new recall_msg_batch_send(properties);
        };

        /**
         * Encodes the specified recall_msg_batch_send message. Does not implicitly {@link yh_msg.recall_msg_batch_send.verify|verify} messages.
         * @function encode
         * @memberof yh_msg.recall_msg_batch_send
         * @static
         * @param {yh_msg.recall_msg_batch_send.$Properties} message recall_msg_batch_send message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        recall_msg_batch_send.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.msgId != null && message.msgId.length)
                for (let i = 0; i < message.msgId.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.msgId[i]);
            if (message.chatId != null && Object.hasOwnProperty.call(message, "chatId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.chatId);
            if (message.chatType != null && Object.hasOwnProperty.call(message, "chatType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.chatType);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified recall_msg_batch_send message, length delimited. Does not implicitly {@link yh_msg.recall_msg_batch_send.verify|verify} messages.
         * @function encodeDelimited
         * @memberof yh_msg.recall_msg_batch_send
         * @static
         * @param {yh_msg.recall_msg_batch_send.$Properties} message recall_msg_batch_send message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        recall_msg_batch_send.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a recall_msg_batch_send message from the specified reader or buffer.
         * @function decode
         * @memberof yh_msg.recall_msg_batch_send
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {yh_msg.recall_msg_batch_send & yh_msg.recall_msg_batch_send.$Shape} recall_msg_batch_send
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        recall_msg_batch_send.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_msg.recall_msg_batch_send(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 2: {
                        if (wireType !== 2)
                            break;
                        if (!(message.msgId && message.msgId.length))
                            message.msgId = [];
                        message.msgId.push(reader.string());
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.chatId = value;
                        else
                            delete message.chatId;
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.chatType = value;
                        else
                            delete message.chatType;
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
         * Decodes a recall_msg_batch_send message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof yh_msg.recall_msg_batch_send
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {yh_msg.recall_msg_batch_send & yh_msg.recall_msg_batch_send.$Shape} recall_msg_batch_send
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        recall_msg_batch_send.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a recall_msg_batch_send message.
         * @function verify
         * @memberof yh_msg.recall_msg_batch_send
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        recall_msg_batch_send.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.msgId != null && message.hasOwnProperty("msgId")) {
                if (!Array.isArray(message.msgId))
                    return "msgId: array expected";
                for (let i = 0; i < message.msgId.length; ++i)
                    if (!$util.isString(message.msgId[i]))
                        return "msgId: string[] expected";
            }
            if (message.chatId != null && message.hasOwnProperty("chatId"))
                if (!$util.isString(message.chatId))
                    return "chatId: string expected";
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                if (!$util.isInteger(message.chatType) && !(message.chatType && $util.isInteger(message.chatType.low) && $util.isInteger(message.chatType.high)))
                    return "chatType: integer|Long expected";
            return null;
        };

        /**
         * Creates a recall_msg_batch_send message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof yh_msg.recall_msg_batch_send
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {yh_msg.recall_msg_batch_send} recall_msg_batch_send
         */
        recall_msg_batch_send.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.yh_msg.recall_msg_batch_send)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.yh_msg.recall_msg_batch_send();
            if (object.msgId) {
                if (!Array.isArray(object.msgId))
                    throw TypeError(".yh_msg.recall_msg_batch_send.msgId: array expected");
                message.msgId = Array(object.msgId.length);
                for (let i = 0; i < object.msgId.length; ++i)
                    message.msgId[i] = String(object.msgId[i]);
            }
            if (object.chatId != null)
                if (typeof object.chatId !== "string" || object.chatId.length)
                    message.chatId = String(object.chatId);
            if (object.chatType != null)
                if (typeof object.chatType === "object" ? object.chatType.low || object.chatType.high : Number(object.chatType) !== 0)
                    if ($util.Long)
                        message.chatType = $util.Long.fromValue(object.chatType, false);
                    else if (typeof object.chatType === "string")
                        message.chatType = parseInt(object.chatType, 10);
                    else if (typeof object.chatType === "number")
                        message.chatType = object.chatType;
                    else if (typeof object.chatType === "object")
                        message.chatType = new $util.LongBits(object.chatType.low >>> 0, object.chatType.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a recall_msg_batch_send message. Also converts values to other types if specified.
         * @function toObject
         * @memberof yh_msg.recall_msg_batch_send
         * @static
         * @param {yh_msg.recall_msg_batch_send} message recall_msg_batch_send
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        recall_msg_batch_send.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.msgId = [];
            if (options.defaults) {
                object.chatId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.chatType = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.chatType = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
            }
            if (message.msgId && message.msgId.length) {
                object.msgId = Array(message.msgId.length);
                for (let j = 0; j < message.msgId.length; ++j)
                    object.msgId[j] = message.msgId[j];
            }
            if (message.chatId != null && message.hasOwnProperty("chatId"))
                object.chatId = message.chatId;
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.chatType = typeof message.chatType === "number" ? BigInt(message.chatType) : $util.Long.fromBits(message.chatType.low >>> 0, message.chatType.high >>> 0, false).toBigInt();
                else if (typeof message.chatType === "number")
                    object.chatType = options.longs === String ? String(message.chatType) : message.chatType;
                else
                    object.chatType = options.longs === String ? $util.Long.prototype.toString.call(message.chatType) : options.longs === Number ? new $util.LongBits(message.chatType.low >>> 0, message.chatType.high >>> 0).toNumber() : message.chatType;
            return object;
        };

        /**
         * Converts this recall_msg_batch_send to JSON.
         * @function toJSON
         * @memberof yh_msg.recall_msg_batch_send
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        recall_msg_batch_send.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for recall_msg_batch_send
         * @function getTypeUrl
         * @memberof yh_msg.recall_msg_batch_send
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        recall_msg_batch_send.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/yh_msg.recall_msg_batch_send";
        };

        return recall_msg_batch_send;
    })();

    yh_msg.recall_msg_batch = (function() {

        /**
         * Properties of a recall_msg_batch.
         * @typedef {Object} yh_msg.recall_msg_batch.$Properties
         * @property {yh_msg.Status.$Properties|null} [status] recall_msg_batch status
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a recall_msg_batch.
         * @memberof yh_msg
         * @interface Irecall_msg_batch
         * @augments yh_msg.recall_msg_batch.$Properties
         * @deprecated Use yh_msg.recall_msg_batch.$Properties instead.
         */

        /**
         * Shape of a recall_msg_batch.
         * @typedef {yh_msg.recall_msg_batch.$Properties} yh_msg.recall_msg_batch.$Shape
         */

        /**
         * Constructs a new recall_msg_batch.
         * @memberof yh_msg
         * @classdesc Represents a recall_msg_batch.
         * @constructor
         * @param {yh_msg.recall_msg_batch.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function recall_msg_batch(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * recall_msg_batch status.
         * @member {yh_msg.Status.$Properties|null|undefined} status
         * @memberof yh_msg.recall_msg_batch
         * @instance
         */
        recall_msg_batch.prototype.status = null;

        /**
         * Creates a new recall_msg_batch instance using the specified properties.
         * @function create
         * @memberof yh_msg.recall_msg_batch
         * @static
         * @param {yh_msg.recall_msg_batch.$Properties=} [properties] Properties to set
         * @returns {yh_msg.recall_msg_batch} recall_msg_batch instance
         * @type {{
         *   (properties: yh_msg.recall_msg_batch.$Shape): yh_msg.recall_msg_batch & yh_msg.recall_msg_batch.$Shape;
         *   (properties?: yh_msg.recall_msg_batch.$Properties): yh_msg.recall_msg_batch;
         * }}
         */
        recall_msg_batch.create = function create(properties) {
            return new recall_msg_batch(properties);
        };

        /**
         * Encodes the specified recall_msg_batch message. Does not implicitly {@link yh_msg.recall_msg_batch.verify|verify} messages.
         * @function encode
         * @memberof yh_msg.recall_msg_batch
         * @static
         * @param {yh_msg.recall_msg_batch.$Properties} message recall_msg_batch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        recall_msg_batch.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.yh_msg.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified recall_msg_batch message, length delimited. Does not implicitly {@link yh_msg.recall_msg_batch.verify|verify} messages.
         * @function encodeDelimited
         * @memberof yh_msg.recall_msg_batch
         * @static
         * @param {yh_msg.recall_msg_batch.$Properties} message recall_msg_batch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        recall_msg_batch.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a recall_msg_batch message from the specified reader or buffer.
         * @function decode
         * @memberof yh_msg.recall_msg_batch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {yh_msg.recall_msg_batch & yh_msg.recall_msg_batch.$Shape} recall_msg_batch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        recall_msg_batch.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_msg.recall_msg_batch(), value;
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
                        message.status = $root.yh_msg.Status.decode(reader, reader.uint32(), undefined, _depth + 1, message.status);
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
         * Decodes a recall_msg_batch message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof yh_msg.recall_msg_batch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {yh_msg.recall_msg_batch & yh_msg.recall_msg_batch.$Shape} recall_msg_batch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        recall_msg_batch.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a recall_msg_batch message.
         * @function verify
         * @memberof yh_msg.recall_msg_batch
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        recall_msg_batch.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.yh_msg.Status.verify(message.status, _depth + 1);
                if (error)
                    return "status." + error;
            }
            return null;
        };

        /**
         * Creates a recall_msg_batch message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof yh_msg.recall_msg_batch
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {yh_msg.recall_msg_batch} recall_msg_batch
         */
        recall_msg_batch.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.yh_msg.recall_msg_batch)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.yh_msg.recall_msg_batch();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".yh_msg.recall_msg_batch.status: object expected");
                message.status = $root.yh_msg.Status.fromObject(object.status, _depth + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a recall_msg_batch message. Also converts values to other types if specified.
         * @function toObject
         * @memberof yh_msg.recall_msg_batch
         * @static
         * @param {yh_msg.recall_msg_batch} message recall_msg_batch
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        recall_msg_batch.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                object.status = null;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.yh_msg.Status.toObject(message.status, options, _depth + 1);
            return object;
        };

        /**
         * Converts this recall_msg_batch to JSON.
         * @function toJSON
         * @memberof yh_msg.recall_msg_batch
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        recall_msg_batch.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for recall_msg_batch
         * @function getTypeUrl
         * @memberof yh_msg.recall_msg_batch
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        recall_msg_batch.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/yh_msg.recall_msg_batch";
        };

        return recall_msg_batch;
    })();

    yh_msg.edit_message_send = (function() {

        /**
         * Properties of an edit_message_send.
         * @typedef {Object} yh_msg.edit_message_send.$Properties
         * @property {string|null} [msgId] edit_message_send msgId
         * @property {string|null} [chatId] edit_message_send chatId
         * @property {number|null} [chatType] edit_message_send chatType
         * @property {yh_msg.edit_message_send.Content.$Properties|null} [content] edit_message_send content
         * @property {number|Long|null} [contentType] edit_message_send contentType
         * @property {string|null} [quoteMsgId] edit_message_send quoteMsgId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of an edit_message_send.
         * @memberof yh_msg
         * @interface Iedit_message_send
         * @augments yh_msg.edit_message_send.$Properties
         * @deprecated Use yh_msg.edit_message_send.$Properties instead.
         */

        /**
         * Shape of an edit_message_send.
         * @typedef {yh_msg.edit_message_send.$Properties} yh_msg.edit_message_send.$Shape
         */

        /**
         * Constructs a new edit_message_send.
         * @memberof yh_msg
         * @classdesc Represents an edit_message_send.
         * @constructor
         * @param {yh_msg.edit_message_send.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function edit_message_send(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * edit_message_send msgId.
         * @member {string} msgId
         * @memberof yh_msg.edit_message_send
         * @instance
         */
        edit_message_send.prototype.msgId = "";

        /**
         * edit_message_send chatId.
         * @member {string} chatId
         * @memberof yh_msg.edit_message_send
         * @instance
         */
        edit_message_send.prototype.chatId = "";

        /**
         * edit_message_send chatType.
         * @member {number} chatType
         * @memberof yh_msg.edit_message_send
         * @instance
         */
        edit_message_send.prototype.chatType = 0;

        /**
         * edit_message_send content.
         * @member {yh_msg.edit_message_send.Content.$Properties|null|undefined} content
         * @memberof yh_msg.edit_message_send
         * @instance
         */
        edit_message_send.prototype.content = null;

        /**
         * edit_message_send contentType.
         * @member {number|Long} contentType
         * @memberof yh_msg.edit_message_send
         * @instance
         */
        edit_message_send.prototype.contentType = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * edit_message_send quoteMsgId.
         * @member {string} quoteMsgId
         * @memberof yh_msg.edit_message_send
         * @instance
         */
        edit_message_send.prototype.quoteMsgId = "";

        /**
         * Creates a new edit_message_send instance using the specified properties.
         * @function create
         * @memberof yh_msg.edit_message_send
         * @static
         * @param {yh_msg.edit_message_send.$Properties=} [properties] Properties to set
         * @returns {yh_msg.edit_message_send} edit_message_send instance
         * @type {{
         *   (properties: yh_msg.edit_message_send.$Shape): yh_msg.edit_message_send & yh_msg.edit_message_send.$Shape;
         *   (properties?: yh_msg.edit_message_send.$Properties): yh_msg.edit_message_send;
         * }}
         */
        edit_message_send.create = function create(properties) {
            return new edit_message_send(properties);
        };

        /**
         * Encodes the specified edit_message_send message. Does not implicitly {@link yh_msg.edit_message_send.verify|verify} messages.
         * @function encode
         * @memberof yh_msg.edit_message_send
         * @static
         * @param {yh_msg.edit_message_send.$Properties} message edit_message_send message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        edit_message_send.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msgId);
            if (message.chatId != null && Object.hasOwnProperty.call(message, "chatId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.chatId);
            if (message.chatType != null && Object.hasOwnProperty.call(message, "chatType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.chatType);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                $root.yh_msg.edit_message_send.Content.encode(message.content, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
            if (message.contentType != null && Object.hasOwnProperty.call(message, "contentType"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.contentType);
            if (message.quoteMsgId != null && Object.hasOwnProperty.call(message, "quoteMsgId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.quoteMsgId);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified edit_message_send message, length delimited. Does not implicitly {@link yh_msg.edit_message_send.verify|verify} messages.
         * @function encodeDelimited
         * @memberof yh_msg.edit_message_send
         * @static
         * @param {yh_msg.edit_message_send.$Properties} message edit_message_send message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        edit_message_send.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes an edit_message_send message from the specified reader or buffer.
         * @function decode
         * @memberof yh_msg.edit_message_send
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {yh_msg.edit_message_send & yh_msg.edit_message_send.$Shape} edit_message_send
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        edit_message_send.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_msg.edit_message_send(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.msgId = value;
                        else
                            delete message.msgId;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.chatId = value;
                        else
                            delete message.chatId;
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.chatType = value;
                        else
                            delete message.chatType;
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        message.content = $root.yh_msg.edit_message_send.Content.decode(reader, reader.uint32(), undefined, _depth + 1, message.content);
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.contentType = value;
                        else
                            delete message.contentType;
                        continue;
                    }
                case 8: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.quoteMsgId = value;
                        else
                            delete message.quoteMsgId;
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
         * Decodes an edit_message_send message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof yh_msg.edit_message_send
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {yh_msg.edit_message_send & yh_msg.edit_message_send.$Shape} edit_message_send
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        edit_message_send.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an edit_message_send message.
         * @function verify
         * @memberof yh_msg.edit_message_send
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        edit_message_send.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                if (!$util.isString(message.msgId))
                    return "msgId: string expected";
            if (message.chatId != null && message.hasOwnProperty("chatId"))
                if (!$util.isString(message.chatId))
                    return "chatId: string expected";
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                if (!$util.isInteger(message.chatType))
                    return "chatType: integer expected";
            if (message.content != null && message.hasOwnProperty("content")) {
                let error = $root.yh_msg.edit_message_send.Content.verify(message.content, _depth + 1);
                if (error)
                    return "content." + error;
            }
            if (message.contentType != null && message.hasOwnProperty("contentType"))
                if (!$util.isInteger(message.contentType) && !(message.contentType && $util.isInteger(message.contentType.low) && $util.isInteger(message.contentType.high)))
                    return "contentType: integer|Long expected";
            if (message.quoteMsgId != null && message.hasOwnProperty("quoteMsgId"))
                if (!$util.isString(message.quoteMsgId))
                    return "quoteMsgId: string expected";
            return null;
        };

        /**
         * Creates an edit_message_send message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof yh_msg.edit_message_send
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {yh_msg.edit_message_send} edit_message_send
         */
        edit_message_send.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.yh_msg.edit_message_send)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.yh_msg.edit_message_send();
            if (object.msgId != null)
                if (typeof object.msgId !== "string" || object.msgId.length)
                    message.msgId = String(object.msgId);
            if (object.chatId != null)
                if (typeof object.chatId !== "string" || object.chatId.length)
                    message.chatId = String(object.chatId);
            if (object.chatType != null)
                if (Number(object.chatType) !== 0)
                    message.chatType = object.chatType | 0;
            if (object.content != null) {
                if (typeof object.content !== "object")
                    throw TypeError(".yh_msg.edit_message_send.content: object expected");
                message.content = $root.yh_msg.edit_message_send.Content.fromObject(object.content, _depth + 1);
            }
            if (object.contentType != null)
                if (typeof object.contentType === "object" ? object.contentType.low || object.contentType.high : Number(object.contentType) !== 0)
                    if ($util.Long)
                        message.contentType = $util.Long.fromValue(object.contentType, false);
                    else if (typeof object.contentType === "string")
                        message.contentType = parseInt(object.contentType, 10);
                    else if (typeof object.contentType === "number")
                        message.contentType = object.contentType;
                    else if (typeof object.contentType === "object")
                        message.contentType = new $util.LongBits(object.contentType.low >>> 0, object.contentType.high >>> 0).toNumber();
            if (object.quoteMsgId != null)
                if (typeof object.quoteMsgId !== "string" || object.quoteMsgId.length)
                    message.quoteMsgId = String(object.quoteMsgId);
            return message;
        };

        /**
         * Creates a plain object from an edit_message_send message. Also converts values to other types if specified.
         * @function toObject
         * @memberof yh_msg.edit_message_send
         * @static
         * @param {yh_msg.edit_message_send} message edit_message_send
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        edit_message_send.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.msgId = "";
                object.chatId = "";
                object.chatType = 0;
                object.content = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.contentType = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.contentType = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                object.quoteMsgId = "";
            }
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                object.msgId = message.msgId;
            if (message.chatId != null && message.hasOwnProperty("chatId"))
                object.chatId = message.chatId;
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                object.chatType = message.chatType;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = $root.yh_msg.edit_message_send.Content.toObject(message.content, options, _depth + 1);
            if (message.contentType != null && message.hasOwnProperty("contentType"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.contentType = typeof message.contentType === "number" ? BigInt(message.contentType) : $util.Long.fromBits(message.contentType.low >>> 0, message.contentType.high >>> 0, false).toBigInt();
                else if (typeof message.contentType === "number")
                    object.contentType = options.longs === String ? String(message.contentType) : message.contentType;
                else
                    object.contentType = options.longs === String ? $util.Long.prototype.toString.call(message.contentType) : options.longs === Number ? new $util.LongBits(message.contentType.low >>> 0, message.contentType.high >>> 0).toNumber() : message.contentType;
            if (message.quoteMsgId != null && message.hasOwnProperty("quoteMsgId"))
                object.quoteMsgId = message.quoteMsgId;
            return object;
        };

        /**
         * Converts this edit_message_send to JSON.
         * @function toJSON
         * @memberof yh_msg.edit_message_send
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        edit_message_send.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for edit_message_send
         * @function getTypeUrl
         * @memberof yh_msg.edit_message_send
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        edit_message_send.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/yh_msg.edit_message_send";
        };

        edit_message_send.Content = (function() {

            /**
             * Properties of a Content.
             * @typedef {Object} yh_msg.edit_message_send.Content.$Properties
             * @property {string|null} [text] Content text
             * @property {string|null} [buttons] Content buttons
             * @property {string|null} [fileName] Content fileName
             * @property {string|null} [file] Content file
             * @property {Array.<string>|null} [mentionedId] Content mentionedId
             * @property {string|null} [form] Content form
             * @property {string|null} [quoteMsgText] Content quoteMsgText
             * @property {string|null} [image] Content image
             * @property {string|null} [postId] Content postId
             * @property {string|null} [postTitle] Content postTitle
             * @property {string|null} [postContent] Content postContent
             * @property {string|null} [postType] Content postType
             * @property {string|null} [expressionId] Content expressionId
             * @property {string|null} [quoteImageUrl] Content quoteImageUrl
             * @property {string|null} [quoteImageName] Content quoteImageName
             * @property {number|Long|null} [fileSize] Content fileSize
             * @property {string|null} [video] Content video
             * @property {string|null} [audio] Content audio
             * @property {number|Long|null} [audioTime] Content audioTime
             * @property {string|null} [quoteVideoUrl] Content quoteVideoUrl
             * @property {number|Long|null} [quoteVideoTime] Content quoteVideoTime
             * @property {number|Long|null} [stickerItemId] Content stickerItemId
             * @property {number|Long|null} [stickerPackId] Content stickerPackId
             * @property {string|null} [roomName] Content roomName
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Content.
             * @memberof yh_msg.edit_message_send
             * @interface IContent
             * @augments yh_msg.edit_message_send.Content.$Properties
             * @deprecated Use yh_msg.edit_message_send.Content.$Properties instead.
             */

            /**
             * Shape of a Content.
             * @typedef {yh_msg.edit_message_send.Content.$Properties} yh_msg.edit_message_send.Content.$Shape
             */

            /**
             * Constructs a new Content.
             * @memberof yh_msg.edit_message_send
             * @classdesc Represents a Content.
             * @constructor
             * @param {yh_msg.edit_message_send.Content.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Content(properties) {
                this.mentionedId = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Content text.
             * @member {string} text
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             */
            Content.prototype.text = "";

            /**
             * Content buttons.
             * @member {string} buttons
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             */
            Content.prototype.buttons = "";

            /**
             * Content fileName.
             * @member {string} fileName
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             */
            Content.prototype.fileName = "";

            /**
             * Content file.
             * @member {string} file
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             */
            Content.prototype.file = "";

            /**
             * Content mentionedId.
             * @member {Array.<string>} mentionedId
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             */
            Content.prototype.mentionedId = $util.emptyArray;

            /**
             * Content form.
             * @member {string} form
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             */
            Content.prototype.form = "";

            /**
             * Content quoteMsgText.
             * @member {string} quoteMsgText
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             */
            Content.prototype.quoteMsgText = "";

            /**
             * Content image.
             * @member {string} image
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             */
            Content.prototype.image = "";

            /**
             * Content postId.
             * @member {string} postId
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             */
            Content.prototype.postId = "";

            /**
             * Content postTitle.
             * @member {string} postTitle
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             */
            Content.prototype.postTitle = "";

            /**
             * Content postContent.
             * @member {string} postContent
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             */
            Content.prototype.postContent = "";

            /**
             * Content postType.
             * @member {string} postType
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             */
            Content.prototype.postType = "";

            /**
             * Content expressionId.
             * @member {string} expressionId
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             */
            Content.prototype.expressionId = "";

            /**
             * Content quoteImageUrl.
             * @member {string} quoteImageUrl
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             */
            Content.prototype.quoteImageUrl = "";

            /**
             * Content quoteImageName.
             * @member {string} quoteImageName
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             */
            Content.prototype.quoteImageName = "";

            /**
             * Content fileSize.
             * @member {number|Long} fileSize
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             */
            Content.prototype.fileSize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Content video.
             * @member {string} video
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             */
            Content.prototype.video = "";

            /**
             * Content audio.
             * @member {string} audio
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             */
            Content.prototype.audio = "";

            /**
             * Content audioTime.
             * @member {number|Long} audioTime
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             */
            Content.prototype.audioTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Content quoteVideoUrl.
             * @member {string} quoteVideoUrl
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             */
            Content.prototype.quoteVideoUrl = "";

            /**
             * Content quoteVideoTime.
             * @member {number|Long} quoteVideoTime
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             */
            Content.prototype.quoteVideoTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Content stickerItemId.
             * @member {number|Long} stickerItemId
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             */
            Content.prototype.stickerItemId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Content stickerPackId.
             * @member {number|Long} stickerPackId
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             */
            Content.prototype.stickerPackId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Content roomName.
             * @member {string} roomName
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             */
            Content.prototype.roomName = "";

            /**
             * Creates a new Content instance using the specified properties.
             * @function create
             * @memberof yh_msg.edit_message_send.Content
             * @static
             * @param {yh_msg.edit_message_send.Content.$Properties=} [properties] Properties to set
             * @returns {yh_msg.edit_message_send.Content} Content instance
             * @type {{
             *   (properties: yh_msg.edit_message_send.Content.$Shape): yh_msg.edit_message_send.Content & yh_msg.edit_message_send.Content.$Shape;
             *   (properties?: yh_msg.edit_message_send.Content.$Properties): yh_msg.edit_message_send.Content;
             * }}
             */
            Content.create = function create(properties) {
                return new Content(properties);
            };

            /**
             * Encodes the specified Content message. Does not implicitly {@link yh_msg.edit_message_send.Content.verify|verify} messages.
             * @function encode
             * @memberof yh_msg.edit_message_send.Content
             * @static
             * @param {yh_msg.edit_message_send.Content.$Properties} message Content message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Content.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
                if (message.buttons != null && Object.hasOwnProperty.call(message, "buttons"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.buttons);
                if (message.fileName != null && Object.hasOwnProperty.call(message, "fileName"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.fileName);
                if (message.file != null && Object.hasOwnProperty.call(message, "file"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.file);
                if (message.mentionedId != null && message.mentionedId.length)
                    for (let i = 0; i < message.mentionedId.length; ++i)
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.mentionedId[i]);
                if (message.form != null && Object.hasOwnProperty.call(message, "form"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.form);
                if (message.quoteMsgText != null && Object.hasOwnProperty.call(message, "quoteMsgText"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.quoteMsgText);
                if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.image);
                if (message.postId != null && Object.hasOwnProperty.call(message, "postId"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.postId);
                if (message.postTitle != null && Object.hasOwnProperty.call(message, "postTitle"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.postTitle);
                if (message.postContent != null && Object.hasOwnProperty.call(message, "postContent"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.postContent);
                if (message.postType != null && Object.hasOwnProperty.call(message, "postType"))
                    writer.uint32(/* id 13, wireType 2 =*/106).string(message.postType);
                if (message.expressionId != null && Object.hasOwnProperty.call(message, "expressionId"))
                    writer.uint32(/* id 15, wireType 2 =*/122).string(message.expressionId);
                if (message.quoteImageUrl != null && Object.hasOwnProperty.call(message, "quoteImageUrl"))
                    writer.uint32(/* id 16, wireType 2 =*/130).string(message.quoteImageUrl);
                if (message.quoteImageName != null && Object.hasOwnProperty.call(message, "quoteImageName"))
                    writer.uint32(/* id 17, wireType 2 =*/138).string(message.quoteImageName);
                if (message.fileSize != null && Object.hasOwnProperty.call(message, "fileSize"))
                    writer.uint32(/* id 18, wireType 0 =*/144).int64(message.fileSize);
                if (message.video != null && Object.hasOwnProperty.call(message, "video"))
                    writer.uint32(/* id 19, wireType 2 =*/154).string(message.video);
                if (message.audio != null && Object.hasOwnProperty.call(message, "audio"))
                    writer.uint32(/* id 21, wireType 2 =*/170).string(message.audio);
                if (message.audioTime != null && Object.hasOwnProperty.call(message, "audioTime"))
                    writer.uint32(/* id 22, wireType 0 =*/176).int64(message.audioTime);
                if (message.quoteVideoUrl != null && Object.hasOwnProperty.call(message, "quoteVideoUrl"))
                    writer.uint32(/* id 23, wireType 2 =*/186).string(message.quoteVideoUrl);
                if (message.quoteVideoTime != null && Object.hasOwnProperty.call(message, "quoteVideoTime"))
                    writer.uint32(/* id 24, wireType 0 =*/192).uint64(message.quoteVideoTime);
                if (message.stickerItemId != null && Object.hasOwnProperty.call(message, "stickerItemId"))
                    writer.uint32(/* id 25, wireType 0 =*/200).int64(message.stickerItemId);
                if (message.stickerPackId != null && Object.hasOwnProperty.call(message, "stickerPackId"))
                    writer.uint32(/* id 26, wireType 0 =*/208).int64(message.stickerPackId);
                if (message.roomName != null && Object.hasOwnProperty.call(message, "roomName"))
                    writer.uint32(/* id 29, wireType 2 =*/234).string(message.roomName);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Content message, length delimited. Does not implicitly {@link yh_msg.edit_message_send.Content.verify|verify} messages.
             * @function encodeDelimited
             * @memberof yh_msg.edit_message_send.Content
             * @static
             * @param {yh_msg.edit_message_send.Content.$Properties} message Content message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Content.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Content message from the specified reader or buffer.
             * @function decode
             * @memberof yh_msg.edit_message_send.Content
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {yh_msg.edit_message_send.Content & yh_msg.edit_message_send.Content.$Shape} Content
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Content.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_msg.edit_message_send.Content(), value;
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
                                message.text = value;
                            else
                                delete message.text;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.buttons = value;
                            else
                                delete message.buttons;
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.fileName = value;
                            else
                                delete message.fileName;
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.file = value;
                            else
                                delete message.file;
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            if (!(message.mentionedId && message.mentionedId.length))
                                message.mentionedId = [];
                            message.mentionedId.push(reader.string());
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.form = value;
                            else
                                delete message.form;
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.quoteMsgText = value;
                            else
                                delete message.quoteMsgText;
                            continue;
                        }
                    case 9: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.image = value;
                            else
                                delete message.image;
                            continue;
                        }
                    case 10: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.postId = value;
                            else
                                delete message.postId;
                            continue;
                        }
                    case 11: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.postTitle = value;
                            else
                                delete message.postTitle;
                            continue;
                        }
                    case 12: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.postContent = value;
                            else
                                delete message.postContent;
                            continue;
                        }
                    case 13: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.postType = value;
                            else
                                delete message.postType;
                            continue;
                        }
                    case 15: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.expressionId = value;
                            else
                                delete message.expressionId;
                            continue;
                        }
                    case 16: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.quoteImageUrl = value;
                            else
                                delete message.quoteImageUrl;
                            continue;
                        }
                    case 17: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.quoteImageName = value;
                            else
                                delete message.quoteImageName;
                            continue;
                        }
                    case 18: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.fileSize = value;
                            else
                                delete message.fileSize;
                            continue;
                        }
                    case 19: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.video = value;
                            else
                                delete message.video;
                            continue;
                        }
                    case 21: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.audio = value;
                            else
                                delete message.audio;
                            continue;
                        }
                    case 22: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.audioTime = value;
                            else
                                delete message.audioTime;
                            continue;
                        }
                    case 23: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.quoteVideoUrl = value;
                            else
                                delete message.quoteVideoUrl;
                            continue;
                        }
                    case 24: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.uint64()) === "object" ? value.low || value.high : value !== 0)
                                message.quoteVideoTime = value;
                            else
                                delete message.quoteVideoTime;
                            continue;
                        }
                    case 25: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.stickerItemId = value;
                            else
                                delete message.stickerItemId;
                            continue;
                        }
                    case 26: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.stickerPackId = value;
                            else
                                delete message.stickerPackId;
                            continue;
                        }
                    case 29: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.roomName = value;
                            else
                                delete message.roomName;
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
             * Decodes a Content message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof yh_msg.edit_message_send.Content
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {yh_msg.edit_message_send.Content & yh_msg.edit_message_send.Content.$Shape} Content
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Content.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Content message.
             * @function verify
             * @memberof yh_msg.edit_message_send.Content
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Content.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.text != null && message.hasOwnProperty("text"))
                    if (!$util.isString(message.text))
                        return "text: string expected";
                if (message.buttons != null && message.hasOwnProperty("buttons"))
                    if (!$util.isString(message.buttons))
                        return "buttons: string expected";
                if (message.fileName != null && message.hasOwnProperty("fileName"))
                    if (!$util.isString(message.fileName))
                        return "fileName: string expected";
                if (message.file != null && message.hasOwnProperty("file"))
                    if (!$util.isString(message.file))
                        return "file: string expected";
                if (message.mentionedId != null && message.hasOwnProperty("mentionedId")) {
                    if (!Array.isArray(message.mentionedId))
                        return "mentionedId: array expected";
                    for (let i = 0; i < message.mentionedId.length; ++i)
                        if (!$util.isString(message.mentionedId[i]))
                            return "mentionedId: string[] expected";
                }
                if (message.form != null && message.hasOwnProperty("form"))
                    if (!$util.isString(message.form))
                        return "form: string expected";
                if (message.quoteMsgText != null && message.hasOwnProperty("quoteMsgText"))
                    if (!$util.isString(message.quoteMsgText))
                        return "quoteMsgText: string expected";
                if (message.image != null && message.hasOwnProperty("image"))
                    if (!$util.isString(message.image))
                        return "image: string expected";
                if (message.postId != null && message.hasOwnProperty("postId"))
                    if (!$util.isString(message.postId))
                        return "postId: string expected";
                if (message.postTitle != null && message.hasOwnProperty("postTitle"))
                    if (!$util.isString(message.postTitle))
                        return "postTitle: string expected";
                if (message.postContent != null && message.hasOwnProperty("postContent"))
                    if (!$util.isString(message.postContent))
                        return "postContent: string expected";
                if (message.postType != null && message.hasOwnProperty("postType"))
                    if (!$util.isString(message.postType))
                        return "postType: string expected";
                if (message.expressionId != null && message.hasOwnProperty("expressionId"))
                    if (!$util.isString(message.expressionId))
                        return "expressionId: string expected";
                if (message.quoteImageUrl != null && message.hasOwnProperty("quoteImageUrl"))
                    if (!$util.isString(message.quoteImageUrl))
                        return "quoteImageUrl: string expected";
                if (message.quoteImageName != null && message.hasOwnProperty("quoteImageName"))
                    if (!$util.isString(message.quoteImageName))
                        return "quoteImageName: string expected";
                if (message.fileSize != null && message.hasOwnProperty("fileSize"))
                    if (!$util.isInteger(message.fileSize) && !(message.fileSize && $util.isInteger(message.fileSize.low) && $util.isInteger(message.fileSize.high)))
                        return "fileSize: integer|Long expected";
                if (message.video != null && message.hasOwnProperty("video"))
                    if (!$util.isString(message.video))
                        return "video: string expected";
                if (message.audio != null && message.hasOwnProperty("audio"))
                    if (!$util.isString(message.audio))
                        return "audio: string expected";
                if (message.audioTime != null && message.hasOwnProperty("audioTime"))
                    if (!$util.isInteger(message.audioTime) && !(message.audioTime && $util.isInteger(message.audioTime.low) && $util.isInteger(message.audioTime.high)))
                        return "audioTime: integer|Long expected";
                if (message.quoteVideoUrl != null && message.hasOwnProperty("quoteVideoUrl"))
                    if (!$util.isString(message.quoteVideoUrl))
                        return "quoteVideoUrl: string expected";
                if (message.quoteVideoTime != null && message.hasOwnProperty("quoteVideoTime"))
                    if (!$util.isInteger(message.quoteVideoTime) && !(message.quoteVideoTime && $util.isInteger(message.quoteVideoTime.low) && $util.isInteger(message.quoteVideoTime.high)))
                        return "quoteVideoTime: integer|Long expected";
                if (message.stickerItemId != null && message.hasOwnProperty("stickerItemId"))
                    if (!$util.isInteger(message.stickerItemId) && !(message.stickerItemId && $util.isInteger(message.stickerItemId.low) && $util.isInteger(message.stickerItemId.high)))
                        return "stickerItemId: integer|Long expected";
                if (message.stickerPackId != null && message.hasOwnProperty("stickerPackId"))
                    if (!$util.isInteger(message.stickerPackId) && !(message.stickerPackId && $util.isInteger(message.stickerPackId.low) && $util.isInteger(message.stickerPackId.high)))
                        return "stickerPackId: integer|Long expected";
                if (message.roomName != null && message.hasOwnProperty("roomName"))
                    if (!$util.isString(message.roomName))
                        return "roomName: string expected";
                return null;
            };

            /**
             * Creates a Content message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof yh_msg.edit_message_send.Content
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {yh_msg.edit_message_send.Content} Content
             */
            Content.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.yh_msg.edit_message_send.Content)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.yh_msg.edit_message_send.Content();
                if (object.text != null)
                    if (typeof object.text !== "string" || object.text.length)
                        message.text = String(object.text);
                if (object.buttons != null)
                    if (typeof object.buttons !== "string" || object.buttons.length)
                        message.buttons = String(object.buttons);
                if (object.fileName != null)
                    if (typeof object.fileName !== "string" || object.fileName.length)
                        message.fileName = String(object.fileName);
                if (object.file != null)
                    if (typeof object.file !== "string" || object.file.length)
                        message.file = String(object.file);
                if (object.mentionedId) {
                    if (!Array.isArray(object.mentionedId))
                        throw TypeError(".yh_msg.edit_message_send.Content.mentionedId: array expected");
                    message.mentionedId = Array(object.mentionedId.length);
                    for (let i = 0; i < object.mentionedId.length; ++i)
                        message.mentionedId[i] = String(object.mentionedId[i]);
                }
                if (object.form != null)
                    if (typeof object.form !== "string" || object.form.length)
                        message.form = String(object.form);
                if (object.quoteMsgText != null)
                    if (typeof object.quoteMsgText !== "string" || object.quoteMsgText.length)
                        message.quoteMsgText = String(object.quoteMsgText);
                if (object.image != null)
                    if (typeof object.image !== "string" || object.image.length)
                        message.image = String(object.image);
                if (object.postId != null)
                    if (typeof object.postId !== "string" || object.postId.length)
                        message.postId = String(object.postId);
                if (object.postTitle != null)
                    if (typeof object.postTitle !== "string" || object.postTitle.length)
                        message.postTitle = String(object.postTitle);
                if (object.postContent != null)
                    if (typeof object.postContent !== "string" || object.postContent.length)
                        message.postContent = String(object.postContent);
                if (object.postType != null)
                    if (typeof object.postType !== "string" || object.postType.length)
                        message.postType = String(object.postType);
                if (object.expressionId != null)
                    if (typeof object.expressionId !== "string" || object.expressionId.length)
                        message.expressionId = String(object.expressionId);
                if (object.quoteImageUrl != null)
                    if (typeof object.quoteImageUrl !== "string" || object.quoteImageUrl.length)
                        message.quoteImageUrl = String(object.quoteImageUrl);
                if (object.quoteImageName != null)
                    if (typeof object.quoteImageName !== "string" || object.quoteImageName.length)
                        message.quoteImageName = String(object.quoteImageName);
                if (object.fileSize != null)
                    if (typeof object.fileSize === "object" ? object.fileSize.low || object.fileSize.high : Number(object.fileSize) !== 0)
                        if ($util.Long)
                            message.fileSize = $util.Long.fromValue(object.fileSize, false);
                        else if (typeof object.fileSize === "string")
                            message.fileSize = parseInt(object.fileSize, 10);
                        else if (typeof object.fileSize === "number")
                            message.fileSize = object.fileSize;
                        else if (typeof object.fileSize === "object")
                            message.fileSize = new $util.LongBits(object.fileSize.low >>> 0, object.fileSize.high >>> 0).toNumber();
                if (object.video != null)
                    if (typeof object.video !== "string" || object.video.length)
                        message.video = String(object.video);
                if (object.audio != null)
                    if (typeof object.audio !== "string" || object.audio.length)
                        message.audio = String(object.audio);
                if (object.audioTime != null)
                    if (typeof object.audioTime === "object" ? object.audioTime.low || object.audioTime.high : Number(object.audioTime) !== 0)
                        if ($util.Long)
                            message.audioTime = $util.Long.fromValue(object.audioTime, false);
                        else if (typeof object.audioTime === "string")
                            message.audioTime = parseInt(object.audioTime, 10);
                        else if (typeof object.audioTime === "number")
                            message.audioTime = object.audioTime;
                        else if (typeof object.audioTime === "object")
                            message.audioTime = new $util.LongBits(object.audioTime.low >>> 0, object.audioTime.high >>> 0).toNumber();
                if (object.quoteVideoUrl != null)
                    if (typeof object.quoteVideoUrl !== "string" || object.quoteVideoUrl.length)
                        message.quoteVideoUrl = String(object.quoteVideoUrl);
                if (object.quoteVideoTime != null)
                    if (typeof object.quoteVideoTime === "object" ? object.quoteVideoTime.low || object.quoteVideoTime.high : Number(object.quoteVideoTime) !== 0)
                        if ($util.Long)
                            message.quoteVideoTime = $util.Long.fromValue(object.quoteVideoTime, true);
                        else if (typeof object.quoteVideoTime === "string")
                            message.quoteVideoTime = parseInt(object.quoteVideoTime, 10);
                        else if (typeof object.quoteVideoTime === "number")
                            message.quoteVideoTime = object.quoteVideoTime;
                        else if (typeof object.quoteVideoTime === "object")
                            message.quoteVideoTime = new $util.LongBits(object.quoteVideoTime.low >>> 0, object.quoteVideoTime.high >>> 0).toNumber(true);
                if (object.stickerItemId != null)
                    if (typeof object.stickerItemId === "object" ? object.stickerItemId.low || object.stickerItemId.high : Number(object.stickerItemId) !== 0)
                        if ($util.Long)
                            message.stickerItemId = $util.Long.fromValue(object.stickerItemId, false);
                        else if (typeof object.stickerItemId === "string")
                            message.stickerItemId = parseInt(object.stickerItemId, 10);
                        else if (typeof object.stickerItemId === "number")
                            message.stickerItemId = object.stickerItemId;
                        else if (typeof object.stickerItemId === "object")
                            message.stickerItemId = new $util.LongBits(object.stickerItemId.low >>> 0, object.stickerItemId.high >>> 0).toNumber();
                if (object.stickerPackId != null)
                    if (typeof object.stickerPackId === "object" ? object.stickerPackId.low || object.stickerPackId.high : Number(object.stickerPackId) !== 0)
                        if ($util.Long)
                            message.stickerPackId = $util.Long.fromValue(object.stickerPackId, false);
                        else if (typeof object.stickerPackId === "string")
                            message.stickerPackId = parseInt(object.stickerPackId, 10);
                        else if (typeof object.stickerPackId === "number")
                            message.stickerPackId = object.stickerPackId;
                        else if (typeof object.stickerPackId === "object")
                            message.stickerPackId = new $util.LongBits(object.stickerPackId.low >>> 0, object.stickerPackId.high >>> 0).toNumber();
                if (object.roomName != null)
                    if (typeof object.roomName !== "string" || object.roomName.length)
                        message.roomName = String(object.roomName);
                return message;
            };

            /**
             * Creates a plain object from a Content message. Also converts values to other types if specified.
             * @function toObject
             * @memberof yh_msg.edit_message_send.Content
             * @static
             * @param {yh_msg.edit_message_send.Content} message Content
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Content.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.mentionedId = [];
                if (options.defaults) {
                    object.text = "";
                    object.buttons = "";
                    object.fileName = "";
                    object.file = "";
                    object.form = "";
                    object.quoteMsgText = "";
                    object.image = "";
                    object.postId = "";
                    object.postTitle = "";
                    object.postContent = "";
                    object.postType = "";
                    object.expressionId = "";
                    object.quoteImageUrl = "";
                    object.quoteImageName = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.fileSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.fileSize = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.video = "";
                    object.audio = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.audioTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.audioTime = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.quoteVideoUrl = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.quoteVideoTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.quoteVideoTime = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.stickerItemId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.stickerItemId = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.stickerPackId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.stickerPackId = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.roomName = "";
                }
                if (message.text != null && message.hasOwnProperty("text"))
                    object.text = message.text;
                if (message.buttons != null && message.hasOwnProperty("buttons"))
                    object.buttons = message.buttons;
                if (message.fileName != null && message.hasOwnProperty("fileName"))
                    object.fileName = message.fileName;
                if (message.file != null && message.hasOwnProperty("file"))
                    object.file = message.file;
                if (message.mentionedId && message.mentionedId.length) {
                    object.mentionedId = Array(message.mentionedId.length);
                    for (let j = 0; j < message.mentionedId.length; ++j)
                        object.mentionedId[j] = message.mentionedId[j];
                }
                if (message.form != null && message.hasOwnProperty("form"))
                    object.form = message.form;
                if (message.quoteMsgText != null && message.hasOwnProperty("quoteMsgText"))
                    object.quoteMsgText = message.quoteMsgText;
                if (message.image != null && message.hasOwnProperty("image"))
                    object.image = message.image;
                if (message.postId != null && message.hasOwnProperty("postId"))
                    object.postId = message.postId;
                if (message.postTitle != null && message.hasOwnProperty("postTitle"))
                    object.postTitle = message.postTitle;
                if (message.postContent != null && message.hasOwnProperty("postContent"))
                    object.postContent = message.postContent;
                if (message.postType != null && message.hasOwnProperty("postType"))
                    object.postType = message.postType;
                if (message.expressionId != null && message.hasOwnProperty("expressionId"))
                    object.expressionId = message.expressionId;
                if (message.quoteImageUrl != null && message.hasOwnProperty("quoteImageUrl"))
                    object.quoteImageUrl = message.quoteImageUrl;
                if (message.quoteImageName != null && message.hasOwnProperty("quoteImageName"))
                    object.quoteImageName = message.quoteImageName;
                if (message.fileSize != null && message.hasOwnProperty("fileSize"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.fileSize = typeof message.fileSize === "number" ? BigInt(message.fileSize) : $util.Long.fromBits(message.fileSize.low >>> 0, message.fileSize.high >>> 0, false).toBigInt();
                    else if (typeof message.fileSize === "number")
                        object.fileSize = options.longs === String ? String(message.fileSize) : message.fileSize;
                    else
                        object.fileSize = options.longs === String ? $util.Long.prototype.toString.call(message.fileSize) : options.longs === Number ? new $util.LongBits(message.fileSize.low >>> 0, message.fileSize.high >>> 0).toNumber() : message.fileSize;
                if (message.video != null && message.hasOwnProperty("video"))
                    object.video = message.video;
                if (message.audio != null && message.hasOwnProperty("audio"))
                    object.audio = message.audio;
                if (message.audioTime != null && message.hasOwnProperty("audioTime"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.audioTime = typeof message.audioTime === "number" ? BigInt(message.audioTime) : $util.Long.fromBits(message.audioTime.low >>> 0, message.audioTime.high >>> 0, false).toBigInt();
                    else if (typeof message.audioTime === "number")
                        object.audioTime = options.longs === String ? String(message.audioTime) : message.audioTime;
                    else
                        object.audioTime = options.longs === String ? $util.Long.prototype.toString.call(message.audioTime) : options.longs === Number ? new $util.LongBits(message.audioTime.low >>> 0, message.audioTime.high >>> 0).toNumber() : message.audioTime;
                if (message.quoteVideoUrl != null && message.hasOwnProperty("quoteVideoUrl"))
                    object.quoteVideoUrl = message.quoteVideoUrl;
                if (message.quoteVideoTime != null && message.hasOwnProperty("quoteVideoTime"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.quoteVideoTime = typeof message.quoteVideoTime === "number" ? BigInt(message.quoteVideoTime) : $util.Long.fromBits(message.quoteVideoTime.low >>> 0, message.quoteVideoTime.high >>> 0, true).toBigInt();
                    else if (typeof message.quoteVideoTime === "number")
                        object.quoteVideoTime = options.longs === String ? String(message.quoteVideoTime) : message.quoteVideoTime;
                    else
                        object.quoteVideoTime = options.longs === String ? $util.Long.prototype.toString.call(message.quoteVideoTime) : options.longs === Number ? new $util.LongBits(message.quoteVideoTime.low >>> 0, message.quoteVideoTime.high >>> 0).toNumber(true) : message.quoteVideoTime;
                if (message.stickerItemId != null && message.hasOwnProperty("stickerItemId"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.stickerItemId = typeof message.stickerItemId === "number" ? BigInt(message.stickerItemId) : $util.Long.fromBits(message.stickerItemId.low >>> 0, message.stickerItemId.high >>> 0, false).toBigInt();
                    else if (typeof message.stickerItemId === "number")
                        object.stickerItemId = options.longs === String ? String(message.stickerItemId) : message.stickerItemId;
                    else
                        object.stickerItemId = options.longs === String ? $util.Long.prototype.toString.call(message.stickerItemId) : options.longs === Number ? new $util.LongBits(message.stickerItemId.low >>> 0, message.stickerItemId.high >>> 0).toNumber() : message.stickerItemId;
                if (message.stickerPackId != null && message.hasOwnProperty("stickerPackId"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.stickerPackId = typeof message.stickerPackId === "number" ? BigInt(message.stickerPackId) : $util.Long.fromBits(message.stickerPackId.low >>> 0, message.stickerPackId.high >>> 0, false).toBigInt();
                    else if (typeof message.stickerPackId === "number")
                        object.stickerPackId = options.longs === String ? String(message.stickerPackId) : message.stickerPackId;
                    else
                        object.stickerPackId = options.longs === String ? $util.Long.prototype.toString.call(message.stickerPackId) : options.longs === Number ? new $util.LongBits(message.stickerPackId.low >>> 0, message.stickerPackId.high >>> 0).toNumber() : message.stickerPackId;
                if (message.roomName != null && message.hasOwnProperty("roomName"))
                    object.roomName = message.roomName;
                return object;
            };

            /**
             * Converts this Content to JSON.
             * @function toJSON
             * @memberof yh_msg.edit_message_send.Content
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Content.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Content
             * @function getTypeUrl
             * @memberof yh_msg.edit_message_send.Content
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Content.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/yh_msg.edit_message_send.Content";
            };

            return Content;
        })();

        return edit_message_send;
    })();

    yh_msg.edit_message = (function() {

        /**
         * Properties of an edit_message.
         * @typedef {Object} yh_msg.edit_message.$Properties
         * @property {yh_msg.Status.$Properties|null} [status] edit_message status
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of an edit_message.
         * @memberof yh_msg
         * @interface Iedit_message
         * @augments yh_msg.edit_message.$Properties
         * @deprecated Use yh_msg.edit_message.$Properties instead.
         */

        /**
         * Shape of an edit_message.
         * @typedef {yh_msg.edit_message.$Properties} yh_msg.edit_message.$Shape
         */

        /**
         * Constructs a new edit_message.
         * @memberof yh_msg
         * @classdesc Represents an edit_message.
         * @constructor
         * @param {yh_msg.edit_message.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function edit_message(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * edit_message status.
         * @member {yh_msg.Status.$Properties|null|undefined} status
         * @memberof yh_msg.edit_message
         * @instance
         */
        edit_message.prototype.status = null;

        /**
         * Creates a new edit_message instance using the specified properties.
         * @function create
         * @memberof yh_msg.edit_message
         * @static
         * @param {yh_msg.edit_message.$Properties=} [properties] Properties to set
         * @returns {yh_msg.edit_message} edit_message instance
         * @type {{
         *   (properties: yh_msg.edit_message.$Shape): yh_msg.edit_message & yh_msg.edit_message.$Shape;
         *   (properties?: yh_msg.edit_message.$Properties): yh_msg.edit_message;
         * }}
         */
        edit_message.create = function create(properties) {
            return new edit_message(properties);
        };

        /**
         * Encodes the specified edit_message message. Does not implicitly {@link yh_msg.edit_message.verify|verify} messages.
         * @function encode
         * @memberof yh_msg.edit_message
         * @static
         * @param {yh_msg.edit_message.$Properties} message edit_message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        edit_message.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.yh_msg.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified edit_message message, length delimited. Does not implicitly {@link yh_msg.edit_message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof yh_msg.edit_message
         * @static
         * @param {yh_msg.edit_message.$Properties} message edit_message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        edit_message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes an edit_message message from the specified reader or buffer.
         * @function decode
         * @memberof yh_msg.edit_message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {yh_msg.edit_message & yh_msg.edit_message.$Shape} edit_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        edit_message.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.yh_msg.edit_message(), value;
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
                        message.status = $root.yh_msg.Status.decode(reader, reader.uint32(), undefined, _depth + 1, message.status);
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
         * Decodes an edit_message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof yh_msg.edit_message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {yh_msg.edit_message & yh_msg.edit_message.$Shape} edit_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        edit_message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an edit_message message.
         * @function verify
         * @memberof yh_msg.edit_message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        edit_message.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.yh_msg.Status.verify(message.status, _depth + 1);
                if (error)
                    return "status." + error;
            }
            return null;
        };

        /**
         * Creates an edit_message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof yh_msg.edit_message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {yh_msg.edit_message} edit_message
         */
        edit_message.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.yh_msg.edit_message)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.yh_msg.edit_message();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".yh_msg.edit_message.status: object expected");
                message.status = $root.yh_msg.Status.fromObject(object.status, _depth + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from an edit_message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof yh_msg.edit_message
         * @static
         * @param {yh_msg.edit_message} message edit_message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        edit_message.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                object.status = null;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.yh_msg.Status.toObject(message.status, options, _depth + 1);
            return object;
        };

        /**
         * Converts this edit_message to JSON.
         * @function toJSON
         * @memberof yh_msg.edit_message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        edit_message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for edit_message
         * @function getTypeUrl
         * @memberof yh_msg.edit_message
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        edit_message.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/yh_msg.edit_message";
        };

        return edit_message;
    })();

    return yh_msg;
})();

export {
  $root as default
};
