import expect, { createSpy, spyOn, isSpy } from 'expect';
import { component } from "./component";

describe('component', function () {
  it('renders without problems', function () {
    let element = component();
    expect(element).toExist();
    expect(element.nodeName).toBe('H1');
  });
});