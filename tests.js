UIALogger.logStart("Start");

var target = UIATarget.localTarget();

target.frontMostApp().navigationBar().rightButton().tap();
target.frontMostApp().navigationBar().rightButton().tap();
target.frontMostApp().navigationBar().rightButton().tap();
target.frontMostApp().mainWindow().tableViews()[0].tapWithOptions({tapOffset:{x:0.66, y:0.27}});
target.frontMostApp().navigationBar().leftButton().tap();

UIALogger.logPass("Success");
