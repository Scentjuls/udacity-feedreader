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


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it("has a URL defined and the URL is not empty", function(){
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it("has a name defined and the name is not empty", function(){

            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         describe("The menu", function (){
            it("is hidden by deafult", function () {
                //check that the menu element is hidden
                let hiddenMenu = document.body.classList.contains('menu-hidden');
                expect(hiddenMenu).toBe(true);
                
            });
    
            it("changes visibility when the menu icon is clicked", function() {
                //checks that the menu-hidden class disappers
                let menuIcon = document.querySelector('a.menu-icon-link');
                menuIcon.click();
                expect(document.body.classList.contains('menu-hidden')).toBe(false);
                 menuIcon.click();
                 expect(document.body.classList.contains('menu-hidden')).toBe(true);
            })
        });
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        describe("Initial Entries", function (){
            beforeEach(function(done) {
                loadFeed(1, done);
            });

            it("there is a single entry element within the feed container", function () {
                let feedDocument = document.querySelector('div.feed');
                expect(feedDocument.children.length).toBeGreaterThan(0);
            });
    
        });
    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
      
        describe("New Feed Selection", function (){

            let firstDocument, secondDocument;

            beforeEach(function(done) {
                loadFeed(3, function(){
                    firstDocument = document.querySelector('div.feed').innerHTML;
                    loadFeed(2, function() {
                    secondDocument = document.querySelector('div.feed').innerHTML;
                        done();
                    });
                });
            });
            it("new feed is loaded by the loadfeed function", function () {
                expect(firstDocument).not.toBe(secondDocument);
            });
    
        });
}());
