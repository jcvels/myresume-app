import { Router } from 'express'
import { showResume } from '../controllers/resume.controller'

export const router = Router()

/* pages */
router.get( '/resume', showResume );

/* misc 'n erros */
router.get( '/robots.txt', (_req,res) => res.send('User-agent: * \n Allow: /') );
router.get( '/copyright', (_req,res) => res.send('2023 © UVCoding') );
router.use( '*', (_req,res) => res.render('errors/404') );
