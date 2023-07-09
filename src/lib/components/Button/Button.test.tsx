import {fireEvent, render} from '@testing-library/react'
import { Button, ButtonProps } from "./Button";

const defaultProps:ButtonProps={
  onClick:jest.fn()
}

const testProps:ButtonProps = {
  types:"primary",
  size:'lg',
  className:'klass'
}

const disabledProps:ButtonProps={
  disabled:true,
  onClick:jest.fn()
}

describe("test Button componet",()=>{
  it('should render the correct default button',()=>{
    const wrapper = render(<Button {...defaultProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    // 测试元素是否在 Document 上
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual("BUTTON")
    expect(element).toHaveClass('king-button king-button-default')
    //toBeTruthy:是否为真值
    expect(element.disabled).toBeFalsy()
    // 找到第一个 button 元素，然后触发它的点击事件 
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('king-button-primary king-button-lg klass')
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button types='link' href="http://dummyurl">Link</Button>)
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('king-button king-button-link')
  })
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})