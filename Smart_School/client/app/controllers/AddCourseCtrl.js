/**
 * Created by yael on 25/01/2017.
 */
app.controller('AddCourseCtrl',function($scope,$routeParams,classesService,$http,$window) {
    $scope.ClassId = $routeParams.classId;
    //
    $scope.CreateCourse = function() {

        if (window.XMLHttpRequest)
            var xmlhttp = new XMLHttpRequest();
        else
            var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

        var document =
            {
                "CourseName":myForm.CourseName.value,
                "TeacherName": myForm.TeacherName.value,
                "CodeCourse": myForm.CourseCode.value,
                "ClassId": $scope.ClassId
            };

        xmlhttp.onreadystatechange = function () {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                $scope.message1 =xmlhttp.responseText;
                $scope.$apply();



            }
        }

        xmlhttp.open('POST', 'http://localhost:5000/AddCourse');
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
        xmlhttp.send(JSON.stringify(document));
    }


});