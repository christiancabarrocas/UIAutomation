require "rake/clean"

# Build paths
BUILD_DIR = File.expand_path("build")

task :test do
  test
end

def test
  sh %[sudo DevToolsSecurity --enable]
  sh %[sudo security authorizationdb write system.privilege.taskport is-developer]
  sh %[xcodebuild -workspace UIAutomation.xcworkspace -scheme UIAutomation -sdk iphonesimulator -configuration Debug build CONFIGURATION_BUILD_DIR=#{BUILD_DIR}]
  sh %[instruments -t /Applications/Xcode.app/Contents/Applications/Instruments.app/Contents/PlugIns/AutomationInstrument.xrplugin/Contents/Resources/Automation.tracetemplate -w "D5EE0F11-BDC4-4E64-A28D-9B00C70ADD0A" #{BUILD_DIR}/UIAutomation.app -e UIASCRIPT "./tests.js"]
end
