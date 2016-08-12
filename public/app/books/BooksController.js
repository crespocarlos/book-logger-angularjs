(function () {

    angular.module('app')
        .controller('BooksController', ['books', 'dataService', 'badgeService', '$cookies', '$cookieStore', BooksController]);

    function BooksController(books, dataService, badgeService, $cookies, $cookieStore) {
        var vm = this;

        vm.appName = books.appName;

        dataService.getAllBooks()
            .then(getBooksSuccess, null, getBooksNotification)
            .catch(errorCallback)
            .finally(getAllBooksComplete);

        dataService.getAllReaders()
            .then(getReadersSuccess)
            .catch(errorCallback)
            .finally(getAllReadersComplete);

        vm.getBadge = badgeService.retrieveBadge;
        vm.favoriteBook = $cookies.favoriteBook;
        vm.lastEdited = $cookieStore.get('lastEdited');

        function getReadersSuccess(books) {
            vm.allReaders = books;
        }

        function getAllReadersComplete(books) {
            console.log('getAllReadersComplete has completed');
        }

        function getBooksSuccess(books) {
            vm.allBooks = books;
        }

        function getBooksError(reason) {
            console.log(reason);
        }

        function getAllBooksComplete() {
            console.log('getAllBooksComplete has completed');
        }

        function errorCallback(errorMessage) {
            console.log('Error message: ' + errorMessage);
        }


        function getBooksNotification(notification) {
            console.log('Promise notification:' + notification);

        }
    };

} ());