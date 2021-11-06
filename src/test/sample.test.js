import { sum } from "../Login";
import React from "react";
import { configure, shallow } from "enzyme";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({
	adapter: new Adapter(),
});

describe("test sum", () => {
	it("1+2", () => {
		chai.expect(sum(1, 2)).to.equal(3);
	});
	chai.use(chaiEnzyme());
});
