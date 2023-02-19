import { Request, Response } from 'express';
import * as resumeData from '../data/resume-data.json'

export const showResume = (_req:Request, res:Response) => {
  res.render('pages/resume', resumeData)
}