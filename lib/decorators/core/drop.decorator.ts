import { SetMetadata } from '@nestjs/common';
import { PREDICATE_METADATA } from '../../telegraf.constants';
import { ContextPredicate, PredicateMetadata } from '../../types';

/**
 * `@Drop` decorator for dropping messages at the composer level.
 * When the function returns true, the message will be dropped.
 *
 * @example
 * ```typescript
 * @Composer()
 * @Drop((ctx) => ctx.message.text === 'test')
 * export class MyComposer {}
 * ```
 */
export const Drop = (predicate: ContextPredicate): ClassDecorator =>
  SetMetadata<string, PredicateMetadata>(PREDICATE_METADATA, {
    type: 'drop',
    predicate,
  });
