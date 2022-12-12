const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getUser = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const userList = await pool.request().query(sqlQueries.userlist);
        return userList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(UserId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const user = await pool.request()
                            .input('eventId', sql.Int, UserId)
                            .query(sqlQueries.eventbyId);
        return user.recordset;
    } catch (error) {
        return error.message;
    }
}

const createUser = async (userdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const insertEvent = await pool.request()
                            .input('eventTitle', sql.NVarChar(100), eventdata.eventTitle)
                            .input('eventDescription', sql.NVarChar(1500), eventdata.eventDescription)
                            .input('startDate', sql.Date, eventdata.startDate)
                            .input('endDate', sql.Date, eventdata.endDate)
                            .input('avenue', sql.NVarChar(200), eventdata.avenue)
                            .input('maxMembers', sql.Int, eventdata.maxMembers)
                            .query(sqlQueries.createEvent);                            
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateUser = async (eventId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const update = await pool.request()
                        .input('eventId', sql.Int, eventId)
                        .input('eventTitle', sql.NVarChar(100), data.eventTitle)
                        .input('eventDescription', sql.NVarChar(1500), data.eventDescription)
                        .input('startDate', sql.Date, data.startDate)
                        .input('endDate', sql.Date, data.endDate)
                        .input('avenue', sql.NVarChar(200), data.avenue)
                        .input('maxMembers', sql.Int, data.maxMembers)
                        .query(sqlQueries.updateEvent);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteUser = async (eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('user');
        const deletUser = await pool.request()
                            .input('pessoa_id', sql.Int, eventId)
                            .query(sqlQueries.deleteEvent);
        return deletUser.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getUser,
    getById,
    createUser,
    updateUser,
    deleteUser
}