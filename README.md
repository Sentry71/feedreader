# Feed Reader Testing (FEND Project #6)

This project is a web-based application that reads RSS feeds. The objective of this project is to demonstrate the use of the [Jasmine](http://jasmine.github.io/) testing framework for validating the functionality of the application.

## How To Use

Browse to [this link](http://sentry71.github.io/feedreader) using a modern web browser.
(Note: Testing will successfully complete with Chrome and Safari. Firefox seems to have issues with test timing. I am unable to test with IE currently.)

## What tests are demonstrated?

RSS Feeds:
* Verify feeds are defined
* Verify feed URLs are defined and non-empty
* Verify feed names are defined and non-empty

RSS Menu:
* Verify menu is hidden on start
* Verify clicking the menu icons toggles visibility of the menu

Initial RSS Entries:
* Verify at least one entry displays after calling initial load.

New Feed Selection:
* Verify new data is pulled when the RSS feed changes
