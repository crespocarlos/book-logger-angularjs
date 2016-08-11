(function () {

    angular.module('app')
        .factory('dataService', ['$q', '$timeout', dataService]);

    function dataService($q, $timeout) {
        return {
            getAllBooks: getAllBooks,
            getAllReaders: getAllReaders
        };

        function getAllBooks() {
            var booksArray = [
                {
                    book_id: 1,
                    title: 'Harry Potter',
                    author: 'J.K Rowling',
                    year_published: 2008
                },
                {
                    book_id: 2,
                    title: 'Game of Thrones',
                    author: 'George R.R. Martin',
                    year_published: 2005
                }
            ];

            var deferred = $q.defer();
            $timeout(function () {
                var successful = true;
                if (successful) {
                    deferred.notify('Just getting started gathering books...');
                    deferred.notify('Almost done...');
                    deferred.resolve(booksArray);
                } else {
                    deferred.reject('error retrieving books.');
                }
            }, 1000);

            return deferred.promise;
        };

        function getAllReaders() {
            var readersArray = [
                {
                    reader_id: 1,
                    name: 'Carlos',
                    weeklyReadingGoal: 315,
                    totalMinutesRead: 2000
                },
                {
                    reader_id: 2,
                    name: 'Ana',
                    weeklyReadingGoal: 500,
                    totalMinutesRead: 10000
                }
            ];

            var deferred = $q.defer();

            $timeout(function () {
                deferred.resolve(readersArray);

            }, 1500);

            return deferred.promise;
        };
    }

    dataService.$inject = ['logger'];

})();