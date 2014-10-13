/*PSK*/pml_version_cb(/*PSK*/
{
	"version"     : "1.2.1",
	"versiondevh" : "ff3f188288e4c2db6475c2dce8443e25233667c7",
	"changelog" : {

		"1.2.2" : {
			"released" : "2014-10-12",
			"notice"   : "Please support Pimp My Log, star the project in GitHub ! <iframe src=\"http://pimpmylog.com/github-btn.html?user=potsky&repo=PimpMyLog&type=watch&count=true&size=large\" allowtransparency=\"true\" frameborder=\"0\" scrolling=\"0\" width=\"170\" height=\"30\"></iframe>",
			"new"      : [
				"Configuration file can be split in subfolder <code>config.user.d</code> #62"
			]
		},
		"1.2.1" : {
			"released" : "2014-09-21",
			"fixed" : [
				"Support non ASCII log files"
			]
		},
		"1.2" : {
			"released" : "2014-08-31",
			"new" : [
				"Column sorting #5"
			],
			"changed" : [
				"Left colored new log marker is displayed until new logs are displayed and is no more removed on next refresh"
			]
		},
		"1.1.1" : {
			"released" : "2014-07-25",
			"new" : [
				"You can now choose which columns to display at runtime #19"
			]
		},
		"1.1" : {
			"released" : "2014-07-14",
			"new" : [
				"New parser type prefake to simulate a pre field. This is a workaround for copy/paste logs from Firefox",
				"Log marker: click on the date field to toggle a row marker",
				"Log marker: new button in settings to clear all markers"
			],
			"fixed" : [
				"Brazilian Portuguese is now available in the settings menu",
				"You can now copy/paste all logs in Excel, formatting is preserved"
			]
		},
		"1.0.6" : {
			"released" : "2014-07-06",
			"fixed" : [
				"Add Brazilian Portuguese by Cassio Santos"
			]
		},
		"1.0.5" : {
			"released" : "2014-06-05",
			"fixed" : [
				"Apache 2.4 error in auto-configuation"
			]
		},
		"1.0.4" : {
			"released" : "2014-04-20",
			"fixed" : [
				"PHP error file now support referer",
				"Severity badges are case insensitive now, really this time !"
			]
		},
		"1.0.3" : {
			"released" : "2014-04-20",
			"new" : [
				"Severity badges are case insensitive now"
			]
		},
		"1.0.2" : {
			"released" : "2014-01-31",
			"changed" : [
				"Clean PHP code"
			]
		},
		"1.0.1" : {
			"released" : "2014-01-30",
			"changed" : [
				"Add a link in the upgrade message to the Pimp My Log upgrade documentation #56"
			],
			"new" : [
				"Add support for the LOCALE global parameter",
				"Add user settings button",
				"Add language selector user setting",
				"Add timezone selector user setting",
				"Add wide log table setting",
				"Now clicking on the logo will reload Pimp My Log with default user settings",
				"The url is automatically updated with the current user settings, so you can bookmark any view"
			]
		},
		"1.0.0" : {
			"released" : "2014-01-28",
			"fixed" : [
				"PHP Notice while configuration process when apache log file is empty #51"
			],
			"changed" : [
				"Several custom log file paths can be separated by a coma or by a new line now",
				"Configuration paths can now use globs",
				"Log table is now full width streched"
			],
			"new" : [
				"Support PHP logs #52",
				"Support NGINX server logs #53",
				"Support IIS server logs #54",
				"Add log type format in the footer"
			]
		},
		"0.9.9" : {
			"released" : "2014-01-22",
			"changed" : [
				"Clean code again and reduce files size",
				"You can now click on the logo in the debugger and in the configurator"
			],
			"new" : [
				"Add new global parameter TITLE_FILE to customize the page title according to the current displayed file #50",
				"Add a copy to clipboard action when configuring Pimp My Log",
				"PML can be launched with any log file by default, not the first defined only (use http://pml/?i=apache2 for example)"
			]
		},
		"0.9.8" : {
			"released" : "2014-01-20",
			"changed" : [
				"Clean code"
			],
			"fixed" : [
				"Wrong path for chrome notification image #49"
			]
		},
		"0.9.7" : {
			"released" : "2014-01-14",
			"new" : [
				"Copy the result of your debugger work to your clipboard. Then you just have to copy-paste in your configuration file."
			],
			"changed" : [
				"Update french language"
			],
			"fixed" : [
				"Unencoded file paths in the configuration process"
			]
		},
		"0.9.6" : {
			"notice" : "The separator feature in the match array has been replaced by a concatenation of all tokens and provided strings. Your configuration will not be broken but the displayed result will differ.",
			"released" : "2014-01-14",
			"new" : [
				"Multiline support closes (#46)",
				"Enable multiline and types customization in the debugger",
				"Debugger now supports exactly same features as the production parser",
				"Match array separator no longer exists and is replaced by a concatenator which is more powerful (#47)",
				"New file selector option (deactivate by default) to support several hundreds of log files (#45)"
			],
			"changed" : [
				"Change the upgrade url, github is really too slow..."
			],
			"fixed" : [
				"Fix a bug in the apache 2.4 configuration file"
			]
		},
		"0.9.5" : {
			"notice" : "The date format in the match array has changed. Please read documentation to upgrade your configuration file.",
			"released" : "2014-01-10",
			"changed" : [
				"Exclude object is optional now in configuration file",
				"New date format support when month is a number"
			]
		},
		"0.9.4" : {
			"released" : "2014-01-09",
			"fixed" : [
				"Change jsonp to js extension for IE9",
				"Fixed bootstrap 3.0.3 striped lines bug",
				"Add default color for undefined badges type",
				"Use strict mode in javascript",
				"Fix a bug when slash is in a date type format",
				"HTTP command should not be wrapped"
			]
		},
		"0.9.3" : {
			"released" : "2014-01-08",
			"fixed" : [
				"[Main] Desktop notifications broken"
			]
		},
		"0.9.2" : {
			"released" : "2014-01-01",
			"fixed" : [
				"[Configuration] Cannot add custom logs when no default path is available #43"
			]
		},
		"0.9.1" : {
			"released" : "2013-12-28",
			"new" : [
				"Add french translations #3"
			],
			"changed" : [
				"Upgrade check management #41 #42"
			],
			"fixed" : [
				"Language support in ajax requests"
			]
		},
		"0.9.0" : {
			"notice" : "First public pre-release of Pimp my Log!",
			"released" : "2013-12-22"
		}
	}
}
/*PSK*/);/*PSK*/