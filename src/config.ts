const LOCAL_URL: string | undefined = process.env.REACT_APP_SERVER

export const URL_API: string = LOCAL_URL || 'https://counting-server-220515.herokuapp.com/'
export const NBU_COURSE_API: string = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange'