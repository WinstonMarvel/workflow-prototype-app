var Excel = require('exceljs');

function writeToExcel( obj, sheetSchema, formType, worksheet ){
    obj.postInfo.blogType = formType;
    if(formType == "EBP"){
        obj.totalPossiblePoints = 31;
    }
    else if(formType == "TBP"){
        obj.totalPossiblePoints = 31;
    }
    for(var prop in sheetSchema){
        if(sheetSchema[prop] instanceof Object){
            for(nestedProp in sheetSchema[prop]){
                let cell = worksheet.getCell(sheetSchema[prop][nestedProp]);
                cell.value = obj[prop][nestedProp];
            }
        }
        else{
            let cell = worksheet.getCell(sheetSchema[prop]); 
            cell.value = obj[prop];
        }
    }
};

module.exports = function( post, sheetSchema, formType, callback ){
    var workbook = new Excel.Workbook();
    workbook.xlsx.readFile('./routes/export/reviewTemplate.xlsx')
    .then( () => {
        var worksheet = workbook.getWorksheet(formType.toUpperCase());
        console.log(worksheet);
        writeToExcel( post, sheetSchema, formType, worksheet);
        workbook.xlsx.writeFile('./temp/test-output.xlsx')
        .then( () => {
            callback();
        }); 
    }) 
   .catch( err => console.log(err) );  
}