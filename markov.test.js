const { MarkovMachine } = require("./markov");

describe("markov machine", function () {
	test("makes chains", function () {
		let mm = new MarkovMachine("aa bb cc aa BB aa BB");
		expect(mm.chains).toEqual(
			new Map([
				["aa", ["bb", "BB", "BB"]],
				["bb", ["cc"]],
				["cc", ["aa"]],
				["BB", ["aa", null]],
			])
		);
	});

	test("choice picks", function () {
		expect(MarkovMachine.choice([1, 1, 1])).toEqual(1);
		expect([1, 2, 3]).toContain(MarkovMachine.choice([1, 2, 3]));
	});

	test("generates short text", function () {
		let mm = new MarkovMachine("a b c");
		let text = mm.makeText();
		expect(["a b c", "b c", "c"]).toContain(text);
	});

	test("generates bigram text", function () {
		let bigrams = ["the cat", "cat in", "in the", "the hat", "hat"];
		let mm = new MarkovMachine("the cat in the hat");
		let output = mm.makeText().split(" ");
		expect(output.includes("hat")).toBe(true);

		let outputWords = mm.makeText().split(/[\r\n]+/);
		expect([1, 2]).toContain(outputWords.length);
	});

	test("generates text", function () {
		let mm = new MarkovMachine("a b c");
		let text = mm.makeText();
		expect(["a b c", "b c", "c"]).toContain(text);
	});

	test("generates text", function () {
		let bigrams = ["the cat", "cat in", "in the", "the hat", "hat"];
		let mm = new MarkovMachine("the cat in the hat");
		let output = mm.makeText().split(" ");
		expect(output.includes("hat")).toBe(true);

		let outputWords = mm.makeText().split(/[\r\n]+/);
		expect([1, 2]).toContain(outputWords.length);
	});
});
