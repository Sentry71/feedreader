/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have defined, non-empty URLs', function() {
            for (var i=0; i<allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have defined, non-empty names', function() {
            for (var i=0; i<allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    /* Write a new test suite named "The menu" */
    describe('The menu', function() {
        var menuClass = $('body').attr('class');

        /* Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function () {
            expect(menuClass).toEqual("menu-hidden");
        });

        /* Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('toggles visibility when icon is clicked', function() {
            var menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect($('body').attr('class')).toEqual("");
            menuIcon.click();
            expect($('body').attr('class')).toEqual("menu-hidden");
        });
    });


    /* Write a new test suite named "Initial Entries" */
    describe('Initial entries', function() {

        /* Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         *
         * First, run the function on the first feed (index 0).
         */
        beforeEach(function(done) {
            window.loadFeed(0, done);
        });

        /* After the feed loads, test that the number of entries is greater than 0 */
        it('display at least one valid entry', function() {
            var countEntries = $('.entry').length;
            expect(countEntries).toBeGreaterThan(0);
        });
    });


    /* Write a new test suite named "New Feed Selection" */
    describe('New feed selection', function() {
        var entryTextBefore, entryTextAfter;

        /* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         *
         * Pull the second feed (index 1), and save its first text entry.
         */
        beforeEach(function(done) {
            window.loadFeed(1);
            entryTextBefore = $('.entry').find('h2')[0].innerText;
            window.loadFeed(2, done);
        });

        /* Pull the third feed (index 2), and save its first text entry.
         * Then, compare that entry to the one pulled from the second feed.
         */
        it('displays changed content', function() {
            expect(entryTextBefore).toBeDefined();
            entryTextAfter = $('.entry').find('h2')[0].innerText;
            expect(entryTextAfter).toBeDefined();
            expect(entryTextAfter).not.toEqual(entryTextBefore);
        });

        /* After the test completes, return the display to the first feed. */
        afterEach(function() {
            window.loadFeed(0);
        });
    });

    /* Extra options test suite for checking number of entries
     * (can be changed in an option menu, if designed)
     */
    describe('The number of feed entries displayed', function() {
      var countEntries = $('li').length;
      var optionMenu;

      /* Test default entries equals 4 (Google Feeds API default) */
      it('defaults to four', function() {
        expect(optionMenu).toBeUndefined();
        expect(countEntries).toEqual(4);
      });

      /* Test that number of entries changes if options are changed
       * This test will fail until option menu is created. Therefore,
       * the test is marked as pending.
       */
      it('changes to match new value in options menu', function() {
        optionMenu = {
          'numEntries' : '5'
        };

        expect(optionMenu).toBeDefined();
        expect(optionMenu.numEntries).toBeDefined();
        expect(countEntries).toEqual(optionMenu.numEntries);
        pending();
      });
    });
}());
