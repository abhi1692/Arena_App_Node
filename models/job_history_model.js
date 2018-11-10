const sequelize = require("../dao/db_base").sequelize;
const Sequelize = require("sequelize");

const JOB_HISTORY_MODEL = sequelize.define(
	"job_history",
	{
		id:{ type:Sequelize.BIGINT, primaryKey:true, autoIncrement:true, field:"id"},
		job_id:{ type:Sequelize.BIGINT,allowNull:false,defaultValue:0, field:"job_id"},
		run_date_time:{type:Sequelize.DATE, allowNull:false, defaultValue:0, field:"run_date_time" },
		run_status:{type:Sequelize.TINYINT, allowNull:false, defaultValue:0, field:"run_status" },
		user_id:{type:Sequelize.BIGINT, allowNull:true,defaultValue:0, field:"user_id"},
		job_data:{type:Sequelize.STRING, allowNull:false, defaultValue:0, field:"job_data" },
		time_spent:{ type:Sequelize.INTEGER,allowNull:false,defaultValue:0, field:"time_spent"},
		created_date:{type:Sequelize.DATE,allowNull:false, field:"created_date"},
		updated_date:{type:Sequelize.DATE, allowNull:false, field:"updated_date" },
		created_by:{type:Sequelize.INTEGER, allowNull:true,defaultValue:0, field:"created_by"},
		updated_by:{type:Sequelize.INTEGER, allowNull:true,defaultValue:0, field:"updated_by"},
		
	},{
		tableName:"job_history",
		createdAt:false,
		updatedAt:false
	}
);

module.exports = JOB_HISTORY_MODEL;