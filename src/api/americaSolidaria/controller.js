import { success, notFound } from '../../services/response/'
import { AmericaSolidaria } from '.'
import { sendMail } from '../../services/sendgrid'

export const create = ({ bodymen: { body } }, res, next) =>
  AmericaSolidaria.create(body)
    .then((activities) => {

      let newContact = activities.view(true)

      // let email = ' AQUI EL CORREO A QUIEN VA '
      // let subject = ` AQUI EL TEMA `
      // const content = ` AQUI VA EL MAIL `
      // let mail = sendMail({ toEmail: email, subject: subject, content: content })

      return { activities: newContact }
    })
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  AmericaSolidaria.count(query)
    .then(count => AmericaSolidaria.find(query, select, cursor)
      .then((activities) => ({
        count,
        rows: activities.map((activities) => activities.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  AmericaSolidaria.findById(params.id)
    .then(notFound(res))
    .then((activities) => activities ? activities.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  AmericaSolidaria.findById(params.id)
    .then(notFound(res))
    .then((activities) => activities ? Object.assign(activities, body).save() : null)
    .then((activities) => activities ? activities.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  AmericaSolidaria.findById(params.id)
    .then(notFound(res))
    .then((activities) => activities ? activities.remove() : null)
    .then(success(res, 204))
    .catch(next)
