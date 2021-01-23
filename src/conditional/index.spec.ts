import { IsLiteral, isType } from '..'

describe('IsLiteral<T>', () => {
  test('`number` is not literal', () => {
    isType.equal<true, false, IsLiteral<number>>()
  })

  test('numeric literals are literals', () => {
    isType.equal<true, true, IsLiteral<1>>()
    isType.equal<true, true, IsLiteral<12345>>()
  })

  test('`string` is not literal', () => {
    isType.equal<true, false, IsLiteral<string>>()
  })

  test('string literals are literals', () => {
    isType.equal<true, true, IsLiteral<'1'>>()
    isType.equal<true, true, IsLiteral<'abc'>>()
  })
})