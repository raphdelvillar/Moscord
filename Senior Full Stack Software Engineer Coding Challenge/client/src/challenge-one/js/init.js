function init() {
    display("original-data", getPeople())
    display("list-by-gender-m", listByGender("M"))
    display("list-by-gender-f", listByGender("F"))
    display("list-by-group-department", groupByDepartment())
}

function display(id, result) {
    document.getElementById(id).innerHTML = JSON.stringify(result, null, 2)
}