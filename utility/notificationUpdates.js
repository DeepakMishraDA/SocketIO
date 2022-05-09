import { sql } from '@databases/pg';
import carryOutPostgresQuery from './carryOutPostgresQuery';
const { v4 } = require('uuid');
const uuid = v4;

export class NotificationsUpdates {
    async init(alarmData){
        try{
            this.schema = 'mendelstrasse';
            this.alarmData = alarmData;
            this.allFlags = await this.getCurrentRecords(this.alarmData);
        }catch (err) {
            console.log(err);
          }
    }  
    async getCurrentRecords(alarmData){
        try {
            var queryString = sql`SELECT * FROM user_alarm_interaction WHERE user_alarm_interaction.alarm_instance_id = ${alarmData.alarm_id}`;
            results = await carryOutPostgresQuery({
            queryString, schema: this.schema
            });
            if(results.length == 0){
            //Please help me here
                queryString = sql`INSERT INTO user_alarm_intsance (id, user_id, alarm_instance_id, seen_flag, read_flag,relevant_flag,save_for_later_flag,archived_flag)
                Values ( ${uuid()}, ${uuid()}, ${alarmData.alarm_id},${alarmData.isChecked},${alarmData.unread},${alarmData.relevant},${alarmData.save_for_later},${alarmData.archive});`;
                await carryOutPostgresQuery({queryString, schema: this.schema});
                }
                return results[0];
            } catch (error) {
                console.log(error);

            } 
           } 

    async checkAFlag(flagCondition) {
        try {
            if(flagCondition){
                return true       
                } 
                return false
            } catch(error) {
                console.log(error);
            }        
    }
}
module.exports = NotificationsUpdates;