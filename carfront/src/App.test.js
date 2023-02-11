import AddCar from "./component/AddCar";
import TestRenderer from 'react-test-renderer';

test('renders a snapshot', () => {
    const tree = TestRenderer.create(<AddCar/>).toJSON();
    expect(tree).toMatchSnapshot();
});