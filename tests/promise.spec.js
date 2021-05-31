const promiseResolver = require("./../src/promise");

describe("javascript promise test", function () {
  it("should not return any error", async function () {
    const testPromise = await Promise.all([
      promiseResolver(1, 2000),
      promiseResolver(2, 1000),
      promiseResolver(4, 3000),
      promiseResolver(5, 3000)
    ]);
    expect(testPromise).toStrictEqual([1, 2, 4, 5]);
  });

  it("should throw error", async function () {
    try {
      await Promise.all([
        promiseResolver(1, 2000),
        promiseResolver(2, 1000, true),
        promiseResolver(4, 3000),
        promiseResolver(5, 3000)
      ]);
    } catch (error) {
      expect(error.message).toBe("something goes wrong");
    }
  });
});
