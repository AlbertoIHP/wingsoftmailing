import { success, notFound } from '../../services/response/'
import { Activities } from '.'
import { sendMail } from '../../services/sendgrid'

export const create = ({ bodymen: { body } }, res, next) =>
  Activities.create(body)
    .then((activities) => {

      let newContact = activities.view(true)
      console.log(newContact)

      let topic = newContact.topic === '1' ? 'Growth Hacking' : 'Desarrollo Mobil'

      let email = 'hola@wingsoft.com'
      let subject = topic+':  '+newContact.email+', necesita una evaluación.'
      //Mailing
      const content = `
        Hola soy ${newContact.name}, vi la pagina de ${topic}.<br><br>
        Estoy interesado en obtener una evaluación para la compañia ${newContact.bussinessName}, en la seccion de ${newContact.bussinessArea}. <br>
        Mi correo es ${newContact.email}, para que puedas ponerte en contacto cuanto antes conmigo.<br><br>`

      email = 'fmoya@wingsoft.com'

      let mail3 =sendMail({ toEmail: email, subject: subject, content: content })
      let mail = sendMail({ toEmail: email, subject: subject, content: content })



      // Mail for contact
      topic = newContact.topic === '1' ? 'Growth Hacking' : 'Desarrollo Mobil'
      email = newContact.email
      subject = `${newContact.name}, pronto nos pondremos en contacto contigo por ${topic}.`
      //Mailing
      const content2 = `
        Hola ${newContact.name}, <br><br>

        En Wingsoft, queremos brindarte  <b> la mejor experiencia </b> en todo el proceso que va desde la solicitud de evaluación hasta el desarrollo de tu proyecto. <br><br>

        Es por eso que te contactaremos para poder hacer un levantamiento de la información necesaria para entregar una evaluación de tu proyecto, que contemple todos los alcances necesarios.  <br><br>


        Para que sea más cómodo para ti, tenemos dos opciones. <b> Vía Email </b> o  <b> Vía Teléfono</b>, si tu opción es vía Email no es necesario que respondas este email. Si es por teléfono, te invitamos a agendar un horario que te acomode <a href="https://bit.ly/2HwUClZ">aquí</a>. <br><br>

        Te deseamos un gran día. <br><br>

<div><br><div style="color:rgb(80,0,80);font-family:arial,sans-serif;font-size:small;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;text-align:start;text-indent:0px;text-transform:none;white-space:normal;word-spacing:0px;background-color:rgb(255,255,255);text-decoration-style:initial;text-decoration-color:initial"><pre style="margin-top:0px;margin-bottom:0px;padding:0px;font-size:12px;color:rgb(51,51,51);white-space:pre-wrap">Atte.<br>Equipo Asistente de Evaluaciones<br></pre><span><pre style="margin-top:0px;margin-bottom:0px;padding:0px;font-size:12px;color:rgb(51,51,51);white-space:pre-wrap">T: (+562) 2825 71 49<br></pre></span><span><pre style="color:rgb(34,34,34);margin-top:0px;margin-bottom:0px;padding:0px;font-size:12px;white-space:pre-wrap"><font color="#333333">D1: <a href="https://maps.google.com/?q=Cerro+Colorado+5030,+Of+312,+Las+Condes&amp;entry=gmail&amp;source=g" style="color:rgb(17,85,204)" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=es&amp;q=https://maps.google.com/?q%3DCerro%2BColorado%2B5030,%2BOf%2B312,%2BLas%2BCondes%26entry%3Dgmail%26source%3Dg&amp;source=gmail&amp;ust=1524341245227000&amp;usg=AFQjCNHq4pqR7ty_pILHzZIlqYjKjJhrpg">Cerro Colorado 5030, Of 312, Las Condes</a>.</font></pre><pre style="color:rgb(34,34,34);margin-top:0px;margin-bottom:0px;padding:0px;font-size:12px;white-space:pre-wrap"><font color="#333333">D2: Italia 850, Centro Colaborativo IF, Providencia.
</font><font style="color:rgb(17,85,204)"><a href="http://www.wingzoft.com/" style="color:rgb(17,85,204)" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=es&amp;q=http://www.wingzoft.com/&amp;source=gmail&amp;ust=1524341245227000&amp;usg=AFQjCNEhVj1GMl-i97hk7KJWEOK58K3j1w">www.wingsoft.com</a></font></pre><pre style="color:rgb(34,34,34);margin-top:0px;margin-bottom:0px;padding:0px;font-size:12px;white-space:pre-wrap"><br></pre><pre style="color:rgb(34,34,34);margin-top:0px;margin-bottom:0px;padding:0px;font-size:12px;white-space:pre-wrap"><img src="https://ci4.googleusercontent.com/proxy/fL7IX0kfyNwPLnpxB8Y3MnIcz0k0yE0PxliCYWhgYTxUrsgmGKdv86bvC9x-1_Y5VP0h8e0cU5CRd1CGtZoO3ccbmKaFuMitZGTCQjx9WWPp0xsIuY8lq3IhlwJFBrjSUWFN6RpnVk2dAQ9zyOQOBqi3gM2U8rkRxo8rFPG1_mrx3jKXBXChFPPOwGwa3VRiqgeNP0lM7sB-lZ7FamuJHA=s0-d-e1-ft#https://docs.google.com/uc?export=download&amp;id=19TDh4RtRklKNUbEUEx8DRDMMRNJSaG_r&amp;revid=0B0ApdjdVdJXjblVEMFNXdzJmbk9oY0ZYZUFWYzBoWHltVGhRPQ" width="200" height="52" class="CToWUd"><br></pre><pre style="color:rgb(34,34,34);margin-top:0px;margin-bottom:0px;padding:0px;font-size:12px;white-space:pre-wrap"></pre></span></div><span><font color="#666666" size="1" style="font-family:arial,sans-serif;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;text-align:start;text-indent:0px;text-transform:none;white-space:normal;word-spacing:0px;background-color:rgb(255,255,255);text-decoration-style:initial;text-decoration-color:initial">------------------------------<wbr>------------------------------<wbr>-----<br>Aviso de Confidencialidad: Este correo electrónico y/o el material adjunto es para uso exclusivo del emisor y la persona o entidad a la que expresamente se le ha enviado, y puede contener información confidencial o material privilegiado. Si usted no es el destinatario legítimo del mismo, por favor repórtelo inmediatamente al remitente del correo y bórrelo.<br><br>Cualquier revisión, retransmisión, difusión o cualquier otro uso de este correo, por personas o entidades distintas a las del destinatario legítimo, queda expresamente prohibido. Este correo electrónico no pretende ni debe ser considerado como constitutivo de ninguna relación legal, contractual o de otra índole similar.<br>------------------------------<wbr>------------------------------<wbr>------<br>Notice of Confidentiality: The information transmitted is intended only for the sender and person or entity to which it is addressed and may contain confidential and/or privileged material. Any review, e-transmission, dissemination or other use of, or taking of any action in reliance upon, this information by persons or entities other than the intended recipient is prohibited.<br><br>If you received this in error, please contact the sender immediately by return electronic transmission and then immediately delete this transmission, including all attachments, without copying, distributing or disclosing same.</font><br><br><br><br><br><br></span></div>
        `



      console.log(content2)


      let mail2 = sendMail({ toEmail: email, subject: subject, content: content2 })

      let resultMailing = mail && mail2 && mail3










      return { activities: activities.view(true), emailSended: resultMailing }
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
