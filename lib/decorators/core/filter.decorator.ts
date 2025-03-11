import { SetMetadata } from '@nestjs/common';
import { PREDICATE_METADATA } from '../../telegraf.constants';
import { ContextPredicate, PredicateMetadata } from '../../types';

/**
 * `@Filter` decorator for filtering messages at the composer level.
 * When the function returns true, the message will be allowed through.
 *
 * @example
 * ```typescript
 * @Composer()
 * @Filter((ctx) => !ctx.message.text.includes('spam'))
 * export class MyComposer {}
 * ```
 */
export const Filter = (predicate: ContextPredicate): ClassDecorator =>
  SetMetadata<string, PredicateMetadata>(PREDICATE_METADATA, {
    type: 'filter',
    predicate,
  });
