import React from "react";
import { shallow, mount, render } from "enzyme";
import toJSON from "enzyme-to-json";
import ClassCounter from "../Components/ClassCounter/ClassCounter";

// It is considered best practice to begin each set of tests with a describe block describing what component/module is being tested
describe("<ClassCounter />", () => {

  it("Should render without error", () => {
    //shallow mounting the component
    const wrapper = shallow(<ClassCounter />)
    //testing to see if the component was rendered to the DOM
    expect(wrapper.exists()).toBeTruthy()
    //testing a new snapshot of the component with an old snapshot
    expect(toJSON(wrapper)).toMatchSnapshot()
  });

  it("Should render the decrement button", () => {
    const wrapper = shallow(<ClassCounter />)
    //finding the button with the className 'fa-minus-square'
    const decrementButton = wrapper.find(".fa-minus-square");
    //verifying the button is rendered 
    expect(decrementButton.exists()).toBeTruthy();
  });

  it("Should render the increment button", () => {
    const wrapper = shallow(<ClassCounter />)
    const decrementButton = wrapper.find(".fa-plus-square");
    expect(decrementButton.exists()).toBeTruthy();
  });

  it("Does not show count amount on initial render", () => {
    // When the component mounts, the initial counter value is set to 0. Before mounting, the counter value is expected to be null
    const wrapper = render(<ClassCounter />);
    //Finds the counter value display and ensures the value is null
    expect(wrapper.find("h1").text()).toEqual("");
  });

  it("Shows proper count value on mount (Lifecycle check)", () => {
    // Here we are checking to see that the componentDidMount lifecycle has fired, setting the inital counter value to 0
    const wrapper = mount(<ClassCounter />);
    expect(wrapper.find("h1").text()).toEqual("0");
    expect(wrapper.state().count).toEqual(0);
  });

  it("Increments count amount correctly", () => {
    const wrapper = mount(<ClassCounter />);
    // Here we are finding the button to add 1 to the counter value, after the button is found we use simulate() to click this button
    wrapper.find(".fa-plus-square").simulate("click");
    //After this button is hit, we need to verify that the count value is equal to 1
    expect(wrapper.find("h1").text()).toEqual("1");
    //We can also check the actual state of the component after this event with wrapper.state()
    expect(wrapper.state().count).toEqual(1);
  });

  it("Decrements count amount correctly", () => {
    const wrapper = mount(<ClassCounter />);
    //Here we simulate 3 clicks to the decrement count button and check that the correct number is rendered and the correct state is set
    // wrapper.instance().decrementCount = jest.fn();
    wrapper.find(".fa-minus-square").simulate("click");
    wrapper.find(".fa-minus-square").simulate("click");
    wrapper.find(".fa-minus-square").simulate("click");
    expect(wrapper.find("h1").text()).toEqual("-3");
    // expect(wrapper.instance().decrementCount).toHaveBeenCalled()
    expect(wrapper.state().count).toEqual(-3)
  });

  // it("Executes logName properly", () => {
  //   let wrapper = shallow(<ClassCounter />);
  //   wrapper.instance().setName = jest.fn();
  //   wrapper.instance().setName("Jake", "Muller");
  //   expect(wrapper.instance().setName).toBeCalledWith("Jake", "Muller");
  //   expect(wrapper.state().name).toEqual('Jake Muller')
  // });

  // it("getData returns correct data", () => {
  //   let wrapper = mount(<ClassCounter />);
  //   wrapper.instance().getData = jest.fn();
  //   wrapper.instance().getData();
  //   expect(wrapper.state().colorData).toEqual([
  //     {
  //       color: "red",
  //       value: "#f00"
  //     },
  //     {
  //       color: "green",
  //       value: "#0f0"
  //     },
  //     {
  //       color: "blue",
  //       value: "#00f"
  //     },
  //     {
  //       color: "cyan",
  //       value: "#0ff"
  //     },
  //     {
  //       color: "magenta",
  //       value: "#f0f"
  //     },
  //     {
  //       color: "yellow",
  //       value: "#ff0"
  //     },
  //     {
  //       color: "black",
  //       value: "#000"
  //     }
  //   ]);
  // });
});

  // it('Calls ComponentDidMount Functions', () => {
  //   const componentDidMountSpy = jest.spyOn(ClassCounter.prototype, 'getData')
  //   const wrapper = shallow(<ClassCounter />)
  //   wrapper.instance().getData()
  //   expect(componentDidMountSpy).toHaveBeenCalled(1)
      
  // })

  // it('Adds 2+2 and returns 4', () => {
  //   let wrapper = mount(<ClassCounter />)
  //   wrapper.instance().addNums = jest.fn()
  //   wrapper.instance().addNums(2,2)
  //   expect(wrapper.instance().addNums).toHaveBeenCalledWith(2,2)
  // })

  // it("Gets correct information from NFL API", () => {
  //   let wrapper = mount(<ClassCounter />);
  //   wrapper.instance().getCurrentFootballSeason = jest.fn();
  //   // wrapper.instance().getCurrentFootballSeason();
  //   wrapper.instance().getCurrentFootballSeason().then(data => {
  //     expect(data).toBe(2019)
  //   })
  //   expect(wrapper.instance().getCurrentFootballSeason).toBeCalled();
  // });