@echo off
if "%1"=="" (
	start "" "https://www.imdb.com"
) else (
	start "" "http://www.imdb.com/find?ref_=nv_sr_fn&q=%*&s=all"
)
