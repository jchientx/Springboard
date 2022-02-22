describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should not add a new server with empty input to allServers on submitServerInfo()", function () {
    serverNameInput.value = "";
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it("should update #serverTable on updateServerTable()", function () {
    submitServerInfo();
    updateServerTable();

    let currentServer = document.querySelectorAll("#serverTable tbody tr td");

    expect(currentServer.length).toEqual(2);
    expect(currentServer[0].innerText).toEqual("Alice");
    expect(currentServer[1].innerText).toEqual("$0.00");
  });

  afterEach(function () {
    // teardown logic
    // Clean up the dom after the test is run
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = "";
  });
});
