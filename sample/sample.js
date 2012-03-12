#import "../importAll.js";

var reporter = System.createFile("testreport.txt");
System.writeFile(reporter,"Device model:"+ this.getDeviceModel(),"true");
System.writeFile(reporter,"Screen width:"+ target.rect().size.width,"true");
System.writeFile(reporter,"Screen height:"+ target.rect().size.height,"true");
System.writeFile(reporter,"Decice OSVersion:"+ this.getDeviceModel(),"true");
System.writeFile(reporter,"UTA name:"+ this.getUTABundleID(),"true");
System.writeFile(reporter,"UTA version:"+ this.getUTAVersion(),"true");




var handleCompeleteResult = function(data) {
    for (var i in data) {
	UIALogger.logMessage("i is: " + i + " obj is " + data[i]);
    }
    UIALogger.logMessage("XXXX" + data);
}

var handleFailResult = function(data) {
    for (var i in data) {
        UIALogger.logMessage("i is: " + i + " obj is " + data[i]);
    }
    UIALogger.logMessage("XXXX" + data);
}

//register for the possible events.
DOUBAN.tool.TestRunner.subscribe(DOUBAN.tool.TestRunner.TEST_SUITE_COMPLETE_EVENT, handleCompeleteResult);
DOUBAN.tool.TestRunner.subscribe(DOUBAN.tool.TestRunner.TEST_FAIL_EVENT, handleFailResult);

var simpleTest = new DOUBAN.tool.TestCase({

    name : 'simpleTest',

    setUp : function() {
        UIALogger.logMessage("setUp");
    },

    testSomething : function() {
        UIALogger.logMessage("SimpleTest");
        Assert.fail("Fail Thanks");
    },

    testAnotherthing : function() {
        UIALogger.logMessage("AnotherTest");
    },

    testYetAnotherthing : function() {
        UIALogger.logMessage("YetAnotherTest");
    },

    tearDown : function() {
        UIALogger.logMessage("TearDown");
    }
});


var anotherSimpleTest = new DOUBAN.tool.TestCase({

    name : 'anotherSimpleTest',

    setUp : function() {
        UIALogger.logMessage("AnotherSetUp");
    },

    testSomething : function() {
        UIALogger.logMessage("ComplicatedTest");
    },

    testAnotherthing : function() {
        UIALogger.logMessage("Nothing serious");
    }
});


var testSuite = new DOUBAN.tool.TestSuite("TestSuite Name");
testSuite.add(new DOUBAN.tool.TestCase({

    name : 'testInSuite',

    setUp : function() {
        UIALogger.logMessage("SuiteAnotherSetUp");
    },

    testSomething : function() {
        UIALogger.logMessage("SuiteComplicatedTest");
    },
    testAnotherthing : function() {
        UIALogger.logMessage("SuiteNothing serious");
    }
}));

DOUBAN.tool.TestRunner.add(simpleTest);
DOUBAN.tool.TestRunner.add(anotherSimpleTest);
DOUBAN.tool.TestRunner.add(testSuite);
DOUBAN.tool.TestRunner.run();

