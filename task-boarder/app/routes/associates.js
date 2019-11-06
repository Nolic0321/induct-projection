var associateTableParams = {
    TableName: 'Associates',
    KeySchema: [
        {AttributeName: 'login', KeyType: 'HASH'}
    ],
    AttributeDefinitions:[
        {AttributeName: 'login', AttributeType: 'S'}
    ],
    ProvisionedThroughput:{
        ReadCapacityUnits:10,
        WriteCapacityUnits:10
    }
}
module.exports = function(app,db){

    db.createTable(associateTableParams, function(err,data){
        if(err){
            console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
        }else{
            console.log("Created table. Tagble description JSON:", JSON.stringify(data,null,2));
        }
    })
    app.post('/associates',(req,res) => {
        console.log(req.body);
        res.send('Hello World');
    })
}