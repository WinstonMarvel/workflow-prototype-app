var Excel = require('exceljs');

let colors = {
    success: {
        text: 'ff006100',
        bg: 'ffc6efce'
    },
    neutral: {
        text: 'ff9c5700',
        bg: 'ffffeb9c'
    },
    failure: {
        text: 'ff9c0006',
        bg: 'ffffc7ce'
    }
};

function writeToCell(cell, val){
    if(cell.value && typeof(cell.value) === "object" && cell.value.formula ){
        let formula = cell.value.formula;
        cell.value = {
            formula: formula,
            result: val
        }
    }
    else{
        cell.value = val;
    }
}

function writeToExcel( obj, sheetSchema, formType, worksheet ){
    obj.postInfo.blogType = formType.toUpperCase();
    if(formType == "ebp"){
        obj.totalPossiblePoints = 31;
    }
    else if(formType == "tbp"){
        obj.totalPossiblePoints = 29;
    }
    for(var prop in sheetSchema){
        if(sheetSchema[prop] instanceof Array){
            sheetSchema[prop].map( (element) => {
                let cell = worksheet.getCell(element);
                writeToCell(cell, obj[prop]);
            });
        }
        else if(sheetSchema[prop] instanceof Object){
            for(nestedProp in sheetSchema[prop]){
                let cell = worksheet.getCell(sheetSchema[prop][nestedProp]);
                writeToCell(cell, obj[prop][nestedProp]);
            }
        }
        else{
            let cell = worksheet.getCell(sheetSchema[prop]); 
            writeToCell(cell, obj[prop]);
        }
    }
    let statusCell = worksheet.getCell('B8');
    let colorScheme;
    switch( statusCell.value.result.toLowerCase() ){
        case "achieved":
        colorScheme = "success";
        break;
        case "did not achieve":
        colorScheme = "failure";
        break;
        case "partially achieved":
        colorScheme = "neutral";
        break;
    }
    statusCell.font = {
        color : {  argb: colors[colorScheme].text }
    };
    statusCell.fill = {
        type: 'pattern',
        pattern:'solid',
        fgColor: { argb: colors[colorScheme].bg },
        bgColor: { argb: colors[colorScheme].bg }
    };
};

module.exports = function( post, sheetSchema, formType, callback ){
    var workbook = new Excel.Workbook();
    var templatePath;
    if( formType.toUpperCase() === "EBP" ) {
        templatePath = './routes/export/reviewTemplate-EBP.xlsx';
    }
    else{
        templatePath = './routes/export/reviewTemplate-TBP.xlsx';
    }
    workbook.xlsx.readFile(templatePath).then( () => {
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