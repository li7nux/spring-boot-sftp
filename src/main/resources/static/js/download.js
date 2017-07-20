$(document).ready(function () {

    $("#downloadSubmit").click(function (event) {
        event.preventDefault();
        download_ajax_submit();
    });

});

function download_ajax_submit() {

    var postData = { fileName: $("#fileName").val() }
    console.log(postData)
    $("#downloadSubmit").prop("disabled", true);

    $.ajax({
        type: "POST",
        enctype: 'application/json',
        url: "/api/download",
        data: JSON.stringify(postData),
        processData: false,
        contentType: 'application/json',
        cache: false,
        timeout: 600000,
        success: function (data) {

            $("#result").text(data);
            console.log("SUCCESS : ", data);
            $("#downloadSubmit").prop("disabled", false);

        },
        error: function (e) {

            $("#result").text(e.responseText);
            console.log("ERROR : ", e);
            $("#downloadSubmit").prop("disabled", false);

        }
    });

}