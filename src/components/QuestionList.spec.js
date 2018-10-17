describe("The question list", () => { // Junit Suite
  beforeEach(() => { // @Before
    console.log("Before each!");
  });

  beforeAll(() => { // @BeforeClass
    console.log("Before all!");
  });

  afterEach(() => { // @After
    console.log("After each!");
  });

  afterAll(() => { // @AfterClass
    console.log("After all!");
  });

  it ("should describe a list of items", () => { // @Test
    console.log("add to 5");
    expect(2+3).toEqual(5);
  });

  it ("should describe a list of items", () => { // @Test
    console.log("add to 4");
    expect(2+2).toEqual(4);
  });

});