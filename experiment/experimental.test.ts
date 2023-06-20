import { describe, expect, test } from '@jest/globals';
import { Parser, parse, dot_atom as dot_atom2, fields, subject, unstructured_1 } from './message.fields';
import { readFileSync } from 'fs'

let input = readFileSync('../test/resources/hello.eml', 'ascii')
let ast = parse(input).ast!

describe('fields', () => {
  test('subject', () => {
    let f: fields = ast.fields as fields
    let s: subject = f.L.find(field => field.kind === 'subject')! as subject
    let val = (s.value as unstructured_1).A.B.map(b => b.D).join('')
    expect(s.name).toBe('Subject')
    expect(val).toBe('Re: ASDASDAS')
  })
})