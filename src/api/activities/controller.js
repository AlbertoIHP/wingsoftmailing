import { success, notFound } from '../../services/response/'
import { Activities } from '.'
import { sendMail } from '../../services/sendgrid'

export const create = ({ bodymen: { body } }, res, next) =>
  Activities.create(body)
    .then((activities) => {

      let newContact = activities.view(true)
      console.log(newContact)

      let topic = newContact.topic === 1 ? 'Growth Hacking' : 'Desarrollo Mobil'

      let email = 'jgonzalez@wingsoft.com'
      let subject = topic+':  '+newContact.email+', necesita una evaluación.'
      //Mailing
      const content = `
        Hola soy ${newContact.name}, vi la pagina de ${topic}.<br><br>
        Estoy interesado en obtener una evaluación para la compañia ${newContact.bussinessName}, en la seccion de ${newContact.bussinessArea}. <br>
        Mi correo es ${newContact.email}, para que puedas ponerte en contacto cuanto antes conmigo.<br><br>`

      let mail = sendMail({ toEmail: email, subject: subject, content })


      return { activities: activities.view(true), emailSended: mail }
    })
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Activities.count(query)
    .then(count => Activities.find(query, select, cursor)
      .then((activities) => ({
        count,
        rows: activities.map((activities) => activities.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Activities.findById(params.id)
    .then(notFound(res))
    .then((activities) => activities ? activities.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Activities.findById(params.id)
    .then(notFound(res))
    .then((activities) => activities ? Object.assign(activities, body).save() : null)
    .then((activities) => activities ? activities.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Activities.findById(params.id)
    .then(notFound(res))
    .then((activities) => activities ? activities.remove() : null)
    .then(success(res, 204))
    .catch(next)
