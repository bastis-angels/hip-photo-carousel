//import react, enzyme tools, and component you're testing

it('shoud render the app on component did mount', () => {
  const component = mount(<App />);
  expect(component).toMatchSnapshot();
  component.unmount();
});
