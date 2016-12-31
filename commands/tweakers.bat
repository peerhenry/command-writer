@echo off
if "%1"=="" (
	start "" "https://tweakers.net"
) else (
	start "" "https://tweakers.net/zoeken/?keyword=%*"
)
