import { createMachine, interpret, Interpreter } from 'xstate'

import { getSteps } from '@/common/model/machines/getSteps'

describe('getSteps()', () => {
  describe('Simple Stepper', () => {
    const simpleStepper = createMachine({
      id: 'simple',
      initial: 'requirements',
      states: {
        requirements: {
          on: { DONE: 'step1' },
        },
        step1: {
          meta: { isStep: true, stepTitle: 'Step One' },
          on: { DONE: 'step2' },
        },
        step2: {
          meta: { isStep: true, stepTitle: 'Step Two' },
          on: { DONE: 'done' },
        },
        done: {
          meta: { isStep: true, stepTitle: 'Step Done' },
          type: 'final',
        },
      },
    })
    let service: Interpreter<any>

    beforeEach(() => {
      service = interpret(simpleStepper)
      service.start()
    })

    it('Steps from machine', () => {
      expect(getSteps(service)).toEqual([
        { title: 'Step One', type: 'next' },
        { title: 'Step Two', type: 'next' },
        { title: 'Step Done', type: 'next' },
      ])
    })

    it('Active step', () => {
      service.send('DONE')

      expect(getSteps(service)).toEqual([
        { title: 'Step One', type: 'active' },
        { title: 'Step Two', type: 'next' },
        { title: 'Step Done', type: 'next' },
      ])
    })

    it('Active and past step', () => {
      service.send('DONE')
      service.send('DONE')

      expect(getSteps(service)).toEqual([
        { title: 'Step One', type: 'past' },
        { title: 'Step Two', type: 'active' },
        { title: 'Step Done', type: 'next' },
      ])
    })

    it('Last step', () => {
      service.send('DONE')
      service.send('DONE')
      service.send('DONE')

      expect(getSteps(service)).toEqual([
        { title: 'Step One', type: 'past' },
        { title: 'Step Two', type: 'past' },
        { title: 'Step Done', type: 'active' },
      ])
    })
  })

  describe('Simple Stepper with gaps', () => {
    const gapStepper = createMachine({
      id: 'simpleWithGaps',
      initial: 'requirements',
      states: {
        requirements: {
          on: { DONE: 'step1' },
        },
        step1: {
          meta: { isStep: true, stepTitle: 'Step One' },
          on: { DONE: 'step2' },
        },
        step2: {
          meta: { isStep: true, stepTitle: 'Step Two' },
          on: { DONE: 'gap' },
        },
        gap: {
          on: { DONE: 'done' },
        },
        done: {
          meta: { isStep: true, stepTitle: 'Step Done' },
          type: 'final',
        },
      },
    })
    let service: Interpreter<any>

    beforeEach(() => {
      service = interpret(gapStepper)
      service.start()
    })

    it('Steps from machine', () => {
      expect(getSteps(service)).toEqual([
        { title: 'Step One', type: 'next' },
        { title: 'Step Two', type: 'next' },
        { title: 'Step Done', type: 'next' },
      ])
    })

    it('Active step', () => {
      service.send('DONE')

      expect(getSteps(service)).toEqual([
        { title: 'Step One', type: 'active' },
        { title: 'Step Two', type: 'next' },
        { title: 'Step Done', type: 'next' },
      ])
    })

    it('Gap step', () => {
      service.send('DONE')
      service.send('DONE')
      service.send('DONE')

      expect(getSteps(service)).toEqual([
        { title: 'Step One', type: 'past' },
        { title: 'Step Two', type: 'past' },
        { title: 'Step Done', type: 'next' },
      ])
    })

    it('Last step', () => {
      service.send('DONE')
      service.send('DONE')
      service.send('DONE')
      service.send('DONE')

      expect(getSteps(service)).toEqual([
        { title: 'Step One', type: 'past' },
        { title: 'Step Two', type: 'past' },
        { title: 'Step Done', type: 'active' },
      ])
    })
  })

  describe('Complex stepper', () => {
    const simpleStepper = createMachine({
      id: 'complex',
      initial: 'requirements',
      states: {
        requirements: {
          on: { DONE: 'step1' },
        },
        step1: {
          meta: { isStep: true, stepTitle: 'Step One' },
          on: { DONE: 'multi' },
        },
        multi: {
          meta: { isStep: true, stepTitle: 'Step Multi' },
          initial: 'multi1',
          states: {
            multi1: { on: { DONE: 'multi2' }, meta: { isStep: true, stepTitle: 'Step Multi 1' } },
            multi2: { on: { DONE: 'multiDone' }, meta: { isStep: true, stepTitle: 'Step Multi 2' } },
            multiDone: { type: 'final' },
          },
          onDone: 'done',
        },
        done: {
          meta: { isStep: true, stepTitle: 'Step Done' },
          type: 'final',
        },
      },
    })
    let service: Interpreter<any>

    beforeEach(() => {
      service = interpret(simpleStepper)
      service.start()
    })

    it('Steps from machine', () => {
      expect(getSteps(service)).toEqual([
        { title: 'Step One', type: 'next' },
        { title: 'Step Multi', type: 'next' },
        { title: 'Step Multi 1', type: 'next', isBaby: true },
        { title: 'Step Multi 2', type: 'next', isBaby: true },
        { title: 'Step Done', type: 'next' },
      ])
    })

    it('Active baby step', () => {
      service.send('DONE')
      service.send('DONE')
      service.send('DONE')

      expect(getSteps(service)).toEqual([
        { title: 'Step One', type: 'past' },
        { title: 'Step Multi', type: 'past' },
        { title: 'Step Multi 1', type: 'past', isBaby: true },
        { title: 'Step Multi 2', type: 'active', isBaby: true },
        { title: 'Step Done', type: 'next' },
      ])
    })

    it('Last step', () => {
      service.send('DONE')
      service.send('DONE')
      service.send('DONE')
      service.send('DONE')

      expect(getSteps(service)).toEqual([
        { title: 'Step One', type: 'past' },
        { title: 'Step Multi', type: 'past' },
        { title: 'Step Multi 1', type: 'past', isBaby: true },
        { title: 'Step Multi 2', type: 'past', isBaby: true },
        { title: 'Step Done', type: 'active' },
      ])
    })
  })
})
