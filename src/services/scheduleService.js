import schedule  from "node-schedule";
import { getApiFootballFromApi } from "@src/clients";

export const scheduleJob = () => {
  schedule.scheduleJob('0 12 * * 3', () => {
    getApiFootballFromApi();
  })
};