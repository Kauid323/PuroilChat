import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace yh_conversation. */
export namespace yh_conversation {

    /**
     * Properties of a Status.
     * @deprecated Use yh_conversation.Status.$Properties instead.
     */
    interface IStatus extends yh_conversation.Status.$Properties {
    }

    /** Represents a Status. */
    class Status {

        /**
         * Constructs a new Status.
         * @param [properties] Properties to set
         */
        constructor(properties?: yh_conversation.Status.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** Status number. */
        number: (number|Long);

        /** Status code. */
        code: number;

        /** Status msg. */
        msg: string;

        /**
         * Creates a new Status instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Status instance
         */
        static create(properties: yh_conversation.Status.$Shape): yh_conversation.Status & yh_conversation.Status.$Shape;
        static create(properties?: yh_conversation.Status.$Properties): yh_conversation.Status;

        /**
         * Encodes the specified Status message. Does not implicitly {@link yh_conversation.Status.verify|verify} messages.
         * @param message Status message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: yh_conversation.Status.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Status message, length delimited. Does not implicitly {@link yh_conversation.Status.verify|verify} messages.
         * @param message Status message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: yh_conversation.Status.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Status message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {yh_conversation.Status & yh_conversation.Status.$Shape} Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): yh_conversation.Status & yh_conversation.Status.$Shape;

        /**
         * Decodes a Status message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {yh_conversation.Status & yh_conversation.Status.$Shape} Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): yh_conversation.Status & yh_conversation.Status.$Shape;

        /**
         * Verifies a Status message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Status message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Status
         */
        static fromObject(object: { [k: string]: any }): yh_conversation.Status;

        /**
         * Creates a plain object from a Status message. Also converts values to other types if specified.
         * @param message Status
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: yh_conversation.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Status to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Status
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Status {

        /** Properties of a Status. */
        interface $Properties {

            /** Status number */
            number?: (number|Long|null);

            /** Status code */
            code?: (number|null);

            /** Status msg */
            msg?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Status. */
        type $Shape = yh_conversation.Status.$Properties;
    }

    /**
     * Properties of a ConversationList.
     * @deprecated Use yh_conversation.ConversationList.$Properties instead.
     */
    interface IConversationList extends yh_conversation.ConversationList.$Properties {
    }

    /** Represents a ConversationList. */
    class ConversationList {

        /**
         * Constructs a new ConversationList.
         * @param [properties] Properties to set
         */
        constructor(properties?: yh_conversation.ConversationList.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** ConversationList status. */
        status?: (yh_conversation.Status.$Properties|null);

        /** ConversationList data. */
        data: yh_conversation.ConversationList.ConversationData.$Properties[];

        /** ConversationList total. */
        total: number;

        /** ConversationList requestId. */
        requestId: string;

        /**
         * Creates a new ConversationList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConversationList instance
         */
        static create(properties: yh_conversation.ConversationList.$Shape): yh_conversation.ConversationList & yh_conversation.ConversationList.$Shape;
        static create(properties?: yh_conversation.ConversationList.$Properties): yh_conversation.ConversationList;

        /**
         * Encodes the specified ConversationList message. Does not implicitly {@link yh_conversation.ConversationList.verify|verify} messages.
         * @param message ConversationList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: yh_conversation.ConversationList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConversationList message, length delimited. Does not implicitly {@link yh_conversation.ConversationList.verify|verify} messages.
         * @param message ConversationList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: yh_conversation.ConversationList.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConversationList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {yh_conversation.ConversationList & yh_conversation.ConversationList.$Shape} ConversationList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): yh_conversation.ConversationList & yh_conversation.ConversationList.$Shape;

        /**
         * Decodes a ConversationList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {yh_conversation.ConversationList & yh_conversation.ConversationList.$Shape} ConversationList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): yh_conversation.ConversationList & yh_conversation.ConversationList.$Shape;

        /**
         * Verifies a ConversationList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConversationList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConversationList
         */
        static fromObject(object: { [k: string]: any }): yh_conversation.ConversationList;

        /**
         * Creates a plain object from a ConversationList message. Also converts values to other types if specified.
         * @param message ConversationList
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: yh_conversation.ConversationList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConversationList to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ConversationList
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ConversationList {

        /** Properties of a ConversationList. */
        interface $Properties {

            /** ConversationList status */
            status?: (yh_conversation.Status.$Properties|null);

            /** ConversationList data */
            data?: (yh_conversation.ConversationList.ConversationData.$Properties[]|null);

            /** ConversationList total */
            total?: (number|null);

            /** ConversationList requestId */
            requestId?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ConversationList. */
        type $Shape = yh_conversation.ConversationList.$Properties;

        /**
         * Properties of a ConversationData.
         * @deprecated Use yh_conversation.ConversationList.ConversationData.$Properties instead.
         */
        interface IConversationData extends yh_conversation.ConversationList.ConversationData.$Properties {
        }

        /** Represents a ConversationData. */
        class ConversationData {

            /**
             * Constructs a new ConversationData.
             * @param [properties] Properties to set
             */
            constructor(properties?: yh_conversation.ConversationList.ConversationData.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** ConversationData chatId. */
            chatId: string;

            /** ConversationData chatType. */
            chatType: number;

            /** ConversationData name. */
            name: string;

            /** ConversationData chatContent. */
            chatContent: string;

            /** ConversationData timestampMs. */
            timestampMs: (number|Long);

            /** ConversationData unreadMessage. */
            unreadMessage: number;

            /** ConversationData at. */
            at: number;

            /** ConversationData avatarId. */
            avatarId: (number|Long);

            /** ConversationData avatarUrl. */
            avatarUrl: string;

            /** ConversationData doNotDisturb. */
            doNotDisturb: number;

            /** ConversationData timestamp. */
            timestamp: (number|Long);

            /** ConversationData atData. */
            atData?: (yh_conversation.ConversationList.ConversationData.AtData.$Properties|null);

            /** ConversationData certificationLevel. */
            certificationLevel: number;

            /**
             * Creates a new ConversationData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConversationData instance
             */
            static create(properties: yh_conversation.ConversationList.ConversationData.$Shape): yh_conversation.ConversationList.ConversationData & yh_conversation.ConversationList.ConversationData.$Shape;
            static create(properties?: yh_conversation.ConversationList.ConversationData.$Properties): yh_conversation.ConversationList.ConversationData;

            /**
             * Encodes the specified ConversationData message. Does not implicitly {@link yh_conversation.ConversationList.ConversationData.verify|verify} messages.
             * @param message ConversationData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: yh_conversation.ConversationList.ConversationData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConversationData message, length delimited. Does not implicitly {@link yh_conversation.ConversationList.ConversationData.verify|verify} messages.
             * @param message ConversationData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: yh_conversation.ConversationList.ConversationData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConversationData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {yh_conversation.ConversationList.ConversationData & yh_conversation.ConversationList.ConversationData.$Shape} ConversationData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): yh_conversation.ConversationList.ConversationData & yh_conversation.ConversationList.ConversationData.$Shape;

            /**
             * Decodes a ConversationData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {yh_conversation.ConversationList.ConversationData & yh_conversation.ConversationList.ConversationData.$Shape} ConversationData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): yh_conversation.ConversationList.ConversationData & yh_conversation.ConversationList.ConversationData.$Shape;

            /**
             * Verifies a ConversationData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConversationData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConversationData
             */
            static fromObject(object: { [k: string]: any }): yh_conversation.ConversationList.ConversationData;

            /**
             * Creates a plain object from a ConversationData message. Also converts values to other types if specified.
             * @param message ConversationData
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: yh_conversation.ConversationList.ConversationData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConversationData to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ConversationData
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ConversationData {

            /** Properties of a ConversationData. */
            interface $Properties {

                /** ConversationData chatId */
                chatId?: (string|null);

                /** ConversationData chatType */
                chatType?: (number|null);

                /** ConversationData name */
                name?: (string|null);

                /** ConversationData chatContent */
                chatContent?: (string|null);

                /** ConversationData timestampMs */
                timestampMs?: (number|Long|null);

                /** ConversationData unreadMessage */
                unreadMessage?: (number|null);

                /** ConversationData at */
                at?: (number|null);

                /** ConversationData avatarId */
                avatarId?: (number|Long|null);

                /** ConversationData avatarUrl */
                avatarUrl?: (string|null);

                /** ConversationData doNotDisturb */
                doNotDisturb?: (number|null);

                /** ConversationData timestamp */
                timestamp?: (number|Long|null);

                /** ConversationData atData */
                atData?: (yh_conversation.ConversationList.ConversationData.AtData.$Properties|null);

                /** ConversationData certificationLevel */
                certificationLevel?: (number|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ConversationData. */
            type $Shape = yh_conversation.ConversationList.ConversationData.$Properties;

            /**
             * Properties of an AtData.
             * @deprecated Use yh_conversation.ConversationList.ConversationData.AtData.$Properties instead.
             */
            interface IAtData extends yh_conversation.ConversationList.ConversationData.AtData.$Properties {
            }

            /** Represents an AtData. */
            class AtData {

                /**
                 * Constructs a new AtData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: yh_conversation.ConversationList.ConversationData.AtData.$Properties);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];

                /** AtData unknown. */
                unknown: (number|Long);

                /** AtData mentionedId. */
                mentionedId: string;

                /** AtData mentionedName. */
                mentionedName: string;

                /** AtData mentionedIn. */
                mentionedIn: string;

                /** AtData mentionerId. */
                mentionerId: string;

                /** AtData mentionerName. */
                mentionerName: string;

                /** AtData msgSeq. */
                msgSeq: (number|Long);

                /**
                 * Creates a new AtData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AtData instance
                 */
                static create(properties: yh_conversation.ConversationList.ConversationData.AtData.$Shape): yh_conversation.ConversationList.ConversationData.AtData & yh_conversation.ConversationList.ConversationData.AtData.$Shape;
                static create(properties?: yh_conversation.ConversationList.ConversationData.AtData.$Properties): yh_conversation.ConversationList.ConversationData.AtData;

                /**
                 * Encodes the specified AtData message. Does not implicitly {@link yh_conversation.ConversationList.ConversationData.AtData.verify|verify} messages.
                 * @param message AtData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: yh_conversation.ConversationList.ConversationData.AtData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AtData message, length delimited. Does not implicitly {@link yh_conversation.ConversationList.ConversationData.AtData.verify|verify} messages.
                 * @param message AtData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: yh_conversation.ConversationList.ConversationData.AtData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AtData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {yh_conversation.ConversationList.ConversationData.AtData & yh_conversation.ConversationList.ConversationData.AtData.$Shape} AtData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): yh_conversation.ConversationList.ConversationData.AtData & yh_conversation.ConversationList.ConversationData.AtData.$Shape;

                /**
                 * Decodes an AtData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {yh_conversation.ConversationList.ConversationData.AtData & yh_conversation.ConversationList.ConversationData.AtData.$Shape} AtData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): yh_conversation.ConversationList.ConversationData.AtData & yh_conversation.ConversationList.ConversationData.AtData.$Shape;

                /**
                 * Verifies an AtData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AtData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AtData
                 */
                static fromObject(object: { [k: string]: any }): yh_conversation.ConversationList.ConversationData.AtData;

                /**
                 * Creates a plain object from an AtData message. Also converts values to other types if specified.
                 * @param message AtData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: yh_conversation.ConversationList.ConversationData.AtData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AtData to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for AtData
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace AtData {

                /** Properties of an AtData. */
                interface $Properties {

                    /** AtData unknown */
                    unknown?: (number|Long|null);

                    /** AtData mentionedId */
                    mentionedId?: (string|null);

                    /** AtData mentionedName */
                    mentionedName?: (string|null);

                    /** AtData mentionedIn */
                    mentionedIn?: (string|null);

                    /** AtData mentionerId */
                    mentionerId?: (string|null);

                    /** AtData mentionerName */
                    mentionerName?: (string|null);

                    /** AtData msgSeq */
                    msgSeq?: (number|Long|null);

                    /** Unknown fields preserved while decoding */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an AtData. */
                type $Shape = yh_conversation.ConversationList.ConversationData.AtData.$Properties;
            }
        }
    }
}
