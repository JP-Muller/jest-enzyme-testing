import React from "react";
import Enzyme, { mount } from "enzyme";

import { act } from "react-dom/test-utils";
import MyComponent from "../Components/MyComponent/MyComponent";

describe("MyComponent", () => {
  const onCountChange = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<MyComponent onCountChange={onCountChange} />);
  });

    it('renders', () => {
      expect(wrapper).not.toBeNull();
    });

    it('shows my default text', () => {
      expect(wrapper.find('p').text()).toEqual('Count: 0');
    });

    it('correctly increments the count by 1', () => {
      wrapper.find('button').simulate('click');
      expect(wrapper.find('p').text()).toEqual('Count: 1');
    });

    it('correctly increments the count by 4', () => {
      wrapper.find('button').simulate('click');
      wrapper.find('button').simulate('click');
      wrapper.find('button').simulate('click');
      wrapper.find('button').simulate('click');
      expect(wrapper.find('p').text()).toEqual('Count: 4');
    });

  // it("correctly increments the count by 1", () => {
  //   expect(onCountChange).toBeCalledTimes(1);
  //   wrapper.find("button").simulate("click");
  //   expect(onCountChange).toBeCalledTimes(2);
  //   console.log("SUCCESS");
  // });
});
