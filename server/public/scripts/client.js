const form = $("form")


form.submit((event) => {
    event.preventDefault();
    const formData = {
        firstNum: parseInt($("#firstNum").val()),
        lastNum: parseInt($("#lastNum").val()),
        symbol: $('input[name="btn"]:checked').val()
    }
    console.log(formData)

    $.ajax({
        type: "POST",
        contentType: "application/json",
        datatype: "json",
        data: JSON.stringify(formData),
        url: "http://localhost:5001/calculate",
        success: function (data) {
            $.get("http://localhost:5001/answer", (data) => {
                alert(data.answer)
            })
        },
        error: function (err) {
            console.log(err);
        }
    })

})