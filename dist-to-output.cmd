REM %1 --> VERSION.
REM Example: buildmotion-logging-%1 becomes buildmotion-logging-1.0.0
xcopy dist\*.* ..\..\output\buildmotion-logging\buildmotion-logging-%1\ /s