import { mountDefault } from '../helpers'

describe('Automatic Scrolling', () => {
  it('should check if the scroll position needs to be adjusted on up arrow keyUp', async () => {
    //  Given
    const Select = mountDefault()
    const spy = jest.spyOn(Select.vm, 'handleKeyboardArrow')
    Select.vm.startIndex = 0

    //  When
    Select.find({ ref: 'customSelectInputSearch' }).trigger('keydown.up')
    await Select.vm.$nextTick()

    //  Then
    expect(spy).toHaveBeenCalled()
  })
})
