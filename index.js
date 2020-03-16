metadata={systemName:"Absorb Sandbox API - Departments Path",displayName:"Absorb Sandbox API Broker",description:"An example broker pulls in the Departments list from Absorb LMS.",configuration:{AuthToken:{displayName:"AuthToken",type:"string"}}},ondescribe=function(){postSchema({objects:{departments:{displayName:"AbsorbDepartments",description:"Manages the Departments list",properties:{Id:{displayName:"Department Id",type:"string"},Name:{displayName:"Name",type:"string"},UseDepartmentContactDetails:{displayName:"Use Department Contact Details",type:"boolean"},CompanyName:{displayName:"Company Name",type:"string"},PhoneNumber:{displayName:"Phone Number",type:"string"},EmailAddress:{displayName:"Email Address",type:"string"},ExternalId:{displayName:"External Id",type:"string"},ParentId:{displayName:"Parent Id",type:"string"},CurrencyId:{displayName:"Currency Id",type:"string"}},methods:{getList:{displayName:"Get Departments",type:"list",inputs:["Name","ExternalId"],parameters:{AuthToken:{displayName:"AuthToken",description:"Authorization Token for Absorb",type:"string"}},requiredParameters:["AuthToken"],outputs:["Id","Name","UseDepartmentContactDetails","CompanyName","PhoneNumber","EmailAddress","ExternalId","ParentId","CurrencyId"]},getDepartmentPath:{displayName:"Get Department Path",type:"read",inputs:["Id"],parameters:{AuthToken:{displayName:"AuthToken",description:"Authorization Token for Absorb",type:"string"},Separator:{displayName:"Separator",description:'Path separator. e.g. " > "',type:"string"}},requiredInputs:["Id"],requiredParameters:["AuthToken","Separator"],outputs:["Path"]}}}}})},onexecute=function(e,t,a,r){switch(e){case"departments":!function(e,t,a){switch(e){case"getList":!function(e,t){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(4===a.readyState){if(200!==a.status)throw new Error("Failed with status "+a.status);var e=JSON.parse(a.responseText);for(var t in e)postResult({Id:e[t].Id,Name:e[t].Name,UseDepartmentContactDetails:e[t].UseDepartmentContactDetails,CompanyName:e[t].CompanyName,PhoneNumber:e[t].PhoneNumber,EmailAddress:e[t].EmailAddress,ExternalId:e[t].ExternalId,ParentId:e[t].ParentId,CurrencyId:e[t].CurrencyId})}},a.open("GET","https://k2.sandbox.myabsorb.com/api/rest/v1/departments"),a.setRequestHeader("Content-Type","application/json"),a.setRequestHeader("Authorization",e.AuthToken),a.withCredentials=!0,a.send()}(a);break;case"getDepartmentPath":!function(e,t){var a=new(require("xhr2"));a.onreadystatechange=function(){if(4!==a.readyState)return;if(200!==a.status)throw new Error("Failed with status "+a.status);var r=JSON.parse(a.responseText),s=t.Id;let n="";for(;null!=s;){for(var o in r)if(r[o].Id==s){n=r[o].Name+n,s=r[o].ParentId;break}null!=s&&(n=e.Separator+n)}postResult({Path:n})},a.open("GET","https://k2.sandbox.myabsorb.com/api/rest/v1/departments"),a.setRequestHeader("Content-Type","application/json"),a.setRequestHeader("Authorization",e.AuthToken),a.withCredentials=!1,a.send()}(a,t);break;default:throw new Error("The method "+e+" is not supported.")}}(t,r,a);break;default:throw new Error("The object "+e+" is not supported.")}};
//# sourceMappingURL=index.js.map
