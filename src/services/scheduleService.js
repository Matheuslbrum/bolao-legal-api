export const scheduleJob = () => {
  schedule.scheduleJob('0 12 * * 3', () => {
    getApiFootballFromApi();
  })
};