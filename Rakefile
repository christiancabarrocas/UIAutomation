require "rake/clean"

# Build paths
BUILD_DIR = File.expand_path("build")

task :test do
  test
end

def test
  sh %[xcodebuild -workspace UIAutomation.xcworkspace -scheme UIAutomation -sdk iphonesimulator -configuration Debug build CONFIGURATION_BUILD_DIR=#{BUILD_DIR}]
  sh %[instruments -t /Applications/Xcode.app/Contents/Applications/Instruments.app/Contents/PlugIns/AutomationInstrument.xrplugin/Contents/Resources/Automation.tracetemplate -w "iPhone 6 Plus (8.0 Simulator)" #{BUILD_DIR}/UIAutomation.app -e UIASCRIPT "./tests.js"]
end
