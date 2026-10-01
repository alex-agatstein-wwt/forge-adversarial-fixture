import { slugify } from './slug.mjs';

/**
 * Simple test runner
 */
function test(description, fn) {
  try {
    fn();
    console.log(`✓ ${description}`);
  } catch (error) {
    console.error(`✗ ${description}`);
    console.error(`  ${error.message}`);
    process.exit(1);
  }
}

function assertEquals(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(message || `Expected "${expected}" but got "${actual}"`);
  }
}

// Test: normal words
test('converts normal words to lowercase', () => {
  assertEquals(slugify('Hello World'), 'hello-world');
  assertEquals(slugify('Simple Test'), 'simple-test');
});

// Test: mixed whitespace
test('collapses multiple spaces to single hyphen', () => {
  assertEquals(slugify('hello   world'), 'hello-world');
  assertEquals(slugify('multiple    spaces     here'), 'multiple-spaces-here');
});

test('handles tabs and newlines', () => {
  assertEquals(slugify('hello\tworld'), 'hello-world');
  assertEquals(slugify('hello\nworld'), 'hello-world');
  assertEquals(slugify('hello \t\n world'), 'hello-world');
});

// Test: punctuation
test('replaces punctuation with hyphens', () => {
  assertEquals(slugify('hello, world!'), 'hello-world');
  assertEquals(slugify('hello.world'), 'hello-world');
  assertEquals(slugify('hello@world#test'), 'hello-world-test');
});

// Test: repeated separators
test('collapses repeated punctuation to single hyphen', () => {
  assertEquals(slugify('hello---world'), 'hello-world');
  assertEquals(slugify('hello...world'), 'hello-world');
  assertEquals(slugify('hello!!!world'), 'hello-world');
});

// Test: trim hyphens
test('trims leading and trailing hyphens', () => {
  assertEquals(slugify('-hello-world-'), 'hello-world');
  assertEquals(slugify('---hello---'), 'hello');
  assertEquals(slugify('...hello...'), 'hello');
});

// Test: empty cases
test('returns empty string for empty input', () => {
  assertEquals(slugify(''), '');
  assertEquals(slugify(null), '');
  assertEquals(slugify(undefined), '');
});

test('returns empty string for only-punctuation input', () => {
  assertEquals(slugify('!!!'), '');
  assertEquals(slugify('...'), '');
  assertEquals(slugify('---'), '');
  assertEquals(slugify('!@#$%^&*()'), '');
});

// Test: mixed cases
test('handles complex mixed input', () => {
  assertEquals(slugify('Hello, World! This is a TEST.'), 'hello-world-this-is-a-test');
  assertEquals(slugify('  Leading and trailing spaces  '), 'leading-and-trailing-spaces');
});

// Test: numbers
test('preserves numbers', () => {
  assertEquals(slugify('test123'), 'test123');
  assertEquals(slugify('hello 123 world'), 'hello-123-world');
});

// Test: accented characters
test('converts accented characters to ASCII', () => {
  assertEquals(slugify('café'), 'cafe');
  assertEquals(slugify('naïve'), 'naive');
});

console.log('\nAll tests passed!');
