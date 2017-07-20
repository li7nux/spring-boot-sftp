$(document).ready(function () {

    $("#btnSubmit").click(function (event) {
        event.preventDefault();
        fire_ajax_submit();
    });

});

function fire_ajax_submit() {

    var form = $('#fileUploadForm')[0];
    var data = new FormData(form);
    data.append("CustomField", "This is some extra data, testing");
    $("#btnSubmit").prop("disabled", true);

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "/api/upload/files",
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {

            $("#result").text(data);
            console.log("SUCCESS : ", data);
            $("#btnSubmit").prop("disabled", false);

        },
        error: function (e) {

            $("#result").text(e.responseText);
            console.log("ERROR : ", e);
            $("#btnSubmit").prop("disabled", false);

        }
    });

}