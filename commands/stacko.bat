@echo off
if "%1"=="" (
	start "" "http://stackoverflow.com"
) else (
	start "" "http://stackoverflow.com/search?q=%*"
)
