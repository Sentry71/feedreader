# Feed Reader Testing (FEND Project #6)

This project is a web-based application that reads RSS feeds. The objective of this project is to demonstrate the use of the [Jasmine](http://jasmine.github.io/) testing framework for validating the functionality of the application.

## Demonstration Link

Browse to [this link](http://sentry71.github.io/feedreader) using the Chrome web browser.

(Note: Testing will successfully complete with Chrome and Safari. Firefox has issues with test timing. I am unable to test with IE currently.)

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

### Additional tests designed for future Options menu

Feed Entries Displayed
* Verify default number of entries are displayed for the feed selected.
* Verify option menu can be modified to a different number of feed items to be displayed.
  * Since this test requires the Options menu that hav not been designed yet, the test is marked as pending in Jasmine.
  
