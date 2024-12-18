/**
 * This interface exposes getSubject method.
 * It can be useful for future testing.
 */

export interface ContextInterface {
    getSubject(): string;
}

export const ContextInterface = Symbol('ContextInterface');
