import {expectType} from 'tsd';
import {Except} from '../index';

declare const except: Except<{a: number; b: string}, 'b'>;
expectType<{a: number}>(except);

// Generic properties
interface Example {
	[key: string]: unknown;
	foo: number;
	bar: string;
}

const test: Except<Example, 'bar'> = {foo: 123, bar: 'asdf'};
expectType<number>(test.foo);
expectType<unknown>(test.bar);
