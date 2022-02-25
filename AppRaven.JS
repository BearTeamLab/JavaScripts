var obj = JSON.parse($response.body); 
obj['premium'] = true;
obj['mod'] = true;
$done({body: JSON.stringify(obj)});
