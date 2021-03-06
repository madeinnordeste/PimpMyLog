<?php
/*! pimpmylog - 1.5.2 - 1dfb21c461d8d5cee99d4655ff7d07d9a18316d8*/
/*
 * pimpmylog
 * http://pimpmylog.com
 *
 * Copyright (c) 2014 Potsky, contributors
 * Licensed under the GPLv3 license.
 */
?>
<?php if(realpath(__FILE__)===realpath($_SERVER["SCRIPT_FILENAME"])){header($_SERVER['SERVER_PROTOCOL'].' 404 Not Found');die();}?>
{
	"globals": {
		"_remove_me_to_set_CHECK_UPGRADE"          : true,
		"_remove_me_to_set_EXPORT"                 : true,
		"_remove_me_to_set_FILE_SELECTOR"          : "bs | html",
		"_remove_me_to_set_FOOTER"                 : "&copy; <a href=\"http:\/\/www.potsky.com\" target=\"doc\">Potsky<\/a> 2013 - <a href=\"http:\/\/pimpmylog.com\" target=\"doc\">Pimp my Log<\/a>",
		"_remove_me_to_set_GEOIP_URL"              : "http:\/\/www.geoiptool.com\/en\/?IP=%p",
		"_remove_me_to_set_GOOGLE_ANALYTICS"       : "UA-XXXXX-X",
		"_remove_me_to_set_LOCALE"                 : "fr_FR",
		"_remove_me_to_set_LOGS_MAX"               : 10,
		"_remove_me_to_set_LOGS_REFRESH"           : 7,
		"_remove_me_to_set_MAX_SEARCH_LOG_TIME"    : 3,
		"_remove_me_to_set_NAV_TITLE"              : "",
		"_remove_me_to_set_NOTIFICATION"           : true,
		"_remove_me_to_set_NOTIFICATION_TITLE"     : "New logs [%f]",
		"_remove_me_to_set_PIMPMYLOG_VERSION_URL"  : "http:\/\/demo.pimpmylog.com\/version.js",
		"_remove_me_to_set_PULL_TO_REFRESH"        : true,
		"_remove_me_to_set_SORT_LOG_FILES"         : "default | display-asc | display-insensitive | display-desc | display-insensitive-desc",
		"_remove_me_to_set_TITLE"                  : "Pimp my Log",
		"_remove_me_to_set_TITLE_FILE"             : "Pimp my Log [%f]",
		"_remove_me_to_set_USER_CONFIGURATION_DIR" : "config.user.d",
		"_remove_me_to_set_USER_TIME_ZONE"         : "Europe\/Paris"
	},

	"badges": {
		"severity": {
			"debug"       : "success",
			"info"        : "success",
			"notice"      : "default",
			"Notice"      : "info",
			"warn"        : "warning",
			"error"       : "danger",
			"crit"        : "danger",
			"alert"       : "danger",
			"emerg"       : "danger",
			"Notice"      : "info",
			"Fatal error" : "danger",
			"Parse error" : "danger",
			"Warning"     : "warning"
		},
		"http": {
			"1" : "info",
			"2" : "success",
			"3" : "default",
			"4" : "warning",
			"5" : "danger"
		}
	},

	"files": {
		"apache1": {
			"display"   : "Apache Error #1",
			"path"      : "\/opt\/local\/apache2\/logs\/error_log",
			"refresh"   : 5,
			"max"       : 10,
			"notify"    : true,
			"multiline" : "",
			"format"    : {
				"regex"        : "|^\\[(.*)\\] \\[(.*)\\] (\\[client (.*)\\] )*((?!\\[client ).*)(, referer: (.*))*$|U",
				"export_title" : "Log",
				"match"        : {
					"Date"     : 1,
					"IP"       : 4,
					"Log"      : 5,
					"Severity" : 2,
					"Referer"  : 7
				},
				"types": {
					"Date"     : "date:H:i:s",
					"IP"       : "ip:http",
					"Log"      : "pre",
					"Severity" : "badge:severity",
					"Referer"  : "link"
				},
				"exclude": {
					"Log": ["\/PHP Stack trace:\/", "\/PHP *[0-9]*\\. \/"]
				}
			}
		},
		"apache2": {
			"display"   : "Apache Access #2",
			"path"      : "\/opt\/local\/apache2\/logs\/access_log",
			"refresh"   : 0,
			"max"       : 10,
			"notify"    : false,
			"multiline" : "",
			"format"    : {
				"regex"        : " |^(.*) (.*) (.*) \\[(.*)\\] \"(.*) (.*) (.*)\" ([0-9]*) (.*) \"(.*)\" \"(.*)\"( [0-9]*\/([0-9]*))*$|U",
				"export_title" : "URL",
				"match"        : {
					"Date"    : 4,
					"IP"      : 1,
					"CMD"     : 5,
					"URL"     : 6,
					"Code"    : 8,
					"Size"    : 9,
					"Referer" : 10,
					"UA"      : 11,
					"User"    : 3,
					"\u03bcs" : 13
				},
				"types": {
					"Date"    : "date:H:i:s",
					"IP"      : "ip:geo",
					"URL"     : "txt",
					"Code"    : "badge:http",
					"Size"    : "numeral:0b",
					"Referer" : "link",
					"UA"      : "ua:{os.name} {os.version} | {browser.name} {browser.version}\/100",
					"\u03bcs" : "numeral:0,0"
				},
				"exclude": {
					"URL": ["\/favicon.ico\/", "\/\\.pml\\.php.*$\/"],
					"CMD": ["\/OPTIONS\/"]
				}
			}
		}
	}
}
