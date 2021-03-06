import {expect} from 'chai'
import Ember from 'ember'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import {beforeEach} from 'mocha'
import {integrationTestContext} from 'dummy/tests/helpers/template'

describeComponent(...integrationTestContext('frost-bunsen-input-static'), function () {
  let rootNode

  const TEST_VALUE = 'Some Test Value'

  beforeEach(function () {
    this.setProperties({
      bunsenId: 'name',
      bunsenModel: {},
      bunsenStore: Ember.Object.create({}),
      cellConfig: Ember.Object.create({}),
      onChange () {},
      value: TEST_VALUE
    })

    this.render(hbs`{{frost-bunsen-input-static
      bunsenId=bunsenId
      bunsenModel=bunsenModel
      bunsenStore=bunsenStore
      cellConfig=cellConfig
      onChange=onChange
      value=value
    }}`)

    rootNode = this.$('> *')
  })

  it('has correct classes', function () {
    expect(rootNode).to.have.class('frost-bunsen-input-static')
  })

  it('displays the value passed in', function () {
    let displayedValue = this.$('.left-input p').html()

    expect(displayedValue).to.equal(TEST_VALUE)
  })
})
