import { SetMetadata } from '@nestjs/common';
import { Chat } from 'telegraf/typings/core/types/typegram';
import { PREDICATE_METADATA } from '../../telegraf.constants';
import { MaybeArray, PredicateMetadata } from '../../types';

/**
 * `@ChatType` decorator for filtering messages by chat type.
 * When used, only messages from specified chat types will be processed.
 *
 * @example
 * ```typescript
 * @Composer()
 * @ChatType('private')
 * export class MyComposer {}
 *
 * // Or multiple types
 * @Composer()
 * @ChatType(['group', 'supergroup'])
 * export class MyComposer {}
 * ```
 */
export const ChatType = (types: MaybeArray<Chat['type']>): ClassDecorator =>
  SetMetadata<string, PredicateMetadata>(PREDICATE_METADATA, {
    type: 'filter',
    predicate: (ctx) => {
      const chatTypes = Array.isArray(types) ? types : [types];
      return chatTypes.includes(ctx.chat?.type);
    },
  });
