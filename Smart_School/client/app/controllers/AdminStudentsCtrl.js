/**
 * Created by כהן on 19/01/2017.
 */



app.controller('AdminStudentsCtrl',function($scope,$routeParams,studentsService) {
    //  $scope.id = $routeParams.id;

    var promise = studentsService.getStudents();
    promise.then(function (data)
    {
        $scope.AllStudents=data.data;


    });

});

