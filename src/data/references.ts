import process from 'node:process';

export default [
  {
    "name": process.env.TEMPUS_MANAGER_NAME,
    "relation": "Manager",
    "company": "Tempus AI, Inc.",
    "email": process.env.TEMPUS_MANAGER_EMAIL
  },
  {
    "name": process.env.JKV_CAPITAL_PRESIDENT_NAME,
    "relation": "President",
    "company": "JKV Capital, LLC.",
    "email": process.env.JKV_CAPITAL_PRESIDENT_EMAIL
  },
  {
    "name": process.env.TRADING_TECHNOLOGIES_MANAGER_NAME,
    "relation": "Manager",
    "company": "Trading Technologies, Inc.",
    "email": process.env.TRADING_TECHNOLOGIES_MANAGER_EMAIL
  },
  {
    "name": process.env.GOOGLE_BROTHER_NAME,
    "relation": "Brother",
    "company": "Google",
    "email": process.env.GOOGLE_BROTHER_EMAIL
  }
]
