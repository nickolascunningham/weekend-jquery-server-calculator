const form = $("form")
const domHistory = $("#history")

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
               
                $("#answer").text(data.answer)
                const markUp = `
                <li> ${formData.firstNum} ${formData.symbol}   ${formData.lastNum} = ${data.answer}
                `
                domHistory.append(markUp)
            })
           
        },
        error: function (err) {
            console.log(err);
        }
    })
 
})

$("#clear").click(() => {
    $("#firstNum").val("")
    $("#lastNum").val("")
})

function loadHistory () {

    $.get("http://localhost:5001/history", (data) => {        
       data.forEach(answer => {
           const markUp = `
           <li> ${answer.firstNum} ${answer.symbol}   ${answer.lastNum} = ${answer.answer}
           `
           domHistory.append(markUp)
       })
    })
}


loadHistory()


