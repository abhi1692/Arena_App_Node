const RegisetrService = require("../services/regiter_service");
const serverConfig = require("../config/config.json").serverConfig;


module.exports = function (app) {
	// /api/v1/regiter
	// app.post(serverConfig.baseURL+serverConfig.version+"/regiterJob",new RegisetrService().createNewJobForMoreThanOnceADay);
	// app.post(serverConfig.baseURL+serverConfig.version+"/updateJob/:id",new RegisetrService().updateJobDetails);
	// app.get(serverConfig.baseURL+serverConfig.version+"/getAllJobs",new RegisetrService().getAllJobs);
	app.get(serverConfig.baseURL + serverConfig.version + "/getUser", new RegisetrService().getHistory);
	// app.get(serverConfig.baseURL+serverConfig.version+"/getHistoryOnCreatedDate/:startDate/:endDate",new RegisetrService().getHistoryOnCreatedDate);
	// app.get(serverConfig.baseURL+serverConfig.version+"/getAllJobsExecutedToday",new RegisetrService().getAllJobsExecutedToday);
	// app.get(serverConfig.baseURL+serverConfig.version+"/getAllRunningJobs",new RegisetrService().getAllRunningJobs);
	// app.get(serverConfig.baseURL+serverConfig.version+"/testService",new RegisetrService().testService);
	// app.post(serverConfig.baseURL+serverConfig.version+"/runOnDemand",new RegisetrService().runTaskOnDemand);
	// app.get(serverConfig.baseURL+serverConfig.version+"/getJobOnId/:id",new RegisetrService().getJobOnId);

	// app.post(serverConfig.baseURL+serverConfig.version+"/regiterJob_Weekly",new RegisetrService().createNewJobForWeekly);
	// app.post(serverConfig.baseURL+serverConfig.version+"/regiterJob_Weekly",new RegisetrService().createNewJobForMonthly);

};