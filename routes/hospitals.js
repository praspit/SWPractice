const express = require('express')
const {getHospitals, getHospital, createHospitals, updateHospital, deleteHospital, getVacCenters} = require('../controller/hospitals');
const router = express.Router();

//Include other resource routers
const appointmentRouter = require('./appointments');

const {protect,authorize} =require('../middleware/auth');

//Re-route into other resource routers
router.use('/:hospitalId/appointments/',appointmentRouter);
router.route('/vacCenters').get(getVacCenters);
router.route('/').get(getHospitals).post(protect, authorize('admin'), createHospitals);
router.route('/:id').get(getHospital).put(protect, authorize('admin'), updateHospital).delete(protect, authorize('admin'),deleteHospital);

module.exports = router;

/**
 * @swagger
 * components:
 *      schemas:
 *          Hospital:
 *              type: object
 *              required:
 *                  - name
 *                  - address
 *              properties:
 *                  id:
 *                      type: string
 *                      format: uuid
 *                      description: The auto-generated id of the hospital
 *                      example: 123e4567-e89b-12d3-a456-426614174000
 *                  ลำดับ:
 *                      type: string
 *                      description: Ordinal number
 *                  name:
 *                      type: string
 *                      description: Hospital name
 *                  address:
 *                      type: string
 *                      description: Hospital No., Street, Road
 *                  district:
 *                      type: string
 *                      description: District
 *                  province:
 *                      type: string
 *                      description: Province
 *                  postalCode:
 *                      type: string
 *                      description: 5-digit postal code
 *                  tel:
 *                      type: string
 *                      description: Telephone number
 *                  region:
 *                      type: string
 *                      description: Region
 *              example:
 *                  id: 123e4567-e89b-12d3-a456-426614174000
 *                  ลำดับ: 121
 *                  name: Happy Hospital
 *                  address: 121 ถนนสุขุมวิท
 *                  district: บางนา
 *                  province: กรุงเทพมหานคร
 *                  postalCode: 10110
 *                  tel: 02-1234567
 *                  region: กรุงเทพมหานคร (Bangkok)
 */

/**
 * @swagger
 * tags:
 *      name: Hospitals
 *      description: The hospitals managing API
 */

/**
 * @swagger
 * /hospitals:
 *     get:
 *          summary: Return the list of all the hospitals
 *          tags: [Hospitals]
 *          responses:
 *              200:
 *                  description: the list of the hospitals
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Hospital'
 */

/**
 * @swagger
 * /hospitals/{id}:
 *      get:
 *          summary: Get the hospital by id
 *          tags: [Hospitals]
 *          parameters:
 *                - in: path
 *                  name: id
 *                  schema:
 *                      type: string
 *                  required: true
 *                  description: The hospital id
 *          responses:
 *              200:
 *                  description: The hospital description by id
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Hospital'
 *              404:
 *                  description: The hospital was not found
 */

/**
 * @swagger
 * /hospitals:
 *      post:
 *          summary: Create a new hospital
 *          tags: [Hospitals]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Hospital'
 *          responses:
 *              201:
 *                  description: The hospital was successfully created
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Hospital'
 *              500:
 *                  description: Some server error
 */

/**
 * @swagger
 * /hospitals/{id}:
 *     put:
 *          summary: Update the hospital by the id
 *          tags: [Hospitals]
 *          parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                  type: string
 *              required: true
 *              description: The hospital id
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Hospital'
 *                  responses:
 *                      200:
 *                          description: The hospital was updated
 *                          content:
 *                              application/json:
 *                              schema:
 *                                  $ref: '#/components/schemas/Hospital'
 *                      404:
 *                          description: The hospital was not found
 *                      500:
 *                          description: Some server error
 */

/**
 * @swagger
 * /hospitals/{id}:
 *      delete:
 *          summary: Remove the hospital by id
 *          tags: [Hospitals]
 *          parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                  type: string
 *              required: true
 *              description: The hospital id
 * 
 *          responses:
 *              200:
 *                  description: The hospital was deleted
 *              404:
 *                  description: The hospital was not found
 */