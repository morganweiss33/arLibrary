
var dataParams = {
	proxyScheme: undefined /* STRING */,
	headers: undefined /* JSON */,
	ignoreSSLErrors: true /* BOOLEAN */,
	useNTLM: undefined /* BOOLEAN */,
	workstation: undefined /* STRING */,
	useProxy: undefined /* BOOLEAN */,
	withCookies: undefined /* BOOLEAN */,
	proxyHost: undefined /* STRING */,
	url: "https://www.morgankweiss.com/img/bookData.json" /* STRING */,
	timeout: undefined /* NUMBER */,
	proxyPort: undefined /* INTEGER */,
	password: undefined /* STRING */,
	domain: undefined /* STRING */,
	username: undefined /* STRING */
};

// result: JSON
var data = Resources["ContentLoaderFunctions"].GetJSON(dataParams);




var params = {
    infoTableName : "InfoTable",
    dataShapeName : "book-data"
};

// CreateInfoTableFromDataShape(infoTableName:STRING("InfoTable"), dataShapeName:STRING):INFOTABLE(book-data)
var InfoTable = Resources["InfoTableFunctions"].CreateInfoTableFromDataShape(params);
    //console.log(i);

//for each(var books in myInfoTable.rows)

	for (var i=0; i < data.array.length;i++) {    
        //console.log("test");
        if (data.array[i].shelf_number === 1)
        {
    InfoTable.AddRow({isbn:data.array[i].isbn, book_title:data.array[i].book_title, author:data.array[i].author, shelf_number:data.array[i].shelf_number, image:data.array[i].image, description:data.array[i].description});
	}
    }
var result = InfoTable;

/*
result = Resources["InfoTableFunctions"].Sort({
	t: InfoTable /* INFOTABLE ,
	sortColumn: 'shelf_number'  /* STRING ,
	ascending: true /* BOOLEAN 
});*/
