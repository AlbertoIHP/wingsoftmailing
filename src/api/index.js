import { Router } from 'express'
import user from './user'
import auth from './auth'
import passwordReset from './password-reset'
import americaSolidaria from './americaSolidaria'
import dbDefensa from './dbDefensa'

import activities from './activities'

const router = new Router()

/**
 * @apiDefine master Master access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine admin Admin access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine user User access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine listParams
 * @apiParam {String} [q] Query to search.
 * @apiParam {Number{1..30}} [page=1] Page number.
 * @apiParam {Number{1..100}} [limit=30] Amount of returned items.
 * @apiParam {String[]} [sort=-createdAt] Order of returned items.
 * @apiParam {String[]} [fields] Fields to be returned.
 */
router.use('/users', user)
router.use('/auth', auth)
router.use('/contact', activities)
router.use('/password-resets', passwordReset)


router.use('/db_defensa', dbDefensa)

router.use('/americasolidaria', americaSolidaria)
router.get('/forgot/:forgottoken', function(request, response, next) {

	response.render( 'index' )

});

export default router
