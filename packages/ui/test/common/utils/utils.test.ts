import { equals, intersperse, objectEquals } from '@/common/utils'

describe('utils', () => {
  describe('equality functions', () => {
    const emptyObj = {}
    const reference = { numberProp: 1, objectProp: { emptyObj } }

    describe('objectEquals', () => {
      it('Default', () => {
        const isEqual = objectEquals<any>(reference)

        // Shallow by default
        expect(isEqual({ ...reference })).toBe(true)
        expect(isEqual({ numberProp: 1 })).toBe(false)
        expect(isEqual({ ...reference, objectProp: { emptyObj } })).toBe(false)

        // Only check the reference keys by default
        expect(isEqual({ ...reference, extraProp: 'foo' })).toBe(true)

        // Works with arrays too
        expect(objectEquals([1, 2])([1, 2])).toBe(true)
      })

      it('depth option', () => {
        const isEqual = objectEquals<any>(reference, { depth: 2 })
        expect(isEqual({ ...reference, objectProp: { emptyObj } })).toBe(true)
        expect(isEqual({ ...reference, objectProp: { emptyObj: {} } })).toBe(false)

        const isDeepEqual = objectEquals<any>(reference, { depth: true })
        expect(isDeepEqual({ ...reference, objectProp: { emptyObj: {} } })).toBe(true)
      })

      it('checkExtraKeys option', () => {
        const isEqual = objectEquals<any>(reference, { checkExtraKeys: true })

        expect(isEqual({ ...reference, extraProp: 'foo' })).toBe(false)
      })
    })

    describe('equals', () => {
      it('Default', () => {
        expect(equals(1)(1)).toBe(true)
        expect(equals(1)(2)).toBe(false)
        expect(equals(reference)({ ...reference })).toBe(true)
        expect(equals(reference)({ ...reference, objectProp: { emptyObj } })).toBe(false)
        expect(equals<any>(reference)({ ...reference, extraProp: 'foo' })).toBe(true)
      })

      it('Options from objectEquals', () => {
        const isEqual = equals<any>(reference, { depth: true, checkExtraKeys: true })

        expect(equals(reference)({ ...reference })).toBe(true)
        expect(isEqual({ ...reference, objectProp: { emptyObj: {} } })).toBe(true)
        expect(isEqual({ ...reference, extraProp: 'foo' })).toBe(false)
      })
    })
  })

  describe('intersperse', () => {
    it('Intersperses', () => {
      expect(intersperse([], '|')).toEqual([])
      expect(intersperse([1], '|')).toEqual([1])
      expect(intersperse([1, 2], '|')).toEqual([1, '|', 2])
      expect(intersperse([1, 2, 3], '|')).toEqual([1, '|', 2, '|', 3])
      expect(intersperse([null, 'foo', true], {})).toEqual([null, {}, 'foo', {}, true])
    })
  })
})
